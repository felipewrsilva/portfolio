'use client'
import React, { useContext, useState } from 'react'
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { DictionaryContext } from '@/components/PageContent'

interface NavbarItem {
  name: string
  link: string
}

export const FloatingNavbar = ({ className }: { className?: string }) => {
  const dict = useContext(DictionaryContext)
  const navItems: NavbarItem[] = [
    { name: dict.page.floatingNav.about, link: '#about' },
    { name: dict.page.floatingNav.testimonials, link: '#testimonials' },
    { name: dict.page.experience, link: '#experience' },
    { name: dict.page.floatingNav.contact, link: '#contact' },
  ]

  const { scrollYProgress } = useScroll()

  const [visible, setVisible] = useState(true)

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    if (typeof current === 'number') {
      const direction = current! - scrollYProgress.getPrevious()!

      if (scrollYProgress.get() < 0.05) {
        setVisible(true)
      } else {
        if (direction < 0) {
          setVisible(true)
        } else {
          setVisible(false)
        }
      }
    }
  })

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          'border-black/.1 fixed inset-x-0 top-10 z-40 mx-auto flex max-w-fit items-center justify-center space-x-4 rounded-lg border px-10 py-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] md:min-w-[70vw] lg:min-w-fit',
          className,
        )}
        style={{
          backdropFilter: 'blur(16px) saturate(180%)',
          backgroundColor: 'rgba(17, 25, 40, 0.75)',
          borderRadius: '12px',
          border: '1px solid rgba(255, 255, 255, 0.125)',
        }}
      >
        {navItems.map((navItem: NavbarItem, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              'relative flex items-center space-x-1 text-neutral-600 hover:text-neutral-500 dark:text-neutral-50 dark:hover:text-neutral-300',
            )}
          >
            <span className="!cursor-pointer text-sm">{navItem.name}</span>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  )
}

export default FloatingNavbar
