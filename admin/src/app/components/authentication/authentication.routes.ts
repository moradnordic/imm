import { Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export default [
  {
    path: 'log-in',
    component: LogInComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: '404',
    component: ErrorPageComponent
  }
] as Routes;

