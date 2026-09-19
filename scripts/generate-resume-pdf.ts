import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import {
  education as baseEducation,
  experience as baseExperience,
  languages as baseLanguages,
  profile as baseProfile,
  summary as baseSummary,
  technologies as baseTechnologies,
  type ExperienceRole,
} from '../data/cv'

const __dirname = dirname(fileURLToPath(import.meta.url))

function cliArg(name: string) {
  const index = process.argv.indexOf(name)
  return index >= 0 ? process.argv[index + 1] : null
}

const outPath = resolve(
  cliArg('--out') || join(__dirname, '..', 'public', 'felipe-silva-resume.pdf'),
)

type CvData = {
  profile: typeof baseProfile
  summary: string[]
  technologies: typeof baseTechnologies
  experience: ExperienceRole[]
  education: typeof baseEducation
  languages: typeof baseLanguages
}

function loadCvData(): CvData {
  const dataPath = cliArg('--data')
  if (!dataPath) {
    return {
      profile: baseProfile,
      summary: baseSummary,
      technologies: baseTechnologies,
      experience: baseExperience,
      education: baseEducation,
      languages: baseLanguages,
    }
  }

  const parsed = JSON.parse(readFileSync(resolve(dataPath), 'utf8')) as CvData
  return {
    profile: { ...baseProfile, ...parsed.profile },
    summary: parsed.summary ?? baseSummary,
    technologies: parsed.technologies ?? baseTechnologies,
    experience: parsed.experience ?? baseExperience,
    education: parsed.education ?? baseEducation,
    languages: parsed.languages ?? baseLanguages,
  }
}

const {
  profile,
  summary,
  technologies,
  experience,
  education,
  languages,
} = loadCvData()

const PAGE_WIDTH = 612
const PAGE_HEIGHT = 792
const MARGIN_X = 54
const MARGIN_TOP = 52
const MARGIN_BOTTOM = 56
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN_X * 2

const INK: [number, number, number] = [0.04, 0.07, 0.13]
const MUTED: [number, number, number] = [0.29, 0.33, 0.4]
const ACCENT: [number, number, number] = [0.17, 0.29, 0.21]
const RULE_STRONG: [number, number, number] = [0.17, 0.29, 0.21]
const RULE_SOFT: [number, number, number] = [0.78, 0.8, 0.83]

const HELVETICA_WIDTHS =
  '278 278 355 556 556 889 667 191 333 333 389 584 278 333 278 278 556 556 556 556 556 556 556 556 556 556 278 278 584 584 584 556 1015 667 667 722 722 667 611 778 722 278 500 667 556 833 722 778 667 778 722 667 611 722 667 944 667 667 611 278 278 278 469 556 333 556 556 500 556 556 278 556 556 222 222 500 222 833 556 556 556 556 333 500 278 556 500 722 500 500 500 334 260 334 584'
const HELVETICA_BOLD_WIDTHS =
  '278 333 474 556 556 889 722 238 333 333 389 584 278 333 278 278 556 556 556 556 556 556 556 556 556 556 333 333 584 584 584 611 975 722 722 722 722 667 611 778 722 278 556 722 611 833 722 778 667 778 722 667 611 722 667 944 667 667 611 333 278 333 584 556 333 556 611 556 611 556 333 611 611 278 278 556 278 889 611 611 611 611 389 556 333 611 556 778 556 556 500 389 280 389 584'

type TextRun = { text: string; bold: boolean }

type Block =
  | { type: 'paragraph'; runs: TextRun[] }
  | { type: 'bullet'; runs: TextRun[] }
  | { type: 'labelled'; label: string; runs: TextRun[] }

type Entry = {
  heading: string
  role: string
  period: string
  meta: string
  blocks: Block[]
}

type Section = {
  title: string
  blocks: Block[]
  entries: Entry[]
}

type Doc = {
  header: {
    name: string
    title: string
    focus: string
    location: string
    phone: string
    email: string
    linkedin: string
    website: string
  }
  sections: Section[]
}

function toWidthTable(spec: string) {
  const values = spec.split(' ').map(Number)
  const table = new Map<number, number>()
  values.forEach((width, index) => table.set(32 + index, width))
  table.set(0x95, 350)
  return table
}

const WIDTHS = {
  regular: toWidthTable(HELVETICA_WIDTHS),
  bold: toWidthTable(HELVETICA_BOLD_WIDTHS),
}

const UNICODE_REPLACEMENTS: Record<string, string> = {
  '\u2192': '->',
  '\u2248': '~',
  '\u00b7': '|',
  '\u2022': '-',
  '\u2012': '-',
  '\u2013': '-',
  '\u2014': '-',
  '\u2212': '-',
  '\u201c': '"',
  '\u201d': '"',
  '\u2018': "'",
  '\u2019': "'",
  '\u00a0': ' ',
  '\u0095': '|',
}

function normalizeText(text: string) {
  let out = ''
  for (const ch of text) {
    if (Object.prototype.hasOwnProperty.call(UNICODE_REPLACEMENTS, ch)) {
      out += UNICODE_REPLACEMENTS[ch]
      continue
    }
    const cp = ch.codePointAt(0) ?? 0
    if (cp <= 0xff) {
      out += ch
      continue
    }
    const folded = ch.normalize('NFD').replace(/\p{M}/gu, '')
    out += folded || '?'
  }
  return out.replace(/\s{2,}/g, ' ')
}

function charWidth(code: number, bold: boolean) {
  const table = bold ? WIDTHS.bold : WIDTHS.regular
  if (table.has(code)) return table.get(code) as number
  const folded = String.fromCharCode(code)
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
  const foldedCode = folded.charCodeAt(0)
  if (table.has(foldedCode)) return table.get(foldedCode) as number
  return 556
}

function measure(text: string, size: number, bold: boolean, tracking = 0) {
  let total = 0
  for (const ch of text) total += charWidth(ch.charCodeAt(0), bold)
  return (total / 1000) * size + tracking * text.length
}

function run(text: string, bold = false): TextRun[] {
  const normalized = normalizeText(text)
  return normalized ? [{ text: normalized, bold }] : []
}

function wrapRuns(runs: TextRun[], maxWidth: number, size: number, tracking = 0) {
  const words: Array<TextRun & { space: boolean }> = []
  runs.forEach((item) => {
    const pieces = item.text.split(/(\s+)/)
    pieces.forEach((piece) => {
      if (!piece) return
      words.push({ text: piece, bold: item.bold, space: /^\s+$/.test(piece) })
    })
  })

  const lines: TextRun[][] = []
  let line: Array<TextRun & { space: boolean }> = []
  let width = 0

  const flush = () => {
    while (line.length && line[line.length - 1].space) line.pop()
    if (line.length) {
      lines.push(line.map(({ text, bold }) => ({ text, bold })))
    }
    line = []
    width = 0
  }

  words.forEach((word) => {
    const wordWidth = measure(word.text, size, word.bold, tracking)
    if (word.space && !line.length) return
    if (width + wordWidth > maxWidth && line.length) {
      flush()
      if (word.space) return
    }
    line.push(word)
    width += wordWidth
  })
  flush()

  return lines.map((parts) => {
    const merged: TextRun[] = []
    parts.forEach((part) => {
      const last = merged[merged.length - 1]
      if (last && last.bold === part.bold) last.text += part.text
      else merged.push({ text: part.text, bold: part.bold })
    })
    return merged
  })
}

function paragraphBlock(text: string): Block {
  return { type: 'paragraph', runs: run(text) }
}

function bulletBlock(text: string): Block {
  return { type: 'bullet', runs: run(text) }
}

function labelledBlock(label: string, text: string): Block {
  return { type: 'labelled', label, runs: run(text) }
}

function experienceEntry(role: ExperienceRole): Entry {
  return {
    heading: role.company,
    role: role.role,
    period: role.period,
    meta: `${role.industry} | ${role.audience}`,
    blocks: [
      paragraphBlock(role.overview),
      ...role.bullets.map((bullet) => bulletBlock(bullet)),
    ],
  }
}

function buildDoc(): Doc {
  return {
    header: {
      name: profile.name.toUpperCase(),
      title: `${profile.title}`,
      focus: 'C# | .NET | ASP.NET Core | SQL Server | Azure | REST APIs | CI/CD',
      location: profile.location,
      phone: profile.phone,
      email: profile.email,
      linkedin: 'linkedin.com/in/felipewrsilva',
      website: 'felipewrsilva.dev',
    },
    sections: [
      {
        title: 'PROFESSIONAL SUMMARY',
        blocks: summary.map((text) => paragraphBlock(text)),
        entries: [],
      },
      {
        title: 'TECHNICAL SKILLS',
        blocks: Object.entries(technologies).map(([label, items]) =>
          labelledBlock(label, items.join(', ')),
        ),
        entries: [],
      },
      {
        title: 'PROFESSIONAL EXPERIENCE',
        blocks: [],
        entries: experience.map(experienceEntry),
      },
      {
        title: 'EDUCATION',
        blocks: [],
        entries: education.map((entry) => ({
          heading: entry.institution,
          role: entry.degree,
          period: entry.period,
          meta: '',
          blocks: [],
        })),
      },
      {
        title: 'LANGUAGES',
        blocks: [
          paragraphBlock(
            languages
              .map((language) => `${language.name}: ${language.level}`)
              .join(', '),
          ),
        ],
        entries: [],
      },
    ],
  }
}

const ops: string[][] = []
const links: Array<Array<{ rect: number[]; uri: string }>> = []
let pageOps: string[] = []
let pageLinks: Array<{ rect: number[]; uri: string }> = []
let cursorY = 0
let pageNumber = 0

function rgb(color: number[]) {
  return color.map((value) => value.toFixed(3)).join(' ')
}

function pdfString(text: string) {
  let out = '('
  for (const ch of text) {
    const cp = ch.codePointAt(0) ?? 0
    if (ch === '(' || ch === ')' || ch === '\\') out += `\\${ch}`
    else if (cp >= 32 && cp <= 126) out += ch
    else if (cp <= 0xff) out += `\\${cp.toString(8).padStart(3, '0')}`
    else out += '?'
  }
  return `${out})`
}

function drawRuns(
  runs: TextRun[],
  x: number,
  y: number,
  size: number,
  color: number[],
  tracking = 0,
) {
  let cursorX = x
  pageOps.push(
    `BT ${rgb(color)} rg ${tracking ? `${tracking.toFixed(2)} Tc` : '0 Tc'}`,
  )
  runs.forEach((item) => {
    pageOps.push(`/${item.bold ? 'F2' : 'F1'} ${size} Tf`)
    pageOps.push(`1 0 0 1 ${cursorX.toFixed(2)} ${y.toFixed(2)} Tm`)
    pageOps.push(`${pdfString(item.text)} Tj`)
    cursorX += measure(item.text, size, item.bold, tracking)
  })
  pageOps.push('ET')
  return cursorX
}

function drawText(
  text: string,
  x: number,
  y: number,
  size: number,
  color: number[],
  { bold = false, tracking = 0 }: { bold?: boolean; tracking?: number } = {},
) {
  return drawRuns([{ text, bold }], x, y, size, color, tracking)
}

function drawRule(y: number, color: number[], thickness = 0.6, width = CONTENT_WIDTH) {
  pageOps.push(
    `${rgb(color)} rg ${MARGIN_X} ${(y - thickness).toFixed(2)} ${width} ${thickness} re f`,
  )
}

function addLink(x: number, y: number, width: number, height: number, uri: string) {
  pageLinks.push({ rect: [x, y, x + width, y + height], uri })
}

function startPage() {
  if (pageOps.length) {
    ops.push(pageOps)
    links.push(pageLinks)
  }
  pageOps = []
  pageLinks = []
  pageNumber += 1
  cursorY = PAGE_HEIGHT - MARGIN_TOP
}

function ensureSpace(height: number) {
  if (cursorY - height < MARGIN_BOTTOM) startPage()
}

function drawHeader(header: Doc['header']) {
  drawText(header.name, MARGIN_X, cursorY - 18, 21, INK, {
    bold: true,
    tracking: 1.1,
  })

  const contactLines = [
    { text: header.location },
    { text: header.phone, uri: `tel:${header.phone.replace(/[^\d+]/g, '')}` },
    { text: header.email, uri: `mailto:${header.email}` },
    { text: header.linkedin, uri: `https://${header.linkedin}` },
    { text: header.website, uri: `https://${header.website}` },
  ].filter((item) => item.text)

  let contactY = cursorY - 8
  contactLines.forEach((item) => {
    const width = measure(item.text, 8.5, false)
    const x = MARGIN_X + CONTENT_WIDTH - width
    drawText(item.text, x, contactY, 8.5, item.uri ? ACCENT : MUTED)
    if (item.uri) addLink(x, contactY - 2, width, 10, item.uri)
    contactY -= 11.4
  })

  let y = cursorY - 34
  drawText(header.title, MARGIN_X, y, 12, ACCENT, { bold: true })
  if (header.focus) {
    y -= 14
    drawText(header.focus, MARGIN_X, y, 9.5, MUTED)
  }

  cursorY = Math.min(y, contactY + 6) - 14
  drawRule(cursorY, RULE_STRONG, 1.1)
  cursorY -= 20
}

function drawSectionTitle(title: string) {
  ensureSpace(44)
  drawText(title, MARGIN_X, cursorY, 8.5, ACCENT, { bold: true, tracking: 1.4 })
  cursorY -= 6
  drawRule(cursorY, RULE_SOFT, 0.6)
  cursorY -= 15
}

function drawParagraph(
  runs: TextRun[],
  { size = 9.3, color = INK, indent = 0, gap = 6 } = {},
) {
  const lines = wrapRuns(runs, CONTENT_WIDTH - indent, size)
  lines.forEach((line) => {
    ensureSpace(size + 4)
    drawRuns(line, MARGIN_X + indent, cursorY, size, color)
    cursorY -= size * 1.45
  })
  cursorY -= gap
}

function drawBullet(runs: TextRun[], { size = 9.3 } = {}) {
  const indent = 12
  const lines = wrapRuns(runs, CONTENT_WIDTH - indent, size)
  lines.forEach((line, index) => {
    ensureSpace(size + 4)
    if (index === 0) {
      drawText('-', MARGIN_X + 1.5, cursorY, size, ACCENT)
    }
    drawRuns(line, MARGIN_X + indent, cursorY, size, INK)
    cursorY -= size * 1.45
  })
  cursorY -= 2.5
}

function drawLabelled(label: string, runs: TextRun[]) {
  const size = 9.3
  const labelText = `${label}  `
  const labelWidth = measure(labelText, size, true)
  const lines = wrapRuns(runs, CONTENT_WIDTH - labelWidth, size)
  lines.forEach((line, index) => {
    ensureSpace(size + 4)
    if (index === 0)
      drawText(labelText, MARGIN_X, cursorY, size, ACCENT, { bold: true })
    drawRuns(line, MARGIN_X + labelWidth, cursorY, size, INK)
    cursorY -= size * 1.45
  })
  cursorY -= 2
}

function entryLeadHeight(entry: Entry) {
  let height = 14
  if (entry.role || entry.meta) height += 13
  const first = entry.blocks[0]
  if (first) height += 9.3 * 1.45
  return height
}

function drawEntry(entry: Entry) {
  ensureSpace(entryLeadHeight(entry))

  const periodText = entry.period || ''
  const periodWidth = periodText ? measure(periodText, 8.8, false) : 0
  drawText(entry.heading, MARGIN_X, cursorY, 10.6, INK, { bold: true })
  if (periodText) {
    drawText(
      periodText,
      MARGIN_X + CONTENT_WIDTH - periodWidth,
      cursorY,
      8.8,
      MUTED,
    )
  }
  cursorY -= 13

  const subtitle = [entry.role, entry.meta].filter(Boolean).join(' | ')
  if (subtitle) {
    drawText(subtitle, MARGIN_X, cursorY, 9, ACCENT)
    cursorY -= 13
  }

  entry.blocks.forEach((block) => {
    if (block.type === 'bullet') drawBullet(block.runs)
    else if (block.type === 'labelled') drawLabelled(block.label, block.runs)
    else drawParagraph(block.runs, { gap: 4 })
  })

  cursorY -= 6
}

const doc = buildDoc()

startPage()
drawHeader(doc.header)

doc.sections.forEach((section) => {
  drawSectionTitle(section.title)
  section.blocks.forEach((block) => {
    if (block.type === 'bullet') drawBullet(block.runs)
    else if (block.type === 'labelled') drawLabelled(block.label, block.runs)
    else drawParagraph(block.runs)
  })
  section.entries.forEach((entry) => drawEntry(entry))
  cursorY -= 6
})

ops.push(pageOps)
links.push(pageLinks)

const objects: string[] = []
const add = (content: string) => {
  objects.push(content)
  return objects.length
}

const catalogId = add('')
const pagesId = add('')
const fontId = add(
  '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>',
)
const fontBoldId = add(
  '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>',
)
const infoId = add(
  `<< /Title ${pdfString(`${doc.header.name} - ${doc.header.title}`)} /Author ${pdfString(doc.header.name)} /Subject ${pdfString(doc.header.focus)} /Creator ${pdfString('data/cv.ts')} /Producer ${pdfString('portfolio resume builder')} >>`,
)

const pageIds: number[] = []

ops.forEach((pageContent, index) => {
  const total = ops.length
  const footerY = MARGIN_BOTTOM - 20
  const footerLeft = doc.header.website || doc.header.name
  const pageLabel = `${index + 1} / ${total}`
  const pageLabelWidth = measure(pageLabel, 7.6, false)
  const footerOps = [
    `${rgb(RULE_SOFT)} rg ${MARGIN_X} ${footerY + 12} ${CONTENT_WIDTH} 0.5 re f`,
    `BT 0 Tc ${rgb(MUTED)} rg /F1 7.6 Tf 1 0 0 1 ${MARGIN_X} ${footerY} Tm ${pdfString(footerLeft)} Tj ET`,
    `BT 0 Tc ${rgb(MUTED)} rg /F1 7.6 Tf 1 0 0 1 ${(MARGIN_X + CONTENT_WIDTH - pageLabelWidth).toFixed(2)} ${footerY} Tm ${pdfString(pageLabel)} Tj ET`,
  ]
  const stream = [...pageContent, ...footerOps].join('\n')
  const streamBytes = Buffer.from(stream, 'latin1')
  const contentId = add(
    `<< /Length ${streamBytes.length} >>\nstream\n${stream}\nendstream`,
  )

  const annots = links[index].map(
    (link) =>
      `<< /Type /Annot /Subtype /Link /Rect [${link.rect
        .map((value) => value.toFixed(2))
        .join(
          ' ',
        )}] /Border [0 0 0] /A << /S /URI /URI ${pdfString(link.uri)} >> >>`,
  )
  const annotsEntry = annots.length ? ` /Annots [${annots.join(' ')}]` : ''

  pageIds.push(
    add(
      `<< /Type /Page /Parent ${pagesId} 0 R /MediaBox [0 0 ${PAGE_WIDTH} ${PAGE_HEIGHT}] /Contents ${contentId} 0 R${annotsEntry} /Resources << /Font << /F1 ${fontId} 0 R /F2 ${fontBoldId} 0 R >> >> >>`,
    ),
  )
})

objects[catalogId - 1] =
  `<< /Type /Catalog /Pages ${pagesId} 0 R /Lang (en-US) >>`
objects[pagesId - 1] =
  `<< /Type /Pages /Kids [${pageIds.map((id) => `${id} 0 R`).join(' ')}] /Count ${pageIds.length} >>`

const chunks = [Buffer.from('%PDF-1.4\n', 'latin1')]
const offsets = [0]
for (let i = 0; i < objects.length; i++) {
  offsets.push(Buffer.concat(chunks).length)
  chunks.push(Buffer.from(`${i + 1} 0 obj\n${objects[i]}\nendobj\n`, 'latin1'))
}
const xrefStart = Buffer.concat(chunks).length
let xref = `xref\n0 ${objects.length + 1}\n`
xref += '0000000000 65535 f \n'
for (let i = 1; i <= objects.length; i++) {
  xref += `${String(offsets[i]).padStart(10, '0')} 00000 n \n`
}
xref += `trailer\n<< /Size ${objects.length + 1} /Root ${catalogId} 0 R /Info ${infoId} 0 R >>\n`
xref += `startxref\n${xrefStart}\n%%EOF`
chunks.push(Buffer.from(xref, 'latin1'))

mkdirSync(dirname(outPath), { recursive: true })
writeFileSync(outPath, Buffer.concat(chunks))
console.log(`Wrote ${outPath} from data/cv.ts (${ops.length} page(s))`)
