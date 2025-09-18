import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['media.giphy.com', 'hitwebcounter.com'], // Added hitwebcounter.com to allow images from this domain
  },
};

export default nextConfig;
