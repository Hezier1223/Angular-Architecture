import { NgModule } from '@angular/core';
import { PassportComponent } from './passport';
import { SharedModule } from '@shared/shared.module';

const PASSPORT = [PassportComponent];

@NgModule({
  imports: [
    SharedModule
  ],
  providers: [],
  declarations: [...PASSPORT],
  exports: [...PASSPORT],
})
export class LayoutModule {
}
