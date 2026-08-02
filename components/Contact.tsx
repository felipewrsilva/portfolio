'use client'

import { profile } from '@/data/cv'
import { Reveal } from '@/components/Reveal'

const links = [
  { label: 'Phone', value: profile.phone, href: profile.whatsappHref },
  { label: 'Email', value: profile.email, href: profile.emailHref },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/felipewrsilva',
    href: profile.linkedin,
  },
  { label: 'GitHub', value: 'github.com/felipewrsilva', href: profile.github },
]

export default function Contact() {
  return (
    <footer
      id="contact"
      className="section-pad border-t border-[color:var(--line)] bg-ink text-white"
    >
      <div className="content-width">
        <Reveal>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-accent-soft">
            Contact
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight md:text-4xl">
            Get in touch
          </h2>
          <p className="mt-4 max-w-prose text-base text-white/90">
            {profile.focus} · {profile.location}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={profile.resumePdf}
              download
              className="inline-flex items-center bg-white px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] text-ink transition hover:bg-accent-soft"
            >
              Download resume
            </a>
          </div>
        </Reveal>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {links.map((link, index) => (
            <Reveal key={link.label} delay={index * 0.04}>
              <li>
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
                  className="mt-2 inline-block text-lg text-white transition hover:text-accent-soft"
                >
                  {link.value}
                </a>
              </li>
            </Reveal>
          ))}
        </ul>

        <p className="mt-16 font-mono text-xs tracking-wide text-white/70">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  )
}
