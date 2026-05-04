import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'work/vitality', renderMode: RenderMode.Prerender },
  { path: '**', renderMode: RenderMode.Prerender },
];
