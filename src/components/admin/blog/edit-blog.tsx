"use client";

import { useEffect, useState } from "react";
import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "react-hot-toast";
import Image from "next/image";

export default function EditBlog({
  id,
  onSuccess,
}: {
  id: string;
  onSuccess: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    title: "",
    summary: "",
    image: "",
    published: "",
  });
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (!open) return;
    const fetchData = async () => {
      const res = await fetch(`/api/blog/${id}`);
      const data = await res.json();
      setForm({
        title: data.title || "",
        summary: data.summary || "",
        image: data.image || "",
        published: data.published?.slice(0, 10) || "",
      });
      setPreview(data.image);
    };
    fetchData();
  }, [open, id]);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    if (data.url) {
      setForm({ ...form, image: data.url });
      setPreview(data.url);
    } else {
      toast.error("Gagal mengunggah gambar.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/blog/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        toast.error(data.message || "Gagal memperbarui blog.");
      } else {
        toast.success("Blog berhasil diperbarui!");
        onSuccess();
        setOpen(false);
      }
    } catch (error) {
      console.error("Edit Blog error:", error);
      toast.error("Terjadi kesalahan.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline">
          <Pencil className="mr-2 h-4 w-4" />
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Blog</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Judul"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            required
          />
          <Textarea
            placeholder="Ringkasan"
            value={form.summary}
            onChange={(e) => setForm({ ...form, summary: e.target.value })}
            required
            className="h-40 max-h-48 resize-none overflow-y-auto"
          />
          <div className="space-y-2">
            {preview && (
              <div className="relative h-32 w-full">
                <Image
                  src={preview}
                  alt="Preview"
                  fill
                  className="rounded-md object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
            )}
            <div>
              <label
                htmlFor="edit-image"
                className="text-muted-foreground mb-1 block text-sm font-medium">
                Ganti Gambar
              </label>
              <Input
                id="edit-image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
          </div>
          <Input
            type="date"
            value={form.published}
            onChange={(e) => setForm({ ...form, published: e.target.value })}
            required
          />
          <div className="flex justify-end">
            <Button type="submit">Simpan</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
