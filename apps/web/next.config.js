const million = require('million/compiler')
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  },
  experimental: {
    serverActions: true,
    serverActionsBodySizeLimit: '2mb'
  }
}

module.exports = million.next(nextConfig, { auto: { rsc: true, mute: true } })
