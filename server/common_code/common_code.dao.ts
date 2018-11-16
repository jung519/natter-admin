import { SQ } from '../sequelize';
import { CommonCode } from '../../common/interfaces/common_code';
import { CommonCodeModel } from '../models/common_code';
import * as Bluebird from 'bluebird';

export class CommonCodeDao extends SQ {
  constructor() {
    super();
  }

  async getCodeInfo(cd: string): Bluebird<CommonCode> {
    return await CommonCodeModel.findOne({
      where: {
        cd: cd
      }
    });
  }

  async getCodeList(up_cd: string): Bluebird<CommonCode[]> {
    return await CommonCodeModel.findAll({
      where: {
        up_cd: up_cd
      },
      order: [
        ['cs', 'DESC']
      ]
    });
  }
}
