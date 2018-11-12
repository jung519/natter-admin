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
      // {path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule'}
    ]
  },
  {
    path: 'sign',
    component: SignComponent
  }
];
