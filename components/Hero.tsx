'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { profile } from '@/data/cv'

export default function Hero() {
  const reduce = useReducedMotion()

  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 28 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: reduce ? 0 : 0.12 + i * 0.1,
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  }

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 15% 20%, rgba(44,74,54,0.45), transparent 55%), radial-gradient(ellipse 70% 50% at 90% 10%, rgba(197,214,203,0.12), transparent 50%), linear-gradient(160deg, #0b1220 0%, #121a28 45%, #0f1a16 100%)',
        }}
      />
      <div className="blueprint-grid absolute inset-0 opacity-[0.14] mix-blend-overlay" />
      <div className="pointer-events-none absolute -right-16 top-24 hidden select-none font-display text-[14rem] leading-none tracking-tighter text-white/[0.04] sm:block md:text-[18rem]">
        FS
      </div>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink/80 to-transparent" />

      <div className="content-width section-pad relative z-10 w-full pb-16 pt-32 md:pb-24">
        <motion.p
          className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-accent-soft"
          custom={0}
          variants={item}
          initial="hidden"
          animate="show"
        >
          {profile.location}
        </motion.p>

        <motion.p
          className="mt-5 font-display text-5xl leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
          custom={1}
          variants={item}
          initial="hidden"
          animate="show"
        >
          {profile.name}
        </motion.p>

        <motion.h1
          className="mt-6 max-w-2xl font-sans text-xl font-medium text-white md:text-2xl"
          custom={2}
          variants={item}
          initial="hidden"
          animate="show"
        >
          {profile.title}
        </motion.h1>

        <motion.p
          className="mt-4 max-w-xl text-base text-white/90 md:text-lg"
          custom={3}
          variants={item}
          initial="hidden"
          animate="show"
        >
          {profile.focus}
        </motion.p>
      </div>
    </section>
  )
}
