import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { filter } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';
import { TitleService } from '@core/services/title';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private logger: NGXLogger,
              private router: Router,
              private titleSrc: TitleService) {
  }

  ngOnInit(): void {
    this.titleSrc.prefix = '壹沓科技';
    this.titleSrc.separator = ' — ';
    this.logger.info('Application init');
    this.router.events
      .pipe(filter(evt => evt instanceof NavigationEnd))
      .subscribe(() => this.titleSrc.setTitle());
  }

}
