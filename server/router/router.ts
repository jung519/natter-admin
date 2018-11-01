import * as express from 'express';
import { userRouter } from './user.router';
import { IServer } from '../interfaces/ServerInterface';

export default class Routes {
    static init(server: IServer): void {
        const router: express.Router = express.Router();

        // server.app.use('/', router);
        // users
        console.log('router in');
        server.app.use('/', userRouter);
    }
}
