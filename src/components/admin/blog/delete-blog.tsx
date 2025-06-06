"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import toast from "react-hot-toast";
import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  id: string;
  onSuccess?: () => void;
};

export default function DeleteBlog({ id, onSuccess }: Props) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    const res = await fetch(`/api/blog/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      setOpen(false);
      onSuccess?.();
      router.refresh();
      toast.success("Blog berhasil dihapus!");
    } else {
      const data = await res.json();
      toast.error(data.message || "Gagal menghapus blog.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="destructive">Hapus</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Konfirmasi Hapus</DialogTitle>
        </DialogHeader>
        <p>Apakah kamu yakin ingin menghapus blog ini?</p>
        <div className="mt-4 flex justify-end gap-2">
          <Button onClick={() => setOpen(false)} variant="outline">
            Batal
          </Button>
          <Button onClick={handleDelete} variant="destructive">
            Hapus
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
