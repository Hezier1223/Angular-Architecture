import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { AuthGuard, AuthService } from '@core/services/auth';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { I18NService } from '@core/services/i18n/i18n.service';
import { TitleService } from '@core/services/title';
import { SettingsService } from '@core/services/settings';
import { ScrollService } from '@core/services/scroll';

const SERVICES = [
  AuthService,
  AuthGuard,
  I18NService,
  TitleService,
  SettingsService,
  ScrollService
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [],
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
        ...SERVICES
      ]
    };
  }
}
