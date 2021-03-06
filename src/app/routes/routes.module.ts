import { NgModule } from '@angular/core';

import { RoutesRoutingModule } from './routes-routing.module';
import { UserLoginComponent } from './passport/login';
import { SharedModule } from '@shared/shared.module';
import { UserRegisterComponent } from './passport/register';
import { UserRegisterResultComponent } from './passport/register-result';
import { DemoComponent } from './demo/demo.component';

const COMPONENTS = [
  UserLoginComponent,
  UserRegisterComponent,
  UserRegisterResultComponent,
  DemoComponent
];

@NgModule({
  imports: [
    SharedModule,
    RoutesRoutingModule
  ],
  declarations: [...COMPONENTS],
})
export class RoutesModule {
}
