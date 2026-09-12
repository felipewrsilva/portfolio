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
        <p
          className="rise font-mono text-xs font-medium uppercase tracking-[0.22em] text-accent-soft"
          style={{ animationDelay: '0.08s' }}
        >
          {profile.location} · UTC+1 · {profile.yearsExperience} · Remote EU
          & US overlap
        </p>

        <h1
          className="rise mt-5 font-display text-5xl leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl"
          style={{ animationDelay: '0.16s' }}
        >
          <span className="block">{profile.name}</span>
          <span className="mt-5 block font-sans text-xl font-medium text-white md:text-2xl">
            {profile.title}{' '}
            <span className="font-normal text-white/70">
              at {profile.company}
            </span>
          </span>
        </h1>

        <p
          className="rise mt-3 max-w-2xl font-mono text-sm uppercase tracking-[0.1em] text-accent-soft"
          style={{ animationDelay: '0.24s' }}
        >
          {profile.focus}
        </p>

        <p
          className="rise mt-6 max-w-xl text-base leading-relaxed text-white/90 md:text-lg"
          style={{ animationDelay: '0.32s' }}
        >
          {profile.tagline}
        </p>

        <div
          className="rise mt-8 flex flex-wrap gap-3"
          style={{ animationDelay: '0.4s' }}
        >
          <a
            href={profile.emailHref}
            className="inline-flex items-center bg-white px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] text-ink transition hover:bg-accent-soft"
          >
            Email
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center border border-white/30 px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] text-white transition hover:border-accent-soft hover:text-accent-soft"
          >
            LinkedIn
          </a>
          <a
            href={profile.resumePdf}
            download
            className="inline-flex items-center border border-white/30 px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] text-white transition hover:border-accent-soft hover:text-accent-soft"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  )
}
