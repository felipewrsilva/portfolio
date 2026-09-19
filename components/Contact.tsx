'use client'

import { profile } from '@/data/cv'
import { Reveal } from '@/components/Reveal'
import { displayHost } from '@/lib/utils'

const links = [
  { label: 'Email', value: profile.email, href: profile.emailHref },
  { label: 'Phone', value: profile.phone, href: profile.phoneHref },
  {
    label: 'LinkedIn',
    value: displayHost(profile.linkedin),
    href: profile.linkedin,
  },
]

export default function Contact() {
  return (
    <div className="border-t border-[color:var(--line)] bg-ink text-white">
      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="section-pad"
      >
        <div className="content-width">
          <Reveal>
            <p className="section-label-inverse">Contact</p>
            <h2
              id="contact-heading"
              className="mt-3 text-balance font-display text-3xl tracking-tight md:text-4xl"
            >
              Hiring for a senior .NET role?
            </h2>
            <p className="mt-4 max-w-prose text-pretty text-base text-white/90">
              {profile.contactBrief}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href={profile.emailHref} className="cta-solid">
                Email
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-ghost"
              >
                LinkedIn
              </a>
              <a href={profile.resumePdf} download className="cta-ghost">
                Download resume
              </a>
            </div>
          </Reveal>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {links.map((link) => (
              <li key={link.label} className="min-w-0">
                <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-white/75">
                  {link.label}
                </p>
                <a
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={
                    link.href.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  className="mt-2 inline-block max-w-full break-all text-lg text-white transition hover:text-accent-soft"
                >
                  {link.value}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="content-width px-5 pb-10 sm:px-8 md:px-12 lg:px-16">
        <p className="font-mono text-xs tracking-wide text-white/70">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </footer>
    </div>
  )
}
