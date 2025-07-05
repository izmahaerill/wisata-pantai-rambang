"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const panduanData = [
  {
    id: 1,
    title: "Arah Pandangan",
    content:
      "Geser layar ke kiri, kanan, atas, atau bawah untuk menjelajahi panorama. Bisa menggunakan mouse, touchpad, atau layar sentuh.",
  },
  {
    id: 2,
    title: "Zoom",
    content:
      "Gunakan scroll mouse atau cubit layar untuk memperbesar atau memperkecil tampilan panorama.",
  },
  {
    id: 3,
    title: "Navigasi Antar Titik",
    content:
      "Klik ikon panah di tampilan untuk berpindah antar lokasi di area Pantai Rambang.",
  },
  {
    id: 4,
    title: "Informasi Lokasi",
    content:
      "Klik ikon informasi pada titik tertentu untuk melihat nama dan deskripsi lokasi secara singkat.",
  },
  {
    id: 5,
    title: "Kembali ke Halaman Utama",
    content:
      "Gunakan tombol ← Kembali di kiri atas untuk keluar dari tour dan kembali ke website utama.",
  },
];

export default function PanduanVirtualTour() {
  return (
    <div className="mx-auto max-w-4xl px-6 pt-32 pb-10">
      <h1 className="mb-6 text-left text-4xl font-bold text-black dark:text-white">
        Panduan Virtual Tour 360°
      </h1>
      <Separator className="mb-6" />

      <div className="space-y-6">
        {panduanData.map((item) => (
          <Card
            key={item.id}
            className="border-muted-foreground/10 transform border bg-white transition duration-300 hover:scale-105 dark:bg-[#1e1e1e]">
            <CardHeader>
              <CardTitle className="text-lg text-black dark:text-white">
                {item.id}. {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300">
              {item.content}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
