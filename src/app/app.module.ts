import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreModule } from '@core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '@shared/shared.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { httpInterceptorProviders } from 'app/core/net';
import { NgProgressModule } from '@ngx-progressbar/core';
import { StartupService } from '@core/services/startup/startup.service';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LayoutModule } from './layout/layout.module';
import { RoutesModule } from './routes/routes.module';
import { ComponentModule } from './components';
import { WINDOW } from '@core/win_tokens';

export function StartupServiceFactory(
  startupService: StartupService,
): Function {
  return () => startupService.load();
}

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, `assets/_/i18n/`, '.json');
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgZorroAntdModule.forRoot(),
    CoreModule.forRoot(),
    LoggerModule.forRoot({
      level: NgxLoggerLevel.DEBUG,
      serverLogLevel: NgxLoggerLevel.ERROR
    }),
    NgProgressModule.forRoot({
      trickleSpeed: 200,
      min: 20,
      meteor: false
    }),
    ComponentModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    SharedModule,
    LayoutModule,
    RoutesModule,
    AppRoutingModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'zh-Hans'},
    {provide: WINDOW, useValue: window},
    httpInterceptorProviders,
    StartupService,
    {
      provide: APP_INITIALIZER,
      useFactory: StartupServiceFactory,
      deps: [StartupService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
