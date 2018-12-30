import * as express from 'express';
import { IServer } from '../interfaces/ServerInterface';
import { signController } from '../sign/sign.controller';
import { UserController } from '../user/user.controller';
import { CommonCodeController } from '../common_code/common_code.controller';
import { PostController } from '../post/post.controller';

export default class Routes {
    static init(server: IServer): void {
        const router: express.Router = express.Router();

        server.app.use('/', router);
        server.app.use('/user', UserController);
        server.app.use('/', signController);
        server.app.use('/common_code', CommonCodeController);
        server.app.use('/post', PostController);
    }
}
