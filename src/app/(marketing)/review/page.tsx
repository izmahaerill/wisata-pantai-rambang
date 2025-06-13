"use client";

import Heading from "@/components/micro/Heading";
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
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

const schema = z.object({
  content: z.string().min(2),
});

type Schema = z.infer<typeof schema>;

export default function Review() {
  const [dialogOpen, setDialogOpen] = useState(false);

  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      content: "",
    },
  });

  async function onSubmit(values: Schema) {
    const formData = new FormData();

    formData.append("content", values.content);

    await toast.promise(
      (async () => {
        const response = await fetch("/api/review", {
          method: "POST",
          body: formData,
        });

        const result = await response.json();

        if (!response.ok) {
          toast.error(result.message);
          return;
        }

        form.reset();
        setDialogOpen(false);

        return result.message;
      })(),
      {
        loading: "Mengirim ulasan...",
        success: (message) => message,
        error: (error) => error.message,
      }
    );
  }

  return (
    <>
      <Heading
        heading="Read what people are saying"
        subheading="Real feedback from our virtual visitors!"
      />
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogTrigger asChild>
          <Button onClick={() => setDialogOpen(true)}>Tulis Ulasanmu</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Tulis Ulasanmu</DialogTitle>
            <DialogDescription>
              Bagikan pengalamanmu untuk membantu orang lain.
            </DialogDescription>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="mt-4 flex flex-col gap-4">
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ulasanmu</FormLabel>
                      <FormControl>
                        <Textarea {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting && (
                    <Loader className="animate-spin" />
                  )}
                  Kirim Ulasanmu
                </Button>
              </form>
            </Form>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
