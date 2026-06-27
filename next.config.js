/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  allowedDevOrigins: ['169.254.83.107'],
  turbopack: {
    root: __dirname,
  },
}

module.exports = nextConfig
