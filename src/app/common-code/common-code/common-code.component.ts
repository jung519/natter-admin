import { Component, OnInit } from '@angular/core';
import { CommonCode } from '../../../../common/interfaces/common_code';
import { upsert, yes_no } from '../../../../common/common_enum';
import { BsModalService } from 'ngx-bootstrap';
import { CodeDetailPopupComponent } from './code-detail-popup/code-detail-popup.component';
import { CommonCodeService } from './common-code.service';
import { CodeService } from '../../core/common-code.service';

@Component({
  selector: 'common-code',
  templateUrl: './common-code.component.html',
})
export class CommonCodeComponent implements OnInit {

  upcd_list: CommonCode[];
  code_list: CommonCode[];
  code_dtl: CommonCode;
  use_yn = [
    {name: 'yes', value: yes_no.yes},
    {name: 'no', value: yes_no.no}
  ];
  upsert = {
    create: upsert.create,
    modify: upsert.modify
  };

  constructor(
    private modalService: BsModalService,
    private commonCodeService: CommonCodeService,
    private codeService: CodeService
  ) { }

  ngOnInit() {
    this.initInterface();
    this.getCodeList();
  }

  initInterface() {
    this.code_dtl = {
      cd: '',
      up_cd: '',
      cd_name: '',
      use_yn: '',
      create_date: null,
      update_date: null,
      etc: ''
    };
  }

  getCodeList() {
    this.commonCodeService.getUpCodeList()
    .subscribe(result => {
      const {count, rows} = result;
      this.upcd_list = rows;
    });
  }

  getCodeDetail(code: string) {
    this.getUpCodeDetail(code);
    this.getCodeDetailList(code);
  }

  getUpCodeDetail(code: string) {
    this.codeService.getCodeInfo(code)
    .subscribe(result => {
      this.code_dtl = result;
    });
  }

  getCodeDetailList(code: string) {
    this.codeService.getCodeList(code)
    .subscribe(result => {
      this.code_list = result;
    });
  }

  popupCodeDetail(upsert: upsert, cd?: string) {
    const initialState = {cd, upsert};
    const modal = this.modalService.show(CodeDetailPopupComponent, { initialState });
    modal.content.onClose$
      .subscribe(result => {
        cd ? this.getCodeDetail(cd) : this.getCodeList();
      });
  }

  upcdDetailModify() {
    this.commonCodeService.putUpcdDetail(this.code_dtl)
    .subscribe(result => {
      alert('수정되었습니다.');
      this.getCodeList();
    });
  }

}
