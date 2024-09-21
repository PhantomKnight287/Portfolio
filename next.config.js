/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "avatars.githubusercontent.com",
            "repository-images.githubusercontent.com",
            "github.com",
            "voicelearn.tech",
        ],
    },
    swcMinify: true,
};

module.exports = nextConfig;
