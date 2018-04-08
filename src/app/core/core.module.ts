import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ComposeMessageComponent } from './component/compose-message/compose-message.component';
import { HeaderComponent } from './component/header/header.component';
import { AuthService } from './service/auth.service';
import { AuthGuard } from './service/auth-guard.service';

const BASE_SERVICES = [
  AuthService,
  AuthGuard
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
  declarations: [ ...BASE_COMPONENTS ],
  exports: [ ...BASE_COMPONENTS ],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        ...BASE_SERVICES
      ]
    };
  }
}
