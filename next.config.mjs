/** @type {import('next').NextConfig} */

// The site is statically exported and hosted on GitHub Pages as a *project page*,
// so every URL lives under /nextjs-academy. In local development there is no basePath.
const REPO = "nextjs-academy";
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? `/${REPO}` : "",
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
