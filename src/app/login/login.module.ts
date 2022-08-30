import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { PageForgotPasswordComponent } from './pages/page-forgot-password/page-forgot-password.component';
import { PageSignInComponent } from './pages/page-sign-in/page-sign-in.component';
import { PageSignUpComponent } from './pages/page-sign-up/page-sign-up.component';
import { PageResetPasswordComponent } from './pages/page-reset-password/page-reset-password.component';


@NgModule({
  declarations: [
    PageForgotPasswordComponent,
    PageSignInComponent,
    PageSignUpComponent,
    PageResetPasswordComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
