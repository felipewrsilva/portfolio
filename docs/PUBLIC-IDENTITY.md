# Public identity checklist

Use the same facts everywhere. The website and resume are the source of truth.

## Canonical profile

| Field | Value |
| --- | --- |
| Name | Felipe Silva |
| Title | Senior Software Engineer |
| Specialty | .NET, SQL Server, AWS |
| Location | Madrid, Spain |
| Current employer | IQVIA |
| IQVIA period | Aug 2020 to Present |
| Fidelis period | Apr 2018 to Jul 2020 |
| Afya period | May 2017 to Mar 2018 |
| Levilo period | Feb 2016 to Apr 2017 |
| Senac period | Jan 2015 to Jan 2016 |
| Public clients on site and PDF | Name Fidelis, Afya, Levilo, and Senac as separate experience entries. |
| Public clients on LinkedIn | Do not name those companies as separate jobs. Group them under Independent, Jan 2015 to Jul 2020. |
| Work authorization | Do not put on the public CV or site. For application forms only: authorized to work in Europe / no visa needed. |
| Website | https://felipewrsilva.dev |
| Email | contact@felipewrsilva.dev |
| Phone | +34 657 99 00 70 |
| LinkedIn | https://linkedin.com/in/felipewrsilva |
| GitHub | https://github.com/felipewrsilva |
| English | Speaks (public CV lists without level; forms: C2 / EF SET) |
| Spanish | Speaks (public CV lists without level; forms: Intermediate) |
| Portuguese | Speaks (public CV lists without level; forms: Native) |
| USP | Bachelor of Information Systems, Jan 2019 to Dec 2022 |
| Facens | Computer Engineering, Jan 2014 to Dec 2018 |

If Facens or USP dates on a diploma differ from this table, update the site, PDF, and this file first. Do not leave LinkedIn on a different story.

## LinkedIn (manual, do this now)

These fields must match the table and `data/cv.ts`.

### Profile settings

1. Headline: `Senior Software Engineer | .NET · SQL Server · AWS`
2. Location: `Madrid, Spain` (not Spain alone, not São Paulo)
3. Profile language: English (not Português as primary)
4. Current role: `Senior Software Engineer` at IQVIA only, `Aug 2020 – Present`. Past grouped role: `Software Engineer` at Independent, `Jan 2015 – Jul 2020`, employment type Contract. Leave experience location blank. Do not mark Independent as current. Do not use Self-employed as the company label. Do not add Fidelis, Afya, Levilo, or Senac as separate LinkedIn jobs.
5. About: paste the Professional Summary from the resume (backend-first .NET, full-stack when needed). Do not mention visa sponsorship or EU work authorization. Do not add "open to" job-seeking lines.
6. Featured: add link `https://felipewrsilva.dev` with title `Portfolio and resume`

Note: the website and PDF list Fidelis, Afya, Levilo, and Senac separately. LinkedIn keeps those years under Independent only.

### Skills (lead with these)

Add and pin, in this order when possible:

1. C#
2. .NET
3. TypeScript
4. React.js
5. Next.js
6. Node.js
7. MongoDB
8. Microsoft SQL Server
9. Amazon Web Services (AWS)
10. Microsoft Azure
11. Databricks
12. Go

Do not hide React, Next.js, or MongoDB. Do not claim 10 years in TypeScript, React, MongoDB, Azure, Databricks, or Go.

IQVIA public story is two led projects. Do not name internal systems or source datasets. Do not use ownership language that implies the systems were yours.

1. High-volume file processing in C# / .NET and SQL Server: volume spike, SQL deadlocks, timeouts, largest files took 3+ hours or failed. Now every file finishes within 20 minutes worst case, usually much faster, dozens of very large files per hour.
2. Live healthcare extract pipeline in Go: old path was SSIS plus manual wait, download, compressed extract to CSV, Spark API into SQL Server, brittle on layout changes. New path is always-on Go FTP watch, sync extracts, Parquet, Azure Blob, analyst-triggered Databricks load in minutes.

Do not name client source systems in public copy. Do not use the old 90 percent wording.

### Experience on LinkedIn

Only two experience entries on LinkedIn. Site and PDF use five named companies. Do not show overlapping employment.

#### IQVIA — Senior Software Engineer

Aug 2020 to Present · Full-time

Leave location blank on experience entries. Location for the profile header is Madrid, Spain only.

Backend and data platform engineering in C# / .NET and SQL Server for high-volume healthcare and pharmaceutical data used across multiple markets.

- Stabilized a high-volume C# / .NET and SQL Server file path after SQL deadlocks, timeouts, and 3+ hour or failed runs on the largest files. Every file now finishes within 20 minutes, usually faster, while ingesting dozens of very large files per hour.
- Built a live extract pipeline in Go that replaced SSIS and a manual CSV/Spark/SQL Server path with FTP watch, Parquet, Azure Blob, and analyst-triggered Databricks loads in minutes.
- Introduced GitLab CI/CD and DACPAC versioning with automated pre-deploy checks and schema drift reports, so database changes shipped with the same review path as application code.
- Cut routine developer support time by 75% through RCA-driven production fixes on live ingestion and extract paths.
- Kept production data paths reliable under layout and volume changes without rewriting the surrounding platform.

#### Independent — Software Engineer

Jan 2015 to Jul 2020 · Contract

Contract engineering for clients in healthcare education, enterprise security, SaaS, and education. Full-stack delivery across frontend, backend, and cloud on systems already in production.

- Built and operated end-to-end checkout and acquisition platforms in TypeScript, Next.js, React, Node.js, MongoDB, and AWS, including payments, contracts, and production support.
- Led AWS modernization of a healthcare education acquisition platform, increasing sales conversions by 12% and checkout throughput by more than 80% with a zero-downtime cutover.
- Enabled bundle and combo purchases on the acquisition path while owning day-to-day production support.
- Led backend work on a cross-platform enterprise security product, including an OS migration, partner integration repairs, fewer recurring production defects, AWS Lambda, SNS, SQS, and Go tooling for simulation, alerts, and integration tests.
- Re-architected a legacy desktop product as SaaS, reducing monthly churn from 18% to 3%, and operated cloud infrastructure for more than 5,000 active client operations.
- Launched a multi-method education payment platform and replaced manual invoice support with self-service.

Do not add named client companies as separate LinkedIn jobs. Do not use Self-employed as the company name.

### Education (must match the site)

1. University of São Paulo (USP) — Bachelor of Information Systems — Jan 2019 to Dec 2022
2. Sorocaba College of Engineering (Facens) — Computer Engineering — Jan 2014 to Dec 2018

Do not leave USP ending in 2024 while the site says Dec 2022.

Do not leave São Paulo or "Software Developer" as the public current title while the site says Madrid and Senior.

## GitHub (manual if CLI lacks access)

Account `felipewrsilva`:

1. Bio: `Senior Software Engineer. .NET, SQL Server, AWS. Based in Madrid.`
2. Location: `Madrid, Spain`
3. Website: `https://felipewrsilva.dev`
4. Portfolio repo description: `Personal site and resume for Felipe Silva, Senior Software Engineer.`
5. Portfolio homepage: `https://felipewrsilva.dev`
6. Keep early tutorial parser repos archived. Prefer private if they still read junior on the profile.

The site contact block no longer links to GitHub. Recruiters should land on LinkedIn and the PDF first.

## Domain DNS

`felipewrsilva.dev` nameservers must be:

- `ns1.vercel-dns.com`
- `ns2.vercel-dns.com`

Apex and `www` should resolve to Vercel, not Hostinger parking. Mail can stay on Hostinger MX.

`felipewrsilva.com.br` and `www.felipewrsilva.com.br` redirect to `https://felipewrsilva.dev`.

After changing nameservers, flush local DNS or wait for TTL. Confirm with:

```bash
dig NS felipewrsilva.dev @8.8.8.8 +short
curl -sI https://felipewrsilva.dev | head -5
```

## Email

`contact@felipewrsilva.dev` should keep working through Hostinger mail while DNS for the website points at Vercel. Confirm SPF/DKIM/DMARC remain present after the NS cutover.
