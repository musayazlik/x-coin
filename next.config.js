/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  i18n: {
    locales: ["en", "tr"],
    defaultLocale: "en",
  },
  reactStrictMode: process.env.NODE_ENV !== "production" ? true : false,
  productionBrowserSourceMaps: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },

  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://traderedit.com/:path*',
      }
    ]
  },

  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
