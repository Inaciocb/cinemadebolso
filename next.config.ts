import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/cinemadebolso',
  assetPrefix: '/cinemadebolso/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;