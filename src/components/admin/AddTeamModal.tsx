"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toastPromise } from "@/lib/toast-promise";
import toast from "react-hot-toast";

export function AddTeamModal() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("PENGURUS"); // Default value
  const [image, setImage] = useState<File | null>(null);
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!image) {
      toast.error("Image is required");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("role", role);
    formData.append("image", image);

    try {
      const res = await toastPromise(
        fetch("/admin/about/create", {
          method: "POST",
          body: formData,
        }),
        {
          loading: "Submitting team...",
          success: "Team added successfully!",
          error: "Failed to add team!",
        }
      );

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Unknown error");
      }

      // Reset form (opsional)
      setName("");
      setRole("PENGURUS");
      setImage(null);
      setOpen(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setOpen(true)}>Add Team</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Team</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded border p-2"
          />
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="rounded border p-2">
            <option value="KETUA">Ketua</option>
            <option value="PENGURUS">Pengurus</option>
          </select>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files?.[0] || null)}
            className="rounded border p-2"
          />
          <Button type="submit">Submit</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
