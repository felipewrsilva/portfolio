export const profile = {
  name: 'Felipe Silva',
  title: 'Senior Software Engineer (.NET)',
  focus: ['C#', '.NET', 'SQL Server', 'Azure'] as const,
  tagline:
    'I build and operate .NET and SQL\u00A0Server platforms that carry real production load. At IQVIA that means healthcare data paths that have to stay reliable under volume. Earlier roles covered checkout systems, enterprise security products, and SaaS migrations where I also owned frontend and delivery when the product needed it.',
  company: 'IQVIA',
  yearsExperience: '10+ years',
  location: 'Madrid, Spain',
  availability:
    'Based in Madrid and open to remote senior backend and platform roles. I cover full EU hours and overlap with US\u00A0Eastern until about 2\u00A0pm.',
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
  'Senior Software Engineer and backend engineer based in Madrid with 10+ years in C#, .NET, ASP.NET Core, Entity Framework Core, SQL Server, T-SQL, REST APIs, and Azure. I design, build, and operate high-volume production systems and data platforms in healthcare, enterprise security, education, and SaaS.',
  'At IQVIA I own healthcare extract and ingestion pipelines on .NET and SQL Server, including performance tuning, Azure Functions, Azure Blob, Databricks, CI/CD, and Azure DevOps. Earlier I led backend and API integration work at Fidelis Security on AWS Lambda, SNS, and SQS, rebuilt checkout and acquisition at Afya with TypeScript, React, Node.js, and MongoDB, migrated a desktop product to SaaS at Levilo, and shipped student payment systems at Senac. I stay backend-first and take frontend and DevOps when the product needs one owner across the stack.',
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
  Languages: ['C#', 'SQL', 'T-SQL', 'TypeScript', 'JavaScript', 'Go'],
  Backend: [
    '.NET',
    'ASP.NET Core',
    'ASP.NET',
    'REST APIs',
    'Web APIs',
    'Razor Pages',
    'Entity Framework Core',
    'Entity Framework',
    'ASP.NET Core Identity',
    'CQRS',
    'Clean Architecture',
    'Node.js',
    'GitLab CI/CD',
    'Azure DevOps',
    'CI/CD',
  ],
  Frontend: [
    'TypeScript',
    'React',
    'Next.js',
    'JavaScript',
    'HTML',
    'CSS',
    'jQuery',
    'Bootstrap',
    'AdminLTE',
  ],
  'Cloud & data': [
    'SQL Server',
    'Azure',
    'Azure SQL',
    'Azure App Service',
    'Azure Functions',
    'Azure Blob Storage',
    'DACPAC',
    'SSIS',
    'ETL',
    'Databricks',
    'Parquet',
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
      'Backend engineer and data platform engineer for high-volume healthcare and pharmaceutical data used across multiple markets. Stack: C#, .NET, ASP.NET Core, Razor Pages, Entity Framework Core, ASP.NET Core Identity, SQL Server, T-SQL, Clean Architecture, CQRS, REST APIs, Azure, and CI/CD.',
    bullets: [
      'Optimized a high-volume C#, .NET, Entity Framework Core, and SQL Server file ingestion path that failed under SQL deadlocks, timeouts, and multi-hour runs. Reduced largest-file runtime from 3+ hours or failure to under 20 minutes while ingesting dozens of very large files per hour.',
      'Designed and implemented a live ETL extract pipeline in Go that replaced SSIS and a manual CSV, Spark, and SQL Server path. Watches FTP, lands Parquet on Azure Blob Storage through Azure Functions, and supports analyst-triggered Databricks loads in minutes.',
      'Built ASP.NET Core Razor Pages operator tooling with ASP.NET Core Identity, CQRS, REST-oriented workflows, jQuery, and AdminLTE for production operations on the same estate.',
      'Implemented GitLab CI/CD, Azure DevOps pipelines, and DACPAC database versioning with automated pre-deploy checks and schema drift reports so SQL Server changes ship with the same review path as application code.',
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
      'Redesigned brittle cybersecurity partner API integrations and reduced recurring production defects in those integration layers.',
      'Built Go tooling for simulation, monitoring, and alerts around failing partner connections, plus automated integration tests for those paths.',
      'Migrated partner and processing workloads that needed async fan-out to AWS Lambda, SNS, and SQS, reducing coupling between partner calls and core processing.',
    ],
  },
  {
    company: 'Afya',
    role: 'Senior Software Engineer',
    period: 'May 2017 - March 2018',
    industry: 'Healthcare education',
    audience: 'Checkout and customer acquisition users',
    overview:
      'Full-stack engineer on the checkout and customer acquisition platform for a major healthcare education company. Stack: TypeScript, Next.js, React, Node.js, MongoDB, REST APIs, and AWS.',
    bullets: [
      'Built and operated end-to-end checkout and acquisition flows in TypeScript, Next.js, React, Node.js, MongoDB, and AWS, covering payments, contracts, APIs, and production support.',
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
    audience: 'Users migrating from desktop to web',
    overview:
      'Full-stack and cloud engineer who migrated a desktop product to a SaaS web platform for active clients.',
    bullets: [
      'Re-architected a legacy desktop product as SaaS and reduced monthly customer churn from 18% to 3% by removing local stability failures.',
      'Designed and operated cloud infrastructure for more than 5,000 active client operations, including high-availability integrations with large consumer platforms.',
      'Delivered the web product path while keeping existing client operations running during the cutover.',
    ],
  },
  {
    company: 'Senac',
    role: 'Software Engineer',
    period: 'January 2015 - January 2016',
    industry: 'Education',
    audience: 'Students managing invoices and payments',
    overview:
      'Full-stack engineer for education payment tools and self-service invoice flows.',
    bullets: [
      'Launched a multi-method student payment platform end to end.',
      'Replaced manual invoice and payment support with self-service flows and cut operational load on the support team.',
      'Gave students a direct path to pay and manage invoices without waiting on manual back-office handling.',
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
