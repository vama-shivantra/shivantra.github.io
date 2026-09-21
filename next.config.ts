import type { NextConfig } from "next";
import { basePath } from "./src/lib/basePath";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: false,
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
};

export default nextConfig;
