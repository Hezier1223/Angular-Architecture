import { NgModule } from '@angular/core';
import { PassportComponent } from './passport';
import { SharedModule } from '@shared/shared.module';
import { LayoutDefaultComponent } from './default/default.component';
import { HeaderComponent } from './default/header/header.component';
import { HeaderSearchComponent } from './default/header/components/search/search.component';
import { HeaderNotifyComponent } from './default/header/components/notify/header-notify.component';
import { HeaderTaskComponent } from './default/header/components/task/task.component';
import { HeaderIconComponent } from './default/header/components/icon/icon.component';

const COMPONENTS = [
  LayoutDefaultComponent,
  HeaderComponent,
  HeaderSearchComponent,
  HeaderNotifyComponent,
  HeaderTaskComponent,
  HeaderIconComponent
];
const PASSPORT = [PassportComponent];

@NgModule({
  imports: [
    SharedModule
  ],
  providers: [],
  declarations: [...PASSPORT, ...COMPONENTS],
  exports: [...PASSPORT],
})
export class LayoutModule {
}
