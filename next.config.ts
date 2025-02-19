import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Disables Next.js Image Optimization (needed for static export)
  },
};

export default nextConfig;
