// /** @type {import('next').NextConfig} */
// const nextConfig = {


// };

// export default nextConfig;


const { i18n } = require('./next-i18next.config.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  i18n,
  images: {
    domains: [
      "plus.unsplash.com","www.shutterstock.com"
    
    ],
  },
};

module.exports = nextConfig;
