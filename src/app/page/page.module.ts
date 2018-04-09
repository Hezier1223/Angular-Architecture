import { NgModule } from '@angular/core';

import { PageRoutingModule } from './page-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PageComponent } from './page.component';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  imports: [
    SharedModule,
    PageRoutingModule,
    DashboardModule,
  ],
  declarations: [ PageComponent ]
})
export class PageModule {
}
