import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PassportComponent } from '../layout/passport';
import { UserLoginComponent } from './passport/login';
import { UserRegisterComponent } from './passport/register';
import { UserRegisterResultComponent } from './passport/register-result';

const routes: Routes = [
  {
    path: 'passport',
    component: PassportComponent,
    children: [
      {
        path: 'login',
        component: UserLoginComponent,
        data: {title: '登录', titleI18n: 'pro-login'},
      },
      {
        path: 'register',
        component: UserRegisterComponent,
        data: {title: '注册', titleI18n: 'pro-register'},
      },
      {
        path: 'register-result',
        component: UserRegisterResultComponent,
        data: {title: '注册结果', titleI18n: 'pro-register-result'},
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule {
}
