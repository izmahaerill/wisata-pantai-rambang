// src/components/admin/gallery/edit-gallery.tsx
"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader, UserPen } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

const schema = z.object({
  image: z.any().optional(),
});

type Schema = z.infer<typeof schema>;

interface Props {
  id: string;
}

export default function EditGalleryImage({ id }: Props) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      image: undefined,
    },
  });

  async function onSubmit() {
    const formData = new FormData();
    if (selectedFile) {
      formData.append("image", selectedFile);
    }

    await toast.promise(
      (async () => {
        const response = await fetch(`/api/gallery/${id}`, {
          method: "PUT",
          body: formData,
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.message);
        }

        form.reset();
        setSelectedFile(null);
        setDialogOpen(false);

        return result.message;
      })(),
      {
        loading: "Updating image...",
        success: (msg) => msg,
        error: (err) => err.message,
      }
    );
  }

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <UserPen />
          <span className="sr-only">Edit Gallery</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Gallery Image</DialogTitle>
          <DialogDescription>
            Upload a new image to update it.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            encType="multipart/form-data"
            autoComplete="off"
            className="flex flex-col gap-4"
            onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        setSelectedFile(file ?? null);
                        field.onChange(file);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting && (
                <Loader className="animate-spin" />
              )}
              Submit
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
