import { Component } from '@angular/core';
import { SeoService } from './core/service/seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private seo: SeoService) {
    this.seo.setDefaultTitle();
  }
}
