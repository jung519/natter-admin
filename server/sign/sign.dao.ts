import { SignAuth } from '../../common/interfaces/user';
import { User } from '../models/users';
import * as Sequelize from 'sequelize';
import * as Bluebird from 'bluebird';
import { SQ } from '../sequelize';

export default class SignDao extends SQ {
  constructor() {
    super();
  }

  async getSignPermission(options: SignAuth): Bluebird<SignAuth> {
    console.log('options =', options);
    const { sql, replacements } = this.getSignPermissionQuery(options);
    const [[permissionResult]] = await this.sequelizeQuery(sql, {replacements, type: this.queryType['SELECT'] });
    console.log('permission =', permissionResult);
    return <SignAuth>{...permissionResult};
  }

  getSignPermissionQuery(options: SignAuth) {
    const replacements = {};
    const sql = `
      SELECT u.email, u.user_name, u.create_date, u.introduce, user_class, u.user_status, u.sign_fail_cnt
      , (u.password = :password) as pw_conform
      FROM users AS u
      WHERE u.email = :email
      AND u.user_class = '1'
    `;
    replacements['email'] = options.email;
    replacements['password'] = options.password;
    return {sql, replacements};
  }

  updateSignInInfo(email: string): void {
    User.update({
      sign_fail_cnt : 0
    }, {
      where : {email: email}
    });
  }

  async increaseInvalidPasswordCnt(email: string) {
    User.update({
      sign_fail_cnt : +1
    }, {
      where: {email: email}
    });
  }

}
