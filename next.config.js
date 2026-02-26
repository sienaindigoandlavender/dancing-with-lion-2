/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
  },
  async headers() {
    return [
      {
        source: '/data/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'ALLOW-FROM https://www.slowmorocco.com',
          },
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self' https://www.slowmorocco.com https://slowmorocco.com",
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig
