/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useContext } from 'react'

import { companies } from '@/data'
import { InfiniteMovingCards } from './ui/InfiniteCards'
import { DictionaryContext } from '@/components/PageContent'

export const Clients = () => {
  const dict = useContext(DictionaryContext)

  const testimonials = dict.page.testimonials.map((testimonial) => ({
    quote: testimonial.quote,
    name: testimonial.name,
    title: testimonial.role,
  }))

  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        {dict.page.client.words}
        <span className="text-purple"> {dict.page.client.partners}</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="relative flex h-[50vh] flex-col items-center justify-center  overflow-hidden rounded-md antialiased md:h-[30rem]">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 max-lg:mt-10 md:gap-16">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex max-w-32 gap-2 md:max-w-60">
                <img
                  src={company.img}
                  alt={company.name}
                  className="w-5 md:w-10"
                />
                <img
                  src={company.nameImg}
                  alt={company.name}
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                  className="w-20 md:w-24"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clients
