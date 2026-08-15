/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'felipewrsilva.com.br' }],
        destination: 'https://felipewrsilva.dev/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.felipewrsilva.com.br' }],
        destination: 'https://felipewrsilva.dev/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.felipewrsilva.dev' }],
        destination: 'https://felipewrsilva.dev/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
