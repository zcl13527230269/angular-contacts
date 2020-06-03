// 0. 路由模块初始化
// 1. 配置路由表
//    请求 xxx 路径的时候，导航到 xxx 组件
// 2. 配置路由出口及路由导航链接
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/contacts', // 当请求根路径的时候，跳转到 contacts 联系人组件
  //   pathMatch: 'full' // 必须完全匹配到路径的时候才做重定向
  // },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
