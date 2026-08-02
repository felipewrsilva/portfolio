'use client'

import { education } from '@/data/cv'
import { Reveal } from '@/components/Reveal'

export default function Education() {
  return (
    <section id="education" className="section-pad">
      <div className="content-width">
        <Reveal>
          <p className="section-label">Background</p>
          <h2 className="section-title mt-3">Education</h2>
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
      </div>
    </section>
  )
}
