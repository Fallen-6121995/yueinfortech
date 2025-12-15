import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "http", hostname: "yueinfortech.local" },
    ],
    // Allow local WP images during development despite private IP resolution
    unoptimized: isDev,
  },
};

export default nextConfig;
