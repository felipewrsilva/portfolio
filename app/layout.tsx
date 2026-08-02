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

export const metadata: Metadata = {
  title: 'Felipe Silva | Software Engineer',
  description:
    'Software Engineer in Madrid specializing in backend, cloud and distributed systems. 10+ years designing and scaling software across healthcare, education, enterprise security and SaaS.',
  icons: {
    icon: [{ url: '/fs-logo.svg', type: 'image/svg+xml' }],
    shortcut: '/fs-logo.svg',
    apple: '/fs-logo.svg',
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
