/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const nextConfig = {
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '**',
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    config.plugins.push(
      new NextFederationPlugin({
        name: 'plp',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './plp-category': './src/pages/[department]/[category]/index.tsx',
          './plp-product':
            './src/pages/[department]/[category]/[product]/index.tsx',
          './plp-search': './src/pages/search/[search].tsx',
          './plp-cluster': './src/pages/cluster/[clusterId].tsx',
        },
        extraOptions: {
          exposePages: true,
          automaticAsyncBoundary: true,
        },
        shared: {
          'next/link': {
            requiredVersion: false,
            singleton: true,
          },
        },
      }),
    );
    return config;
  },
};

module.exports = nextConfig;
