import { Router } from 'express';
import { UserService } from './user.service';
import { UserDao } from './user.dao';

export const UserController = Router();
const userService = new UserService(new UserDao);

// 유저목록 및 유저검색
UserController.get(`/list`, (req, res) => {
  const email = req.param('email');
  userService.getUserList(email)
  .then(result => {
    return res.json(result);
  });
});

// 유저정보 조회
UserController.get(`/info`, (req, res) => {
  const options = {
    user_number: req.param('user_number'),
    email: req.param('email')
  };
  userService.getUserInfo(options)
  .then(result => {
    return res.json(result);
  });
});

// 비밀번호 초기화 (12345678)
UserController.put('/resetPw', (req, res) => {
  const user_number = req.param('user_number');
  userService.resetPassword(Number(user_number))
  .then(result => {
    return res.json(result);
  });
});

// 유저 정보 수정
UserController.put('/putDetail', (req, res) => {
  const options = {
    user_number: Number(req.param('user_number')),
    email: req.param('email'),
    user_name: req.param('user_name'),
    introduce: req.param('introduce')
  };
  userService.putUserDetail(options)
  .then(result => {
    return res.json(result);
  });
});
