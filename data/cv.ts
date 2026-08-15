export const profile = {
  name: 'Felipe Silva',
  title: 'Senior Software Engineer',
  focus: '.NET · SQL Server · Data platform modernization',
  tagline:
    'I take existing .NET and SQL Server platforms and make the slow, expensive, or unsafe parts shippable again.',
  company: 'IQVIA',
  yearsExperience: '10+ years',
  location: 'Madrid, Spain',
  workAuthorization:
    'Authorized to work in Europe. No visa sponsorship or endorsement required, now or later.',
  availability:
    'Open to senior backend roles and consulting on .NET modernization. Open to employment and to contracting.',
  contactBrief:
    'For roles, send the req and the stack. For consulting, send the system, the constraint, and whether you want an employee or a contractor.',
  phone: '+34 657 99 00 70',
  phoneHref: 'tel:+34657990070',
  email: 'contact@felipewrsilva.dev',
  emailHref: 'mailto:contact@felipewrsilva.dev',
  linkedin: 'https://linkedin.com/in/felipewrsilva',
  github: 'https://github.com/felipewrsilva/',
  resumePdf: '/felipe-silva-resume.pdf',
}

export const summary = [
  'Senior .NET backend engineer based in Madrid, with 10+ years building and modernizing data-heavy platforms across healthcare, education, enterprise security and SaaS. Authorized to work in Europe. No visa sponsorship or endorsement required, now or later.',
  'I own architecture and delivery on systems that already have customers. That means processing time, safe schema changes, operating cost, and releases that do not break production.',
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
  title: 'Healthcare data platform modernization',
  problem:
    'Batch pipelines for healthcare and pharmaceutical data were taking hours, timing out under peak load, and leaving the team with a large legacy processing fleet that was expensive to keep alive.',
  constraint:
    'Existing ASP.NET and SQL Server investments had to keep running for global customers. A full rewrite was not acceptable. Database changes also needed to stop drifting between environments.',
  approach:
    'The bottleneck was long-running serial batch jobs that timed out under peak load. I reworked those critical processing paths on ASP.NET Core and SQL Server while leaving the surrounding ASP.NET and SQL Server estate in place, introduced versioned DACPAC deployments with pre-deploy and drift reports, and put GitLab CI/CD in place with test coverage tracking so releases no longer depended on undocumented release steps.',
  tradeOff:
    'Kept SQL Server as the system of record instead of replacing the stack, and retired legacy compute only after the new pipelines proved they could absorb multi-terabyte daily peaks.',
  result:
    'Complex jobs that previously took several hours finished in minutes. Timeout errors dropped. A large legacy processing fleet could be decommissioned. Schema mismatches stopped reaching production.',
  outcomes: [
    'Reduced complex processing time by more than 90% (several hours to a few minutes)',
    'Absorbed multi-terabyte daily ingestion peaks from healthcare and pharmaceutical sources',
    'Cut recurring infrastructure overhead by retiring a large legacy processing fleet',
    'Shipped GitLab CI/CD and DACPAC versioning with automated drift reports',
  ],
}

export const technologies = {
  Languages: ['C#', 'SQL', 'TypeScript'],
  Backend: ['.NET', 'ASP.NET Core', 'REST APIs'],
  'Cloud & data': [
    'SQL Server',
    'DACPAC',
    'AWS (Lambda, SNS, SQS)',
    'Docker',
    'GitLab CI/CD',
  ],
  Focus: ['System modernization', 'Data pipelines', 'Production reliability'],
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
      'Design and deliver backend platforms that process large volumes of healthcare and pharmaceutical data for customers across multiple markets.',
    bullets: [
      'Reworked the serial batch paths that timed out under peak load on ASP.NET Core and SQL Server, cutting complex healthcare data processing from several hours to a few minutes and reducing timeout errors.',
      'Scaled ingestion to multi-terabyte daily peaks from healthcare and pharmaceutical sources.',
      'Cut recurring infrastructure overhead by decommissioning a large legacy processing fleet after the redesigned pipelines proved stable.',
      'Built GitLab CI/CD from scratch with test coverage tracking, and introduced DACPAC so database changes were versioned with automated pre-deploy and drift reports.',
      'Reduced routine developer support time by 75% (about 8 hours to 2 hours per developer monthly) through RCA-driven permanent production fixes.',
    ],
  },
  {
    company: 'Fidelis',
    role: 'Senior Software Engineer',
    period: 'Apr 2018 to Jul 2020',
    industry: 'Enterprise security',
    audience: 'Enterprise customers on multiple operating systems',
    overview:
      'Backend work on modernizing a cross-platform enterprise security product and stabilizing partner integrations.',
    bullets: [
      'Owned the backend side of an OS migration so the product ran reliably across customer environments that previously blocked upgrades.',
      'Built automated integration tests for cybersecurity partner connections that were failing in production.',
      'Reworked brittle integration layers that were producing recurring production defects.',
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
      'Owned backend modernization of the checkout and customer acquisition platform for a major Brazilian healthcare education company.',
    bullets: [
      'Led AWS-based modernization of the acquisition platform, improving checkout conversion after launch.',
      'Raised checkout throughput and shipped the cutover without downtime for live users.',
    ],
  },
  {
    company: 'Levilo',
    role: 'Software Engineer',
    period: 'Feb 2016 to Apr 2017',
    industry: 'SaaS',
    audience: 'Users migrating from desktop to web',
    overview:
      'Owned backend and cloud work that moved a desktop product to SaaS for active clients across Brazil.',
    bullets: [
      'Moved a legacy desktop product to SaaS and removed local install stability failures that were driving customer churn.',
      'Operated cloud infrastructure for thousands of active client operations, including high-availability integrations with large consumer platforms.',
    ],
  },
  {
    company: 'Senac',
    role: 'Software Engineer',
    period: 'Jan 2015 to Jan 2016',
    industry: 'Education',
    audience: 'Students managing invoices and payments',
    overview:
      'Built education tools focused on payment flows and self-service for invoices.',
    bullets: [
      'Launched a multi-method payment platform for students.',
      'Replaced manual support workflows with self-service for invoices and payments.',
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
