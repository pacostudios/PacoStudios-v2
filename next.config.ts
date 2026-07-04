import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    viewTransition: true,
  },
  allowedDevOrigins: ["192.168.1.6"],
};

export default nextConfig;
