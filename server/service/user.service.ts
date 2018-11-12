import * as Bluebird from 'bluebird';
import { User } from '../models/users';

export class UserService {
  getList() {
    const userArray = User.findAll();
    return userArray;
  }


}
