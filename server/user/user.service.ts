import { UserDao } from './user.dao';
import * as Bluebird from 'bluebird';
import { User } from '../../common/interfaces/user';
import * as crypto from 'crypto';
import config from '../config/config';

export class UserService {
  constructor(
    private userDao: UserDao
  ) { }

  async getUserList(email: string): Bluebird<User[]> {
    try {
      return await this.userDao.getUserList(email);
    } catch (err) {
      throw err;
    }
  }

  async getUserInfo(options: any): Bluebird<User> {
    try {
      return await this.userDao.getUserInfo(options);
    } catch (err) {
      throw err;
    }
  }

  async resetPassword(user_number: number): Bluebird<any> {
    try {
      const hash_password = crypto.createHash(config.cryptoInfo.hash).update(config.cryptoInfo.pw).digest('base64');
      const options = {
        user_number: user_number,
        hash_password: hash_password
      };
      return await this.userDao.resetPassword(options);
    } catch (err) {
      throw err;
    }
  }

  async putUserDetail(options: User): Bluebird<any> {
    try {
      return await this.userDao.putUserDetail(options);
    } catch (err) {
      throw err;
    }
  }
}
