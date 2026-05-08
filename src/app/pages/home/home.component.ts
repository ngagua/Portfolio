import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroComponent } from '../../sections/hero/hero.component';
import { NowComponent } from '../../sections/now/now.component';
import { AboutComponent } from '../../sections/about/about.component';
import { SkillsComponent } from '../../sections/skills/skills.component';
import { WorkComponent } from '../../sections/work/work.component';
import { TestimonialsComponent } from '../../sections/testimonials/testimonials.component';
import { LeadershipComponent } from '../../sections/leadership/leadership.component';
import { ContactComponent } from '../../sections/contact/contact.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    NowComponent,
    AboutComponent,
    SkillsComponent,
    WorkComponent,
    TestimonialsComponent,
    LeadershipComponent,
    ContactComponent,
  ],
  template: `
    <app-hero />
    <app-now />
    <app-about />
    <app-skills />
    <app-work />
    <app-testimonials />
    <app-leadership />
    <app-contact />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
