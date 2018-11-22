import { Component, OnInit } from '@angular/core';
import { User } from '../../../../common/interfaces/user';
import { UsersService } from './users.service';
import { CodeService } from '../../core/common-code.service';
import { common_code } from '../../../../common/common_enum';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['../../main/main.component.css']
})
export class UsersComponent implements OnInit {
  search_email: string;
  user_list: User[];
  user_dtl: User;
  name: string;

  constructor(
    private usersService: UsersService,
    private codeService: CodeService
  ) { }

  ngOnInit() {
    this.initInterface();
    this.getUserList();
  }

  initInterface() {
    this.user_dtl = {
      user_number: 0,
      email: '',
      password: '',
      user_name: '',
      user_status: '',
      user_class: '',
      create_date: null,
      update_date: null,
      introduce: '',
      sign_fail_cnt: null
    };
  }

  getUserList() {
    this.usersService.getUserList(this.search_email)
    .subscribe(result => {
      this.user_list = result;
    });
  }

  getUserDetail(user_number) {
    this.usersService.getUserInfo(user_number)
    .subscribe(result => {
      this.user_dtl = result;
    });
  }

  resetPassword(user_number) {
    this.usersService.resetPassword(user_number)
    .subscribe(result => {
      alert((result[0] === 1) ? '비밀번호가 초기화 되었습니다.' : '이미 초기화 되었거나 \n초기화에 실패 했습니다.');
    });
  }

  putUserDetail() {
    this.usersService.putUserDetail(this.user_dtl)
    .subscribe(result => {
      alert((result[0] === 1) ? '수정되었습니다.' : '수정되지 않았습니다.');
    });
  }

  getCodeTest() {
    this.codeService.getCodeInfo(common_code.user_class)
    .subscribe(result => {
      console.log(result);
    });
  }

}
