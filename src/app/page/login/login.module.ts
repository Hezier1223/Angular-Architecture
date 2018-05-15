import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { SharedModule } from '../../shared/shared.module';
import { CoreModule } from '../../core/core.module';
import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule,
    CoreModule
  ],
  declarations: [LoginComponent, LoginFormComponent],
  providers: [LoginService]
})
export class LoginModule {
}
