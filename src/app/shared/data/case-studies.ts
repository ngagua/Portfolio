export interface CaseStudy {
  slug: string;
  client: string;
  title: string;
  summary: string;
  role: string;
  period: string;
  stack: string[];
  problem: string;
  approach: string[];
  outcomes: string[];
  link?: { label: string; href: string };
}

export const nextGenCaresCase: CaseStudy = {
  slug: 'nextgen-cares',
  client: 'Re-Software, Inc. - Emory University CARES Program',
  title: 'NextGen CARES - cardiac arrest registry for 1M+ patients',
  summary:
    'Independent contractor embedded with the Ventricle Pod in the CARES Program at Emory University’s Woodruff Health Sciences Center. Building and maintaining the Angular front-end and Java / Spring Boot back-end of NextGen CARES under a Master Service Agreement between Emory and Re-Software, Inc.',
  role: 'Senior-Level Software Developer',
  period: 'October 2025 - present',
  stack: [
    'Angular',
    'Signals',
    'NgRx',
    'TypeScript',
    'RxJS',
    'Java',
    'Spring Boot',
    'REST APIs',
    'MySQL',
  ],
  problem:
    'Deliver a clinically rigorous registry across 34 state-based programs with a catchment area of 170M+ people and 1M+ patients enrolled - without sacrificing accessibility, performance, or auditability.',
  approach: [
    'Build scalable Angular features using a standalone-component, signals-first architecture with NgRx state management and OnPush change detection.',
    'Develop and maintain Java / Spring Boot services and REST APIs that meet clinical and operational requirements.',
    'Review specifications, models, and code analytically across the full development lifecycle - design, implementation, testing, and release.',
    'Partner across the Ventricle Pod to keep clinical context, data quality, and engineering trade-offs aligned.',
  ],
  outcomes: [
    'Contributing across the full development lifecycle on a CDC- and Emory-developed registry used by public health stakeholders nationwide.',
    'Front-end and back-end work shipped under one engineering hand - fewer hand-offs, tighter contracts.',
    'Code reviewed for clinical accuracy and operational safety before every release.',
  ],
  link: { label: 'mycares.net/nextGen', href: 'https://mycares.net/nextGen' },
};

export const vitalityCase: CaseStudy = {
  slug: 'vitality',
  client: 'Vitality Group Inc.',
  title: 'Vitality - global wellness platform serving 27M+ members',
  summary:
    'Three-year engagement (contracted through Omedia) building and maintaining Vitality’s global wellness platform - used by 27M+ members across 38 markets through partnerships with leading insurers and employers.',
  role: 'Software Developer (Angular + Java / Spring Boot)',
  period: 'September 2022 - present',
  stack: [
    'Angular',
    'Signals',
    'NgRx',
    'TypeScript',
    'RxJS',
    'SASS',
    'Java',
    'Spring Boot',
    'Spring Data JPA',
    'Hibernate',
    'OpenAPI',
    'MySQL',
  ],
  problem:
    'Deliver dynamic, responsive features across a multi-tenant wellness platform while keeping the codebase testable, secure, and performant. Front-end and back-end work needed to move in lockstep with tight design hand-offs.',
  approach: [
    'Develop enterprise-scale Angular features using a signals-first, standalone-component architecture with NgRx state management, RxJS reactive streams, and OnPush change detection.',
    'Design and optimize RESTful APIs in Java / Spring Boot (Spring Data JPA, Hibernate, MySQL) with auto-generated contracts via SpringDoc / OpenAPI.',
    'Apply smart / dumb component patterns and reusable feature factories to keep the front-end codebase scalable, testable, and aligned with modern Angular practices.',
    'Enforce code quality through unit and integration testing, peer code reviews, and CI checks. Partner with UI/UX designers to deliver responsive, accessible interfaces.',
  ],
  outcomes: [
    'Shipped feature work end-to-end across front-end and back-end without hand-offs.',
    'Contributed to a platform engaging 27M+ members across 38 markets.',
    'Maintained the engagement for three years and counting - trusted with new scope every cycle.',
  ],
  link: { label: 'powerofvitality.com', href: 'https://www.powerofvitality.com' },
};

export const caseStudies: CaseStudy[] = [nextGenCaresCase, vitalityCase];
