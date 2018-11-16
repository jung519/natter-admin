import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonCode } from '../../../common/interfaces/common_code';
import { common_code } from '../../../common/common_enum';
import { tap } from 'rxjs/operators';
import * as qs from 'query-string';

@Injectable()
export class CommonCodeService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  // 코드 조회
  getCodeInfo(code: common_code) {
    const options = qs.parse(code);
    return this.http.get(`${environment.admin_api_url}/common_code/info?${options}`)
    .pipe(tap(result => {
      return result;
    }));
  }

  // 하위 코드 목록 조회
  getCodeList(up_cd: common_code) {
    const options = qs.parse(up_cd);
    return this.http.get(`${environment.admin_api_url}/common_code/list?${options}`)
    .pipe(tap(result => {
      return result;
    }));
  }

}
