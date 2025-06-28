// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    /* 如果你只用 alt=media 端點，加入這一條就夠 */
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.googleapis.com',
        pathname: '/drive/v3/files/**', // 允許任何 /files/<fileId>?alt=media
      },
      /* 如果之後還想用 drive.google.com/uc?export=view&id=… 的直鏈，
         再加一條即可： */
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        pathname: '/uc',               // 或 '/uc*' 皆可
      },
    ],

    /* 舊版 Next (≤13.0) 可改用
       domains: ['www.googleapis.com', 'drive.google.com'],
    */
  },
};

export default nextConfig;
