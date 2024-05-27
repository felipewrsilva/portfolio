import 'server-only'

// Define the structure of the dictionary
export interface Dictionary {
  page: {
    experience: string
    hero: string
    client: {
      words: string
      partners: string
    }
    bentoGrid: {
      copied: string
      notCopied: string
    }
    floatingNav: {
      about: string
      projects: string
      testimonials: string
      contact: string
    }
    header: {
      title: string
      tagline: string
      introduction: string
      callToAction: string
    }
    gridItems: Array<{
      title: string
      description: string
    }>
    projects: Array<{
      /* Define your projects structure here */
    }>
    testimonials: Array<{
      quote: string
      name: string
      role: string
    }>
    experiences: Array<{
      title: string
      description: string
    }>
  }
}

// Define a type for the supported locales
type Locale = 'en-US' | 'pt-BR'

// Define the structure of the dictionaries object
const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  'en-US': () =>
    import('@/dictionaries/en.json').then((module) => module.default),
  'pt-BR': () =>
    import('@/dictionaries/pt-br.json').then((module) => module.default),
}

// Function to map the locale
const mapLocale = (locale: string): Locale => {
  if (typeof locale === 'undefined') return 'en-US'
  switch (locale.toLowerCase()) {
    case 'en-us':
      return 'en-US'
    case 'pt-br':
      return 'pt-BR'
    default:
      return 'en-US' // Default locale
  }
}

export const getDictionary = async (locale: string): Promise<Dictionary> => {
  const mappedLocale = mapLocale(locale)
  const dictionaryLoader = dictionaries[mappedLocale]
  if (dictionaryLoader) {
    return dictionaryLoader()
  }
  throw new Error(`Locale '${locale}' not found`)
}
