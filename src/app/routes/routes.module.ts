import { NgModule } from '@angular/core';

import { RoutesRoutingModule } from './routes-routing.module';
import { UserLoginComponent } from './passport/login/login.component';
import { SharedModule } from '@shared/shared.module';

const COMPONENTS = [UserLoginComponent];

@NgModule({
  imports: [
    SharedModule,
    RoutesRoutingModule
  ],
  declarations: [...COMPONENTS],
})
export class RoutesModule {
}
