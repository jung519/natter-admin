import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonCode } from '../../../../common/interfaces/common_code';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class CommonCodeService {

  private readonly prefix;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
    this.prefix = `${environment.admin_api_url}/common_code`;
  }

  upsertCode(options: CommonCode): any {
    return this.http.post(`${this.prefix}/upsert`, options)
      .pipe(tap(result => {
        return result;
      }));
  }

  getUpCodeList(): Observable<{count, rows}> {
    return this.http.get<{count, rows}>(`${this.prefix}/upcd_list`)
      .pipe(tap(result => {
        return result;
      }));
  }

  putUpcdDetail(options: CommonCode): Observable<any> {
    return this.http.put(`${this.prefix}/upcd_modify`, options)
    .pipe(tap(result => {
      return result;
    }));
  }
}
