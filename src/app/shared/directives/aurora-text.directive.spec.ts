import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AuroraTextDirective } from './aurora-text.directive';

@Component({
  imports: [AuroraTextDirective],
  template: `<span appAuroraText>Aurora</span>`,
})
class HostComponent {}

describe('AuroraTextDirective', () => {
  it('applies the aurora-text class to its host element', async () => {
    const fixture = TestBed.createComponent(HostComponent);
    await fixture.whenStable();
    const span = fixture.nativeElement.querySelector('span') as HTMLElement;
    expect(span.classList.contains('aurora-text')).toBe(true);
  });
});
