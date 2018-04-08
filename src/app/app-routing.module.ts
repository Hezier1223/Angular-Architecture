import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComposeMessageComponent } from './core/component/compose-message/compose-message.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: 'app/page/page.module#PageModule'
  },
  {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup'
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(
    routes,
    {enableTracing: true} // <-- debugging purposes only
  ) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
