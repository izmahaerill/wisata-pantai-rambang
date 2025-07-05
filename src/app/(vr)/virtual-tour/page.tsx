"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function VirtualTourPage() {
  const router = useRouter();

  return (
    <div className="relative h-screen w-full">
      <iframe
        src="/virtual-tour/index.html"
        title="Virtual Tour Pantai Rambang"
        className="h-full w-full border-0"
        allowFullScreen></iframe>
    </div>
  );
}
