/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  i18n: {
    locales: ["en", "tr"],
    defaultLocale: "en",
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  productionBrowserSourceMaps: false,
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
