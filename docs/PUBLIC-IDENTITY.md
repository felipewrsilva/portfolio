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
| Website | https://felipewrsilva.dev |
| Email | contact@felipewrsilva.dev |
| LinkedIn | https://linkedin.com/in/felipewrsilva |
| GitHub | https://github.com/felipewrsilva |
| English | C2 (EF SET) |
| Spanish | Intermediate |
| Portuguese | Native |

## LinkedIn (manual)

Update these fields so they match the table above:

1. Headline: `Senior Software Engineer | .NET · SQL Server · Data Platforms`
2. Location: `Madrid, Spain`
3. Current role title: `Senior Software Engineer` at IQVIA
4. Dates: `Aug 2020 – Present` (or keep an earlier start date only if you also list a prior title at IQVIA)
5. About section: mirror the site professional summary
6. Featured link: `https://felipewrsilva.dev`

Do not leave São Paulo or "Software Developer" as the public current title while the site says Madrid and Senior.

## GitHub (manual if CLI lacks access)

Account `felipewrsilva`:

1. Bio: `Senior Software Engineer. .NET, SQL Server, healthcare and enterprise data platforms. Based in Madrid.`
2. Location: `Madrid, Spain`
3. Website: `https://felipewrsilva.dev`
4. Portfolio repo description: `Personal site and resume for Felipe Silva, Senior Software Engineer.`
5. Portfolio homepage: `https://felipewrsilva.dev`
6. Archive or make private tutorial repos that read junior (`finwiz`, leftover template demos)

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
