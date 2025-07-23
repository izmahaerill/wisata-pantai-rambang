"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Heading from "../micro/Heading";
import { BentoGridGallery, BentoGridItem } from "../micro/BentoGridGallery";

export default function Gallery() {
  const [images, setImages] = useState<{ id: string; image: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await fetch("/api/gallery", { cache: "no-store" });
        const data = await res.json();
        setImages(data);
      } catch (error) {
        console.error("Failed to fetch gallery:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchGallery();
  }, []);

  const skeletonItems = Array.from({ length: 5 }).map((_, i) => (
    <BentoGridItem
      key={i}
      className={i === 3 || i === 6 ? "md:col-span-2" : ""}
      header={
        <div className="h-[300px] w-full animate-pulse rounded-xl bg-gray-300" />
      }
    />
  ));

  return (
    <>
      <Heading
        heading="Galeri Keindahan"
        subheading="Abadikan momen terbaikmu di Pantai Rambang."
        align="center"
      />
      <BentoGridGallery className="max-w-full">
        {loading
          ? skeletonItems
          : images.map((img, i) => (
              <BentoGridItem
                key={img.id}
                className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                header={
                  <div className="relative h-[300px] w-full">
                    <Image
                      src={`/images/gallery/${img.image}`}
                      alt={`Gallery ${i}`}
                      fill
                      className="rounded-xl object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      placeholder="empty"
                      loading="lazy"
                      onError={(e) =>
                        ((e.target as HTMLImageElement).src =
                          "/images/fallback.jpg")
                      }
                    />
                  </div>
                }
              />
            ))}
      </BentoGridGallery>
    </>
  );
}
