'use client'

import { featuredCase } from '@/data/cv'
import { Reveal } from '@/components/Reveal'

const sections = [
  { label: 'Problem', text: featuredCase.problem },
  { label: 'Constraint', text: featuredCase.constraint },
  { label: 'Approach', text: featuredCase.approach },
  { label: 'Trade-off', text: featuredCase.tradeOff },
  { label: 'Result', text: featuredCase.result },
] as const

export default function FeaturedCase() {
  return (
    <section id="featured" className="section-pad bg-ink text-white">
      <div className="content-width">
        <Reveal>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-accent-soft">
            Featured work
          </p>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.16em] text-white/80">
            {featuredCase.client} · {featuredCase.industry}
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl tracking-tight md:text-4xl">
            {featuredCase.title}
          </h2>
        </Reveal>

        <div className="mt-12 max-w-3xl space-y-8">
          {sections.map((section, index) => (
            <Reveal key={section.label} delay={index * 0.04}>
              <div>
                <h3 className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent-soft">
                  {section.label}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-white/90">
                  {section.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.12}>
          <h3 className="mt-14 font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent-soft">
            Outcomes
          </h3>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2">
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
      </div>
    </section>
  )
}
