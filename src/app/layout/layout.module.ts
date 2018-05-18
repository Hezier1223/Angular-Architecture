import { NgModule } from '@angular/core';
import { PassportComponent } from './passport';
import { SharedModule } from '@shared/shared.module';
import { LayoutDefaultComponent } from './default/default.component';
import { HeaderComponent } from './default/header/header.component';
import { HeaderSearchComponent } from './default/header/components/search/search.component';
import { HeaderNotifyComponent } from './default/header/components/header-notify/header-notify.component';

const COMPONENTS = [LayoutDefaultComponent, HeaderComponent, HeaderSearchComponent, HeaderNotifyComponent];
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
