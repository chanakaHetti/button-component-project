import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack(config, { isServer }) {
    if (!isServer) {
      // Fix font loader issue for Babel
      config.resolve.alias = {
        ...config.resolve.alias,
      };
    }
    return config;
  },
};

export default nextConfig;
