import { Component } from '@angular/core';

@Component({
  selector: 'app-header-task',
  templateUrl: './task.component.html',
})
export class HeaderTaskComponent {
  loading = true;

  change() {
    setTimeout(() => (this.loading = false), 500);
  }
}
