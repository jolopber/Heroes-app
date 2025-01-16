import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  standalone: true,
  imports: [],
  template: `<p>layout-page works!</p>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutPageComponent { }
