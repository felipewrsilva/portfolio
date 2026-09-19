export const profile = {
  name: 'Felipe Silva',
  title: 'Senior Software Engineer',
  focus: ['.NET', 'SQL Server', 'Azure'] as const,
  tagline:
    'I build and operate .NET and SQL\u00A0Server platforms that carry real production load. At IQVIA that means healthcare data paths that have to stay reliable under volume. Earlier roles covered checkout systems, enterprise security products, and SaaS migrations where I also owned frontend and delivery when the product needed it.',
  company: 'IQVIA',
  yearsExperience: '10+ years',
  location: 'Madrid, Spain',
  availability:
    'Based in Madrid and open to remote senior backend and platform roles. I cover full EU hours and overlap with US\u00A0Eastern until about 2\u00A0pm. Authorized to work in the EU with no sponsorship required.',
  contactBrief:
    'Send the role, stack, and timezone you need covered. I reply within one business day.',
  phone: '+34 657 99 00 70',
  phoneHref: 'tel:+34657990070',
  email: 'contact@felipewrsilva.dev',
  emailHref: 'mailto:contact@felipewrsilva.dev',
  linkedin: 'https://linkedin.com/in/felipewrsilva',
  github: 'https://github.com/felipewrsilva/',
  resumePdf: '/felipe-silva-resume.pdf',
}

export const summary = [
  'Senior Software Engineer with more than ten years of backend experience in C#, .NET, ASP.NET Core, SQL Server, and Azure. I design, build, and operate production systems for healthcare data, enterprise security, education, and SaaS.',
  'At IQVIA I own high-volume healthcare extract and ingestion paths on .NET and SQL Server, including a live Go pipeline on Azure Blob, Azure Functions, and Databricks that replaced a brittle SSIS and CSV flow. Earlier I led backend work on a cross-platform security product at Fidelis Security, rebuilt checkout and acquisition at Afya with TypeScript and React, moved a desktop product to SaaS at Levilo, and shipped student payment tools at Senac. I stay backend-first and take frontend and CI/CD when the product needs one owner across the stack.',
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
  title: 'Live healthcare extract pipeline on Azure\u00A0and\u00A0Databricks',
  problem:
    'Ingestion was manual. An analyst waited until every source file was available, then downloaded the files, converted compressed extracts to CSV, and loaded the data through a Spark API into SQL\u00A0Server. Download and conversion failed often. An upstream layout change such as a new column could break Spark and force hand-edited CSVs before the load would run again.',
  constraint:
    'Analysts still needed to choose when data landed in tables. The new path had to keep files current without rewriting the surrounding platform.',
  approach:
    'I migrated the SSIS path to an always-on Go process that watches FTP in real time. New or replaced files update the local extracts, and superseded files for the same reporting period are dropped. The service converts to Parquet, lands the files on Azure\u00A0Blob, and leaves the analyst free to load Databricks tables when the moment is right, usually in a few minutes.',
  tradeOff:
    'I kept the table load analyst-triggered instead of writing straight into production. Databricks replaced SQL\u00A0Server for this path because the same load was cheaper and faster there.',
  result:
    'Extracts that used to wait on a full manual batch now land in minutes. Files stay current as the source changes, and layout changes no longer take the Spark CSV path down.',
  outcomes: [
    'Replaced SSIS and a manual CSV/Spark/SQL\u00A0Server path with a live Go pipeline',
    'Detects FTP changes in real time and keeps local extracts in sync',
    'Converts source files to Parquet and lands them on Azure\u00A0Blob',
    'Analysts load Databricks tables in minutes instead of waiting on a full batch',
  ],
}

export const technologies = {
  Languages: ['C#', 'SQL', 'TypeScript', 'JavaScript', 'Go'],
  Backend: [
    '.NET',
    'ASP.NET Core',
    'Razor Pages',
    'Entity Framework Core',
    'ASP.NET Core Identity',
    'CQRS',
    'REST APIs',
    'Node.js',
    'GitLab CI/CD',
    'Azure DevOps',
  ],
  Frontend: [
    'TypeScript',
    'React',
    'Next.js',
    'JavaScript',
    'HTML',
    'CSS',
    'jQuery',
    'Bootstrap / AdminLTE',
    'ASP.NET',
  ],
  'Cloud & data': [
    'SQL Server',
    'DACPAC',
    'AWS Lambda',
    'AWS SNS',
    'AWS SQS',
    'Azure',
    'Azure SQL',
    'Azure App Service',
    'Azure Functions',
    'Azure Blob',
    'MongoDB',
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
      'Backend and data platform engineering for high-volume healthcare and pharmaceutical data used across multiple markets. Main stack: C#, .NET, ASP.NET Core, Razor Pages, Entity Framework Core, ASP.NET Core Identity, SQL Server, Clean Architecture, and CQRS.',
    bullets: [
      'Stabilized a high-volume C#, .NET, Entity Framework Core, and SQL Server file ingestion path that failed under SQL deadlocks, timeouts, and multi-hour runs on the largest files. Every file now finishes within 20 minutes, usually faster, while the path ingests dozens of very large files per hour.',
      'Built a live extract pipeline in Go that replaced SSIS and a manual CSV, Spark, and SQL Server path. The new flow watches FTP, lands Parquet on Azure Blob through Azure Functions, and lets analysts trigger Databricks loads in minutes.',
      'Delivered ASP.NET Core Razor Pages operator tooling with ASP.NET Core Identity, CQRS, REST-oriented workflows, jQuery, and AdminLTE on the same estate.',
      'Introduced GitLab CI/CD, Azure DevOps, and DACPAC versioning with automated pre-deploy checks and schema drift reports so database changes ship with the same review path as application code.',
      'Cut routine developer support time by 75% through root-cause production fixes on live ingestion and extract paths.',
    ],
  },
  {
    company: 'Fidelis Security',
    role: 'Senior Software Engineer',
    period: 'Apr 2018 to Jul 2020',
    industry: 'Enterprise security',
    audience: 'Enterprise customers on multiple operating systems',
    overview:
      'Backend engineering on a cross-platform enterprise security product, including OS migration work, partner API integrations, and AWS asynchronous processing with Lambda, SNS, and SQS.',
    bullets: [
      'Led backend work for an OS migration so the product ran reliably across customer environments that previously blocked upgrades, supporting retention and new acquisitions.',
      'Repaired brittle cybersecurity partner integrations and cut recurring production defects by redesigning the integration layers.',
      'Built Go tooling for simulation and alerts around failing partner connections, plus automated integration tests for those paths.',
      'Moved partner and processing workloads that needed async fan-out onto AWS Lambda, SNS, and SQS, reducing coupling between partner calls and core processing.',
    ],
  },
  {
    company: 'Afya',
    role: 'Senior Software Engineer',
    period: 'May 2017 to Mar 2018',
    industry: 'Healthcare education',
    audience: 'Checkout and customer acquisition users',
    overview:
      'Full-stack engineering on the checkout and customer acquisition platform for a major healthcare education company using TypeScript, Next.js, React, Node.js, MongoDB, and AWS.',
    bullets: [
      'Built and operated end-to-end checkout and acquisition flows in TypeScript, Next.js, React, Node.js, MongoDB, and AWS, covering payments, contracts, and production support.',
      'Led AWS modernization of the acquisition platform. Sales conversions rose 12% after launch.',
      'Restructured the backend for more than 80% higher checkout throughput and shipped the cutover without downtime for live users.',
      'Enabled bundle and combo purchases on the acquisition path without breaking existing checkout flows.',
      'Owned day-to-day production support for checkout and acquisition while shipping feature work on the same codebase.',
    ],
  },
  {
    company: 'Levilo',
    role: 'Software Engineer',
    period: 'Feb 2016 to Apr 2017',
    industry: 'SaaS',
    audience: 'Users migrating from desktop to web',
    overview:
      'Full-stack and cloud engineering that moved a desktop product to a SaaS web platform for active clients.',
    bullets: [
      'Re-architected a legacy desktop product as SaaS. Monthly customer churn fell from 18% to 3% after local stability failures were removed.',
      'Designed and operated cloud infrastructure for more than 5,000 active client operations, including high-availability integrations with large consumer platforms.',
      'Delivered the web product path while keeping existing client operations running during the cutover.',
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
      'Launched a multi-method student payment platform end to end.',
      'Replaced manual invoice and payment support with self-service flows, cutting operational load on the support team.',
      'Gave students a direct path to pay and manage invoices without waiting on manual back-office handling.',
    ],
  },
]

export const education = [
  {
    institution: 'University of São Paulo (USP)',
    degree: 'Bachelor of Information Systems',
    period: 'Jan 2019 to Dec 2022',
  },
  {
    institution: 'Sorocaba College of Engineering (Facens)',
    degree: 'Computer Engineering',
    period: 'Jan 2014 to Dec 2018',
  },
]

export const languages = [
  { name: 'English', level: 'C2 working language' },
  { name: 'Portuguese', level: 'Native' },
  { name: 'Spanish', level: 'Conversational' },
] as const

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#featured' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]
