import { Message } from 'ai'

export interface AIChatMessageProps {
  message: Message
}

export interface Dictionary {
  page: {
    experience: string
    hero: string
    client: {
      words: string
      partners: string
    }
    bentoGrid: {
      copied: string
      notCopied: string
    }
    floatingNav: {
      about: string
      testimonials: string
      contact: string
    }
    header: {
      title: string
      tagline: string
      introduction: string
      callToAction: string
    }
    gridItems: Array<{
      title: string
      description: string
    }>
    projects: Array<{
      /* Define your projects structure here */
    }>
    testimonials: Array<{
      quote: string
      name: string
      role: string
    }>
    experiences: Array<{
      title: string
      description: string
    }>
    approach: string
    approaches: Array<{
      title: string
      description: string
    }>
    footer: {
      presence: string
      discussion: string
      contact: string
    }
  }
}

export const defaultEnglishDictionary: Dictionary = {
  page: {
    experience: 'Experience',
    hero: 'Show my work',
    client: {
      words: 'Kind words from',
      partners: 'satisfied partners',
    },
    bentoGrid: {
      copied: 'Email is copied!',
      notCopied: 'Copy my email address',
    },
    floatingNav: {
      about: 'About',
      testimonials: 'Testimonials',
      contact: 'Contact',
    },
    header: {
      title: 'Dynamic Web Magic with Next.js',
      tagline: 'Transforming Concepts into Seamless User Experiences',
      introduction: "Hi! I'm Felipe, a Fullstack Developer based in Brazil.",
      callToAction: 'Show my work',
    },
    gridItems: [
      {
        title:
          'I prioritize client collaboration, fostering open communication',
        description: '',
      },
      {
        title: "I'm very flexible with time zone communications",
        description: '',
      },
      {
        title: 'My tech stack',
        description: 'I constantly try to improve things',
      },
      {
        title: 'Tech enthusiast with a passion for development',
        description: '',
      },
      {
        title: 'Currently working on CI/CD library for software deployments',
        description: 'The Inside Scoop',
      },
      { title: 'Do you want to start a project together?', description: '' },
    ],
    projects: [
      {
        title: '3D Solar System Planets to Explore',
        description:
          'Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.',
      },
      {
        title: 'Yoom - Video Conferencing App',
        description:
          'Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.',
      },
      {
        title: 'AI Image SaaS - Canva Application',
        description:
          'A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.',
      },
      {
        title: 'Animated Apple iPhone 3D Website',
        description:
          'Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects.',
      },
    ],
    testimonials: [
      {
        quote:
          'At UniChem, Felipe was instrumental in ensuring data privacy and compliance with relevant regulations. They proactively identified and mitigated critical issues early in the development process, preventing a potential 30% increase in post-release defects. Their ability to develop comprehensive test plans and address issues before they became major problems highlights their forward-thinking and meticulous approach to software development.',
        name: 'Carlos Mendes',
        role: 'Quality Assurance Lead',
      },
      {
        quote:
          'During their tenure at UniChem, Felipe excelled in collaborative environments, aligning technical solutions with business goals by working closely with product managers and stakeholders. Their leadership in knowledge-sharing sessions and facilitation of team learning fostered a culture of continuous improvement and innovation within the team.',
        name: 'Pedro Santos',
        role: 'Product Development Manager',
      },
      {
        quote:
          'At Sollana, Felipe demonstrated exceptional skills in generating data-driven insights that directly supported key business decisions and boosted revenue. Their proficiency in developing and maintaining SQL scripts, optimizing database performance, and reducing user-reported defects by 30% through automated web application testing with Selenium, underscores their commitment to delivering high-quality solutions.',
        name: 'Bruno Almeida',
        role: 'Data Analytics Director',
      },
      {
        quote:
          'In their role at IQVia, Felipe significantly enhanced operational efficiency by independently automating database deployments across eight Latin American countries. Their implementation of CI/CD pipelines and automated testing not only improved software quality but also accelerated development cycles, showcasing their strong capability in streamlining processes.',
        name: 'Mariano Pereira',
        role: 'IT Operations Manager',
      },
    ],
    experiences: [
      {
        title: 'Software Engineer Intern',
        description:
          'Assisted in the development of a web-based platform, enhancing functionality and interactivity.',
      },
      {
        title: 'Mobile App Dev - Sollana Tech',
        description:
          'Designed and developed mobile app for both iOS & Android platforms using React Native.',
      },
      {
        title: 'Freelance App Dev Project',
        description:
          'Led the dev of a mobile app for a client, from initial concept to deployment on app stores.',
      },
      {
        title: 'Lead Fullstack Developer',
        description:
          'Developed and maintained features using modern frontend and backend technologies.',
      },
    ],
    approach: 'My approach',
    approaches: [
      {
        title: 'Planning & Strategy',
        description:
          "We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements.",
      },
      {
        title: 'Development & Progress Update',
        description:
          'Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way.',
      },
      {
        title: 'Development & Launch',
        description:
          "This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up.",
      },
    ],
    footer: {
      presence: 'Ready to take your digital presence to the next level?',
      discussion:
        "Reach out to me today and let's discuss how I can help you achieve your goals.",
      contact: "Let's get in touch",
    },
  },
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
