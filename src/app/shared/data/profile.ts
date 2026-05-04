export interface SkillGroup {
  label: string;
  items: string[];
}

export interface SocialLink {
  label: string;
  href: string;
}

export const profile = {
  name: 'Nikoloz Gagua',
  monogram: 'NG',
  role: 'Full-stack Engineer',
  tagline: 'Angular front-ends. Java & Spring back-ends. Drupal when the brief calls for it.',
  location: 'Magnolia, New Jersey',
  email: 'ngagua@gmail.com',
  bio: [
    'I build production web applications across the stack — Angular front-ends with strict typing and signal-based state, Spring Boot services with clean REST contracts, and Drupal sites that scale.',
    'For three years I have been a contracted engineer for Vitality Group out of Chicago, shipping responsive Angular and Spring Boot features end-to-end. Before software, I led teams of up to sixty at the Georgia Revenue Service for over a decade, eight of those years as Deputy Head of Division.',
    'Today I split time between front-end work, back-end APIs, and Drupal — picking the right tool for the job and keeping the code accessible, performant, and maintainable.',
  ],
} as const;

export const skills: SkillGroup[] = [
  {
    label: 'Front-end',
    items: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'Signals', 'SASS', 'Tailwind CSS', 'HTML5'],
  },
  {
    label: 'Back-end',
    items: ['Java', 'Spring Boot', 'Spring Data JPA', 'Hibernate', 'REST APIs', 'MySQL'],
  },
  {
    label: 'CMS',
    items: ['Drupal 8/9/10', 'Twig', 'PHP', 'Custom modules', 'Theming'],
  },
  {
    label: 'Tooling',
    items: ['Git', 'Maven', 'Gradle', 'Vitest', 'CI/CD', 'Code review'],
  },
];

export const socials: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nikoloz-gagua-4302ab1a0/' },
  { label: 'GitHub', href: 'https://github.com/ngagua' },
  { label: 'Email', href: 'mailto:ngagua@gmail.com' },
];
