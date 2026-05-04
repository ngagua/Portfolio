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
}

export const vitalityCase: CaseStudy = {
  slug: 'vitality',
  client: 'Vitality Group Inc. (Chicago)',
  title: 'Wellness platform — Angular front-end, Spring Boot APIs',
  summary:
    'Three-year engagement as a contracted full-stack engineer building responsive, scalable web applications for a global health-and-wellness platform.',
  role: 'Software Developer (contracted via Omedia)',
  period: 'September 2022 — present',
  stack: [
    'Angular',
    'TypeScript',
    'RxJS',
    'SASS',
    'Java',
    'Spring Boot',
    'Spring Data JPA',
    'REST',
    'JUnit',
  ],
  problem:
    'Deliver dynamic, responsive features across a multi-tenant wellness platform while keeping the code base testable, secure, and performant. Front-end and back-end work needed to move in lockstep with tight design hand-offs.',
  approach: [
    'Built signal-driven Angular components with strict typing and OnPush change detection so the UI stays predictable as the surface area grows.',
    'Designed and implemented REST endpoints in Spring Boot with Spring Data JPA, focusing on clear contracts and consistent error handling for the front-end to consume.',
    'Wrote unit and integration tests on both sides of the wire and participated in code reviews to keep regressions out of main.',
    'Worked directly with UI/UX designers to translate Figma into accessible, on-brand components.',
  ],
  outcomes: [
    'Shipped feature work end-to-end across front-end and back-end without hand-offs.',
    'Improved page-level performance and accessibility on the screens I owned.',
    'Maintained the engagement for three years and counting — trusted with new scope every cycle.',
  ],
};
