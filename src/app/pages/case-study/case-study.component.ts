import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  input,
  signal,
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { caseStudies } from '../../shared/data/case-studies';
import { AuroraBackgroundComponent } from '../../shared/components/aurora-background/aurora-background.component';
import { TechLogoCloudComponent } from '../../shared/components/tech-logo/tech-logo-cloud.component';
import { AuroraTextDirective } from '../../shared/directives/aurora-text.directive';
import { MeshVariant } from '../../shared/components/gradient-mesh/gradient-mesh.component';

/** Maps free-text stack entries to the handful of glyphs we draw. */
const LOGO_MATCHERS: ReadonlyArray<readonly [RegExp, string]> = [
  [/angular/i, 'angular'],
  [/typescript/i, 'typescript'],
  [/rxjs/i, 'rxjs'],
  [/ngrx/i, 'ngrx'],
  [/java\b/i, 'java'],
  [/spring/i, 'spring'],
  [/mysql/i, 'mysql'],
  [/docker/i, 'docker'],
  [/drupal/i, 'drupal'],
  [/\bgit\b/i, 'git'],
];

function stackToLogos(stack: readonly string[]): string[] {
  const found = new Set<string>();
  for (const tech of stack) {
    for (const [pattern, slug] of LOGO_MATCHERS) {
      if (pattern.test(tech)) found.add(slug);
    }
  }
  return [...found];
}

@Component({
  selector: 'app-case-study',
  imports: [
    RouterLink,
    AuroraBackgroundComponent,
    TechLogoCloudComponent,
    AuroraTextDirective,
  ],
  templateUrl: './case-study.component.html',
  styleUrl: './case-study.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CaseStudyComponent {
  readonly slug = input.required<string>();

  private readonly router = inject(Router);

  protected readonly study = computed(
    () => caseStudies.find((c) => c.slug === this.slug()) ?? caseStudies[0],
  );

  protected readonly meshVariant = computed<MeshVariant>(() => {
    switch (this.study().slug) {
      case 'nextgen-cares':
        return 'nextgen';
      case 'vitality':
        return 'vitality';
      case 'omedia':
        return 'omedia';
      default:
        return 'default';
    }
  });

  protected readonly studyLogos = computed(() => stackToLogos(this.study().stack));

  protected readonly titleHead = computed(() => {
    const title = this.study().title;
    const space = title.indexOf(' ');
    return space === -1 ? title : title.slice(0, space);
  });

  protected readonly titleRest = computed(() => {
    const title = this.study().title;
    const space = title.indexOf(' ');
    return space === -1 ? '' : title.slice(space);
  });

  /** Client-only flag so the cover-art drift matches SSR markup on hydration. */
  protected readonly isClient = signal(false);

  constructor() {
    afterNextRender(() => this.isClient.set(true));

    // Redirect away from unknown slugs as a side effect, not from inside the
    // computed - keeps `study` pure and avoids navigateByUrl firing on every
    // signal read during change detection.
    effect(() => {
      const slug = this.slug();
      if (!caseStudies.some((c) => c.slug === slug)) {
        this.router.navigateByUrl('/');
      }
    });
  }
}
