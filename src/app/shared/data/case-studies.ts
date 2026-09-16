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
  /**
   * Optional headline impact numbers, shown as an animated band near the top of
   * the detail page. `value` is the numeric portion (animated by CountUp);
   * `suffix` is rendered after it (e.g. "M+"). Omit for engagements whose
   * strength is breadth rather than a single vanity number.
   */
  metrics?: { value: number; suffix?: string; label: string }[];
  link?: { label: string; href: string };
}

export const nextGenCaresCase: CaseStudy = {
  slug: 'nextgen-cares',
  client: 'Re-Software, Inc. - Emory University CARES Program',
  title: 'NextGen CARES - cardiac arrest registry for 1M+ patients',
  summary:
    'The Angular front-end and Java / Spring Boot back-end behind NextGen CARES. I build the clinical reporting and dashboard layer on a reusable, smart / dumb component architecture - so a growing surface of registry views composes from proven, presentational pieces that public-health teams can read and act on.',
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
    'Make a clinically rigorous, nationwide registry legible without the front-end sprawling. The data has to stay accurate and auditable across every participating program, while an ever-growing surface of reporting and dashboard views stays consistent, accessible, and fast - which only holds if the components behind them are genuinely reusable.',
  approach: [
    'Build the reporting and dashboard surface on a reusable smart / dumb component architecture - presentational components fed by thin containers, so new views compose from proven pieces instead of one-off markup.',
    'Turn dense registry data into data-visualisation and summary views that clinical and public-health users can read at a glance.',
    'Back those views with Java / Spring Boot services and REST APIs shaped to the registry’s clinical and operational requirements.',
    'Hold the whole front-end on a signals-first, standalone-component, OnPush architecture with NgRx, and review specs, models, and code across the lifecycle with the Ventricle Pod.',
  ],
  outcomes: [
    'A reusable component layer that lets new reporting and dashboard views ship fast and stay consistent as the registry grows.',
    'Reporting views public-health stakeholders rely on to read a CDC- and Emory-developed registry used nationwide.',
    'Front-end and back-end owned end-to-end - clinical context carried across the stack, reviewed for accuracy before every release.',
  ],
  metrics: [
    { value: 1, suffix: 'M+', label: 'Patients enrolled' },
    { value: 170, suffix: 'M+', label: 'Catchment population' },
    { value: 34, label: 'State registries' },
  ],
  link: { label: 'mycares.net/nextGen', href: 'https://mycares.net/nextGen' },
};

export const vitalityCase: CaseStudy = {
  slug: 'vitality',
  client: 'Vitality Group Inc.',
  title: 'Vitality - global wellness platform serving 27M+ members',
  summary:
    'A multi-year build on Vitality’s global wellness platform, serving tens of millions of members. My work centred on two systems the business leans on daily: a dynamic-forms engine built with Formly - paired with a survey-builder tool that lets the team launch new forms and surveys without shipping code - and an admin tool for granting roles and feature-level access across the platform.',
  role: 'Software Developer (Angular + Java / Spring Boot)',
  period: 'Sep 2022 - Present',
  status: 'Flagship client · 3+ years',
  stack: [
    'Angular',
    'Signals',
    'NgRx',
    'TypeScript',
    'RxJS',
    'Formly',
    'SASS',
    'Java',
    'Spring Boot',
    'Spring Data JPA',
    'Hibernate',
    'OpenAPI',
    'MySQL',
  ],
  problem:
    'A global wellness platform constantly needs new forms, surveys, and assessments, plus fine-grained control over who can see and do what. Hard-coding each form and every permission check doesn’t scale across markets and release cycles - the platform needs configuration-driven forms and one place to manage roles and feature access.',
  approach: [
    'Build a dynamic-forms engine with Formly - rendering complex forms and assessments from configuration, with custom field types, validation, and conditional logic instead of bespoke markup.',
    'Layer a survey-builder tool on top, so non-engineers can compose and launch new surveys and forms without a code change or release.',
    'Build an admin tool for role-based access - granting roles and toggling feature-level access across different parts of the platform.',
    'Wire both systems to Java / Spring Boot REST APIs (Spring Data JPA, Hibernate, MySQL, OpenAPI) on the platform’s signals-first Angular + NgRx foundation.',
  ],
  outcomes: [
    'A forms engine and survey builder that let the team launch new forms and surveys by configuration - no release required.',
    'An admin tool that centralises roles and feature access, replacing scattered, hard-coded permission checks.',
    'Three years on the engagement and counting - trusted with new scope every cycle.',
  ],
  metrics: [
    { value: 27, suffix: 'M+', label: 'Members served' },
    { value: 38, label: 'Markets' },
    { value: 3, suffix: '+', label: 'Years on the engagement' },
  ],
  link: { label: 'powerofvitality.com', href: 'https://www.powerofvitality.com' },
};

export const omediaCase: CaseStudy = {
  slug: 'omedia',
  client: 'Omedia',
  title: 'Omedia - Angular & Drupal full-stack development',
  summary:
    'My home base - the Tbilisi agency where my full-stack practice lives. Across a varied client portfolio I build Angular front-ends and Spring Boot APIs, leaning on a shared set of Angular patterns and tooling I carry from one project to the next, and develop and maintain Drupal sites wherever that’s the right tool for the brief.',
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
    'The brief changes client to client - a signals-driven SPA one week, a Drupal theme the next. Delivering enterprise-grade work across that variety means not starting from scratch each time: the codebase needs shared, reusable Angular tooling, and the judgement to pick the right stack for each job.',
  approach: [
    'Maintain a shared toolkit of reusable Angular patterns, components, and conventions, reused across client projects to keep quality high and delivery fast.',
    'Build and maintain Drupal websites and applications - custom themes, templates, modules, content types, and configuration across Drupal 8 / 9 / 10.',
    'Keep every build responsive, accessible, and performance-optimised, integrating third-party services and APIs across both Angular and Drupal.',
    'Reach for a signals-first, OnPush Angular architecture with NgRx when a project calls for a full SPA.',
  ],
  outcomes: [
    'A shared Angular toolkit that compounds across the portfolio - new client projects start from proven patterns, not a blank page.',
    'Full-stack range across Angular, Spring Boot, and Drupal - the right tool for each brief instead of one stack forced everywhere.',
    'Mentored peers and shared practices across the agency.',
  ],
  link: { label: 'omedia.dev', href: 'https://omedia.dev/' },
};

/**
 * Ordered most-recent-first for the timeline view in the Selected Work section.
 */
export const caseStudies: CaseStudy[] = [nextGenCaresCase, vitalityCase, omediaCase];
