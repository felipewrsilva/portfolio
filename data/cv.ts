export const profile = {
  name: 'Felipe Silva',
  title: 'Senior Software Engineer',
  focus: '.NET · SQL Server · Data platform modernization',
  tagline:
    'I modernize backend platforms where slow pipelines, brittle schemas, and operational cost become the product risk.',
  company: 'IQVIA',
  yearsExperience: '10+ years',
  location: 'Madrid, Spain',
  availability:
    'Open to senior backend roles and consulting on .NET modernization.',
  phone: '+34 657 99 00 70',
  phoneHref: 'tel:+34657990070',
  email: 'contact@felipewrsilva.dev',
  emailHref: 'mailto:contact@felipewrsilva.dev',
  linkedin: 'https://linkedin.com/in/felipewrsilva',
  github: 'https://github.com/felipewrsilva/',
  resumePdf: '/felipe-silva-resume.pdf',
}

export const summary = [
  'Senior .NET backend engineer based in Madrid, with 10+ years building and modernizing data-heavy platforms across healthcare, education, enterprise security and SaaS.',
  'I take ownership of architecture and delivery on existing systems: processing time, schema change safety, operational cost, and whether the platform can keep shipping without breaking production.',
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
    'Rebuilt the critical processing paths on ASP.NET Core and SQL Server, introduced versioned DACPAC deployments with pre-deploy and drift reports, and put GitLab CI/CD in place with test coverage tracking so releases stopped depending on manual tribal knowledge.',
  tradeOff:
    'Kept SQL Server as the system of record instead of chasing a greenfield stack, and retired legacy compute only after the new pipelines proved they could absorb multi-terabyte daily peaks.',
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
      'Redesigned ASP.NET Core and SQL Server pipelines, reducing complex healthcare data processing time by more than 90% (several hours to a few minutes) and cutting timeout errors.',
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
      'Owned backend work on a product migration that improved operating-system compatibility and supported customer retention.',
      'Built automated integration testing that stabilized connections with cybersecurity partners.',
      'Reduced recurring production defects by redesigning integration layers.',
      'Moved event-driven workloads onto AWS (Lambda, SNS, SQS) to support cloud processing.',
    ],
  },
  {
    company: 'Afya',
    role: 'Senior Software Engineer',
    period: 'May 2017 to Mar 2018',
    industry: 'Healthcare education',
    audience: 'Checkout and customer acquisition users',
    overview:
      'Technical lead for modernizing the checkout and customer acquisition platform for a major Brazilian healthcare education company.',
    bullets: [
      'Led AWS-based modernization of the acquisition platform, increasing sales conversions by 12% after launch.',
      'Restructured the backend for more than 80% higher throughput with a zero-downtime checkout rollout.',
    ],
  },
  {
    company: 'Levilo',
    role: 'Software Engineer',
    period: 'Feb 2016 to Apr 2017',
    industry: 'SaaS',
    audience: 'Users migrating from desktop to web',
    overview:
      'Helped turn a desktop application into a SaaS product and support cloud operations for active clients across Brazil.',
    bullets: [
      'Re-architected a legacy desktop product as SaaS, reducing monthly customer churn from 18% to 3% by removing local stability failures.',
      'Designed and scaled cloud infrastructure for more than 5,000 active client operations, including high-availability integrations with large consumer platforms.',
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
