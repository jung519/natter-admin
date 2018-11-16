import { User } from '../../common/interfaces/user';
import * as user from '../models/users';
import * as Bluebird from 'bluebird';
import { SQ } from '../sequelize';

export class UserDao extends SQ {
  constructor() {
    super();
  }

  async getUserList(email: string): Bluebird<User[]> {
    if (email !== 'undefined') {
      return await user.User.findAll({
        where: {
          email: email
        }
      });
    } else {
      return await user.User.findAll();
    }
  }

  async getUserInfo(options: User): Bluebird<User> {
    return await user.User.findOne({
      where: {
        [this.op.or]: [{email: options.email}, {user_number: options.user_number}]
      }
    });
  }

  async resetPassword(options: any): Bluebird<any> {
    return await user.User.update({
      password: options.hash_password
    }, {
      where: {
        user_number: options.user_number
      }
    });
  }

  async putUserDetail(options: User): Bluebird<any> {
    return await user.User.update({
      user_name: options.user_name,
      introduce: options.introduce
    }, {
      where: {
        user_number: options.user_number
      }
    });
  }

}
