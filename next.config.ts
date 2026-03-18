import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,  // ← fixes the lockfile warning too!
  },
};

export default nextConfig;
