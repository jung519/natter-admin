import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../../../../common/interfaces/user';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class UsersService {
  private readonly prefix;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
    this.prefix = `${environment.admin_api_url}/user`;
  }

  getUserList(email: string): Observable<User[]> {
    const options = `email=${email}`;
    const aa = this.http.get<User[]>(`${this.prefix}/list?${options}`)
    .pipe(tap(result => {
      return result;
    }));
    return aa;
  }

  getUserInfo(user_number: string): Observable<User> {
    const options = `user_number=${user_number}`;
    return this.http.get<User>(`${this.prefix}/info?${options}`)
    .pipe(tap(result => {
      return result;
    }));
  }

  resetPassword(user_number): Observable<any> {
    const options = {
      user_number: user_number
    };
    return this.http.put<{}>(`${this.prefix}/resetPw`, options)
    .pipe(tap(result => {
      return result;
    }));
  }

  putUserDetail(options: User) {
    return this.http.put<{}>(`${this.prefix}/putDetail`, options)
    .pipe(tap(result => {
      return result;
    }));
  }

}
