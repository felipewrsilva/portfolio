export const profile = {
  name: 'Felipe Silva',
  title: 'Senior Software Engineer (.NET)',
  focus: ['C#', '.NET', 'SQL Server', 'Azure'] as const,
  resumeFocus:
    'C# | .NET | ASP.NET Core | REST APIs | SQL Server | Azure | CI/CD',
  tagline:
    'I build and operate .NET, REST API, and SQL\u00A0Server platforms that carry real production load. That includes Azure, CI/CD, and ASP.NET Core operator UIs. At IQVIA the work is healthcare data under volume. Earlier roles covered React checkout, enterprise security APIs, and SaaS migrations.',
  company: 'IQVIA',
  location: 'Madrid, Spain',
  siteUrl: 'https://felipewrsilva.dev',
  seoTitle:
    'Felipe Silva | Senior Software Engineer (.NET) | Madrid, Remote EU/US',
  seoDescription:
    'Senior .NET engineer in Madrid with 10+ years in C#, ASP.NET Core, SQL Server, and REST APIs. Azure, CI/CD, healthcare data, security, and SaaS. Covers EU hours with US Eastern overlap.',
  contactBrief:
    'Send the role, stack, and timezone you need covered. I reply within one business day.',
  phone: '+34 657 99 00 70',
  phoneHref: 'tel:+34657990070',
  email: 'contact@felipewrsilva.dev',
  emailHref: 'mailto:contact@felipewrsilva.dev',
  linkedin: 'https://linkedin.com/in/felipewrsilva',
  github: 'https://github.com/felipewrsilva',
  resumePdf: '/felipe-silva-resume.pdf',
}

export const summary = [
  'Senior Software Engineer based in Madrid with 10+ years in C#, .NET, ASP.NET Core, Entity Framework Core, SQL Server, and REST APIs. I design, build, and operate high-volume production systems on Azure, with GitLab CI/CD and Azure DevOps. Current UI work is ASP.NET Core Razor Pages and operator tooling. TypeScript, React, and Next.js were the checkout stack at Afya.',
  'At IQVIA I deliver healthcare ingestion and extract platforms on .NET and SQL Server, including REST APIs, Azure Functions, Azure App Service, Azure Blob Storage, Databricks, GitLab CI/CD, and Azure DevOps. Earlier I led backend and partner REST APIs at Fidelis Security on event-driven AWS, rebuilt checkout at Afya with TypeScript, React, and Node.js, migrated a desktop product to SaaS at Levilo, and shipped student payment systems at Senac.',
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
  title: 'High-volume healthcare file ingestion on .NET and SQL\u00A0Server',
  problem:
    'A high-volume C#, .NET, Entity Framework Core, and SQL\u00A0Server ingestion path failed under load. SQL deadlocks and timeouts were common. The largest files took three hours or more, or never finished.',
  constraint:
    'Throughput had to rise without rewriting the surrounding platform or breaking downstream consumers that already depended on the same tables and contracts.',
  approach:
    'I stabilized the live C#, .NET, Entity Framework Core, and SQL\u00A0Server file path so concurrent large-file loads no longer collapsed into deadlocks, timeouts, and multi-hour or failed runs.',
  tradeOff:
    'The fix stayed inside the existing ingestion estate rather than replacing it with a new pipeline and a full cutover.',
  result:
    'Largest-file runtime dropped from three-plus hours or failure to under 20 minutes. The path now ingests dozens of very large files per hour under production volume.',
  outcomes: [
    'Stabilized a production .NET and SQL\u00A0Server ingestion path under deadlock and timeout pressure',
    'Cut largest-file runtime from 3+ hours or failure to under 20 minutes',
    'Kept dozens of very large files per hour moving through the same estate',
    'Avoided a platform rewrite while restoring reliable throughput',
  ],
}

export const technologies = {
  Languages: ['C#', 'SQL', 'T-SQL', 'TypeScript', 'Go'],
  Backend: [
    '.NET',
    'ASP.NET Core',
    'ASP.NET Core Web API',
    'REST APIs',
    'Entity Framework Core',
    'Razor Pages',
    'ASP.NET Core Identity',
    'CQRS',
    'Clean Architecture',
    'Docker',
    'Node.js',
    'GitLab CI/CD',
    'Azure DevOps',
  ],
  Frontend: ['TypeScript', 'React', 'Next.js', 'JavaScript'],
  'Cloud & data': [
    'SQL Server',
    'Azure',
    'Azure SQL',
    'Azure App Service',
    'Azure Functions',
    'Azure Blob Storage',
    'Databricks',
    'SSIS',
    'ETL',
    'MongoDB',
    'AWS',
    'AWS Lambda',
    'AWS SNS',
    'AWS SQS',
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
    period: 'August 2020 - Present',
    industry: 'Healthcare technology',
    audience: 'Pharmaceutical and healthcare data customers',
    overview:
      'Backend and data platform engineer for high-volume healthcare and pharmaceutical data used across multiple markets. Stack: C#, .NET, ASP.NET Core Web API, Razor Pages, Entity Framework Core, ASP.NET Core Identity, SQL Server, T-SQL, Clean Architecture, CQRS, REST APIs, Azure App Service, Azure Functions, and CI/CD.',
    bullets: [
      'Optimized a high-volume C#, .NET, Entity Framework Core, and SQL Server file ingestion path that failed under SQL deadlocks, timeouts, and multi-hour runs. Reduced largest-file runtime from 3+ hours or failure to under 20 minutes while ingesting dozens of very large files per hour.',
      'Built ASP.NET Core REST APIs and Razor Pages operator tooling with ASP.NET Core Identity, CQRS, jQuery, and AdminLTE for production operations on the same estate.',
      'Designed and implemented a live ETL extract pipeline in Go that replaced SSIS and a manual CSV, Spark, and SQL Server path. Watches FTP, lands Parquet on Azure Blob Storage through Azure Functions, and supports analyst-triggered Databricks loads in minutes.',
      'Implemented GitLab CI/CD and Azure DevOps pipelines for ASP.NET Core services and SQL Server schema changes, with automated pre-deploy checks so database updates follow the same review path as application code.',
      'Reduced routine developer production support time by 75% through root-cause analysis and fixes on live ingestion and extract paths.',
    ],
  },
  {
    company: 'Fidelis Security',
    role: 'Senior Software Engineer',
    period: 'April 2018 - July 2020',
    industry: 'Enterprise security',
    audience: 'Enterprise customers on multiple operating systems',
    overview:
      'Backend engineer on a cross-platform enterprise security product. Work covered OS migration, partner REST API integrations, and event-driven AWS processing with Lambda, SNS, and SQS.',
    bullets: [
      'Led backend development for an OS migration so the product ran reliably across customer environments that previously blocked upgrades, supporting retention and new acquisitions.',
      'Designed and operated partner REST APIs, then redesigned brittle cybersecurity integrations and reduced recurring production defects in those layers.',
      'Built Go tooling for simulation, monitoring, and alerts around failing partner connections, plus automated integration tests for those paths.',
      'Migrated partner and processing workloads that needed async fan-out to AWS Lambda, SNS, and SQS, reducing coupling between partner calls and core processing.',
    ],
  },
  {
    company: 'Afya',
    role: 'Senior Software Engineer',
    period: 'May 2017 - March 2018',
    industry: 'Healthcare education',
    audience: 'Healthcare education checkout and acquisition',
    overview:
      'Full-stack engineer on the checkout and customer acquisition platform for a major healthcare education company (May 2017 to March 2018). Stack: TypeScript, Next.js, React, Node.js, MongoDB, REST APIs, and AWS.',
    bullets: [
      'Built and operated end-to-end checkout and acquisition flows in TypeScript, Next.js, React, Node.js, MongoDB, and AWS during that period, covering payments, contracts, APIs, and production support.',
      'Led AWS modernization of the acquisition platform and increased sales conversions by 12% after launch.',
      'Restructured the backend for more than 80% higher checkout throughput and shipped a zero-downtime cutover for live users.',
      'Enabled bundle and combo purchases on the acquisition path without breaking existing checkout flows.',
      'Owned day-to-day production support for checkout and acquisition while delivering feature work on the same codebase.',
    ],
  },
  {
    company: 'Levilo',
    role: 'Software Engineer',
    period: 'February 2016 - April 2017',
    industry: 'SaaS',
    audience: 'Desktop-to-SaaS migration clients',
    overview:
      'Full-stack and cloud engineer who migrated a desktop product to a SaaS web platform for active clients. Stack: ASP.NET, Razor Pages, jQuery, and AdminLTE on the web path.',
    bullets: [
      'Re-architected a legacy desktop product as SaaS and reduced monthly customer churn from 18% to 3% by removing local stability failures.',
      'Designed and operated cloud infrastructure for more than 5,000 active client operations, including high-availability integrations with large consumer platforms.',
      'Delivered the web product on ASP.NET Razor Pages, jQuery, and AdminLTE while keeping existing client operations running during the cutover.',
    ],
  },
  {
    company: 'Senac',
    role: 'Software Engineer',
    period: 'January 2015 - January 2016',
    industry: 'Education',
    audience: 'Students paying invoices and tuition',
    overview:
      'Full-stack engineer for education payment tools and self-service invoice flows. Stack: ASP.NET Core and ASP.NET Core Identity.',
    bullets: [
      'Launched a multi-method student payment platform end to end with ASP.NET Core Identity.',
      'Replaced manual invoice and payment support with self-service flows and cut operational load on the support team.',
    ],
  },
]

export const education = [
  {
    institution: 'University of Sao Paulo (USP)',
    degree: "Bachelor's degree in Information Systems",
    period: 'January 2019 - December 2022',
  },
  {
    institution: 'Sorocaba College of Engineering (Facens)',
    degree: 'Computer Engineering',
    period: 'January 2014 - December 2018',
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
