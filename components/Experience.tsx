'use client'

import { experience } from '@/data/cv'
import { Reveal } from '@/components/Reveal'

export default function Experience() {
  return (
    <section id="experience" className="section-pad bg-paper-deep/60">
      <div className="content-width">
        <Reveal>
          <p className="section-label">Career</p>
          <h2 className="section-title mt-3">Professional Experience</h2>
        </Reveal>

        <div className="relative mt-14 space-y-16 before:absolute before:bottom-0 before:left-[0.4rem] before:top-2 before:w-px before:bg-[color:var(--line)] md:before:left-[0.55rem]">
          {experience.map((role, index) => (
            <Reveal key={`${role.company}-${role.period}`} delay={index * 0.04}>
              <article className="relative grid gap-4 pl-8 md:pl-12">
                <span
                  className="absolute left-0 top-2 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-[color:var(--paper-deep)]"
                  aria-hidden
                />
                <header className="space-y-1">
                  <h3 className="font-display text-2xl tracking-tight text-ink md:text-3xl">
                    {role.company}
                  </h3>
                  <p className="font-medium text-ink">{role.role}</p>
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-ink-muted">
                    {role.period}
                  </p>
                  <p className="pt-1 text-sm text-ink-muted">
                    <span className="text-accent">{role.industry}</span>
                    <span className="mx-2 text-[color:var(--line)]">·</span>
                    {role.audience}
                  </p>
                </header>

                <p className="max-w-prose text-base leading-relaxed text-ink">
                  {role.overview}
                </p>

                <div className="mt-2">
                  <h4 className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
                    Impact
                  </h4>
                  <ul className="mt-4 max-w-prose list-disc space-y-2 pl-5 text-base leading-relaxed text-ink marker:text-accent">
                    {role.bullets.map((bullet) => (
                      <li key={bullet.slice(0, 48)}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
