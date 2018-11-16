import { Component, OnInit } from '@angular/core';
import { CommonCode } from '../../../../common/interfaces/common_code';

@Component({
  selector: 'common-code',
  templateUrl: './common-code.component.html',
})
export class CommonCodeComponent implements OnInit {

  code_list: CommonCode[];
  code_dtl: CommonCode;

  constructor() { }

  ngOnInit() {
    this.initInterface();
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

}
