/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "repository-images.githubusercontent.com",
    ],
  },
  swcMinify: true,
};

module.exports = nextConfig;
