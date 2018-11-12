import { Injectable } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {tap} from 'rxjs/operators';

@Injectable()
export class AuthService {

  constructor(
    private jwtHelper: JwtHelperService,
    private http: HttpClient,
    private router: Router
    ) { }

  isTokenExpired() {
    const token = localStorage.getItem('access_token');
    if (token) {
      if (!this.jwtHelper.getTokenExpirationDate(token)) {
        return true;
      }
      return this.jwtHelper.isTokenExpired(token);
    } else {
      return true;
    }
  }

  signIn(param: { email: string; password: string }) {
    return this.http.post(`${environment.admin_api_url}/auth/token`, param)
      .pipe(tap((r) => {
        localStorage.setItem('access_token', (r as any).token);
      }));
  }

  logout() {
    localStorage.removeItem('access_token');
    this.router.navigateByUrl('/login');
  }

  getUserInfo() {
    const token = localStorage.getItem('access_token');
    return token ? this.jwtHelper.decodeToken(token) : {};
  }
}
