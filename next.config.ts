import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "res.cloudinary.com",
      "gf-app-service.onrender.com",
      "storage.googleapis.com",
    ],
  },
};

export default nextConfig;
