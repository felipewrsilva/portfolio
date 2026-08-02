import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const outPath = join(__dirname, '..', 'public', 'felipe-silva-resume.pdf')

const lines = [
  'FELIPE SILVA',
  'Software Engineer',
  'Backend · Cloud · Distributed Systems · Madrid, Spain',
  '+34 661 46 28 19  |  contact@felipewrsilva.dev',
  'linkedin.com/in/felipewrsilva  |  felipewrsilva.dev',
  '',
  'PROFESSIONAL SUMMARY',
  'Backend and distributed systems engineer based in Madrid, with 10+ years designing and modernizing platforms across healthcare, education, enterprise security and SaaS.',
  'I take ownership of architecture and delivery where the result is measurable: faster processing, higher conversion, lower cost and stronger retention.',
  '',
  'SELECTED ACHIEVEMENTS',
  '• Reduced complex healthcare data processing time by more than 90% (several hours to a few minutes) while scaling ingestion to terabyte-class weekly volume (up to 1 TB/week).',
  '• Cut recurring infrastructure overhead by retiring a large legacy processing fleet (about a 128-node cluster equivalent).',
  '• Established GitLab CI/CD and DACPAC database versioning with automated drift detection, eliminating production schema mismatches.',
  '• Increased Afya checkout sales conversions by 12% and throughput capacity by more than 80%.',
  '• Reduced Levilo monthly customer churn from 18% to 3% while scaling to 5,000+ active client operations.',
  '',
  'CORE TECHNOLOGIES',
  'Languages: C#, TypeScript, SQL',
  'Backend: .NET, ASP.NET Core, Node.js, REST, gRPC',
  'Cloud & Data: AWS (Lambda, SNS, SQS), Docker, GitLab CI/CD, DACPAC, SQL Server',
  'Architecture: Distributed systems, Event-driven, Microservices',
  '',
  'PROFESSIONAL EXPERIENCE',
  '',
  'IQVIA — Senior Software Engineer (Aug 2020 to Present)',
  'Healthcare technology · Global pharmaceutical organizations',
  'Design and deliver enterprise healthcare platforms that process large volumes of clinical data for global pharmaceutical customers.',
  '• Redesigned ASP.NET Core and SQL Server pipelines, reducing complex healthcare data processing time by more than 90% (several hours to a few minutes) and cutting timeout errors.',
  '• Scaled ingestion to terabyte-class weekly volume, reliably processing up to 1 TB of new text-based clinical data per week from global sources.',
  '• Cut recurring infrastructure overhead by decommissioning a large legacy processing fleet (about a 128-node cluster with 500GB RAM and 10TB storage).',
  '• Built GitLab CI/CD from scratch with test coverage tracking, and introduced DACPAC so database changes were fully versioned with automated pre-deploy and drift reports.',
  '• Reduced routine developer support time by 75% (about 8 hours to 2 hours per developer monthly) through RCA-driven permanent production fixes.',
  '',
  'Fidelis — Senior Software Engineer (Apr 2018 to Jul 2020)',
  'Enterprise security · Cross-platform enterprise customers',
  'Modernized the core architecture of a cross-platform enterprise security product.',
  '• Led backend work on a cross-platform product migration that improved operating-system compatibility and supported retention and new acquisitions.',
  '• Built automated integration testing that stabilized connections with major cybersecurity partners.',
  '• Reduced recurring production defects by redesigning integration layers and hardening platform reliability.',
  '• Scaled event-driven workloads on AWS to support cloud-native processing.',
  '',
  'Afya — Senior Software Engineer (May 2017 to Mar 2018)',
  'Healthcare education · Acquisition and checkout customers',
  "Technical Lead for modernizing the checkout and customer acquisition platform for one of Brazil's largest healthcare education companies.",
  '• Led AWS-based modernization of the acquisition platform, increasing sales conversions by 12% immediately after deployment.',
  '• Restructured the backend for more than 80% higher throughput with a stable, zero-downtime checkout rollout.',
  '',
  'Levilo — Software Engineer (Feb 2016 to Apr 2017)',
  'SaaS · Desktop customers moving to the browser',
  'Led the transformation of a desktop application into a cloud-native SaaS platform.',
  '• Re-architected a legacy desktop product as SaaS, reducing monthly customer churn from 18% to 3% by removing local stability failures.',
  '• Designed and scaled cloud infrastructure for more than 5,000 active client operations across Brazil, including high-availability integrations with large consumer platforms.',
  '',
  'Senac — Software Engineer (Jan 2015 to Jan 2016)',
  'Education · Students managing invoices and payments',
  'Built digital education tools focused on payment modernization and operational efficiency.',
  '• Launched a multi-method payment platform for students.',
  '• Replaced manual support workflows with self-service for invoices and payments, reducing operational load.',
  '',
  'EDUCATION',
  'University of São Paulo (USP) — Bachelor of Information Systems (Jan 2019 to Dec 2024)',
  'Sorocaba College of Engineering (Facens) — Computer Engineering (Jan 2014 to Dec 2018)',
  '',
  'LANGUAGES',
  'Portuguese — Native  |  English — Advanced  |  Spanish — Intermediate',
]

function wrapText(text, maxChars) {
  if (text.length <= maxChars) return [text]
  const words = text.split(' ')
  const out = []
  let current = ''
  for (const word of words) {
    const next = current ? `${current} ${word}` : word
    if (next.length > maxChars) {
      if (current) out.push(current)
      current = word
    } else {
      current = next
    }
  }
  if (current) out.push(current)
  return out
}

function escapePdf(text) {
  return text.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)')
}

const PAGE_WIDTH = 612
const PAGE_HEIGHT = 792
const MARGIN_X = 48
const MARGIN_TOP = 54
const MARGIN_BOTTOM = 54
const LINE_HEIGHT = 12
const MAX_CHARS = 92
const FONT_SIZE = 9
const TITLE_SIZE = 16

const wrapped = []
for (const line of lines) {
  if (!line) {
    wrapped.push({ text: '', size: FONT_SIZE })
    continue
  }
  const isTitle = line === 'FELIPE SILVA'
  const isSection = [
    'PROFESSIONAL SUMMARY',
    'SELECTED ACHIEVEMENTS',
    'CORE TECHNOLOGIES',
    'PROFESSIONAL EXPERIENCE',
    'EDUCATION',
    'LANGUAGES',
  ].includes(line)
  const size = isTitle ? TITLE_SIZE : isSection ? 11 : FONT_SIZE
  const max = isTitle ? 40 : MAX_CHARS
  for (const part of wrapText(line, max)) {
    wrapped.push({ text: part, size })
  }
}

const usableHeight = PAGE_HEIGHT - MARGIN_TOP - MARGIN_BOTTOM
const linesPerPage = Math.floor(usableHeight / LINE_HEIGHT)
const pages = []
for (let i = 0; i < wrapped.length; i += linesPerPage) {
  pages.push(wrapped.slice(i, i + linesPerPage))
}

const objects = []
const add = (content) => {
  objects.push(content)
  return objects.length
}

const catalogId = add('')
const pagesId = add('')
const fontId = add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>')
const fontBoldId = add(
  '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>',
)

const pageIds = []
const contentIds = []

for (const pageLines of pages) {
  let y = PAGE_HEIGHT - MARGIN_TOP
  const ops = ['BT']
  for (const item of pageLines) {
    const font = item.size >= 11 ? 'F2' : 'F1'
    ops.push(`/${font} ${item.size} Tf`)
    ops.push(`1 0 0 1 ${MARGIN_X} ${y} Tm`)
    ops.push(`(${escapePdf(item.text)}) Tj`)
    y -= LINE_HEIGHT
  }
  ops.push('ET')
  const stream = ops.join('\n')
  const contentId = add(
    `<< /Length ${Buffer.byteLength(stream, 'utf8')} >>\nstream\n${stream}\nendstream`,
  )
  contentIds.push(contentId)
  const pageId = add('')
  pageIds.push(pageId)
}

objects[catalogId - 1] = `<< /Type /Catalog /Pages ${pagesId} 0 R >>`
objects[pagesId - 1] =
  `<< /Type /Pages /Kids [${pageIds.map((id) => `${id} 0 R`).join(' ')}] /Count ${pageIds.length} >>`

pageIds.forEach((pageId, index) => {
  objects[pageId - 1] =
    `<< /Type /Page /Parent ${pagesId} 0 R /MediaBox [0 0 ${PAGE_WIDTH} ${PAGE_HEIGHT}] /Contents ${contentIds[index]} 0 R /Resources << /Font << /F1 ${fontId} 0 R /F2 ${fontBoldId} 0 R >> >> >>`
})

let pdf = '%PDF-1.4\n'
const offsets = [0]
for (let i = 0; i < objects.length; i++) {
  offsets.push(Buffer.byteLength(pdf, 'utf8'))
  pdf += `${i + 1} 0 obj\n${objects[i]}\nendobj\n`
}
const xrefStart = Buffer.byteLength(pdf, 'utf8')
pdf += `xref\n0 ${objects.length + 1}\n`
pdf += '0000000000 65535 f \n'
for (let i = 1; i <= objects.length; i++) {
  pdf += `${String(offsets[i]).padStart(10, '0')} 00000 n \n`
}
pdf += `trailer\n<< /Size ${objects.length + 1} /Root ${catalogId} 0 R >>\n`
pdf += `startxref\n${xrefStart}\n%%EOF`

mkdirSync(dirname(outPath), { recursive: true })
writeFileSync(outPath, pdf)
console.log(`Wrote ${outPath}`)
