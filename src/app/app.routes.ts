import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'Nikoloz Gagua - Senior Full-Stack Developer',
  },
  {
    path: 'work/:slug',
    loadComponent: () =>
      import('./pages/case-study/case-study.component').then((m) => m.CaseStudyComponent),
    title: 'Case study - Nikoloz Gagua',
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then((m) => m.NotFoundComponent),
    title: 'Page not found - Nikoloz Gagua',
  },
];
