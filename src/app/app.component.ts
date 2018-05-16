import { Component, OnInit } from '@angular/core';
import { SeoService } from '@core/seo/seo.service';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private seo: SeoService, private logger: NGXLogger) {
  }

  ngOnInit(): void {
    this.logger.info('Application init');
    this.seo.setDefaultTitle();
  }

}
