export interface Project {
  title: string;
  description: string;
  repoUrl: string;
  demoUrl?: string;
  tech: string[];
}

export const projects: Project[] = [
  {
    title: 'Sample Angular dashboard',
    description:
      'Placeholder repo card. Replace with a real GitHub repo by editing src/app/shared/data/projects.ts.',
    repoUrl: 'https://github.com/',
    tech: ['Angular', 'Signals', 'Tailwind'],
  },
  {
    title: 'Spring Boot REST starter',
    description:
      'Placeholder repo card. Replace with a real GitHub repo by editing src/app/shared/data/projects.ts.',
    repoUrl: 'https://github.com/',
    tech: ['Java', 'Spring Boot', 'JPA'],
  },
  {
    title: 'Drupal custom module',
    description:
      'Placeholder repo card. Replace with a real GitHub repo by editing src/app/shared/data/projects.ts.',
    repoUrl: 'https://github.com/',
    tech: ['Drupal', 'PHP', 'Twig'],
  },
];
