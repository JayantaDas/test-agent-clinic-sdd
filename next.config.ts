import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // TypeScript 7 is not yet recognized by Next.js 16's internal version check;
  // type safety is enforced via `npm run typecheck` (tsc --noEmit) instead.
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
