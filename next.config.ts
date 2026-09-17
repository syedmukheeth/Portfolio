import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      { source: "/projects/sam-index", destination: "/projects", permanent: true },
      { source: "/projects/sjdc-modernization", destination: "/projects", permanent: true },
    ];
  },
};

export default nextConfig;
