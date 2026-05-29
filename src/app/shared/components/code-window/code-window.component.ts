import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { TechLogoComponent } from '../tech-logo/tech-logo.component';

/**
 * Decorative hero visual: a glass code-editor window that "types" a small
 * profile object on load. The full snippet is always in the DOM (so server and
 * client render identical markup and it degrades to static code with no JS);
 * the typewriter is pure CSS, gated by the `is-animated` host class. Parents
 * leave `animated` false for SSR and flip it on after hydration via an
 * `afterNextRender` signal. Reduced-motion shows the finished code instantly.
 *
 * Per-line `--len` (character count, incl. leading &nbsp; indentation) drives
 * both the resting width (`--len * 1ch`, monospace) and the `steps()` reveal;
 * `--delay` staggers the lines so they type in sequence. `aria-hidden` — the
 * real role/stack/impact/location are conveyed by the accessible hero copy.
 */
@Component({
  selector: 'app-code-window',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TechLogoComponent],
  styleUrl: './code-window.component.scss',
  template: `
    <span class="cw-glow"></span>

    <div class="cw-window">
      <div class="cw-bar">
        <span class="cw-dots">
          <span class="cw-dot cw-dot--r"></span>
          <span class="cw-dot cw-dot--y"></span>
          <span class="cw-dot cw-dot--g"></span>
        </span>
        <span class="cw-tab"><app-tech-logo name="typescript" />developer.ts</span>
      </div>

      <div class="cw-body">
        <span class="cw-gutter">
          <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
        </span>

        <code class="cw-code">
          <span class="code-line" style="--len: 24; --delay: 0.25s"><span class="tok-key">export</span>&nbsp;<span class="tok-key">const</span>&nbsp;<span class="tok-prop">nikoloz</span>&nbsp;<span class="tok-punct">=</span>&nbsp;<span class="tok-punct">&#123;</span></span>
          <span class="code-line" style="--len: 28; --delay: 0.78s">&nbsp;&nbsp;<span class="tok-prop">role</span><span class="tok-punct">:</span>&nbsp;<span class="tok-str">'Senior Full-Stack'</span><span class="tok-punct">,</span></span>
          <span class="code-line" style="--len: 34; --delay: 1.39s">&nbsp;&nbsp;<span class="tok-prop">stack</span><span class="tok-punct">:</span>&nbsp;<span class="tok-punct">[</span><span class="tok-str">'Angular'</span><span class="tok-punct">,</span>&nbsp;<span class="tok-str">'TypeScript'</span><span class="tok-punct">,</span></span>
          <span class="code-line" style="--len: 28; --delay: 2.12s">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tok-str">'Java'</span><span class="tok-punct">,</span>&nbsp;<span class="tok-str">'Spring'</span><span class="tok-punct">]</span><span class="tok-punct">,</span></span>
          <span class="code-line" style="--len: 28; --delay: 2.73s">&nbsp;&nbsp;<span class="tok-prop">impact</span><span class="tok-punct">:</span>&nbsp;<span class="tok-punct">&#123;</span>&nbsp;<span class="tok-prop">members</span><span class="tok-punct">:</span>&nbsp;<span class="tok-str">'27M+'</span><span class="tok-punct">,</span></span>
          <span class="code-line" style="--len: 30; --delay: 3.34s">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tok-prop">patients</span><span class="tok-punct">:</span>&nbsp;<span class="tok-str">'1M+'</span>&nbsp;<span class="tok-punct">&#125;</span><span class="tok-punct">,</span></span>
          <span class="code-line" style="--len: 26; --delay: 3.99s">&nbsp;&nbsp;<span class="tok-prop">location</span><span class="tok-punct">:</span>&nbsp;<span class="tok-str">'Tbilisi, GE'</span><span class="tok-punct">,</span></span>
          <span class="code-line" style="--len: 18; --delay: 4.56s">&nbsp;&nbsp;<span class="tok-prop">available</span><span class="tok-punct">:</span>&nbsp;<span class="tok-bool">true</span><span class="tok-punct">,</span></span>
          <span class="code-line" style="--len: 2; --delay: 4.97s"><span class="tok-punct">&#125;</span><span class="tok-punct">;</span></span>
        </code>
      </div>
    </div>
  `,
  host: {
    'aria-hidden': 'true',
    '[class]': 'hostClass()',
  },
})
export class CodeWindowComponent {
  /** Off for SSR/first paint; parent flips it on after hydration to type. */
  readonly animated = input(false);

  protected readonly hostClass = computed(
    () => `code-window${this.animated() ? ' is-animated' : ''}`,
  );
}
