import { BsModalRef } from 'ngx-bootstrap';
import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { CommonCodeService } from '../common-code.service';
import { CommonCode } from '../../../../../common/interfaces/common_code';
import { yes_no, upsert } from '../../../../../common/common_enum';
import { CodeService } from '../../../core/common-code.service';

@Component({
  selector: 'code-detail-popup',
  templateUrl: './code-detail-popup.component.html',
})
export class CodeDetailPopupComponent implements OnInit {

  onClose$: EventEmitter<boolean>;
  code_info: CommonCode;
  use_yn = [
    {name: 'yes', value: yes_no.yes},
    {name: 'no', value: yes_no.no}
  ];
  @Input() cd: string;
  @Input() upsert: string;
  show: boolean = true;

  constructor(
    private bsModalRef: BsModalRef,
    private commonCodeService: CommonCodeService,
    private codeService: CodeService
  ) {
    this.onClose$ = new EventEmitter<boolean>();
  }

  ngOnInit() {
    this.initInterface();
    this.uiShowHide();
    this.getCodeInfo();
  }

  initInterface() {
    this.code_info = {
      cd: '',
      edit_cd: '',
      up_cd: this.cd ? this.cd : null,
      cd_name: '',
      use_yn: yes_no.yes,
      create_date: null,
      update_date: null,
      etc: ''
    };
  }

  uiShowHide() {
    this.upsert === upsert.create && !this.cd ? this.show = false // upcd 등록
      : this.upsert === upsert.modify ? this.show = false : this.show = true; // cd 수정 : cd 등록
  }

  getCodeInfo() {
    if (this.upsert === upsert.modify) {
      this.codeService.getCodeInfo(this.cd)
      .subscribe(result => {
        this.code_info = result;
        if (this.upsert === upsert.modify) {
          this.code_info.edit_cd = this.code_info.cd;
        }
      });
    }
  }

  closePopup() {
    this.bsModalRef.hide();
  }

  upsertCode() {
    if (this.cd && this.upsert === upsert.create) {
      this.code_info.cd = this.cd + '_' + this.code_info.edit_cd;
      this.code_info.edit_cd = this.code_info.cd;
    }
    this.commonCodeService.upsertCode(this.code_info)
    .subscribe(result => {
      alert('저장되었습니다.');
      this.onClose$.emit(true);
      this.closePopup();
    });
  }

  setUseYn(value: yes_no) {
    this.code_info.use_yn = value;
  }

}
