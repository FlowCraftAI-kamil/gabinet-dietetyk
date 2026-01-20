import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  compress: true,
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
