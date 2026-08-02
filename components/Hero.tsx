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
      className="relative flex min-h-[100svh] items-end overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=2400&q=80')",
        }}
        role="img"
        aria-label="Madrid cityscape"
      />
      <div
        className="absolute inset-0"
        style={{ background: 'var(--hero-overlay)' }}
      />
      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-ink/70 to-transparent" />
      <div className="blueprint-grid absolute inset-0 opacity-20 mix-blend-overlay" />

      <div className="content-width section-pad relative z-10 w-full pb-16 pt-32 md:pb-24">
        <motion.p
          className="font-display text-5xl leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
          custom={0}
          variants={item}
          initial="hidden"
          animate="show"
        >
          {profile.name}
        </motion.p>

        <motion.h1
          className="mt-6 max-w-2xl font-sans text-xl font-medium text-white md:text-2xl"
          custom={1}
          variants={item}
          initial="hidden"
          animate="show"
        >
          {profile.title}
        </motion.h1>

        <motion.p
          className="mt-4 max-w-xl text-base text-white/90 md:text-lg"
          custom={2}
          variants={item}
          initial="hidden"
          animate="show"
        >
          {profile.focus} · {profile.location}
        </motion.p>
      </div>
    </section>
  )
}
