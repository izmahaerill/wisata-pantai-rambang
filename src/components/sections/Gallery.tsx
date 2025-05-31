"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Heading from "../micro/Heading";
import { BentoGridGallery, BentoGridItem } from "../micro/BentoGridGallery";

export default function Gallery() {
  const [images, setImages] = useState<{ id: string; image: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/gallery")
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch(console.error)
      .finally(() => setLoading(false));
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
                  <Image
                    src={`/images/gallery/${img.image}`}
                    alt={`Gallery ${i}`}
                    width={500}
                    height={300}
                    className="h-full w-full rounded-xl object-cover"
                  />
                }
              />
            ))}
      </BentoGridGallery>
    </>
  );
}
