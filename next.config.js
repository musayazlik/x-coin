/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {

  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          {key: "Access-Control-Allow-Credentials", value: "true"},
          {key: "Access-Control-Allow-Origin", value: "*"}, // replace this your actual origin
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,DELETE,PATCH,POST,PUT"
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
          },
        ]
      }
    ]
  },


  i18n: {
    locales: ["en", "tr"],
    defaultLocale: "en",
  },
  reactStrictMode: process.env.NODE_ENV !== "production" ? true : false,
  productionBrowserSourceMaps: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },


  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
