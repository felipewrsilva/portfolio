'use client'

import { useEffect, useState } from 'react'
import { navLinks, profile } from '@/data/cv'
import { cn } from '@/lib/utils'

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300',
        scrolled || menuOpen
          ? 'border-[color:var(--line)] bg-[color:var(--paper)] shadow-[0_1px_0_rgba(11,18,32,0.06)]'
          : 'border-white/10 bg-ink/80 backdrop-blur-md',
      )}
    >
      <div className="content-width flex items-center justify-between gap-4 px-5 py-4 sm:px-8 md:px-12 lg:px-16">
        <a
          href="#top"
          onClick={closeMenu}
          className={cn(
            'font-display text-lg tracking-tight transition-colors',
            scrolled || menuOpen ? 'text-ink' : 'text-white',
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
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'hidden rounded-sm px-3 py-2 font-mono text-xs font-medium uppercase tracking-[0.16em] transition-colors sm:inline-flex',
              scrolled || menuOpen
                ? 'text-ink/85 hover:text-ink'
                : 'text-white/90 hover:text-white',
            )}
          >
            LinkedIn
          </a>
          <a
            href={profile.emailHref}
            className={cn(
              'rounded-sm px-3 py-2 font-mono text-xs font-medium uppercase tracking-[0.16em] transition-colors',
              scrolled || menuOpen
                ? 'bg-accent text-white hover:bg-ink'
                : 'bg-white text-ink hover:bg-accent-soft',
            )}
          >
            Email
          </a>
          <button
            type="button"
            className={cn(
              'inline-flex h-9 w-9 items-center justify-center rounded-sm lg:hidden',
              scrolled || menuOpen ? 'text-ink' : 'text-white',
            )}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">{menuOpen ? 'Close' : 'Menu'}</span>
            <span className="relative block h-3.5 w-5" aria-hidden>
              <span
                className={cn(
                  'absolute left-0 top-0 h-0.5 w-full bg-current transition-transform duration-200',
                  menuOpen && 'top-1.5 rotate-45',
                )}
              />
              <span
                className={cn(
                  'absolute left-0 top-1.5 h-0.5 w-full bg-current transition-opacity duration-200',
                  menuOpen && 'opacity-0',
                )}
              />
              <span
                className={cn(
                  'absolute left-0 top-3 h-0.5 w-full bg-current transition-transform duration-200',
                  menuOpen && 'top-1.5 -rotate-45',
                )}
              />
            </span>
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-[color:var(--line)] bg-[color:var(--paper)] lg:hidden"
        >
          <ul className="content-width flex flex-col gap-1 px-5 py-4 sm:px-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block py-3 font-mono text-xs font-medium uppercase tracking-[0.18em] text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
