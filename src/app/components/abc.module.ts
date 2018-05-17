import { ModuleWithProviders, NgModule } from '@angular/core';
import { AdGlobalFooterModule } from './global-footer/global-footer.module';
// region: all modules

const MODULES = [
  AdGlobalFooterModule,
];

// endregion

@NgModule({
  imports: [],
  exports: MODULES,
})
export class DelonABCRootModule {
}

@NgModule({exports: MODULES})
export class DelonABCModule {
  static forRoot(): ModuleWithProviders {
    return {ngModule: DelonABCRootModule};
  }
}
