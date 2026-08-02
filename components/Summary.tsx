'use client'

import { summary } from '@/data/cv'
import { Reveal } from '@/components/Reveal'

export default function Summary() {
  return (
    <section id="about" className="section-pad">
      <div className="content-width">
        <Reveal>
          <p className="section-label">Professional Summary</p>
          <h2 className="section-title mt-3">About</h2>
        </Reveal>
        <div className="body-copy mt-10 max-w-prose space-y-5">
          {summary.map((paragraph, index) => (
            <Reveal key={paragraph.slice(0, 24)} delay={index * 0.06}>
              <p>{paragraph}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
