import type { Metadata } from 'next'
/* eslint-disable camelcase -- next/font Google export names */
import { IBM_Plex_Mono, IBM_Plex_Sans, Source_Serif_4 } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'

import './globals.css'

const display = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const sans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
})

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

const title =
  'Felipe Silva | Senior Software Engineer (.NET) | Madrid, Remote EU/US'
const description =
  'Senior .NET backend engineer in Madrid with 10+ years in C#, ASP.NET Core, SQL Server, and Azure across healthcare data, security, and SaaS. Remote-ready for EU hours and US Eastern overlap.'

export const metadata: Metadata = {
  metadataBase: new URL('https://felipewrsilva.dev'),
  title,
  description,
  alternates: {
    canonical: 'https://felipewrsilva.dev',
  },
  icons: {
    icon: [{ url: '/fs-logo.svg', type: 'image/svg+xml' }],
    shortcut: '/fs-logo.svg',
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    title,
    description,
    url: 'https://felipewrsilva.dev',
    siteName: 'Felipe Silva',
    locale: 'en_US',
    alternateLocale: ['en_GB'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Felipe Silva',
    jobTitle: 'Senior Software Engineer (.NET)',
    url: 'https://felipewrsilva.dev',
    email: 'contact@felipewrsilva.dev',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Madrid',
      addressCountry: 'ES',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'IQVIA',
    },
    knowsLanguage: ['English', 'Portuguese', 'Spanish'],
    sameAs: [
      'https://linkedin.com/in/felipewrsilva',
      'https://github.com/felipewrsilva',
    ],
    knowsAbout: [
      '.NET',
      'ASP.NET Core',
      'ASP.NET',
      'C#',
      'SQL Server',
      'Azure',
      'TypeScript',
      'JavaScript',
      'React',
      'Next.js',
      'Data platform modernization',
      'Backend engineering',
    ],
  }

  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body className="font-sans">
        <a
          href="#about"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-white focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
