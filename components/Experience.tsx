/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'

import { HeroProps } from '@/data'
import { Button } from './ui/MovingBorders'

const Experience: React.FC<HeroProps> = ({ dict }) => {
  const workExperience = [
    {
      id: 1,
      title: dict.page.experiences[0].title,
      desc: dict.page.experiences[0].description,
      className: 'md:col-span-2',
      thumbnail: '/exp1.svg',
    },
    {
      id: 2,
      title: dict.page.experiences[1].title,
      desc: dict.page.experiences[1].description,
      className: 'md:col-span-2',
      thumbnail: '/exp2.svg',
    },
    {
      id: 3,
      title: dict.page.experiences[2].title,
      desc: dict.page.experiences[2].description,
      className: 'md:col-span-2',
      thumbnail: '/exp3.svg',
    },
    {
      id: 4,
      title: dict.page.experiences[3].title,
      desc: dict.page.experiences[3].description,
      className: 'md:col-span-2',
      thumbnail: '/exp4.svg',
    },
  ]
  return (
    <div className="w-full py-20">
      <h1 className="heading">
        <span className="text-purple">{dict.page.experience}</span>
      </h1>

      <div className="mt-12 grid w-full grid-cols-1 gap-10 lg:grid-cols-4">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: 'rgb(4,7,29)',
              backgroundColor:
                'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 border-neutral-200 text-black dark:border-slate-800 dark:text-white"
          >
            <div className="flex flex-col gap-2 p-3 py-6 md:p-5 lg:flex-row lg:items-center lg:p-10">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="w-16 md:w-20 lg:w-32"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl font-bold md:text-2xl">
                  {card.title}
                </h1>
                <p className="mt-3 text-start font-semibold text-white-100">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  )
}

export default Experience
