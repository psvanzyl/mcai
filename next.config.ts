import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // Stock imagery ships as static files in /public/img; no optimizer needed in the container.
  images: { unoptimized: true },
  poweredByHeader: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
