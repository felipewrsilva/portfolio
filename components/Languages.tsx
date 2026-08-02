'use client'

import { languages } from '@/data/cv'
import { Reveal } from '@/components/Reveal'

export default function Languages() {
  return (
    <section id="languages" className="section-pad pt-0">
      <div className="content-width">
        <Reveal>
          <p className="section-label">Communication</p>
          <h2 className="section-title mt-3">Languages</h2>
          <ul className="mt-10 grid gap-6 sm:grid-cols-3">
            {languages.map((lang) => (
              <li key={lang.name}>
                <p className="font-display text-xl text-ink">{lang.name}</p>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.16em] text-ink-muted">
                  {lang.level}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
