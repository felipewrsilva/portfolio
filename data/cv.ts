export const profile = {
  name: 'Felipe Silva',
  title: 'Software Engineer',
  focus: 'Backend · Cloud · Distributed Systems',
  location: 'Madrid, Spain',
  phone: '+34 661 46 28 19',
  phoneHref: 'tel:+34661462819',
  email: 'contact@felipewrsilva.dev',
  emailHref: 'mailto:contact@felipewrsilva.dev',
  linkedin: 'https://linkedin.com/in/felipewrsilva',
  github: 'https://github.com/felipewrsilva/',
  resumePdf: '/felipe-silva-resume.pdf',
  whatsappHref:
    'https://wa.me/34661462819?text=' +
    encodeURIComponent(
      'Hi Felipe, I found your portfolio and would like to connect.',
    ),
}

export const summary = [
  'Backend and distributed systems engineer based in Madrid, with 10+ years designing and modernizing platforms across healthcare, education, enterprise security and SaaS.',
  'I take ownership of architecture and delivery where the result is measurable: faster processing, higher conversion, lower cost and stronger retention.',
]

export const industries = [
  'Healthcare',
  'Education',
  'SaaS',
  'Enterprise security',
]

export const impactMetrics = [
  {
    value: '>90%',
    label: 'Faster data processing',
    detail: 'Healthcare pipelines at IQVIA (hours to minutes)',
  },
  {
    value: '+12%',
    label: 'Sales conversions',
    detail: 'Afya checkout modernization on AWS',
  },
  {
    value: '18% → 3%',
    label: 'Monthly customer churn',
    detail: "Levilo's desktop-to-SaaS migration",
  },
]

export const featuredCase = {
  client: 'IQVIA',
  industry: 'Healthcare technology',
  audience: 'Global pharmaceutical organizations',
  title: 'Healthcare Data Platform at Scale',
  summary:
    'Led architecture and delivery for a healthcare data platform that replaced slow batch pipelines with scalable ASP.NET Core and SQL Server processing, supporting global healthcare and pharmaceutical data ingestion at multi-terabyte scale.',
  outcomes: [
    'Reduced complex processing time by more than 90% (several hours to a few minutes)',
    'Scaled healthcare and pharmaceutical data ingestion to multi-terabyte daily peaks from global sources',
    'Cut recurring infrastructure overhead by retiring a large legacy fleet (about 128-node equivalent)',
    'Shipped GitLab CI/CD and DACPAC versioning with automated drift reports',
  ],
}

export const technologies = {
  Languages: ['C#', 'TypeScript', 'SQL'],
  Backend: ['.NET', 'ASP.NET Core', 'Node.js', 'REST', 'gRPC'],
  'Cloud & data': [
    'AWS (Lambda, SNS, SQS)',
    'Docker',
    'GitLab CI/CD',
    'DACPAC',
    'SQL Server',
  ],
  Architecture: ['Distributed systems', 'Event-driven', 'Microservices'],
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
    audience: 'Global pharmaceutical organizations',
    overview:
      'Design and deliver enterprise healthcare platforms that process large volumes of healthcare and pharmaceutical data for global customers.',
    bullets: [
      'Redesigned ASP.NET Core and SQL Server pipelines, reducing complex healthcare data processing time by more than 90% (several hours to a few minutes) and cutting timeout errors.',
      'Scaled ingestion to multi-terabyte daily peaks, processing new healthcare and pharmaceutical data from global sources well beyond a terabyte in a single day when load demanded it.',
      'Cut recurring infrastructure overhead by decommissioning a large legacy processing fleet (about a 128-node cluster with 500GB RAM and 10TB storage).',
      'Built GitLab CI/CD from scratch with test coverage tracking, and introduced DACPAC so database changes were fully versioned with automated pre-deploy and drift reports.',
      'Reduced routine developer support time by 75% (about 8 hours to 2 hours per developer monthly) through RCA-driven permanent production fixes.',
    ],
  },
  {
    company: 'Fidelis',
    role: 'Senior Software Engineer',
    period: 'Apr 2018 to Jul 2020',
    industry: 'Enterprise security',
    audience: 'Cross-platform enterprise customers',
    overview:
      'Modernized the core architecture of a cross-platform enterprise security product.',
    bullets: [
      'Led backend work on a cross-platform product migration that improved operating-system compatibility and supported retention and new acquisitions.',
      'Built automated integration testing that stabilized connections with major cybersecurity partners.',
      'Reduced recurring production defects by redesigning integration layers and hardening platform reliability.',
      'Scaled event-driven workloads on AWS to support cloud-native processing.',
    ],
  },
  {
    company: 'Afya',
    role: 'Senior Software Engineer',
    period: 'May 2017 to Mar 2018',
    industry: 'Healthcare education',
    audience: 'Acquisition and checkout customers',
    overview:
      "Technical Lead for modernizing the checkout and customer acquisition platform for one of Brazil's largest healthcare education companies.",
    bullets: [
      'Led AWS-based modernization of the acquisition platform, increasing sales conversions by 12% immediately after deployment.',
      'Restructured the backend for more than 80% higher throughput with a stable, zero-downtime checkout rollout.',
    ],
  },
  {
    company: 'Levilo',
    role: 'Software Engineer',
    period: 'Feb 2016 to Apr 2017',
    industry: 'SaaS',
    audience: 'Desktop customers moving to the browser',
    overview:
      'Led the transformation of a desktop application into a cloud-native SaaS platform.',
    bullets: [
      'Re-architected a legacy desktop product as SaaS, reducing monthly customer churn from 18% to 3% by removing local stability failures.',
      'Designed and scaled cloud infrastructure for more than 5,000 active client operations across Brazil, including high-availability integrations with large consumer platforms.',
    ],
  },
  {
    company: 'Senac',
    role: 'Software Engineer',
    period: 'Jan 2015 to Jan 2016',
    industry: 'Education',
    audience: 'Students managing invoices and payments',
    overview:
      'Built digital education tools focused on payment modernization and operational efficiency.',
    bullets: [
      'Launched a multi-method payment platform for students.',
      'Replaced manual support workflows with self-service for invoices and payments, reducing operational load.',
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
    degree: 'Computer Engineering',
    period: 'Jan 2014 to Dec 2018',
  },
]

export const languages = [
  { name: 'Portuguese', level: 'Native' },
  { name: 'English', level: 'Advanced' },
  { name: 'Spanish', level: 'Intermediate' },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Impact', href: '#achievements' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]
