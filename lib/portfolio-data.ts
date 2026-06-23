export const profile = {
  name: 'Deimer Navarro',
  role: 'Senior FullStack & Frontend Engineer',
  location: 'Colombia, CO',
  available: true,
  tagline:
    'I design and engineer the seams between product and platform — fast, resilient interfaces backed by systems that scale.',
  email: 'hello@deimerjoe.com',
}

export const stats = [
  { value: '4+', label: 'Years shipping' },
  { value: '7+', label: 'Products launched' },
  { value: '4+', label: 'Companies & Startups' },
]

export const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Angular',
  'TailwindCSS',
  'SCSS',
  'HTML5',
  'Redux',
  'NestJS',
  'Express',
  'Node.js',
  'PostgreSQL',
  'MSSQL Server',
  'MongoDB',
  'Firebase',
  'GCP',
  'Vercel',
  'AWS',
  'Azure',
  'Docker',
  'Git',
  'Design Systems',
]

export type TimelineItem = {
  id: string
  period: string
  company: string
  role: string
  summary: string
  tags: string[]
  kind: 'work' | 'project'
}

export const timeline: TimelineItem[] = [
  {
    id: 'sgs',
    period: '2024 — 2026',
    company: 'SGS Colombia SAS',
    role: 'IT Project Engineer',
    summary:
      'Led the critical framework upgrade of the customer management system from Angular v6 to v18, significantly boosting application performance and maintainability. Developed strategic BI dashboards integrated with SQL Server to drive data-driven decision-making.',
    tags: ['Angular', 'Redux', '.NET', 'MSSQL Server', 'BI Dashboards', 'Azure', 'SCRUM'],
    kind: 'work',
  },
  {
    id: 'esinergia',
    period: '2023 — 2024',
    company: 'ESinergia SAS',
    role: 'Frontend Developer',
    summary:
      'Delivered preventive and evolutionary support for enterprise web applications built on Drupal. Engineered custom interactive components following strict UI/UX and Mobile-First responsive design principles.',
    tags: ['JavaScript', 'HTML5', 'SCSS', 'PHP', 'Drupal', 'SCRUM'],
    kind: 'work',
  },
  {
    id: 'meltstudio',
    period: '2022 — 2023',
    company: 'Melt Studio (JPG S.A.S.)',
    role: 'FullStack Developer',
    summary:
      'Developed a high-performance web platform for QA team workflow management and validation. Architected scalable state management solutions and streamlined cloud deployment processes using Docker containers.',
    tags: ['Next.js', 'ReactJS', 'Redux', 'React Native', 'Node.js', 'Docker', 'GCP', 'SCRUM'],
    kind: 'work',
  },
  {
    id: 'i4digital',
    period: '2021 — 2022',
    company: 'i4Digital SAS',
    role: 'FullStack Developer',
    summary:
      'Built core government program management platforms for the Municipality of Medellín. Ensured high software reliability and stability by implementing robust unit testing suites and seamless system integration strategies.',
    tags: ['Angular', 'Redux', 'NestJS', 'PostgreSQL', 'Jasmine', 'SCRUM'],
    kind: 'work',
  },
  {
    id: 'likeu',
    period: '2021 — 2021',
    company: 'LikeU SAS',
    role: 'Frontend Developer',
    summary:
      'Developed an innovative virtual cabin platform designed for real-time customer service video calls. Integrated communication SDKs to ensure low-latency, high-quality audio and video interactions.',
    tags: ['Angular', 'ReactJS', 'Redux', 'WebRTC', 'Amazon Chime SDK', 'SCRUM'],
    kind: 'work',
  },
  {
    id: 'universidad-de-cordoba',
    period: '2019 — 2020',
    company: 'Universidad de Córdoba',
    role: 'FullStack Developer (Intern)',
    summary:
      'Designed and developed a full-stack web application to monitor and audit internal university administrative processes, streamlining quality control workflows.',
    tags: ['Next.js', 'Node.js', 'Redux', 'PostgreSQL', 'SCRUM'],
    kind: 'work',
  },
]

export type Project = {
  id: string
  name: string
  blurb: string
  href: string
}

export const projects: Project[] = [
  {
    id: 'polymarket-bot',
    name: 'Ultrabot',
    blurb: 'Polymarket trading bot for Bitcoin Up/Down markets.',
    href: 'https://score-5m.up.railway.app/',
  },
  {
    id: 'adminflow',
    name: 'AdminFlow',
    blurb: 'A framework/demo of a modular administrative system for corporate departments. Currently in development.👨‍💻',
    href: '#',
  },
]

export const socials = [
  { label: 'GitHub', href: 'https://github.com/DevNavarrom' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/deimer-navarro-martinez/' },
  { label: 'X', href: 'https://x.com/deimerJS' },
  { label: 'Read.cv', href: '#' },
]
