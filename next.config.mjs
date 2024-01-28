/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    deviceSizes: [320, 640, 750, 828, 1080, 1200, 1920],
    formats: [],
  },
  eslint: {
    ignoreDuringBuilds: true,
},
};

export default nextConfig;
