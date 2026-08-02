'use client'

import { featuredCase } from '@/data/cv'
import { Reveal } from '@/components/Reveal'

export default function FeaturedCase() {
  return (
    <section id="featured" className="section-pad bg-ink text-white">
      <div className="content-width">
        <Reveal>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-accent-soft">
            Featured client work
          </p>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.16em] text-white/80">
            {featuredCase.client} · {featuredCase.industry}
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl tracking-tight md:text-4xl">
            {featuredCase.title}
          </h2>
          <p className="mt-4 max-w-prose text-base leading-relaxed text-white/90 md:text-lg">
            {featuredCase.summary}
          </p>
          <p className="mt-3 text-sm text-white/80">
            Built for {featuredCase.audience}.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <Reveal delay={0.06}>
            <h3 className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent-soft">
              Outcomes for the client
            </h3>
            <ul className="mt-5 space-y-3">
              {featuredCase.outcomes.map((outcome) => (
                <li
                  key={outcome}
                  className="border-l-2 border-accent-soft pl-4 text-base leading-relaxed text-white"
                >
                  {outcome}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent-soft">
              Technical approach
            </h3>
            <ul className="mt-5 space-y-3">
              {featuredCase.approach.map((item) => (
                <li
                  key={item}
                  className="border-l-2 border-accent-soft pl-4 text-base leading-relaxed text-white"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
