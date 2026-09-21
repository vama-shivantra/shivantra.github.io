import type { NextConfig } from "next";
import { basePath } from "./src/lib/basePath";

const nextConfig: NextConfig = {
  trailingSlash: false,
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
};

export default nextConfig;
