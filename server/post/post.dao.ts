import { Post } from '../../common/interfaces/post';
import * as Bluebird from 'bluebird';
import { SQ } from '../sequelize';
import * as post from '../models/posts';
import * as user from '../models/users';

export class PostDao extends SQ {
  constructor() {
    super();
  }

  async getPostList(options: Post): Bluebird<Post[]> {
    const { sql, replacements } = await this.getPostListQuery(options);
    const [result] = await this.sequelizeQuery(sql, {replacements, type: this.queryType['SELECT']});
    return result;
  }

  private getPostListQuery(options: Post): {sql, replacements} {
    const replacements = {};
    replacements['email'] = options.email;
    replacements['post_status'] = options.post_status;
    let sql = `
      SELECT p.post_number, left(p.content, 10) AS content, u.email
      FROM natter.posts p
          INNER JOIN natter.users u on p.user_number = u.user_number
      WHERE 1=1`;
    if (options.email) {
      sql += ` AND u.email = :email`;
    }
    if (options.post_status) {
      sql += ` AND p.post_status = :post_status`;
    }
    sql += `
      ORDER BY p.create_date DESC
      LIMIT 20
    `;
    return {sql, replacements};
  }

  async getPostInfo(post_number: number): Bluebird<any> {
    const { sql, replacements } = await this.getPostInfoQuery(post_number);
    const [[result]] = await this.sequelizeQuery(sql, {replacements, type: this.queryType['SELECT']});
    return {...result};
  }

  private getPostInfoQuery(post_number: number): {sql, replacements} {
    const replacements = {};
    const sql = `
      SELECT p.post_number, p.content, u.email, u.user_name, p.post_status, p.create_date, p.del_yn
      , IFNULL(pn.like_cnt, 0) AS like_cnt, h.hashtag, CASE WHEN p.img_number IS NULL THEN 'N' ELSE 'Y' END AS img_chk
      FROM natter.posts p
          INNER JOIN natter.users u ON p.user_number = u.user_number
          LEFT JOIN (
            SELECT post_number, COUNT(*) AS like_cnt
            FROM natter.post_like
            WHERE use_yn = 'Y'
            GROUP BY post_number
          )pn ON p.post_number = pn.post_number
          LEFT JOIN  (
            SELECT post_number, GROUP_CONCAT(hash_tag) AS hashtag
            FROM natter.hashtag
            GROUP BY post_number
          )h ON p.post_number = h.post_number
      WHERE p.post_number = :post_number;
    `;
    replacements['post_number'] = post_number;
    return {sql, replacements};
  }

  async putPostInfo(options: Post): Bluebird<any> {
    return post.Post.update({
      post_status: options.post_status,
      del_yn: options.del_yn,
      update_date: new Date()
    }, {
      where: {
        post_number: options.post_number
      }
    });
  }
}
