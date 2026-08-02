'use client'

import { useEffect, useState } from 'react'
import { navLinks, profile } from '@/data/cv'
import { cn } from '@/lib/utils'

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300',
        scrolled
          ? 'border-[color:var(--line)] bg-[color:var(--paper)] shadow-[0_1px_0_rgba(11,18,32,0.06)]'
          : 'border-white/10 bg-ink/80 backdrop-blur-md',
      )}
    >
      <div className="content-width flex items-center justify-between gap-4 px-5 py-4 sm:px-8 md:px-12 lg:px-16">
        <a
          href="#top"
          className={cn(
            'font-display text-lg tracking-tight transition-colors',
            scrolled ? 'text-ink' : 'text-white',
          )}
        >
          {profile.name}
        </a>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                'font-mono text-xs font-medium uppercase tracking-[0.18em] transition-colors',
                scrolled
                  ? 'text-ink/85 hover:text-ink'
                  : 'text-white/90 hover:text-white',
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={profile.resumePdf}
            download
            className={cn(
              'hidden rounded-sm px-3 py-2 font-mono text-xs font-medium uppercase tracking-[0.16em] transition-colors sm:inline-flex',
              scrolled
                ? 'text-ink/85 hover:text-accent'
                : 'text-white/90 hover:text-white',
            )}
          >
            Resume
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'rounded-sm px-3 py-2 font-mono text-xs font-medium uppercase tracking-[0.16em] transition-colors',
              scrolled
                ? 'bg-accent text-white hover:bg-ink'
                : 'bg-white text-ink hover:bg-accent-soft',
            )}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </header>
  )
}
