import { Component, OnInit } from '@angular/core';
import { CodeService } from '../../core/common-code.service';
import { PostService } from './post.service';
import { common_code } from '../../../../common/common_enum';
import { CommonCode } from '../../../../common/interfaces/common_code';
import { Post } from '../../../../common/interfaces/post';


@Component({
  selector: 'post',
  templateUrl: './post.component.html'
})
export class PostComponent implements OnInit {
  us: CommonCode[];
  search_info: Post;
  post_list: Post[];
  post_dtl: Post;

  constructor(
    private postService: PostService,
    private codeService: CodeService
  ) { }

  ngOnInit() {
    this.initInterface();
    this.getCommonCode();
  }

  initInterface() {
    this.search_info = {
      post_status: '',
      email: ''
    };
    this.post_dtl = {
      post_number: null,
      email: '',
      content: '',
      create_date: null
    };
  }

  getCommonCode() {
    this.codeService.getCodeList(common_code.post_status).subscribe(r => this.us = r);
  }

  getPostList() {
    this.postService.getPostList(this.search_info)
    .subscribe(r => this.post_list = r);
  }

  getPostInfo(post_number: number) {
    this.postService.getPostInfo(post_number)
    .subscribe(r => this.post_dtl = r);
  }

  putPostInfo() {
    this.postService.putPostInfo(this.post_dtl)
    .subscribe(r => {
      alert('변경되었다');
    });
  }
}
