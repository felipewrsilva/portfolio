import { Dictionary } from '@/app/dictionaries'

export interface HeroProps {
  dict: Dictionary
}

export const projects = [
  {
    id: 1,
    title: '3D Solar System Planets to Explore',
    des: 'Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.',
    img: '/p1.svg',
    iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/three.svg', '/fm.svg'],
    link: '/ui.earth.com',
  },
  {
    id: 2,
    title: 'Yoom - Video Conferencing App',
    des: 'Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.',
    img: '/p2.svg',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/stream.svg', '/c.svg'],
    link: '/ui.yoom.com',
  },
  {
    id: 3,
    title: 'AI Image SaaS - Canva Application',
    des: 'A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.',
    img: '/p3.svg',
    iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/three.svg', '/c.svg'],
    link: '/ui.aiimg.com',
  },
  {
    id: 4,
    title: 'Animated Apple Iphone 3D Website',
    des: 'Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..',
    img: '/p4.svg',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/three.svg', '/gsap.svg'],
    link: '/ui.apple.com',
  },
]

export const testimonials = [
  {
    quote:
      'At UniChem, Felipe was instrumental in ensuring data privacy and compliance with relevant regulations. They proactively identified and mitigated critical issues early in the development process, preventing a potential 30% increase in post-release defects. Their ability to develop comprehensive test plans and address issues before they became major problems highlights their forward-thinking and meticulous approach to software development.',
    name: 'Carlos Mendes',
    title: 'Quality Assurance Lead',
  },
  {
    quote:
      'During their tenure at UniChem, Felipe excelled in collaborative environments, aligning technical solutions with business goals by working closely with product managers and stakeholders. Their leadership in knowledge-sharing sessions and facilitation of team learning fostered a culture of continuous improvement and innovation within the team.',
    name: 'Pedro Santos',
    title: 'Product Development Manager',
  },
  {
    quote:
      'At Sollana, Felipe demonstrated exceptional skills in generating data-driven insights that directly supported key business decisions and boosted revenue. Their proficiency in developing and maintaining SQL scripts, optimizing database performance, and reducing user-reported defects by 30% through automated web application testing with Selenium, underscores their commitment to delivering high-quality solutions.',
    name: 'Bruno Almeida',
    title: 'Data Analytics Director',
  },
  {
    quote:
      'In their role at IQVia, Felipe significantly enhanced operational efficiency by independently automating database deployments across eight Latin American countries. Their implementation of CI/CD pipelines and automated testing not only improved software quality but also accelerated development cycles, showcasing their strong capability in streamlining processes.',
    name: 'Mariano Pereira',
    title: 'IT Operations Manager',
  },
]

export const companies = [
  {
    id: 1,
    name: 'cloudinary',
    img: '/cloud.svg',
    nameImg: '/cloudName.svg',
  },
  {
    id: 2,
    name: 'appwrite',
    img: '/app.svg',
    nameImg: '/appName.svg',
  },
  {
    id: 3,
    name: 'HOSTINGER',
    img: '/host.svg',
    nameImg: '/hostName.svg',
  },
  {
    id: 4,
    name: 'stream',
    img: '/s.svg',
    nameImg: '/streamName.svg',
  },
  {
    id: 5,
    name: 'docker.',
    img: '/dock.svg',
    nameImg: '/dockerName.svg',
  },
]

export const workExperience = [
  {
    id: 1,
    title: 'Software Engineer Intern',
    desc: 'Assisted in the development of a web-based platform, enhancing functionality and interactivity.',
    className: 'md:col-span-2',
    thumbnail: '/exp1.svg',
  },
  {
    id: 2,
    title: 'Mobile App Dev - Sollana Tech',
    desc: 'Designed and developed mobile app for both iOS & Android platforms using React Native.',
    className: 'md:col-span-2',
    thumbnail: '/exp2.svg',
  },
  {
    id: 3,
    title: 'Freelance App Dev Project',
    desc: 'Led the dev of a mobile app for a client, from initial concept to deployment on app stores.',
    className: 'md:col-span-2',
    thumbnail: '/exp3.svg',
  },
  {
    id: 4,
    title: 'Lead Fullstack Developer',
    desc: 'Developed and maintained features using modern frontend and backend technologies.',
    className: 'md:col-span-2',
    thumbnail: '/exp4.svg',
  },
]

export const socialMedia = [
  {
    id: 1,
    img: '/git.svg',
    url: 'https://github.com/felipewrsilva/',
  },
  {
    id: 2,
    img: '/link.svg',
    url: 'https://www.linkedin.com/in/felipewrsilva/',
  },
  {
    id: 3,
    img: '/twit.svg',
    url: 'https://twitter.com/felipewrsilva',
  },
]
