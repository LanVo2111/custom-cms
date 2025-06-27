import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    loader: 'cloudinary',
    path: `https://res.cloudinary.com/`,
  }
};

export default nextConfig;
