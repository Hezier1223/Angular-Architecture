import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { SharedModule } from '../../shared/shared.module';
import { CoreModule } from '../../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule,
    CoreModule
  ],
  declarations: [ LoginComponent ],
  providers: [ LoginService ]
})
export class LoginModule {
}
