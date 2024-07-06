/* eslint-disable no-use-before-define */
import { headers } from 'next/headers'
import { getDictionary } from './dictionaries'
import PageContent from '@/components/PageContent'
import AIChatButton from '@/components/AIChat/AIChatButton'

const locales = ['pt-BR', 'en-US']

const Home = async () => {
  const lang = await getInitialLanguage()
  const dictionary = await getDictionary(lang)

  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-hidden bg-black-100 px-5 sm:px-10">
      <PageContent dictionary={dictionary} />
      <AIChatButton />
    </main>
  )
}

const getInitialLanguage = async () => {
  const headersList = headers()
  const acceptLanguage = headersList.get('accept-language')
  let locale = 'en-US'

  if (acceptLanguage) {
    const languages = acceptLanguage.split(',').map((lang) => {
      const [locale] = lang.split(';')
      return locale.trim()
    })

    for (const language of languages) {
      if (locales.includes(language)) {
        locale = language
        break
      }
    }
  }

  return locale
}

export default Home
