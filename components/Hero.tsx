import { profile } from '@/data/cv'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[78svh] items-end overflow-hidden bg-ink md:min-h-[70svh]"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 15% 20%, rgba(44,74,54,0.35), transparent 55%), linear-gradient(160deg, #0b1220 0%, #121a28 55%, #0f1a16 100%)',
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/70 to-transparent" />

      <div className="content-width section-pad relative z-10 w-full pb-14 pt-28 md:pb-20">
        <h1
          className="rise font-display text-[2.5rem] leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl"
          style={{ animationDelay: '0.08s' }}
        >
          <span className="block">{profile.name}</span>
          <span className="mt-5 block font-sans text-lg font-medium text-white sm:text-xl md:text-2xl">
            {profile.title}{' '}
            <span className="whitespace-nowrap font-normal text-white/70">
              at {profile.company}
            </span>
          </span>
        </h1>

        <ul
          className="rise mt-3 flex max-w-2xl flex-wrap gap-y-1 font-mono text-sm uppercase tracking-[0.1em] text-accent-soft"
          style={{ animationDelay: '0.16s' }}
          aria-label="Focus areas"
        >
          {profile.focus.map((item, index) => (
            <li key={item} className="flex items-center">
              {index > 0 ? (
                <span className="mx-3 text-accent-soft/50" aria-hidden>
                  ·
                </span>
              ) : null}
              <span className="whitespace-nowrap">{item}</span>
            </li>
          ))}
        </ul>

        <p
          className="rise mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/90 md:text-lg"
          style={{ animationDelay: '0.24s' }}
        >
          {profile.tagline}
        </p>

        <div
          className="rise mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          style={{ animationDelay: '0.32s' }}
        >
          <a
            href={profile.emailHref}
            className="inline-flex items-center justify-center bg-white px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] text-ink transition hover:bg-accent-soft sm:justify-start"
          >
            Email
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-white/30 px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] text-white transition hover:border-accent-soft hover:text-accent-soft sm:justify-start"
          >
            LinkedIn
          </a>
          <a
            href={profile.resumePdf}
            download
            className="inline-flex items-center justify-center border border-white/30 px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] text-white transition hover:border-accent-soft hover:text-accent-soft sm:justify-start"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  )
}
