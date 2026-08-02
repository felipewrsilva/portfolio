import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const outPath = join(__dirname, '..', 'public', 'felipe-silva-resume.pdf')

const lines = [
  'FELIPE SILVA',
  'Senior Software Engineer',
  'Backend · Cloud · Distributed Systems — Madrid, Spain',
  '+34 661 46 28 19  |  felipewrsilva@gmail.com',
  'linkedin.com/in/felipewrsilva  |  felipewrsilva.com.br',
  '',
  'PROFESSIONAL SUMMARY',
  'Senior Software Engineer with 11+ years of experience designing, modernizing and scaling distributed software systems across healthcare, financial services, education and SaaS.',
  'Proven track record leading large-scale modernization initiatives, building cloud-native architectures, improving platform performance, reducing operational costs and delivering software that drives measurable business outcomes.',
  'Experienced across backend, cloud and modern web development using .NET, Node.js, React, Next.js and AWS, combining strong software architecture principles with hands-on technical leadership.',
  'Passionate about solving complex engineering challenges, building scalable systems and creating technology that delivers long-term business value.',
  '',
  'SELECTED ACHIEVEMENTS',
  '• Reduced healthcare data processing from weeks to minutes by designing a real-time healthcare data platform.',
  '• Contributed to approximately 20% product sales growth by enabling real-time healthcare analytics products.',
  '• Reduced customer delivery SLAs from weeks to only a few hours through automated real-time data ingestion.',
  "• Increased checkout throughput by more than 80% while modernizing Afya's acquisition platform.",
  "• Reduced monthly customer churn from 10% to 3% by leading Levilo's migration from desktop to SaaS.",
  '• Reduced infrastructure costs by redesigning processing workflows and enabling the decommissioning of multiple legacy servers.',
  '',
  'CORE TECHNOLOGIES',
  'Languages: C#, TypeScript, JavaScript, SQL',
  'Backend: .NET, ASP.NET Core, Node.js, REST APIs, gRPC, Entity Framework Core, Dapper',
  'Frontend: React, Next.js',
  'Cloud & DevOps: AWS (Lambda, SNS, SQS), Docker, Git, GitHub Actions, Azure DevOps, CI/CD',
  'Architecture: Distributed Systems, Microservices, Event-Driven Architecture, SOA, Clean Architecture, DDD',
  'Data: SQL Server, Performance Tuning, Query Optimization',
  '',
  'PROFESSIONAL EXPERIENCE',
  '',
  'IQVIA — Senior Software Engineer (Aug 2020 – Present)',
  'Healthcare technology · Global pharmaceutical organizations',
  "Design and develop enterprise healthcare platforms for one of the world's largest healthcare technology companies, supporting global pharmaceutical organizations through scalable software that processes large volumes of healthcare data.",
  '',
  'Selected Project — Real-Time Healthcare Data Platform',
  'Led the architecture and development of a next-generation healthcare data platform replacing a legacy batch-oriented solution, enabling near real-time ingestion and delivery of large healthcare datasets.',
  'The new platform synchronized data in near real time, reducing data availability from weeks to minutes and customer delivery SLAs from weeks to only a few hours.',
  'The platform enabled the launch of new real-time healthcare analytics products, preserved the existing customer base and contributed to approximately 20% product sales growth within the first year.',
  '',
  'Responsibilities & Impact',
  '• Led modernization of a large enterprise monolith into modular service-oriented components.',
  '• Designed versioned REST APIs and internal gRPC contracts across distributed services.',
  '• Architected cloud-native backend services using AWS Lambda, SNS and SQS.',
  '• Optimized SQL Server workloads with Entity Framework Core and Dapper.',
  '• Expanded CI/CD pipelines with GitHub Actions and Azure DevOps.',
  '• Investigated production incidents, conducted RCA and implemented permanent improvements.',
  '• Produced OpenAPI specs, engineering standards, runbooks and technical documentation.',
  '• Participated in architecture reviews, planning, code reviews and mentoring.',
  '• Redesigned processing workflows enabling decommissioning of multiple legacy servers.',
  '',
  'Fidelis — Senior Software Engineer (Apr 2018 – Jul 2020)',
  'Enterprise security · Windows, Linux and macOS enterprise customers',
  'Modernized the core architecture of a cross-platform enterprise security solution supporting Windows, Linux and macOS.',
  '• Led refactoring of the application core architecture, reducing technical debt.',
  '• Solved critical compatibility issues across Windows, Linux and macOS.',
  '• Redesigned integration layers, improving stability and reducing recurring defects.',
  '• Simplified long-term maintenance through a modular architecture.',
  '• Collaborated on software architecture, engineering standards and technical decisions.',
  '',
  'Afya — Senior Software Engineer (May 2017 – Mar 2018)',
  'Healthcare education · Acquisition and checkout customers',
  "Served as Technical Lead for the modernization of the checkout and customer acquisition platform for one of Brazil's largest healthcare education companies.",
  '• Led the migration toward a modern AWS-based architecture.',
  '• Designed and delivered a new purchasing experience using React.',
  '• Redesigned backend services, improving checkout performance by more than 80%.',
  '• Integrated multiple internal and third-party systems for the purchasing journey.',
  '• Enabled bundle and combo purchases, increasing platform flexibility.',
  '• Improved platform security, scalability and maintainability.',
  '',
  'Levilo — Software Engineer (Feb 2016 – Apr 2017)',
  'SaaS · Desktop customers migrating to browser-based access',
  'Led the transformation of a desktop application into a modern cloud-native SaaS platform.',
  '• Migrated from desktop to a modern web platform using React and Next.js.',
  '• Improved accessibility through browser-based access from any device.',
  '• Reduced monthly customer churn from approximately 10% to 3%.',
  '• Increased platform scalability while simplifying distribution and maintenance.',
  "• Supported the company's long-term growth strategy via SaaS delivery.",
  '',
  'Senac — Software Engineer (Jan 2015 – Jan 2016)',
  'Education · Students managing invoices and payment methods',
  'Developed digital education solutions focused on payment modernization and operational efficiency.',
  '• Designed and implemented a modern payment platform with multiple payment methods.',
  '• Automated payment workflows that previously required manual customer support.',
  '• Enabled students to independently manage invoices and financial operations.',
  '• Eliminated major operational bottlenecks with self-service capabilities.',
  '• Improved customer experience while reducing operational workload.',
  '',
  'EDUCATION',
  'University of São Paulo (USP) — Bachelor of Information Systems (Jan 2019 – Dec 2024)',
  'Facens — Computer Engineering (Jan 2014 – Dec 2018)',
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
