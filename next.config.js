/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "scontent-bcn1-1.cdninstagram.com",
        port: "",
        pathname: "/v/**",
      },
    ],
  },
};

module.exports = nextConfig;
