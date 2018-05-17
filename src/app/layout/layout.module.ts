import { NgModule } from '@angular/core';
import { PassportComponent } from './passport';
import { SharedModule } from '@shared/shared.module';
import { LayoutDefaultComponent } from './default/default.component';

const COMPONENTS = [LayoutDefaultComponent];
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
