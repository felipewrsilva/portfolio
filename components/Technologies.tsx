'use client'

import { technologies } from '@/data/cv'
import { Reveal } from '@/components/Reveal'

export default function Technologies() {
  const groups = Object.entries(technologies)

  return (
    <section id="technologies" className="section-pad">
      <div className="content-width">
        <Reveal>
          <p className="section-label">Stack</p>
          <h2 className="section-title mt-3">Core Technologies</h2>
        </Reveal>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map(([category, items], index) => (
            <Reveal key={category} delay={index * 0.05}>
              <div>
                <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  {category}
                </h3>
                <ul className="mt-4 space-y-2">
                  {items.map((item) => (
                    <li key={item} className="text-base leading-snug text-ink">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
