export interface CaseStudy {
  slug: string;
  client: string;
  title: string;
  summary: string;
  role: string;
  period: string;
  /** Short status label rendered as a pill on the timeline (e.g. "Current"). */
  status: string;
  stack: string[];
  /**
   * Optional grouped breakdown for the timeline card. When present, the card
   * renders each group as a labelled cluster instead of the flat `stack` list.
   * Useful for engagements that span multiple distinct sub-stacks.
   */
  stackGroups?: { label: string; items: string[] }[];
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
  period: 'Oct 2025 - Present',
  status: 'Newest',
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
  period: 'Sep 2022 - Present',
  status: 'Flagship client · 3+ years',
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

export const omediaCase: CaseStudy = {
  slug: 'omedia',
  client: 'Omedia',
  title: 'Omedia - Angular & Drupal full-stack development',
  summary:
    'Long-running engagement with Omedia, the Tbilisi-based agency that anchors my full-stack practice. I deliver Angular front-ends and Spring Boot APIs for enterprise clients (Vitality is the flagship), and develop and maintain Drupal-based websites and applications across the broader client portfolio.',
  role: 'Angular Developer · Drupal Developer',
  period: 'Jun 2022 - Present',
  status: 'Main employer',
  stack: [
    'Angular',
    'TypeScript',
    'Signals',
    'NgRx',
    'RxJS',
    'Java',
    'Spring Boot',
    'Drupal 8 / 9 / 10',
    'Twig',
    'PHP',
    'Custom modules',
    'Theming',
  ],
  stackGroups: [
    {
      label: 'Drupal CMS',
      items: ['Drupal 8 / 9 / 10', 'Twig', 'PHP', 'Custom modules', 'Theming'],
    },
    {
      label: 'Angular full-stack',
      items: ['Angular', 'TypeScript', 'Signals', 'NgRx', 'RxJS', 'Spring Boot'],
    },
  ],
  problem:
    'Deliver enterprise-grade Angular features and Drupal-based sites for a varied client portfolio while staying aligned with modern Angular practices and CMS best practices. The brief shifts client to client - one week a signals-driven SPA, the next a Drupal theme - so the codebase has to favour the right tool for each job.',
  approach: [
    'Build Angular front-ends using standalone components, signals, OnPush change detection, NgRx state management, and reactive RxJS streams.',
    'Develop and maintain Drupal-based websites and web applications - creating and customizing themes, templates, and modules to project requirements.',
    'Ensure every site is responsive, accessible, and performance-optimised; integrate third-party services and APIs across both Angular and Drupal stacks.',
    'Manage Drupal site configurations, content types, taxonomies, and permissions; debug and troubleshoot module, theme, and configuration issues.',
  ],
  outcomes: [
    'Long-running engagement (3+ years) trusted with both flagship client work (Vitality) and broader agency scope.',
    'Full-stack delivery across Angular, Spring Boot, and Drupal - picking the right tool for each brief instead of forcing one stack everywhere.',
    'Mentored peers and shared knowledge across the agency.',
  ],
};

/**
 * Ordered most-recent-first for the timeline view in the Selected Work section.
 */
export const caseStudies: CaseStudy[] = [nextGenCaresCase, vitalityCase, omediaCase];
