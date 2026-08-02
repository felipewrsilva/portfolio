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

const description =
  'Backend and distributed systems engineer in Madrid. 10+ years modernizing platforms with measurable outcomes in processing, conversion, cost and retention.'

export const metadata: Metadata = {
  metadataBase: new URL('https://felipewrsilva.dev'),
  title: 'Felipe Silva | Software Engineer',
  description,
  icons: {
    icon: [{ url: '/fs-logo.svg', type: 'image/svg+xml' }],
    shortcut: '/fs-logo.svg',
    apple: '/fs-logo.svg',
  },
  openGraph: {
    title: 'Felipe Silva | Software Engineer',
    description,
    url: 'https://felipewrsilva.dev',
    siteName: 'Felipe Silva',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Felipe Silva | Software Engineer',
    description,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body className="font-sans">{children}</body>
    </html>
  )
}
