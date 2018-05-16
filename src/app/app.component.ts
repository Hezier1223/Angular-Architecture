import { Component } from '@angular/core';
import { SeoService } from '@core/seo/seo.service';
import { I18NService } from '@core/i18n/i18n.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private seo: SeoService, i18n: I18NService) {
    this.seo.setDefaultTitle();
    i18n.use('en');
  }
}
