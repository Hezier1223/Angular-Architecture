import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { SeoService } from './seo/seo.service';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { I18NService } from '@core/i18n/i18n.service';

const BASE_SERVICES = [
  AuthService,
  AuthGuard,
  SeoService,
  I18NService
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
      parentModule: CoreModule,
  ) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        ...BASE_SERVICES
      ]
    };
  }
}
