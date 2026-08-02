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
  'Backend and distributed systems engineer based in Madrid, with 10+ years modernizing platforms across healthcare, education, enterprise security and SaaS.',
  'I lead architecture and delivery work that shows up in availability, throughput, cost and retention, not just shipped features.',
]

export const industries = [
  'Healthcare',
  'Education',
  'SaaS',
  'Enterprise security',
]

export const impactMetrics = [
  {
    value: '+80%',
    label: 'Checkout throughput',
    detail: "Afya's acquisition platform modernization",
  },
  {
    value: '18% → 3%',
    label: 'Monthly customer churn',
    detail: "Levilo's desktop-to-SaaS migration",
  },
  {
    value: '1 product',
    label: 'Across operating systems',
    detail: 'Fidelis cross-platform security modernization',
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
    'Contributed to approximately 20% product sales growth within the first year',
  ],
}

export const technologies = {
  Languages: ['C#', 'TypeScript', 'SQL'],
  Backend: ['.NET', 'ASP.NET Core', 'Node.js', 'REST', 'gRPC'],
  'Cloud & data': ['AWS (Lambda, SNS, SQS)', 'Docker', 'CI/CD', 'SQL Server'],
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
      'Reduced monthly customer churn from approximately 18% to 3% after the migration.',
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
  { label: 'Impact', href: '#achievements' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]
