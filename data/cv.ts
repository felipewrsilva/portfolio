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
  'Senior .NET engineer in Madrid with 10+ years in C#, ASP.NET Core, SQL Server, and REST APIs. I build and operate production systems on Azure, with CI/CD and operator UIs in Razor Pages. Earlier work covers event-driven APIs on AWS and React checkout at Afya.',
]

export const resumeSkills = {
  Languages: ['C#', 'SQL', 'T-SQL', 'TypeScript', 'Go'],
  Backend: [
    '.NET',
    'ASP.NET Core',
    'Web API',
    'EF Core',
    'REST',
    'Razor Pages',
    'Identity',
    'CQRS',
    'Docker',
  ],
  Frontend: ['TypeScript', 'React', 'Next.js'],
  Cloud: [
    'Azure (App Service, Functions, Blob, SQL)',
    'SQL Server',
    'Databricks',
    'AWS (Lambda, SNS, SQS)',
  ],
  'CI/CD': ['GitLab CI/CD', 'Azure DevOps'],
} as const

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
      'Cut largest-file runtime from 3+ hours or failure to under 20 minutes on a C#, .NET, EF Core, and SQL Server ingestion path under deadlock and timeout pressure.',
      'Built ASP.NET Core REST APIs and Razor Pages operator tooling with Identity, CQRS, jQuery, and AdminLTE.',
      'Replaced SSIS and a manual CSV/Spark path with a live extract pipeline in Go, Azure Functions, Blob Storage, and Databricks. Cut routine production support time by 75%.',
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
      'Led the backend OS migration so the product ran in customer environments that previously blocked upgrades.',
      'Built partner REST APIs and moved async work to AWS Lambda, SNS, and SQS, cutting recurring integration defects.',
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
      'Built checkout and acquisition in TypeScript, Next.js, React, Node.js, MongoDB, and AWS, including payments and contracts.',
      'Raised conversions by 12% and checkout throughput by more than 80% after an AWS modernization and zero-downtime cutover.',
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
      'Re-architected a desktop product as SaaS on ASP.NET Razor Pages, jQuery, and AdminLTE. Monthly churn fell from 18% to 3%.',
      'Operated cloud infrastructure for more than 5,000 active client operations during the cutover.',
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
      'Launched student payments with ASP.NET Core Identity and replaced manual invoice support with self-service.',
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
