/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  i18n: {
    locales: ["en", "tr"],
    defaultLocale: "en",
  },
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },

  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
