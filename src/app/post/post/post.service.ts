import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Post } from '../../../../common/interfaces/post';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CommonFnService } from '../../core/common-fn.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private readonly prefix;

  constructor(
    private http: HttpClient,
    private router: Router,
    private commonFn: CommonFnService
  ) {
    this.prefix = `${environment.admin_api_url}/post`;
  }

  getPostList(search_info: Post): Observable<Post[]> {
    const options = this.commonFn.makeQueryString(search_info);
    return this.http.get<Post[]>(`${this.prefix}/list?${options}`)
    .pipe(tap(result => {
      return result;
    }));
  }

  getPostInfo(post_number: number): Observable<any> {
    const options = `post_number=${post_number}`;
    return this.http.get(`${this.prefix}/info?${options}`)
    .pipe(tap(result => {
      return result;
    }));
  }

  putPostInfo(post_info: Post): Observable<any> {
    return this.http.put(`${this.prefix}/put_info`, post_info)
    .pipe(tap(result => {
      return result;
    }));
  }
}
