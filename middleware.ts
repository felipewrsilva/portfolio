import { NextRequest, NextResponse } from 'next/server'

const locales = ['pt-BR', 'en-US']

// Function to get the preferred locale from the request
function getLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get('accept-language')
  if (!acceptLanguage) {
    return 'en-US' // Default locale if no Accept-Language header is present
  }

  // Split the header into an array of languages, e.g., ["en-US", "en;q=0.9", "nl;q=0.8"]
  const languages = acceptLanguage.split(',').map((lang) => {
    const [locale] = lang.split(';')
    return locale.trim()
  })

  // Find the first supported locale in the languages array
  for (const language of languages) {
    if (locales.includes(language)) {
      return language
    }
  }

  return 'en-US' // Default locale if no supported language is found
}

export function middleware(request: NextRequest) {
  const locale = getLocale(request)
  request.headers.set('x-locale', locale) // Set locale in headers
  return NextResponse.next()
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}
