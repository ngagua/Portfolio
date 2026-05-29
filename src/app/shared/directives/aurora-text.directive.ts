import { Directive } from '@angular/core';

/**
 * Applies the aurora gradient-clip treatment to text.
 *
 * The visual lives in the global `.aurora-text` utility (src/styles.css) which
 * includes a solid `color` fallback so forced-colors mode and older renderers
 * still show readable text. No JS, no inputs - SSR-safe by construction.
 *
 * Usage: `<span appAuroraText>Senior Full-Stack Developer</span>`
 */
@Directive({
  selector: '[appAuroraText]',
  host: {
    class: 'aurora-text',
  },
})
export class AuroraTextDirective {}
