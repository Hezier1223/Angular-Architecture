import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { zip } from 'rxjs/observable/zip';
import { catchError } from 'rxjs/operators';
import { NGXLogger } from 'ngx-logger';

/**
 * 用于应用启动时
 * 一般用来获取应用所需要的基础数据等
 */
@Injectable()
export class StartupService {
  constructor(private httpClient: HttpClient, private logger: NGXLogger) {
  }

  load(): Promise<any> {
    // only works with promises
    // https://github.com/angular/angular/issues/15088
    return new Promise((resolve, reject) => {
      zip(
        // this.httpClient.get(`assets/_/i18n/${this.i18n.defaultLang}.json`),
        this.httpClient.get('assets/_/app-data.json'),
      ).pipe(
        catchError(([appData]) => {
          resolve(null);
          return [appData];
        })
      ).subscribe(([appData]) => {
        },
        () => {

        },
        () => {
          resolve(null);
        });
    });
  }
}
