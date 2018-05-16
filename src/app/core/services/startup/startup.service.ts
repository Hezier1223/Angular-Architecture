import { zip } from 'rxjs/observable/zip';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { I18NService } from '@core/services/i18n';
import { NGXLogger } from 'ngx-logger';

/**
 * 用于应用启动时
 * 一般用来获取应用所需要的基础数据等
 */
@Injectable()
export class StartupService {
  constructor(
    private translate: TranslateService,
    private i18n: I18NService,
    private httpClient: HttpClient,
    private logger: NGXLogger
  ) {
  }

  load(): Promise<any> {
    return new Promise((resolve, reject) => {
      zip(
        this.httpClient.get(`assets/_/i18n/${this.i18n.defaultLang}.json`),
        this.httpClient.get('assets/_/app-data.json'),
      )
        .pipe(
          // 接收其他拦截器后产生的异常消息
          catchError(([langData, appData]) => {
            resolve(null);
            return [langData, appData];
          }),
        )
        .subscribe(
          ([langData, appData]) => {
            this.translate.setTranslation(this.i18n.defaultLang, langData);
            this.translate.setDefaultLang(this.i18n.defaultLang);
            console.log(appData);
          },
          () => {
          },
          () => {
            resolve(null);
          },
        );
    });
  }
}
