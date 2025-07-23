"use client";

import React from "react";

export default function VirtualTourPage() {
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
