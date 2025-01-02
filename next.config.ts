import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint:{
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "classtools.net",
      },
    ]
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "100mb", 
    },
  },
};

export default nextConfig;