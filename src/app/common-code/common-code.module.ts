import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonCodeRoutingModule } from './common-code-routing.module';
import { CommonCodeComponent } from './common-code/common-code.component';
import { CommonCodeService } from './common-code/common-code.service';

@NgModule({
  imports: [
    CommonModule,
    CommonCodeRoutingModule,
    FormsModule
  ],
  declarations: [
    CommonCodeComponent
  ],
  providers: [
    CommonCodeService
  ]
})
export class CommonCodeModule { }
