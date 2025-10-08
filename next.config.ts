import type { NextConfig } from "next";
import withMarkdoc from "@markdoc/next.js";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdoc"],
};

export default withMarkdoc()(nextConfig);
