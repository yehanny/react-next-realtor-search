/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    hostURL: "http://localhost:3000",
  },
  reactStrictMode: false,
  swcMinify: true,
  serverRuntimeConfig: {
    secret: "THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING",
  },
  publicRuntimeConfig: {
    apiUrl:
      process.env.NODE_ENV === "development"
        ? "http://localhost:3001" // development api
        : "http://localhost:3001", // production api
  },
  images: {
    domains: ["localhost"],
  },
};

module.exports = nextConfig;
