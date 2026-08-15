# Public identity checklist

Use the same facts everywhere. The website and resume are the source of truth.

## Canonical profile

| Field | Value |
| --- | --- |
| Name | Felipe Silva |
| Title | Senior Software Engineer |
| Specialty | .NET, SQL Server, data platform modernization |
| Location | Madrid, Spain |
| Current employer | IQVIA |
| IQVIA period | Aug 2020 to Present |
| Work authorization | Authorized to work in Europe. No visa sponsorship or endorsement required, now or later. |
| Website | https://felipewrsilva.dev |
| Email | contact@felipewrsilva.dev |
| Phone | +34 657 99 00 70 |
| LinkedIn | https://linkedin.com/in/felipewrsilva |
| GitHub | https://github.com/felipewrsilva |
| English | C2 (EF SET) |
| Spanish | Intermediate |
| Portuguese | Native |
| USP | Bachelor of Information Systems, Jan 2019 to Dec 2024 |
| Facens | Computer Engineering studies, Jan 2014 to Dec 2018 |

If Facens or USP dates on a diploma differ from this table, update the site, PDF, and this file first. Do not leave LinkedIn on a different story.

## LinkedIn (manual, do this now)

These fields must match the table and `data/cv.ts`.

### Profile settings

1. Headline: `Senior Software Engineer | .NET · SQL Server · Data Platforms`
2. Location: `Madrid, Spain` (not Spain alone, not São Paulo)
3. Profile language: English (not Português as primary)
4. Current role: `Senior Software Engineer` at IQVIA, `Aug 2020 – Present`, location `Madrid, Community of Madrid, Spain`
5. About: paste the Professional Summary from the resume (authorized to work, ownership paragraph, open to roles and consulting)
6. Featured: add link `https://felipewrsilva.dev` with title `Portfolio and resume`

### Skills (lead with these)

Add and pin, in this order when possible:

1. C#
2. .NET
3. Microsoft SQL Server
4. ASP.NET Core
5. DACPAC / database versioning (if available as a skill, otherwise CI/CD + SQL Server)
6. Continuous Integration and Continuous Delivery (CI/CD)
7. Amazon Web Services (AWS)
8. Docker

Remove or demote from the public story unless you want frontend or NoSQL work: HTML, CSS, React.js, Next.js, MongoDB.

### Experience entries to add

LinkedIn currently shows IQVIA only. Add the four roles below with the same titles and dates as the site. Without them, the 10+ years claim looks unsupported.

#### Fidelis — Senior Software Engineer

Apr 2018 to Jul 2020 · Enterprise security · Enterprise customers on multiple operating systems

Backend work on modernizing a cross-platform enterprise security product and stabilizing partner integrations.

- Owned the backend side of an OS migration so the product ran reliably across customer environments that previously blocked upgrades.
- Built automated integration tests for cybersecurity partner connections that were failing in production.
- Reworked brittle integration layers that were producing recurring production defects.
- Moved partner and processing workloads that needed async fan-out onto AWS Lambda, SNS, and SQS.

#### Afya — Senior Software Engineer

May 2017 to Mar 2018 · Healthcare education · Checkout and customer acquisition users

Owned backend modernization of the checkout and customer acquisition platform for a major Brazilian healthcare education company.

- Led AWS-based modernization of the acquisition platform, improving checkout conversion after launch.
- Raised checkout throughput and shipped the cutover without downtime for live users.

#### Levilo — Software Engineer

Feb 2016 to Apr 2017 · SaaS · Users migrating from desktop to web

Owned backend and cloud work that moved a desktop product to SaaS for active clients across Brazil.

- Moved a legacy desktop product to SaaS and removed local install stability failures that were driving customer churn.
- Operated cloud infrastructure for thousands of active client operations, including high-availability integrations with large consumer platforms.

#### Senac — Software Engineer

Jan 2015 to Jan 2016 · Education · Students managing invoices and payments

Built education tools focused on payment flows and self-service for invoices.

- Launched a multi-method payment platform for students.
- Replaced manual support workflows with self-service for invoices and payments.

### Education (must match the site)

1. University of São Paulo (USP) — Bachelor of Information Systems — Jan 2019 to Dec 2024
2. Sorocaba College of Engineering (Facens) — Computer Engineering studies — Jan 2014 to Dec 2018

Do not leave USP ending in 2022 while the site says Dec 2024.

Do not leave São Paulo or "Software Developer" as the public current title while the site says Madrid and Senior.

## GitHub (manual if CLI lacks access)

Account `felipewrsilva`:

1. Bio: `Senior Software Engineer. .NET, SQL Server, healthcare and enterprise data platforms. Based in Madrid.`
2. Location: `Madrid, Spain`
3. Website: `https://felipewrsilva.dev`
4. Portfolio repo description: `Personal site and resume for Felipe Silva, Senior Software Engineer.`
5. Portfolio homepage: `https://felipewrsilva.dev`
6. Keep tutorial repos archived (`finwiz`, `finance`, `datasus`, `datasusdbc`). Prefer private if they still read junior on the profile.

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
