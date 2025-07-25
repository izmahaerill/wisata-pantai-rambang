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
import { Loader, Trash } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

interface Props {
  id: string;
}

export default function Reject({ id }: Props) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isRejecting, setIsRejecting] = useState(false);

  async function handleDelete() {
    setIsRejecting(true);

    await toast.promise(
      (async () => {
        const response = await fetch(`/api/review/${id}`, {
          method: "PUT",
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
        loading: "Rejecting review...",
        success: (message) => message,
        error: (error) => error.message,
      }
    );

    setIsRejecting(false);
  }

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <Button
          variant="destructive"
          size="icon"
          onClick={() => setDialogOpen(true)}>
          <Trash />
          <span className="sr-only">Reject Review</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Reject Review</DialogTitle>
          <DialogDescription>
            Are you sure you want to reject this review? This action cannot be
            undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button
            variant="destructive"
            disabled={isRejecting}
            onClick={handleDelete}>
            {isRejecting && <Loader className="animate-spin" />}
            Confirm Reject
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
