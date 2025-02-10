/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/frameworksmoment",
  assetPrefix: "/frameworksmoment/",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
