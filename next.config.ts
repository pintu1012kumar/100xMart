import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    domains: [
      'upload.wikimedia.org',
      'encrypted-tbn0.gstatic.com', // ✅ Add this line
      'substackcdn.com'
    ],
  },
};

export default nextConfig;
