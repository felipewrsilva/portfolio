export const profile = {
  name: 'Felipe Silva',
  title: 'Senior Software Engineer',
  focus: '.NET · TypeScript · AWS',
  tagline:
    'I take existing production platforms, .NET or TypeScript, and make the slow, expensive, or unsafe parts shippable again.',
  company: 'IQVIA',
  yearsExperience: '10+ years',
  location: 'Madrid, Spain',
  workAuthorization: 'Authorized to work in Europe.',
  availability:
    'Backend, frontend, and full-stack production systems. .NET, TypeScript, React, AWS.',
  contactBrief: 'Based in Madrid. Email with the role and stack.',
  phone: '+34 657 99 00 70',
  phoneHref: 'tel:+34657990070',
  email: 'contact@felipewrsilva.dev',
  emailHref: 'mailto:contact@felipewrsilva.dev',
  linkedin: 'https://linkedin.com/in/felipewrsilva',
  github: 'https://github.com/felipewrsilva/',
  resumePdf: '/felipe-silva-resume.pdf',
}

export const summary = [
  'Senior Software Engineer in Madrid with 10+ years building and operating production systems in healthcare, education, enterprise security, and SaaS. Primary stacks: C# / .NET, TypeScript, and Go. Authorized to work in Europe.',
  'Work spans backend, frontend, and full-stack delivery, plus data platforms and cloud infrastructure on systems already serving customers.',
]

export const industries = [
  'Healthcare',
  'Education',
  'SaaS',
  'Enterprise security',
]

export const featuredCase = {
  client: 'IQVIA',
  industry: 'Healthcare technology',
  audience: 'Pharmaceutical and healthcare data customers',
  title: 'Live healthcare extract pipeline on Azure and Databricks',
  problem:
    'Ingestion was manual. An analyst waited until every source file was available, then downloaded, converted compressed extracts to CSV, and loaded data on demand through a Spark API into SQL Server. Download and conversion failed often. An upstream layout change, such as a new column, broke Spark and required hand-edited CSVs to restore the load.',
  constraint:
    'Analysts still needed to choose when data landed in tables. The new path had to keep files current without a full rewrite of the surrounding platform.',
  approach:
    'I migrated the SSIS path to an always-on Go process that watches FTP in real time. New or replaced files update the local extracts, dropping superseded files for the same slice. The service converts to Parquet and lands the files on Azure Blob. The analyst then loads Databricks tables when it is the right moment, in a few minutes.',
  tradeOff:
    'Kept the table load analyst-triggered instead of writing straight into production. Databricks replaced SQL Server for this path because the same load was cheaper and faster there.',
  result:
    'Files stay current as the source changes. Loads that used to wait on a full manual batch now take a few minutes. Layout changes no longer take the Spark CSV path down.',
  outcomes: [
    'Replaced SSIS and a manual CSV/Spark/SQL Server path with a live Go pipeline',
    'Detects FTP changes in real time and keeps local extracts in sync',
    'Converts source files to Parquet and lands them on Azure Blob',
    'Analysts load Databricks tables in minutes instead of waiting on a full batch',
  ],
}

export const technologies = {
  Languages: ['C#', 'TypeScript', 'JavaScript', 'Go', 'SQL'],
  Backend: ['.NET', 'ASP.NET Core', 'Node.js', 'REST APIs'],
  Frontend: [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'ASP.NET',
  ],
  'Cloud & data': [
    'SQL Server',
    'MongoDB',
    'AWS (Lambda, SNS, SQS)',
    'Azure',
    'Databricks',
    'Parquet',
  ],
} as const

export type ExperienceRole = {
  company: string
  role: string
  period: string
  industry: string
  audience: string
  overview: string
  bullets: string[]
}

export const experience: ExperienceRole[] = [
  {
    company: 'IQVIA',
    role: 'Senior Software Engineer',
    period: 'Aug 2020 to Present',
    industry: 'Healthcare technology',
    audience: 'Pharmaceutical and healthcare data customers',
    overview:
      'Backend and data platform engineering for high-volume healthcare and pharmaceutical data used across multiple markets.',
    bullets: [
      'Stabilized a high-volume file path after SQL deadlocks, timeouts, and 3+ hour or failed runs on the largest files. Every file now finishes within 20 minutes, usually faster, while ingesting dozens of very large files per hour.',
      'Built a live extract pipeline in Go that replaced SSIS and a manual CSV/Spark/SQL Server path with FTP watch, Parquet, Azure Blob, and analyst-triggered Databricks loads in minutes.',
      'Built GitLab CI/CD and DACPAC versioning with automated pre-deploy and drift reports.',
      'Cut routine developer support time by 75% through RCA-driven production fixes.',
    ],
  },
  {
    company: 'Fidelis',
    role: 'Senior Software Engineer',
    period: 'Apr 2018 to Jul 2020',
    industry: 'Enterprise security',
    audience: 'Enterprise customers on multiple operating systems',
    overview:
      'Backend work on a cross-platform enterprise security product, including OS migration and partner integrations.',
    bullets: [
      'Led backend work for an OS migration so the product ran reliably across customer environments that previously blocked upgrades.',
      'Repaired partner integrations and built Go tooling for simulation and alerts around failing cybersecurity partner connections.',
      'Moved partner and processing workloads that needed async fan-out onto AWS Lambda, SNS, and SQS.',
    ],
  },
  {
    company: 'Afya',
    role: 'Senior Software Engineer',
    period: 'May 2017 to Mar 2018',
    industry: 'Healthcare education',
    audience: 'Checkout and customer acquisition users',
    overview:
      'Full-stack work on the checkout and customer acquisition platform for a major Brazilian healthcare education company.',
    bullets: [
      'Built and operated end-to-end checkout and acquisition flows in TypeScript, Next.js, React, Node.js, MongoDB, and AWS, including payments, contracts, and production support.',
      'Led AWS modernization of the acquisition platform, improving conversion and throughput without downtime for live users.',
    ],
  },
  {
    company: 'Levilo',
    role: 'Software Engineer',
    period: 'Feb 2016 to Apr 2017',
    industry: 'SaaS',
    audience: 'Users migrating from desktop to web',
    overview:
      'Full-stack and cloud work that moved a desktop product to SaaS for active clients.',
    bullets: [
      'Migrated a legacy desktop product to SaaS and operated cloud infrastructure for thousands of active client operations.',
    ],
  },
  {
    company: 'Senac',
    role: 'Software Engineer',
    period: 'Jan 2015 to Jan 2016',
    industry: 'Education',
    audience: 'Students managing invoices and payments',
    overview:
      'Full-stack delivery of education payment tools and self-service invoice flows.',
    bullets: [
      'Launched an education payment platform end to end and replaced manual invoice support with self-service.',
    ],
  },
]

export const education = [
  {
    institution: 'University of São Paulo (USP)',
    degree: 'Bachelor of Information Systems',
    period: 'Jan 2019 to Dec 2024',
  },
  {
    institution: 'Sorocaba College of Engineering (Facens)',
    degree: 'Computer Engineering studies',
    period: 'Jan 2014 to Dec 2018',
  },
]

export const languages = [
  { name: 'Portuguese', level: 'Native' },
  { name: 'English', level: 'C2' },
  { name: 'Spanish', level: 'Intermediate' },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#featured' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]
