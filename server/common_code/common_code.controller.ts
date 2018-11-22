import { Router } from 'express';
import { CommonCodeService } from './common_code.service';
import { CommonCodeDao } from './common_code.dao';
import { CommonCode } from '../../common/interfaces/common_code';

export const CommonCodeController = Router();
const commonCodeService = new CommonCodeService(new CommonCodeDao);

// 코드 조회
CommonCodeController.get(`/info`, (req, res) => {
  const cd = req.param('code');
  commonCodeService.getCodeInfo(cd)
  .then(result => {
    return res.json(result);
  });
});

// 하위 코드 목록 조회
CommonCodeController.get(`/list`, (req, res) => {
  const up_cd = req.param('up_cd');
  commonCodeService.getCodeList(up_cd)
  .then(result => {
    return res.json(result);
  });
});

// 공통코드 화면 - 상위코드 목록
CommonCodeController.get(`/upcd_list`, (req, res) => {
  commonCodeService.getUpCodeList()
  .then(result => {
    return res.json(result);
  });
});

// 공통코드 팝업 화면 - 저장 (create and modify)
CommonCodeController.post(`/upsert`, (req, res) => {
  const options: CommonCode = {
    cd: req.param('cd'),
    edit_cd: req.param('edit_cd'),
    up_cd: req.param('up_cd'),
    cd_name: req.param('cd_name'),
    use_yn: req.param('use_yn'),
    etc: req.param('etc')
  };
  commonCodeService.upsertCode(options)
  .then(result => {
    return res.json(result);
  });
});

// 공통코드 화면 - 상위코드 수정
CommonCodeController.put(`/upcd_modify`, (req, res) => {
  const options: CommonCode = {
    cd: req.param('cd'),
    cd_name: req.param('cd_name'),
    use_yn: req.param('use_yn'),
    etc: req.param('etc')
  };
  commonCodeService.putUpcdDetail(options)
  .then(result => {
    return res.json(result);
  });
});

