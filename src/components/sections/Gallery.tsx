import { cn } from "@/lib/utils";
import React from "react";
import { BentoGridGallery, BentoGridItem } from "../micro/BentoGridGallery";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Heading from "../micro/Heading";

export default function Gallery() {
  return (
    <>
      <Heading
        heading="Galeri Keindahan"
        subheading="Abadikan momen terbaikmu di Pantai Rambang. Lihat keindahan pasir putih, air laut jernih, dan suasana alam yang memukau."
        align="center"
      />
      <BentoGridGallery className="max-w-full">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            //   title={item.title}
            //   description={item.description}
            header={item.header}
            //   icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGridGallery>
    </>
  );
}
const Skeleton = () => (
  <div className="flex h-full min-h-[6rem] w-full flex-1 rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800"></div>
);
const items = [
  {
    // title: "The Dawn of Innovation",
    // description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    // title: "The Digital Revolution",
    // description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    // title: "The Art of Design",
    // description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    // title: "The Power of Communication",
    // description:
    //   "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    // title: "The Pursuit of Knowledge",
    // description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  // {
  //   // title: "The Joy of Creation",
  //   // description: "Experience the thrill of bringing ideas to life.",
  //   header: <Skeleton />,
  //   icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  // },
  // {
  //   // title: "The Spirit of Adventure",
  //   // description: "Embark on exciting journeys and thrilling discoveries.",
  //   header: <Skeleton />,
  //   icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  // },
];
