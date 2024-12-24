import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: "images.pexels.com" },
      { hostname: "encrypted-tbn0.gstatic.com" },
      { hostname: "plus.unsplash.com" },
    ],
  },
};

export default nextConfig;
