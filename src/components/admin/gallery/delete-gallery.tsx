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
import { UserX, Loader } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

interface Props {
  id: string;
}

export default function DeleteGalleryImage({ id }: Props) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  async function handleDelete() {
    setIsDeleting(true);

    await toast.promise(
      (async () => {
        const response = await fetch(`/api/gallery/${id}`, {
          method: "DELETE",
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.message);
        }

        setDialogOpen(false);
        return result.message;
      })(),
      {
        loading: "Deleting image...",
        success: (msg) => msg,
        error: (err) => err.message,
      }
    );

    setIsDeleting(false);
  }

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="destructive" size="icon">
          <UserX />
          <span className="sr-only">Delete Gallery</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Gallery Image</DialogTitle>
          <DialogDescription>
            Are you sure? This action cannot be undone.
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
