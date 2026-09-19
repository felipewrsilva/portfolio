import type { Metadata } from 'next'
/* eslint-disable camelcase -- next/font Google export names */
import { IBM_Plex_Mono, IBM_Plex_Sans, Source_Serif_4 } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'

import { languages, profile } from '@/data/cv'

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

const { seoTitle: title, seoDescription: description, siteUrl } = profile

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [{ url: '/fs-logo.svg', type: 'image/svg+xml' }],
    shortcut: '/fs-logo.svg',
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: profile.name,
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
    name: profile.name,
    jobTitle: profile.title,
    url: siteUrl,
    email: profile.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Madrid',
      addressCountry: 'ES',
    },
    worksFor: {
      '@type': 'Organization',
      name: profile.company,
    },
    knowsLanguage: languages.map((language) => language.name),
    sameAs: [profile.linkedin, profile.github],
    knowsAbout: [
      '.NET',
      'ASP.NET Core',
      'C#',
      'SQL Server',
      'DACPAC',
      'Azure',
      'CI/CD',
      'TypeScript',
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
