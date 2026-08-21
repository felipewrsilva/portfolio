'use client'

import { education, languages } from '@/data/cv'
import { Reveal } from '@/components/Reveal'

export default function Background() {
  return (
    <section id="background" className="section-pad">
      <div className="content-width">
        <Reveal>
          <p className="section-label">Background</p>
          <h2 className="section-title mt-3">Education & languages</h2>
        </Reveal>

        <ul className="mt-10 space-y-10">
          {education.map((entry, index) => (
            <Reveal key={entry.institution} delay={index * 0.05}>
              <li className="max-w-prose">
                <h3 className="font-display text-2xl tracking-tight text-ink">
                  {entry.institution}
                </h3>
                <p className="mt-2 font-medium text-ink">{entry.degree}</p>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.16em] text-ink-muted">
                  {entry.period}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.1}>
          <div className="mt-14 border-t border-[color:var(--line)] pt-10">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-ink-muted">
              Languages
            </p>
            <p className="mt-3 font-display text-xl text-ink">
              {languages.join(', ')}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
