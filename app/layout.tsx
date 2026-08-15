import type { Metadata } from 'next'
/* eslint-disable camelcase -- next/font Google export names */
import { IBM_Plex_Mono, IBM_Plex_Sans, Source_Serif_4 } from 'next/font/google'

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

const title = 'Felipe Silva | Senior Software Engineer'
const description =
  'Senior .NET backend engineer in Madrid. 10+ years modernizing healthcare and enterprise data platforms with ASP.NET Core and SQL Server.'

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
    apple: '/fs-logo.svg',
  },
  openGraph: {
    title,
    description,
    url: 'https://felipewrsilva.dev',
    siteName: 'Felipe Silva',
    locale: 'en_GB',
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
    jobTitle: 'Senior Software Engineer',
    url: 'https://felipewrsilva.dev',
    email: 'mailto:contact@felipewrsilva.dev',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Madrid',
      addressCountry: 'ES',
    },
    sameAs: [
      'https://linkedin.com/in/felipewrsilva',
      'https://github.com/felipewrsilva',
    ],
    knowsAbout: [
      '.NET',
      'ASP.NET Core',
      'SQL Server',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
