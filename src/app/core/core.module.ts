import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ComposeMessageComponent } from './component/compose-message/compose-message.component';
import { HeaderComponent } from './component/header/header.component';
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

const BASE_COMPONENTS = [
  ComposeMessageComponent,
  HeaderComponent
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [...BASE_COMPONENTS],
  exports: [...BASE_COMPONENTS],
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
