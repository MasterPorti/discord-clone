/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['robohash.org', 'cdn.discordapp.com', 'loremflickr.com', 'discord.com']
  }
}

module.exports = nextConfig
