import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page.component';
import { ComposeMessageComponent } from '../core/component/compose-message/compose-message.component';

const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    children: [
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        loadChildren: 'app/page/login/login.module#LoginModule'
      },
      {
        path: '**',
        loadChildren: 'app/page/page-not-found/page-not-found.module#PageNotFoundModule'
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class PageRoutingModule {
}
