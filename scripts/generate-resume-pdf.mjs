import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const mdPath = join(__dirname, '..', 'curriculo.md')
const outPath = join(__dirname, '..', 'public', 'felipe-silva-resume.pdf')

/** @typedef {'title'|'section'|'company'|'meta'|'body'|'bullet'|'eduSchool'|'eduDegree'|'eduPeriod'|'spacer'} LineKind */

const SECTION_HEADINGS = new Set([
  'PROFESSIONAL SUMMARY',
  'SELECTED ACHIEVEMENTS',
  'CORE TECHNOLOGIES',
  'PROFESSIONAL EXPERIENCE',
  'EDUCATION',
  'LANGUAGES',
])

const UNICODE_REPLACEMENTS = {
  '\u2192': '->',
  '\u2248': '~',
  '\u00b7': ' | ',
  '\u2022': '-',
  '\u2014': '-',
  '\u2013': '-',
  '\u201c': '"',
  '\u201d': '"',
  '\u2018': "'",
  '\u2019': "'",
  '\u00a0': ' ',
}

function normalizeText(text) {
  let out = ''
  for (const ch of text) {
    if (Object.prototype.hasOwnProperty.call(UNICODE_REPLACEMENTS, ch)) {
      out += UNICODE_REPLACEMENTS[ch]
      continue
    }
    const cp = ch.codePointAt(0)
    if (cp <= 0xff) {
      out += ch
      continue
    }
    // Keep letters by stripping diacritics when outside Latin-1
    const folded = ch.normalize('NFD').replace(/\p{M}/gu, '')
    out += folded || '?'
  }
  return out.replace(/\s+\|\s+/g, ' | ').replace(/\s{2,}/g, ' ').trim()
}

function stripInlineMarkdown(text) {
  return normalizeText(
    text
      .replace(/\*\*(.+?)\*\*/g, '$1')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1')
      .replace(/`([^`]+)`/g, '$1'),
  )
}

/**
 * @returns {{ kind: LineKind, text: string }[]}
 */
function markdownToItems(markdown) {
  const raw = markdown.replace(/\r\n/g, '\n').split('\n')
  /** @type {{ kind: LineKind, text: string }[]} */
  const items = []

  const phone = (markdown.match(/Phone:\s*(.+)/i) || [])[1]
  const emailMatch =
    markdown.match(/Email:\s*\[([^\]]+)\]/i) || markdown.match(/Email:\s*(.+)/i)
  const email = emailMatch?.[1]
  const linkedin = (markdown.match(/LinkedIn:\s*\[([^\]]+)\]/i) || [])[1]
  const website = (markdown.match(/Website:\s*\[([^\]]+)\]/i) || [])[1]
  const name = stripInlineMarkdown(
    (raw.find((l) => l.startsWith('# ')) || '# Felipe Silva').slice(2),
  ).toUpperCase()
  const title = stripInlineMarkdown(
    (raw.find((l) => l.startsWith('## ')) || '## Software Engineer').slice(3),
  )
  const focusLine =
    raw.find((l) => l.startsWith('**') && /Backend/i.test(l)) ||
    '**Backend · Cloud · Distributed Systems**'
  const focus = stripInlineMarkdown(focusLine.replace(/\*\*/g, ''))
  const location = stripInlineMarkdown(
    raw.find((l) => /Madrid/i.test(l) && !l.startsWith('#')) || 'Madrid, Spain',
  )

  items.push({ kind: 'title', text: name })
  items.push({ kind: 'company', text: title })
  items.push({ kind: 'meta', text: `${focus} | ${location}` })
  items.push({
    kind: 'meta',
    text: [phone && stripInlineMarkdown(phone), email && stripInlineMarkdown(email)]
      .filter(Boolean)
      .join('  |  '),
  })
  items.push({
    kind: 'meta',
    text: [
      linkedin && stripInlineMarkdown(linkedin),
      website && stripInlineMarkdown(website),
    ]
      .filter(Boolean)
      .join('  |  '),
  })
  items.push({ kind: 'spacer', text: '' })

  let i = raw.findIndex((l) => l.trim() === '---')
  if (i < 0) i = 0
  while (i < raw.length && raw[i].trim() === '---') i += 1

  let pendingTechCategory = null
  let currentSection = ''
  /** @type {'none'|'school'|'degree'} */
  let eduState = 'none'

  const pushSpacer = () => {
    if (items[items.length - 1]?.kind !== 'spacer') {
      items.push({ kind: 'spacer', text: '' })
    }
  }

  for (; i < raw.length; i++) {
    const line = raw[i].trim()
    if (!line) {
      if (currentSection === 'EDUCATION' && eduState !== 'none') {
        // keep education blocks tight; blank line ends an entry
        eduState = 'none'
        pushSpacer()
      }
      continue
    }
    if (line === '---') {
      if (currentSection === 'EDUCATION') {
        eduState = 'none'
        pushSpacer()
      } else {
        pushSpacer()
      }
      continue
    }

    if (line.startsWith('# ')) {
      currentSection = stripInlineMarkdown(line.slice(2)).toUpperCase()
      pushSpacer()
      items.push({ kind: 'section', text: currentSection })
      eduState = 'none'
      continue
    }

    if (line.startsWith('## ')) {
      const heading = stripInlineMarkdown(line.slice(3))

      if (currentSection === 'EDUCATION') {
        pushSpacer()
        items.push({ kind: 'eduSchool', text: heading })
        eduState = 'school'
        continue
      }

      let j = i + 1
      while (j < raw.length && !raw[j].trim()) j += 1
      if (raw[j]?.trim().startsWith('### ')) {
        const role = stripInlineMarkdown(raw[j].trim().slice(4))
        j += 1
        while (j < raw.length && !raw[j].trim()) j += 1
        if (raw[j]?.trim().startsWith('**')) {
          const period = stripInlineMarkdown(raw[j].trim())
          const periodMain = period.split(' | ')[0]
          const meta = period.includes(' | ')
            ? period.split(' | ').slice(1).join(' | ')
            : ''
          pushSpacer()
          items.push({
            kind: 'company',
            text: `${heading}  |  ${role}`,
          })
          items.push({
            kind: 'meta',
            text: meta ? `${periodMain}  |  ${meta}` : periodMain,
          })
          i = j
        } else {
          pushSpacer()
          items.push({ kind: 'company', text: `${heading}  |  ${role}` })
          i = j - 1
        }
      } else {
        pushSpacer()
        items.push({ kind: 'company', text: heading })
      }
      continue
    }

    if (line.startsWith('### ')) {
      const heading = stripInlineMarkdown(line.slice(4))
      if (heading.toLowerCase() === 'impact') continue
      pendingTechCategory = heading
      continue
    }

    if (line.startsWith('- ')) {
      items.push({ kind: 'bullet', text: stripInlineMarkdown(line.slice(2)) })
      continue
    }

    if (line.startsWith('**') && line.endsWith('**')) {
      const text = stripInlineMarkdown(line)
      if (currentSection === 'EDUCATION') {
        items.push({ kind: 'eduDegree', text })
        eduState = 'degree'
      } else {
        items.push({ kind: 'body', text })
      }
      continue
    }

    const text = stripInlineMarkdown(line)
    if (pendingTechCategory) {
      items.push({
        kind: 'body',
        text: `${pendingTechCategory}: ${text}`,
      })
      pendingTechCategory = null
      continue
    }

    if (currentSection === 'EDUCATION' && eduState !== 'none') {
      items.push({ kind: 'eduPeriod', text })
      eduState = 'none'
      continue
    }

    items.push({ kind: 'body', text })
  }

  // Languages: put on one line if possible
  const langStart = items.findIndex((item) => item.text === 'LANGUAGES')
  if (langStart >= 0) {
    const langBullets = []
    let j = langStart + 1
    while (j < items.length && items[j].kind === 'bullet') {
      langBullets.push(items[j].text)
      j += 1
    }
    if (langBullets.length) {
      items.splice(langStart + 1, langBullets.length, {
        kind: 'body',
        text: langBullets.join('  |  '),
      })
    }
  }

  return items.filter(
    (item, index, arr) =>
      !(
        item.kind === 'spacer' &&
        (index === 0 || arr[index - 1]?.kind === 'spacer')
      ),
  )
}

function wrapText(text, maxChars) {
  if (text.length <= maxChars) return [text]
  const words = text.split(' ')
  const out = []
  let current = ''
  for (const word of words) {
    const next = current ? `${current} ${word}` : word
    if (next.length > maxChars && current) {
      out.push(current)
      current = word
    } else {
      current = next
    }
  }
  if (current) out.push(current)
  return out
}

/** PDF literal string with WinAnsi octal escapes (stream stays ASCII-safe). */
function pdfString(text) {
  let out = '('
  for (const ch of text) {
    const cp = ch.codePointAt(0)
    if (ch === '(' || ch === ')' || ch === '\\') {
      out += `\\${ch}`
    } else if (cp === 0x0a) {
      out += '\\n'
    } else if (cp >= 32 && cp <= 126) {
      out += ch
    } else if (cp <= 0xff) {
      out += `\\${cp.toString(8).padStart(3, '0')}`
    } else {
      out += '?'
    }
  }
  return `${out})`
}

/**
 * @param {{ kind: LineKind, text: string }} item
 */
function styleFor(item) {
  switch (item.kind) {
    case 'title':
      return { size: 18, bold: true, gapAfter: 4, max: 42, indent: 0 }
    case 'section':
      return { size: 11, bold: true, gapAfter: 8, max: 88, indent: 0 }
    case 'company':
      return { size: 10, bold: true, gapAfter: 2, max: 88, indent: 0 }
    case 'eduSchool':
      return { size: 10, bold: true, gapAfter: 2, max: 88, indent: 0 }
    case 'eduDegree':
      return { size: 9, bold: false, gapAfter: 1, max: 88, indent: 12 }
    case 'eduPeriod':
      return { size: 9, bold: false, gapAfter: 6, max: 88, indent: 12 }
    case 'meta':
      return { size: 9, bold: false, gapAfter: 2, max: 92, indent: 0 }
    case 'bullet':
      return { size: 9, bold: false, gapAfter: 3, max: 86, indent: 10 }
    case 'spacer':
      return { size: 9, bold: false, gapAfter: 8, max: 92, indent: 0 }
    default:
      return { size: 9, bold: false, gapAfter: 3, max: 92, indent: 0 }
  }
}

const markdown = readFileSync(mdPath, 'utf8')
const items = markdownToItems(markdown)

const PAGE_WIDTH = 612
const PAGE_HEIGHT = 792
const MARGIN_X = 50
const MARGIN_TOP = 50
const MARGIN_BOTTOM = 50
const LINE_HEIGHT = 11
const USABLE = PAGE_HEIGHT - MARGIN_TOP - MARGIN_BOTTOM

/** @type {{ text: string, size: number, bold: boolean, indent: number, gapAfter: number, kind: LineKind, blockId: number }[]} */
const drawn = []
let blockId = 0

for (const item of items) {
  const style = styleFor(item)
  if (
    item.kind === 'company' ||
    item.kind === 'eduSchool' ||
    item.kind === 'section'
  ) {
    blockId += 1
  }

  if (item.kind === 'spacer') {
    drawn.push({
      text: '',
      size: style.size,
      bold: false,
      indent: 0,
      gapAfter: style.gapAfter,
      kind: item.kind,
      blockId,
    })
    continue
  }

  const prefix = item.kind === 'bullet' ? '- ' : ''
  const parts = wrapText(prefix + item.text, style.max)
  parts.forEach((part, index) => {
    drawn.push({
      text: part,
      size: style.size,
      bold: style.bold && index === 0,
      indent: style.indent,
      gapAfter: index === parts.length - 1 ? style.gapAfter : 1,
      kind: item.kind,
      blockId,
    })
  })
}

function lineStep(line) {
  let step = LINE_HEIGHT
  if (line.gapAfter > LINE_HEIGHT) step += line.gapAfter - LINE_HEIGHT
  else if (!line.text) step += Math.max(0, line.gapAfter - LINE_HEIGHT)
  return step
}

/** Height of a keep-together block starting at index (job, education entry, or section header + following spacer). */
function blockHeightFrom(startIndex) {
  const start = drawn[startIndex]
  let height = 0
  for (let i = startIndex; i < drawn.length; i++) {
    const line = drawn[i]
    if (i > startIndex && line.blockId !== start.blockId) break
    // Don't force huge experience section title+everything; only section title alone
    if (start.kind === 'section' && i > startIndex) break
    height += lineStep(line)
  }
  return height
}

const pages = []
let current = []
let y = PAGE_HEIGHT - MARGIN_TOP

for (let i = 0; i < drawn.length; i++) {
  const line = drawn[i]
  const startsBlock =
    line.kind === 'company' ||
    line.kind === 'eduSchool' ||
    (line.kind === 'section' && line.text !== '')

  let needed = lineStep(line)
  if (startsBlock) {
    const blockH = blockHeightFrom(i)
    // Move whole block to next page when it fits on a fresh page but not here
    if (blockH <= USABLE && y - blockH < MARGIN_BOTTOM) {
      pages.push(current)
      current = []
      y = PAGE_HEIGHT - MARGIN_TOP
    }
    needed = lineStep(line)
  }

  if (y - needed < MARGIN_BOTTOM && current.length) {
    pages.push(current)
    current = []
    y = PAGE_HEIGHT - MARGIN_TOP
  }

  current.push({ ...line, y })
  y -= lineStep(line)
}
if (current.length) pages.push(current)

const objects = []
const add = (content) => {
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

const pageIds = []
const contentIds = []

for (const pageLines of pages) {
  const ops = ['BT']
  for (const item of pageLines) {
    if (!item.text) continue
    const font = item.bold ? 'F2' : 'F1'
    const x = MARGIN_X + item.indent
    ops.push(`/${font} ${item.size} Tf`)
    ops.push(`1 0 0 1 ${x} ${item.y} Tm`)
    ops.push(`${pdfString(item.text)} Tj`)
  }
  ops.push('ET')
  const stream = ops.join('\n')
  const streamBytes = Buffer.from(stream, 'ascii')
  const contentId = add(
    `<< /Length ${streamBytes.length} >>\nstream\n${stream}\nendstream`,
  )
  contentIds.push(contentId)
  pageIds.push(add(''))
}

objects[catalogId - 1] = `<< /Type /Catalog /Pages ${pagesId} 0 R >>`
objects[pagesId - 1] =
  `<< /Type /Pages /Kids [${pageIds.map((id) => `${id} 0 R`).join(' ')}] /Count ${pageIds.length} >>`

pageIds.forEach((pageId, index) => {
  objects[pageId - 1] =
    `<< /Type /Page /Parent ${pagesId} 0 R /MediaBox [0 0 ${PAGE_WIDTH} ${PAGE_HEIGHT}] /Contents ${contentIds[index]} 0 R /Resources << /Font << /F1 ${fontId} 0 R /F2 ${fontBoldId} 0 R >> >> >>`
})

const now = new Date()
const pdfDate = (() => {
  const pad = (n) => String(n).padStart(2, '0')
  const y = now.getUTCFullYear()
  const m = pad(now.getUTCMonth() + 1)
  const d = pad(now.getUTCDate())
  const h = pad(now.getUTCHours())
  const min = pad(now.getUTCMinutes())
  const s = pad(now.getUTCSeconds())
  return `D:${y}${m}${d}${h}${min}${s}Z`
})()

const meta = {
  title: 'Felipe Silva - Software Engineer Resume',
  author: 'Felipe Silva',
  subject:
    'Backend and distributed systems engineer based in Madrid. 10+ years across healthcare, education, enterprise security and SaaS.',
  keywords: [
    'Software Engineer',
    'Backend',
    'Cloud',
    'Distributed Systems',
    '.NET',
    'C#',
    'ASP.NET Core',
    'TypeScript',
    'Node.js',
    'AWS',
    'SQL Server',
    'gRPC',
    'Microservices',
    'Event-Driven Architecture',
    'GitLab CI/CD',
    'DACPAC',
    'Madrid',
    'Healthcare',
    'SaaS',
    'Enterprise Security',
    'IQVIA',
    'felipewrsilva.dev',
  ].join(', '),
  creator: 'curriculo.md via scripts/generate-resume-pdf.mjs',
  producer: 'felipewrsilva.dev portfolio resume generator',
  website: 'https://felipewrsilva.dev',
  email: 'contact@felipewrsilva.dev',
  linkedin: 'https://linkedin.com/in/felipewrsilva',
  github: 'https://github.com/felipewrsilva/',
  role: 'Software Engineer',
  location: 'Madrid, Spain',
  focus: 'Backend, Cloud, Distributed Systems',
}

function xmlEscape(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

const xmp = `<?xpacket begin="" id="W5M0MpCehiHzreSzNTczkc9d"?>
<x:xmpmeta xmlns:x="adobe:ns:meta/">
  <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
    <rdf:Description rdf:about=""
      xmlns:dc="http://purl.org/dc/elements/1.1/"
      xmlns:xmp="http://ns.adobe.com/xap/1.0/"
      xmlns:pdf="http://ns.adobe.com/pdf/1.3/"
      xmlns:pdfx="http://ns.adobe.com/pdfx/1.3/"
      xmlns:cv="https://felipewrsilva.dev/ns/cv/1.0/">
      <dc:format>application/pdf</dc:format>
      <dc:title><rdf:Alt><rdf:li xml:lang="x-default">${xmlEscape(meta.title)}</rdf:li></rdf:Alt></dc:title>
      <dc:creator><rdf:Seq><rdf:li>${xmlEscape(meta.author)}</rdf:li></rdf:Seq></dc:creator>
      <dc:description><rdf:Alt><rdf:li xml:lang="x-default">${xmlEscape(meta.subject)}</rdf:li></rdf:Alt></dc:description>
      <dc:subject><rdf:Bag>${meta.keywords
        .split(', ')
        .map((k) => `<rdf:li>${xmlEscape(k)}</rdf:li>`)
        .join('')}</rdf:Bag></dc:subject>
      <dc:language>en</dc:language>
      <xmp:CreatorTool>${xmlEscape(meta.creator)}</xmp:CreatorTool>
      <pdf:Producer>${xmlEscape(meta.producer)}</pdf:Producer>
      <pdf:Keywords>${xmlEscape(meta.keywords)}</pdf:Keywords>
      <cv:fullName>${xmlEscape(meta.author)}</cv:fullName>
      <cv:jobTitle>${xmlEscape(meta.role)}</cv:jobTitle>
      <cv:focus>${xmlEscape(meta.focus)}</cv:focus>
      <cv:location>${xmlEscape(meta.location)}</cv:location>
      <cv:email>${xmlEscape(meta.email)}</cv:email>
      <cv:website>${xmlEscape(meta.website)}</cv:website>
      <cv:linkedin>${xmlEscape(meta.linkedin)}</cv:linkedin>
      <cv:github>${xmlEscape(meta.github)}</cv:github>
      <cv:source>https://felipewrsilva.dev</cv:source>
      <cv:documentType>resume</cv:documentType>
    </rdf:Description>
  </rdf:RDF>
</x:xmpmeta>
<?xpacket end="w"?>`

const xmpBytes = Buffer.from(xmp, 'utf8')
const metadataId = add('__XMP_METADATA__')

const infoId = add(
  [
    '<<',
    `/Title ${pdfString(meta.title)}`,
    `/Author ${pdfString(meta.author)}`,
    `/Subject ${pdfString(meta.subject)}`,
    `/Keywords ${pdfString(meta.keywords)}`,
    `/Creator ${pdfString(meta.creator)}`,
    `/Producer ${pdfString(meta.producer)}`,
    `/CreationDate (${pdfDate})`,
    `/ModDate (${pdfDate})`,
    '>>',
  ].join('\n'),
)

objects[catalogId - 1] =
  `<< /Type /Catalog /Pages ${pagesId} 0 R /Metadata ${metadataId} 0 R /Lang (en-US) >>`

const chunks = [Buffer.from('%PDF-1.4\n', 'ascii')]
const offsets = [0]
for (let i = 0; i < objects.length; i++) {
  offsets.push(Buffer.concat(chunks).length)
  // Metadata stream may contain UTF-8; write object bytes carefully
  const obj = objects[i]
  if (obj === '__XMP_METADATA__') {
    const header = `${i + 1} 0 obj\n<< /Type /Metadata /Subtype /XML /Length ${xmpBytes.length} >>\nstream\n`
    const footer = `\nendstream\nendobj\n`
    chunks.push(Buffer.from(header, 'ascii'), xmpBytes, Buffer.from(footer, 'ascii'))
  } else {
    chunks.push(Buffer.from(`${i + 1} 0 obj\n${obj}\nendobj\n`, 'ascii'))
  }
}
const xrefStart = Buffer.concat(chunks).length
let xref = `xref\n0 ${objects.length + 1}\n`
xref += '0000000000 65535 f \n'
for (let i = 1; i <= objects.length; i++) {
  xref += `${String(offsets[i]).padStart(10, '0')} 00000 n \n`
}
xref += `trailer\n<< /Size ${objects.length + 1} /Root ${catalogId} 0 R /Info ${infoId} 0 R >>\n`
xref += `startxref\n${xrefStart}\n%%EOF`
chunks.push(Buffer.from(xref, 'ascii'))

mkdirSync(dirname(outPath), { recursive: true })
writeFileSync(outPath, Buffer.concat(chunks))
console.log(`Wrote ${outPath} from ${mdPath} (${pages.length} page(s))`)
console.log(`Embedded PDF Info + XMP metadata for ${meta.author}`)
