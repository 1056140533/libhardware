const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    Object.assign(config.resolve.alias, {
      '@': path.resolve(__dirname, 'src'),
      src: path.resolve(__dirname, 'src'),
    })
    return config
  },
}

module.exports = nextConfig
