import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: process.cwd(),
  images: {
    // Client-supplied catalogue crops are pre-optimized and should be served
    // directly so later asset replacements appear immediately.
    unoptimized: true,
  },
};

export default nextConfig;
