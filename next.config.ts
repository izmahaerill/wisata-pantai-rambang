import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer";

const config: NextConfig = {
  images: {
    // domains: ["lh3.googleusercontent.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com", // untuk Google Profile image
      },
    ],
  },
};

export default withContentlayer(config);
