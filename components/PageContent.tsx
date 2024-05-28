'use client'

import Hero from '@/components/Hero'
import Grid from '@/components/Grid'
import Footer from '@/components/Footer'
import Clients from '@/components/Clients'
import Approach from '@/components/Approach'
import Experience from '@/components/Experience'
import { FloatingNav } from '@/components/ui/FloatingNavbar'
import React, { createContext, useEffect, useState } from 'react'
import { Dictionary, defaultEnglishDictionary } from '@/data'

const DictionaryContext = createContext<Dictionary>(defaultEnglishDictionary)

export const PageContent = ({ dictionary }: { dictionary: Dictionary }) => {
  const [dict, setDict] = useState<Dictionary>(defaultEnglishDictionary)
  useEffect(() => {
    const fetchData = async () => {
      setDict(dictionary)
    }
    fetchData()
  })
  return (
    <div className="w-full max-w-7xl">
      <DictionaryContext.Provider value={dict}>
        <FloatingNav />
        <Hero />
        <Grid />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </DictionaryContext.Provider>
    </div>
  )
}

export { DictionaryContext, PageContent as default }
