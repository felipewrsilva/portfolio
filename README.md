# Felipe Silva — Portfolio

Personal website and resume for Felipe Silva, Senior Software Engineer based in Madrid.

Live site: [https://felipewrsilva.dev](https://felipewrsilva.dev)

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (subtle reveal animations)

Content lives in `data/cv.ts`. The downloadable PDF is generated from `curriculo.md`.

## Scripts

```bash
npm install
npm run dev
npm run build
npm run lint
npm run resume:pdf
```

## Domains

Canonical host: `felipewrsilva.dev`

`felipewrsilva.com.br` and `www` variants redirect to the canonical host via `next.config.mjs`.

Nameservers for the site should be Vercel (`ns1.vercel-dns.com`, `ns2.vercel-dns.com`). Mail can remain on Hostinger MX.

See [docs/PUBLIC-IDENTITY.md](docs/PUBLIC-IDENTITY.md) for LinkedIn/GitHub alignment and DNS checks.

To sync GitHub bio, location, homepage and archive tutorial repos (must be logged in as `felipewrsilva`):

```bash
gh auth login
./scripts/sync-github-profile.sh
```

## Resume PDF

```bash
npm run resume:pdf
```

Writes `public/felipe-silva-resume.pdf` from `curriculo.md`. Keep that file in sync with `data/cv.ts`.
