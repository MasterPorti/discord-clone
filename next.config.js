/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['robohash.org', 'cdn.discordapp.com', 'loremflickr.com', 'discord.com', 'avatars.githubusercontent.com', 'lh3.googleusercontent.com']
  }
}

module.exports = nextConfig
