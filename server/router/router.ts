import * as express from 'express';
// import { userRouter } from './user.router';
import { IServer } from '../interfaces/ServerInterface';
import { signController } from '../sign/sign.controller';
// import { userController } from '../user/user.controller';

export default class Routes {
    static init(server: IServer): void {
        const router: express.Router = express.Router();

        server.app.use('/', router);
        // server.app.use('/', userRouter);
        server.app.use('/', signController);
    }
}
