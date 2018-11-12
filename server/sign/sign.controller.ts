import { Router } from 'express';
import { validationResult } from 'express-validator/check';
import { SignService } from './sign.service';
import { NotFound } from 'ts-httpexceptions';
import * as jwt from 'jsonwebtoken';
import config from '../config/config';
import SignDao from './sign.dao';

export const signController = Router();
const signService = new SignService(new SignDao);

signController.post('/auth/token', (req, res) => {
  const options: any = {};
  options.email = req.param('email');
  options.password = req.param('password');
  signService.getSignPermission(options)
  .then(returnValue => {
    if (!returnValue) {
      return new NotFound('없는 아이디 입니다.');
    }
    const token = jwt.sign(returnValue, config.jwt.admin.secret, {expiresIn: config.jwt.admin.expiresIn});
    return {token};
  })
  .catch(err => {
    console.log(err);
    return err;
  });
});
