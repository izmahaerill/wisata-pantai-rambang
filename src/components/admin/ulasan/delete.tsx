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

export default function Delete({ id }: Props) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  async function handleDelete() {
    setIsDeleting(true);

    await toast.promise(
      (async () => {
        const response = await fetch(`/api/review/${id}`, {
          method: "DELETE",
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
        loading: "Deleting review...",
        success: (message) => message,
        error: (error) => error.message,
      }
    );

    setIsDeleting(false);
  }

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <Button
          variant="destructive"
          size="icon"
          onClick={() => setDialogOpen(true)}>
          <Trash />
          <span className="sr-only">Delete Review</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Review</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this review? This action cannot be
            undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button
            variant="destructive"
            disabled={isDeleting}
            onClick={handleDelete}>
            {isDeleting && <Loader className="animate-spin" />}
            Confirm Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
