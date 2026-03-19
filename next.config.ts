import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  compress: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ecommerce.routemisr.com',
        pathname: '/Route-Academy-products/**',
      },
      {
        protocol: 'https',
        hostname: 'ecommerce.routemisr.com',
        pathname: '/Route-Academy-categories/**',
      },
      {
        protocol: 'https',
        hostname: 'ecommerce.routemisr.com',
        pathname: '/Route-Academy-brands/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
    formats: ['image/webp'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
