import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  {
    path: 'work/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => [{ slug: 'nextgen-cares' }, { slug: 'vitality' }],
  },
  { path: '**', renderMode: RenderMode.Prerender },
];
