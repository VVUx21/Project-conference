import type { NextConfig } from "next";

const nextConfig:NextConfig = {
  images: {

      remotePatterns: [
          {
              hostname: "res.cloudinary.com",
          },
          {
            hostname:"images.unsplash.com"
          }
      ],

  },
};

export default nextConfig;