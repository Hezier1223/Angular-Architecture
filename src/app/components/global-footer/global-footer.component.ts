import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-global-footer',
  templateUrl: './global-footer.component.html',
  styleUrls: ['./global-footer.component.less'],
  preserveWhitespaces: false,
})
export class GlobalFooterComponent {
  @HostBinding('class') clazz = 'global-footer';
  @Input() links: {title: string; href: string; blankTarget?: boolean}[];
}
