import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from '@env/environment';
import { preloaderFinished } from '@core/utils/preloaderFinished';

if (environment.production) {
  enableProdMode();
}
preloaderFinished();


const bootstrap = () => {
  return platformBrowserDynamic().bootstrapModule(AppModule);
};

bootstrap().then(() => {
  if ((<any>window).appBootstrap) {
    (<any>window).appBootstrap();
  }
});
