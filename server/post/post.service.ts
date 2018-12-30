import { PostDao } from './post.dao';
import * as Bluebird from 'bluebird';
import { Post } from '../../common/interfaces/post';

export class PostService {
  constructor(
    private postDao: PostDao
  ) {}

  getPostList(options: Post): Bluebird<Post[]> {
    try {
      return this.postDao.getPostList(options);
    } catch (err) {
      throw err;
    }
  }

  getPostInfo(post_number: number): Bluebird<any> {
    try {
      return this.postDao.getPostInfo(post_number);
    } catch (err) {
      throw err;
    }
  }

  putPostInfo(options: Post): Bluebird<any> {
    try {
      return this.postDao.putPostInfo(options);
    } catch (err) {
      throw err;
    }
  }

}
