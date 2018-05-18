import { ModuleWithProviders, NgModule } from '@angular/core';
import { GlobalFooterModule } from './global-footer';
import { AdNoticeIconModule } from './notice-icon';
// region: all modules

const MODULES = [
  GlobalFooterModule,
  AdNoticeIconModule
];

// endregion

@NgModule({
  imports: [],
  exports: MODULES,
})
export class ComponentRootModule {
}

@NgModule({exports: MODULES})
export class ComponentModule {
  static forRoot(): ModuleWithProviders {
    return {ngModule: ComponentRootModule};
  }
}
