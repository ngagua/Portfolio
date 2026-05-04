import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'Nikoloz Gagua — Full-stack Engineer',
  },
  {
    path: 'work/vitality',
    loadComponent: () =>
      import('./pages/case-study-vitality/case-study-vitality.component').then(
        (m) => m.CaseStudyVitalityComponent,
      ),
    title: 'Case study: Vitality Group — Nikoloz Gagua',
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then((m) => m.NotFoundComponent),
    title: 'Page not found — Nikoloz Gagua',
  },
];
