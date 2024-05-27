/* eslint-disable @next/next/no-img-element */
'use client'

import { FaLocationArrow } from 'react-icons/fa6'

import { HeroProps, socialMedia } from '@/data'
import MagicButton from './MagicButton'
import Link from 'next/link'
import Image from 'next/image'

const Footer: React.FC<HeroProps> = ({ dict }) => {
  return (
    <footer className="w-full pb-10 pt-20" id="contact">
      <div className="absolute -bottom-72 left-0 min-h-96 w-full">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="h-full w-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">{dict.page.footer.presence}</h1>
        <p className="my-5 text-center text-white-200 md:mt-10">
          {dict.page.footer.discussion}
        </p>
        <a href="mailto:felipewrsilva@gmail.com">
          <MagicButton
            title={dict.page.footer.contact}
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="mt-16 flex flex-col items-center justify-between md:flex-row">
        <p className="text-sm font-light md:text-base md:font-normal">
          Copyright © 2024 Felipe Silva
        </p>

        <div className="flex items-center gap-6 md:gap-3">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="saturate-180 flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-black-300 bg-black-200 bg-opacity-75 backdrop-blur-lg backdrop-filter"
            >
              <Link href={info.url}>
                <Image
                  src={info.img}
                  alt="icons"
                  width={20}
                  height={20}
                ></Image>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
