"use client";

import { useState } from "react";
import { Trash2, Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

interface Props {
  id: string;
}

export default function DeleteReview({ id }: Props) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  async function handleDelete() {
    setIsDeleting(true);

    await toast.promise(
      (async () => {
        const res = await fetch(`/api/review/${id}`, {
          method: "DELETE",
        });

        const result = await res.json();

        if (!res.ok) {
          throw new Error(result.message);
        }

        router.refresh();
        setDialogOpen(false);
        return result.message;
      })(),
      {
        loading: "Menghapus ulasan...",
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
          <Trash2 className="h-4 w-4" />
          <span className="sr-only">Hapus Ulasan</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete This Review?</DialogTitle>
          <DialogDescription>
            Are you sure? This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Batal</Button>
          </DialogClose>
          <Button
            variant="destructive"
            disabled={isDeleting}
            onClick={handleDelete}>
            {isDeleting && <Loader className="mr-2 h-4 w-4 animate-spin" />}
            Hapus
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
