export type SkillLevel = 1 | 2 | 3 | 4 | 5;

export interface Skill {
  name: string;
  level: SkillLevel;
}

export type SkillIcon = 'frontend' | 'backend' | 'cms' | 'tooling';

export interface SkillGroup {
  label: string;
  icon: SkillIcon;
  description: string;
  items: Skill[];
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface PracticeBadge {
  label: string;
  level: 'Expert' | 'Advanced' | 'Proficient';
}

export interface LanguageEntry {
  name: string;
  level: 'Native' | 'Fluent' | 'Intermediate' | 'Basic';
}

export interface EducationEntry {
  degree: string;
  school: string;
  period: string;
}

export const profile = {
  name: 'Nikoloz Gagua',
  monogram: 'NG',
  role: 'Senior-Level Software Developer',
  tagline:
    'Angular front-ends. Java & Spring back-ends. Building healthcare and wellness platforms used by millions worldwide.',
  location: 'Tbilisi, Georgia',
  email: 'ngagua@gmail.com',
  phone: '+995 577 055464',
  bio: [
    'I build production web applications across the stack — Angular front-ends with strict typing and signal-based state, Spring Boot services with clean REST contracts, and Drupal sites that scale.',
    'Currently a Senior-Level Software Developer at Re-Software, Inc., embedded with the Ventricle Pod in the CARES Program at Emory University. I build and maintain NextGen CARES — a CDC- and Emory-developed cardiac arrest registry covering 34 state registries with 170M+ catchment and 1M+ patients enrolled.',
    "In parallel, I have been a contracted engineer on Vitality Group's global wellness platform since 2022 — used by 27M+ members across 38 markets. Before software, I led teams of up to sixty at the Georgia Revenue Service for over a decade.",
  ],
} as const;

export const skills: SkillGroup[] = [
  {
    label: 'Front-end',
    icon: 'frontend',
    description: 'Signals-first Angular with strict typing and OnPush change detection.',
    items: [
      { name: 'Angular', level: 5 },
      { name: 'TypeScript', level: 5 },
      { name: 'Signals', level: 5 },
      { name: 'NgRx', level: 4 },
      { name: 'RxJS', level: 5 },
      { name: 'SASS', level: 4 },
      { name: 'Tailwind CSS', level: 4 },
      { name: 'HTML5', level: 5 },
    ],
  },
  {
    label: 'Back-end',
    icon: 'backend',
    description: 'Java and Spring Boot REST services with clean contracts.',
    items: [
      { name: 'Java', level: 4 },
      { name: 'Spring Boot', level: 4 },
      { name: 'Spring Data JPA', level: 4 },
      { name: 'Hibernate', level: 4 },
      { name: 'REST APIs', level: 5 },
      { name: 'OpenAPI / Swagger', level: 4 },
      { name: 'MySQL', level: 4 },
    ],
  },
  {
    label: 'CMS',
    icon: 'cms',
    description: 'Drupal sites, custom modules, and Twig theming.',
    items: [
      { name: 'Drupal 8 / 9 / 10', level: 3 },
      { name: 'Twig', level: 3 },
      { name: 'PHP', level: 3 },
      { name: 'Custom modules', level: 3 },
      { name: 'Theming', level: 3 },
    ],
  },
  {
    label: 'Tooling',
    icon: 'tooling',
    description: 'Quality, automation, and the workflow that ties it together.',
    items: [
      { name: 'Git', level: 5 },
      { name: 'Maven', level: 4 },
      { name: 'Gradle', level: 4 },
      { name: 'Vitest / Jest', level: 4 },
      { name: 'CI/CD', level: 4 },
      { name: 'Code review', level: 5 },
    ],
  },
];

export const practiceBadges: PracticeBadge[] = [
  { label: 'Performance', level: 'Expert' },
  { label: 'Scalability', level: 'Expert' },
  { label: 'RESTful APIs', level: 'Expert' },
  { label: 'Agile', level: 'Expert' },
  { label: 'Problem solving', level: 'Expert' },
  { label: 'Team management', level: 'Expert' },
  { label: 'Unit testing', level: 'Advanced' },
];

export const languages: LanguageEntry[] = [
  { name: 'Georgian', level: 'Native' },
  { name: 'English', level: 'Fluent' },
  { name: 'Russian', level: 'Intermediate' },
];

export const education: EducationEntry[] = [
  {
    degree: "Master's — Business / Managerial Economics",
    school: 'Caucasus Academic Centre',
    period: '2009 – 2011',
  },
  {
    degree: "Bachelor's — Business Administration & Management",
    school: 'Tbilisi State University',
    period: '2005 – 2009',
  },
];

export const certifications: string[] = ['Angular Bootcamp Course (Omedia)'];

export const socials: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nikoloz-gagua-4302ab1a0/' },
  { label: 'GitHub', href: 'https://github.com/ngagua' },
  { label: 'Email', href: 'mailto:ngagua@gmail.com' },
];
