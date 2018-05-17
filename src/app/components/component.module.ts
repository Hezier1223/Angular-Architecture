import { ModuleWithProviders, NgModule } from '@angular/core';
import { GlobalFooterModule } from './global-footer/global-footer.module';
// region: all modules

const MODULES = [
  GlobalFooterModule,
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
