import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PassportComponent } from '../layout/passport';
import { UserLoginComponent } from './passport/login';

const routes: Routes = [
  {
    path: 'passport',
    component: PassportComponent,
    children: [
      {
        path: 'login',
        component: UserLoginComponent,
        data: {title: '登录', titleI18n: 'pro-login'},
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule {
}
