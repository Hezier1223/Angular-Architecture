import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page.component';
import { AuthGuard } from '../core/service/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'login',
        loadChildren: 'app/page/login/login.module#LoginModule'
      },
      {
        path: 'dashboard',
        loadChildren: 'app/page/dashboard/dashboard.module#DashboardModule',
        canActivate: [ AuthGuard ]
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
