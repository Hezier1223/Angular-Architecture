import { Component } from '@angular/core';

@Component({
  selector: 'app-header-icon',
  templateUrl: './icon.component.html',
})
export class HeaderIconComponent {
  loading = true;

  change() {
    setTimeout(() => (this.loading = false), 500);
  }
}
