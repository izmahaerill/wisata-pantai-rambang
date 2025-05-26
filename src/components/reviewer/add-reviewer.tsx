// components/reviewer/AddReview.tsx
"use client";
import { client } from "@/lib/auth/client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";

interface AddReviewProps {
  open: boolean;
  onOpenChange: (val: boolean) => void;
  onSubmit: (data: {
    username: string;
    date: string;
    text: string;
    image: string;
  }) => void;
}

export default function AddReview({
  open,
  onOpenChange,
  onSubmit,
}: AddReviewProps) {
  const [username, setUsername] = useState("");
  const [date, setDate] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState(""); // ✅ penambahan state untuk image
  const [loading, setLoading] = useState(true); // ✅ opsional: untuk cek auth

  //  useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const session = await client.getSession();
  //       if (session?.user) {
  //         setUsername(session.user.name || "");
  //         setImage(session.user.image || ""); // ✅ isi image
  //       }
  //     } catch (error) {
  //       console.error("Gagal mengambil sesi login:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   if (open) fetchUser();
  // }, [open]);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data: session } = await client.getSession(); // ✅ pakai client dari better-auth/react
        console.log("Session", session);
        if (session?.user) {
          setUsername(session.user.name || "");
          setImage(session.user.image || "");
        }
      } catch (error) {
        console.error("Gagal mengambil sesi login:", error);
      } finally {
        setLoading(false);
      }
    };

    if (open) fetchUser();
  }, [open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const reviewData = { username, date, text, image };
    console.log(reviewData);

    // Kirim ke komponen induk
    onSubmit(reviewData);

    // Reset dan tutup modal
    setUsername("");
    setDate("");
    setText("");
    setImage(""); // ✅ reset image juga
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Tulis Ulasanmu</DialogTitle>
          <DialogDescription>
            Bagikan pengalamanmu untuk membantu orang lain.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <Input
            type="text"
            placeholder="Nama kamu"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <Input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <Textarea
            placeholder="Tulis ulasanmu di sini..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />

          {/* ✅ Tambahan preview image profil jika ada */}
          {image && (
            <div className="flex items-center gap-2">
              <img
                src={image}
                alt="Avatar"
                className="h-10 w-10 rounded-full"
              />
              <span className="text-muted-foreground text-sm">
                Tampilan foto profil kamu
              </span>
            </div>
          )}

          <DialogFooter>
            <Button type="submit" className="w-full">
              Kirim Ulasan
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
