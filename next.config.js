/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: 'http://www.traderedit.com http://traderedit.com', // İzin verilen kök etki alanları
          },
        ],
      },
    ];
  },

  i18n: {
    locales: ["en", "tr"],
    defaultLocale: "en",
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },


  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
