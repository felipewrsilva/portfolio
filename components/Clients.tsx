'use client'

import { clients, industries } from '@/data/cv'
import { Reveal } from '@/components/Reveal'

export default function Clients() {
  return (
    <section id="clients" className="section-pad">
      <div className="content-width">
        <Reveal>
          <p className="section-label">Clients & domains</p>
          <h2 className="section-title mt-3">Where the work landed</h2>
          <p className="body-copy mt-4 max-w-prose">
            Engaged across {industries.slice(0, -1).join(', ')} and{' '}
            {industries[industries.length - 1]}, delivering platforms used by
            pharmaceutical organizations, enterprise security customers,
            education institutions and SaaS product teams.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <ul className="mt-8 flex flex-wrap gap-x-4 gap-y-2">
            {industries.map((industry) => (
              <li
                key={industry}
                className="font-mono text-xs uppercase tracking-[0.16em] text-accent"
              >
                {industry}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-12 grid gap-0 border-t border-[color:var(--line)] sm:grid-cols-2 sm:items-stretch">
          {clients.map((client, index) => (
            <Reveal key={client.company} delay={index * 0.04} className="h-full">
              <article className="flex h-full flex-col border-b border-[color:var(--line)] py-8 sm:odd:pr-8 sm:even:border-l sm:even:pl-8 lg:py-10">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <h3 className="font-display text-2xl tracking-tight text-ink">
                    {client.company}
                  </h3>
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-ink-muted">
                    {client.industry}
                  </p>
                </div>
                <p className="mt-3 text-sm text-ink">
                  <span className="font-medium">Audience:</span>{' '}
                  <span className="text-ink-muted">{client.audience}</span>
                </p>
                <p className="mt-2 text-base leading-relaxed text-ink">
                  {client.focus}
                </p>
                <p className="mt-auto pt-4 font-mono text-xs uppercase tracking-[0.14em] text-accent">
                  {client.highlight}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
