import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://felipewrsilva.dev/sitemap.xml',
    host: 'https://felipewrsilva.dev',
  }
}
