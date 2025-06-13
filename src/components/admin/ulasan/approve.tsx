"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Check, Loader } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

interface Props {
  id: string;
}

export default function Approve({ id }: Props) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isApproving, setIsApproving] = useState(false);

  async function handleApprove() {
    setIsApproving(true);

    await toast.promise(
      (async () => {
        const response = await fetch("/api/review/approve", {
          method: "POST",
          body: JSON.stringify({
            id,
          }),
        });

        const result = await response.json();

        if (!response.ok) {
          toast.error(result.message);
          return;
        }

        setDialogOpen(false);

        return result.message;
      })(),
      {
        loading: "Approving review...",
        success: (message) => message,
        error: (error) => error.message,
      }
    );

    setIsApproving(false);
  }

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setDialogOpen(true)}>
          <Check />
          <span className="sr-only">Approve Review</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Approve Review</DialogTitle>
          <DialogDescription>
            Are you sure you want to approve this review? This action cannot be
            undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button
            variant="destructive"
            disabled={isApproving}
            onClick={handleApprove}>
            {isApproving && <Loader className="animate-spin" />}
            Confirm Approve
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
