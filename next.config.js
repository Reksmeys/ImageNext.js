/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            hostname: 'www.developers-cambodia.com'
          },
        ],
      },
}

module.exports = nextConfig
