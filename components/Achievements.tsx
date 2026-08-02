'use client'

import { impactMetrics } from '@/data/cv'
import { Reveal } from '@/components/Reveal'

export default function Achievements() {
  return (
    <section id="achievements" className="section-pad bg-paper-deep/60">
      <div className="content-width">
        <Reveal>
          <p className="section-label">Impact</p>
          <h2 className="section-title mt-3">Selected outcomes</h2>
          <p className="body-copy mt-4 max-w-prose">
            Career outcomes in relative terms: processing speed, conversion and
            retention.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden border border-[color:var(--line)] bg-[color:var(--line)] sm:grid-cols-3">
          {impactMetrics.map((metric, index) => (
            <Reveal key={metric.label} delay={index * 0.04}>
              <div className="flex h-full flex-col bg-paper px-5 py-6 md:px-6 md:py-8">
                <p className="font-display text-2xl tracking-tight text-ink md:text-3xl">
                  {metric.value}
                </p>
                <p className="mt-2 font-medium text-ink">{metric.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {metric.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
