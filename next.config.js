/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'plp',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './plp': './src/pages/index.tsx', 
        },
        extraOptions: {
          exposePages: true,
          automaticAsyncBoundary: true,
        },
      }),
    );
    return config;
  },
};

module.exports = nextConfig;