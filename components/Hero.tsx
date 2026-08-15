'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { profile } from '@/data/cv'

export default function Hero() {
  const reduce = useReducedMotion()

  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 20 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: reduce ? 0 : 0.08 + i * 0.08,
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  }

  return (
    <section
      id="top"
      className="relative flex min-h-[78svh] items-end overflow-hidden bg-ink md:min-h-[70svh]"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 15% 20%, rgba(44,74,54,0.35), transparent 55%), linear-gradient(160deg, #0b1220 0%, #121a28 55%, #0f1a16 100%)',
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/70 to-transparent" />

      <div className="content-width section-pad relative z-10 w-full pb-14 pt-28 md:pb-20">
        <motion.p
          className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-accent-soft"
          custom={0}
          variants={item}
          initial="hidden"
          animate="show"
        >
          {profile.location} · {profile.yearsExperience}
        </motion.p>

        <motion.h1
          className="mt-5 font-display text-5xl leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl"
          custom={1}
          variants={item}
          initial="hidden"
          animate="show"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          className="mt-5 max-w-2xl font-sans text-xl font-medium text-white md:text-2xl"
          custom={2}
          variants={item}
          initial="hidden"
          animate="show"
        >
          {profile.title}{' '}
          <span className="font-normal text-white/70">
            at {profile.company}
          </span>
        </motion.p>

        <motion.p
          className="mt-3 max-w-xl font-mono text-sm uppercase tracking-[0.14em] text-accent-soft"
          custom={3}
          variants={item}
          initial="hidden"
          animate="show"
        >
          {profile.focus}
        </motion.p>

        <motion.p
          className="mt-6 max-w-xl text-base leading-relaxed text-white/90 md:text-lg"
          custom={4}
          variants={item}
          initial="hidden"
          animate="show"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap gap-3"
          custom={5}
          variants={item}
          initial="hidden"
          animate="show"
        >
          <a
            href={profile.emailHref}
            className="inline-flex items-center bg-white px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] text-ink transition hover:bg-accent-soft"
          >
            Email
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center border border-white/30 px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] text-white transition hover:border-accent-soft hover:text-accent-soft"
          >
            LinkedIn
          </a>
          <a
            href={profile.resumePdf}
            download
            className="inline-flex items-center border border-white/30 px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] text-white transition hover:border-accent-soft hover:text-accent-soft"
          >
            Resume
          </a>
        </motion.div>
      </div>
    </section>
  )
}
