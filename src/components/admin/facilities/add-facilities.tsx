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
import { Loader, Plus, UserPlus } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1),
  image: z.any().optional(),
});

type Schema = z.infer<typeof schema>;

export default function AddFacilities() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      image: undefined,
    },
  });

  async function onSubmit(values: Schema) {
    const formData = new FormData();

    formData.append("name", values.name);

    if (selectedFile) {
      formData.append("image", selectedFile);
    }

    await toast.promise(
      (async () => {
        const response = await fetch("/api/facilities", {
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
        loading: "Adding facilities...",
        success: (message) => message,
        error: (error) => error.message,
      }
    );
  }

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setDialogOpen(true)}>
          <Plus />
          Add Facilities
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Facilities</DialogTitle>
          <DialogDescription>
            Fill in the details below to add a new facilities.
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
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
                      onChange={(event) => {
                        const file = event.target.files?.[0];

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
