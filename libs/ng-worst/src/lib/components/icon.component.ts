import { CommonModule } from '@angular/common';
import { NgModule, ViewEncapsulation, Component } from '@angular/core';

@Component({
  selector: 'worst-icon',
  template: `
    <img
      src="data:image/svg+xml;utf8, <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden='true' class='r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp r-1nao33i r-16y2uox r-8kz0gk'><g><path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'></path></g></svg>"
      alt="Inline SVG"
    />
  `,
  styles: [
    `
      img {
        background-color: aqua;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class WorstIconComponent {}

@NgModule({
  imports: [CommonModule],
  declarations: [WorstIconComponent],
  exports: [WorstIconComponent],
})
export class WorstIconModule {}
