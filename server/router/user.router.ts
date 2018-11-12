import { Router } from 'express';
import { validationResult } from 'express-validator/check';
import { UserService } from '../service/user.service';

export const userRouter = Router();
const userService =  new UserService();

userRouter.get('/userList', (req, res) => {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(422).json(err.array());
  }

  const user = userService.getList();
  console.log('userList =', user);
  return user.then(u => res.json(u));

});

userRouter.post('/auth/token', (req, res) => {
  console.log('req =', req);
});
