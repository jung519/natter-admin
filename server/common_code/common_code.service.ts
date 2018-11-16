import { CommonCodeDao } from './common_code.dao';
import { CommonCode } from '../../common/interfaces/common_code';

export class CommonCodeService {
  constructor(
    private commonCodeDao: CommonCodeDao
  ) { }

  async getCodeInfo(cd: string) {
    try {
      return await this.commonCodeDao.getCodeInfo(cd);
    } catch (err) {
      throw err;
    }
  }

  async getCodeList(up_cd: string) {
    try {
      return await this.commonCodeDao.getCodeList(up_cd);
    } catch (err) {
      throw err;
    }
  }
}
