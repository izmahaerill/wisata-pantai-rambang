import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer";

const config: NextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
};

export default withContentlayer(config);
