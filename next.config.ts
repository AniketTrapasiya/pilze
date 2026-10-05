import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "palegoldenrod-crow-967830.hostingersite.com",
      },
      {
        protocol: "https",
        hostname: "wordpress.themehour.net",
      },
    ],
  },
};

export default nextConfig;
