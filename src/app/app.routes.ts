import { Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignComponent } from './sign/sign.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate : [AuthGuard],
    children : [
      {path: '', component: DashboardComponent}
    ]
  },
  {
    path: 'login',
    component: SignComponent
  }
];
