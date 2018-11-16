import { Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { SignComponent } from './sign/sign.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate : [AuthGuard],
    children : [
      {path: '', loadChildren: 'app/dashboard/dashboard.module#DashboardModule'},
      {path: '', loadChildren: 'app/users/users.module#UsersModule'},
      {path: '', loadChildren: 'app/common-code/common-code.module#CommonCodeModule'}
    ]
  },
  {
    path: 'sign',
    component: SignComponent
  }
];
