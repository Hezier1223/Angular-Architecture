import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { AuthService } from '@core/services/auth';
import { AuthGuard } from '@core/services/auth';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { I18NService } from '@core/services/i18n/i18n.service';
import { TitleService } from '@core/services/title';

const BASE_SERVICES = [
  AuthService,
  AuthGuard,
  I18NService,
  TitleService
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
