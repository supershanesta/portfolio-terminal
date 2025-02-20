import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Disables Next.js Image Optimization (needed for static export)
  },
  env: {
    CLARITY_TRACKING_ID: process.env.NEXT_PUBLIC_CLARITY_ID,
  },
};

export default nextConfig;
