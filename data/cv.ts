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
  'Software Engineer with 10+ years of experience designing, modernizing and scaling distributed software systems across healthcare, financial services, education and SaaS.',
  'Proven track record leading large-scale modernization initiatives, building cloud-native architectures, improving platform performance, reducing operational costs and delivering software that drives measurable business outcomes.',
  'Experienced across backend, cloud and modern web development using .NET, Node.js, React, Next.js and AWS, combining strong software architecture principles with hands-on technical leadership.',
  'Passionate about solving complex engineering challenges, building scalable systems and creating technology that delivers long-term business value.',
]

export const industries = [
  'Healthcare',
  'Financial services',
  'Education',
  'SaaS',
  'Enterprise security',
]

export const clients = [
  {
    company: 'IQVIA',
    industry: 'Healthcare technology',
    audience: 'Global pharmaceutical organizations',
    focus:
      'Enterprise healthcare platforms processing large volumes of healthcare data',
    highlight: 'Hours → real-time data availability · ~20% sales growth',
  },
  {
    company: 'Fidelis',
    industry: 'Enterprise security',
    audience: 'Cross-platform enterprise customers',
    focus:
      'Core architecture modernization for cross-platform security software',
    highlight: 'Single cross-platform solution · fewer production defects',
  },
  {
    company: 'Afya',
    industry: 'Healthcare education',
    audience: 'Students and acquisition funnels',
    focus: 'Checkout and customer acquisition platform modernization',
    highlight: '+80% checkout throughput',
  },
  {
    company: 'Levilo',
    industry: 'SaaS',
    audience: 'Desktop product customers moving to the web',
    focus: 'Desktop-to-cloud SaaS migration with React and Next.js',
    highlight: 'Churn 10% → 3%',
  },
  {
    company: 'Senac',
    industry: 'Education',
    audience: 'Students managing invoices and payments',
    focus: 'Payment modernization and operational self-service',
    highlight: 'Automated payment workflows · less support load',
  },
]

export const impactMetrics = [
  {
    value: 'Hours → real-time',
    label: 'Healthcare data availability',
    detail: 'Real-time data platform at IQVIA',
  },
  {
    value: '~20%',
    label: 'Product sales growth',
    detail: 'Enabled by real-time healthcare analytics products',
  },
  {
    value: 'Days → hours',
    label: 'Customer delivery SLAs',
    detail: 'Automated real-time data ingestion',
  },
  {
    value: '+80%',
    label: 'Checkout throughput',
    detail: "Afya's acquisition platform modernization",
  },
  {
    value: '10% → 3%',
    label: 'Monthly customer churn',
    detail: "Levilo's desktop-to-SaaS migration",
  },
  {
    value: 'Legacy servers',
    label: 'Infrastructure decommissioned',
    detail: 'Recurring cost savings through workflow redesign',
  },
]

export const featuredCase = {
  client: 'IQVIA',
  industry: 'Healthcare technology',
  audience: 'Global pharmaceutical organizations',
  title: 'Real-Time Healthcare Data Platform',
  summary:
    'Led the architecture and development of a next-generation healthcare data platform replacing a legacy batch-oriented solution, enabling near real-time ingestion and delivery of large healthcare datasets.',
  outcomes: [
    'Reduced data availability from hours to real time',
    'Reduced customer delivery SLAs from days to hours',
    'Enabled new real-time healthcare analytics products',
    'Preserved the existing customer base',
    'Contributed to approximately 20% product sales growth within the first year',
  ],
  approach: [
    'Near real-time data synchronization and automated ingestion pipelines',
    'Event-driven processing across distributed backend services',
    'Versioned REST APIs and internal gRPC contracts across distributed services',
    'SQL Server optimization with Entity Framework Core and Dapper',
  ],
}

export const achievements = [
  'Reduced healthcare data processing from hours to real time by designing a real-time healthcare data platform.',
  'Contributed to approximately 20% product sales growth by enabling real-time healthcare analytics products.',
  'Reduced customer delivery SLAs from days to hours through automated real-time data ingestion.',
  "Increased checkout throughput by more than 80% while modernizing Afya's acquisition platform.",
  "Reduced monthly customer churn from 10% to 3% by leading Levilo's migration from desktop to SaaS.",
  'Reduced infrastructure costs by redesigning processing workflows and enabling the decommissioning of multiple legacy servers.',
]

export const technologies = {
  Languages: ['C#', 'TypeScript', 'JavaScript', 'SQL'],
  Backend: [
    '.NET',
    'ASP.NET Core',
    'Node.js',
    'REST APIs',
    'gRPC',
    'Entity Framework Core',
    'Dapper',
  ],
  Frontend: ['React', 'Next.js'],
  'Cloud & DevOps': [
    'AWS (Lambda, SNS, SQS)',
    'Docker',
    'Git',
    'GitHub Actions',
    'Azure DevOps',
    'CI/CD',
  ],
  Architecture: [
    'Distributed Systems',
    'Microservices',
    'Event-Driven Architecture',
    'Service-Oriented Architecture',
    'Clean Architecture',
    'Domain-Driven Design (DDD)',
  ],
  Data: ['SQL Server', 'Performance Tuning', 'Query Optimization'],
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
      "Design and develop enterprise healthcare platforms for one of the world's largest healthcare technology companies, supporting global pharmaceutical organizations through scalable software that processes large volumes of healthcare data.",
    bullets: [
      'Led modernization of a large enterprise monolith into modular services, improving scalability and deployment flexibility.',
      'Defined service contracts that unlocked reliable communication across distributed systems.',
      'Cut recurring production incidents through RCA-driven permanent fixes.',
      'Redesigned processing workflows that enabled decommissioning legacy servers and reduced recurring infrastructure cost.',
      'Improved data-platform performance under large healthcare workloads through persistence and query optimization.',
    ],
  },
  {
    company: 'Fidelis',
    role: 'Senior Software Engineer',
    period: 'Apr 2018 to Jul 2020',
    industry: 'Enterprise security',
    audience: 'Cross-platform enterprise customers',
    overview:
      'Modernized the core architecture of a cross-platform enterprise security solution.',
    bullets: [
      'Refactored the core architecture, reducing structural risk and accumulated technical debt.',
      'Delivered one product experience across operating systems by resolving critical compatibility gaps.',
      'Improved platform stability by redesigning integration layers and cutting recurring production defects.',
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
      "Served as Technical Lead for the modernization of the checkout and customer acquisition platform for one of Brazil's largest healthcare education companies.",
    bullets: [
      'Led checkout modernization onto AWS, improving scalability of acquisition flows.',
      'Shipped a new purchasing experience that improved customer conversion.',
      'Increased checkout throughput by more than 80% through backend redesign.',
      'Enabled bundle and combo purchases, expanding commercial flexibility on the platform.',
    ],
  },
  {
    company: 'Levilo',
    role: 'Software Engineer',
    period: 'Feb 2016 to Apr 2017',
    industry: 'SaaS',
    audience: 'Desktop customers migrating to browser-based access',
    overview:
      'Led the transformation of a desktop application into a modern cloud-native SaaS platform.',
    bullets: [
      'Migrated a desktop product to a browser-based SaaS platform.',
      'Reduced monthly customer churn from approximately 10% to 3% after the migration.',
    ],
  },
  {
    company: 'Senac',
    role: 'Software Engineer',
    period: 'Jan 2015 to Jan 2016',
    industry: 'Education',
    audience: 'Students managing invoices and payment methods',
    overview:
      'Developed digital education solutions focused on payment modernization and operational efficiency.',
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
  { label: 'Clients', href: '#clients' },
  { label: 'Impact', href: '#achievements' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]
