'use client'

import { achievements, impactMetrics } from '@/data/cv'
import { Reveal } from '@/components/Reveal'

export default function Achievements() {
  return (
    <section id="achievements" className="section-pad bg-paper-deep/60">
      <div className="content-width">
        <Reveal>
          <p className="section-label">Impact</p>
          <h2 className="section-title mt-3">Selected Achievements</h2>
          <p className="body-copy mt-4 max-w-prose">
            Measurable outcomes delivered for healthcare, education and SaaS
            clients — from data platform SLAs to checkout performance and churn
            reduction.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden border border-[color:var(--line)] bg-[color:var(--line)] sm:grid-cols-2 lg:grid-cols-3">
          {impactMetrics.map((metric, index) => (
            <Reveal key={metric.label} delay={index * 0.04}>
              <div className="flex h-full flex-col bg-paper px-5 py-6 md:px-6 md:py-8">
                <p className="font-display text-2xl tracking-tight text-ink md:text-3xl">
                  {metric.value}
                </p>
                <p className="mt-2 font-medium text-ink">{metric.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink">
                  {metric.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <ol className="mt-14 space-y-0 border-t border-[color:var(--line)]">
          {achievements.map((item, index) => (
            <Reveal key={item.slice(0, 32)} delay={index * 0.05}>
              <li className="grid grid-cols-[auto_1fr] gap-6 border-b border-[color:var(--line)] py-6 md:gap-10 md:py-8">
                <span className="font-mono text-sm text-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="text-base leading-relaxed text-ink md:text-lg md:leading-relaxed">
                  {item}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
