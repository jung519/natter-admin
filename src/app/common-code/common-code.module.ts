import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonCodeRoutingModule } from './common-code-routing.module';
import { CommonCodeComponent } from './common-code/common-code.component';
import { CommonCodeService } from './common-code/common-code.service';
import { CodeDetailPopupComponent } from './common-code/code-detail-popup/code-detail-popup.component';
// import { SharedModule } from '../core/shared.module';
import { ModalModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    CommonCodeRoutingModule,
    ModalModule.forRoot(),
    FormsModule
    // SharedModule
  ],
  exports: [
    ModalModule
  ],
  declarations: [
    CommonCodeComponent,
    CodeDetailPopupComponent
  ],
  providers: [
    CommonCodeService
  ],
  entryComponents: [
    CodeDetailPopupComponent
  ]
})
export class CommonCodeModule { }
