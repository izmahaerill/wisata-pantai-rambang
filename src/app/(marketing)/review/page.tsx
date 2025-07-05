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
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

const schema = z.object({
  content: z.string().min(2),
});

type Schema = z.infer<typeof schema>;

export default function Review() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [reviews, setReviews] = useState<any[]>([]);
  const [loadingReviews, setLoadingReviews] = useState(true);

  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      content: "",
    },
  });

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch("/api/review");
        const data = await res.json();
        console.log("Review dengan image:", data);
        setReviews(data);
      } catch (error) {
        console.error("Gagal ambil review:", error);
      } finally {
        setLoadingReviews(false);
      }
    };

    fetchReviews();
  }, []);

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
        heading="Ulasan Pengalaman Pengunjung"
        subheading="Pendapat mereka yang telah merasakan Pantai Rambang, secara virtual dan nyata."
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

      <div className="mt-10">
        {loadingReviews ? (
          <p>Memuat ulasan...</p>
        ) : reviews.length === 0 ? (
          <p>Belum ada ulasan yang ditampilkan.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="rounded-xl border bg-white p-4 shadow-sm transition hover:shadow-md dark:bg-zinc-900">
                <div className="mb-3 flex items-center gap-4">
                  <img
                    src={
                      review.user.image ||
                      `https://ui-avatars.com/api/?name=${encodeURIComponent(
                        review.user.name
                      )}&background=random`
                    }
                    alt={review.user.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-base font-semibold">
                      {review.user.name}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {new Date(review.createdAt).toLocaleDateString("id-ID")}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground line-clamp-4 text-sm">
                  {review.content}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
