"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import toast from "react-hot-toast";

export default function AddBlog({ onSuccess }: { onSuccess?: () => void }) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    title: "",
    summary: "",
    published: "",
  });
  const [image, setImage] = useState<File | null>(null);
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("summary", form.summary);
    formData.append("published", form.published);
    if (image) {
      formData.append("image", image);
    }

    const res = await fetch("/api/blog", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      setForm({ title: "", summary: "", published: "" });
      setImage(null);
      setOpen(false);
      onSuccess?.();
      router.refresh();
      toast.success("Blog berhasil ditambahkan!");
    } else {
      const data = await res.json();
      toast.error(data.message || "Terjadi kesalahan.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>+ Tambah Blog</Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Tambah Blog</DialogTitle>
        </DialogHeader>
        <form
          onSubmit={handleSubmit}
          className="space-y-4"
          encType="multipart/form-data">
          <Input
            name="title"
            placeholder="Judul"
            value={form.title}
            onChange={handleChange}
            required
          />
          <Textarea
            name="summary"
            placeholder="Ringkasan"
            value={form.summary}
            onChange={handleChange}
            required
            className="h-44 max-h-48 resize-none overflow-y-auto"
          />
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files?.[0] ?? null)}
            required
          />
          <Input
            name="published"
            type="date"
            value={form.published}
            onChange={handleChange}
            required
          />
          <Button type="submit" className="w-full">
            Simpan
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
