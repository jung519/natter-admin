import { NgModule } from '@angular/core';
import { CommonCodeComponent } from './common-code/common-code.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'common_code',
    component: CommonCodeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonCodeRoutingModule { }
