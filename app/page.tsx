/* eslint-disable no-use-before-define */

import Hero from '@/components/Hero'
import Grid from '@/components/Grid'
import Footer from '@/components/Footer'
import Clients from '@/components/Clients'
import Approach from '@/components/Approach'
import Experience from '@/components/Experience'
import { FloatingNav } from '@/components/ui/FloatingNavbar'
import { getDictionary } from './dictionaries'
import { headers } from 'next/headers'

const locales = ['pt-BR', 'en-US']

const Home = async () => {
  const lang: string = await getInitialProps()
  const dict = await getDictionary(lang)

  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-hidden bg-black-100 px-5 sm:px-10">
      <div className="w-full max-w-7xl">
        <FloatingNav dict={dict} />
        <Hero dict={dict} />
        <Grid dict={dict} />
        <Clients dict={dict} />
        <Experience dict={dict} />
        <Approach dict={dict} />
        <Footer dict={dict} />
      </div>
    </main>
  )
}

const getInitialProps = async () => {
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
