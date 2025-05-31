"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

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

const schema = z.object({
  image: z.any(),
});

type Schema = z.infer<typeof schema>;

export default function AddGalleryImage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      image: undefined,
    },
  });

  async function onSubmit(values: Schema) {
    const formData = new FormData();

    if (selectedFile) {
      formData.append("image", selectedFile);
    }

    await toast.promise(
      (async () => {
        const response = await fetch("/api/gallery", {
          method: "POST",
          body: formData,
        });

        const result = await response.json();

        if (!response.ok) {
          toast.error(result.message);
          return;
        }

        form.reset();
        setSelectedFile(null);
        setDialogOpen(false);

        return result.message;
      })(),
      {
        loading: "Uploading image...",
        success: (message) => message,
        error: (error) => error.message,
      }
    );
  }

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setDialogOpen(true)}>
          Upload Gallery Image
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload New Gallery Image</DialogTitle>
          <DialogDescription>
            Choose an image file to upload to the gallery.
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
                  <FormLabel>Image File</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0] ?? null;
                        setSelectedFile(file);
                        field.onChange(file);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? "Uploading..." : "Submit"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
