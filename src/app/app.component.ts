import { AfterViewInit, Component } from '@angular/core';
import { SeoService } from '@core/seo/seo.service';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  constructor(private seo: SeoService, private logger: NGXLogger) {
    this.seo.setDefaultTitle();
  }

  ngAfterViewInit(): void {
    // document.querySelector('.preloader').setAttribute('class', 'preloader-hidden');
  }


}
