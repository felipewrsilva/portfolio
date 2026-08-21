'use client'

import { industries, summary } from '@/data/cv'
import { Reveal } from '@/components/Reveal'

export default function Summary() {
  return (
    <section id="about" className="section-pad">
      <div className="content-width">
        <Reveal>
          <p className="section-label">About</p>
          <h2 className="section-title mt-3">Professional summary</h2>
        </Reveal>
        <div className="body-copy mt-10 max-w-prose space-y-5">
          {summary.map((paragraph, index) => (
            <Reveal key={paragraph.slice(0, 24)} delay={index * 0.06}>
              <p>{paragraph}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.12}>
          <ul className="mt-8 flex flex-wrap gap-x-4 gap-y-2">
            {industries.map((industry) => (
              <li
                key={industry}
                className="font-mono text-xs uppercase tracking-[0.14em] text-ink-muted"
              >
                {industry}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
