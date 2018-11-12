import * as Sequelize from 'sequelize';
import * as Bluebird from 'bluebird';
import { type } from 'os';

const db = 'natter';
const username = 'root';
const password = 'Wjdgus123!';

const sequelize = new Sequelize(db, username, password, {
  dialect: 'mysql',
  port: 3306,
});

export default sequelize;

// sequelize.authenticate();
export class SQ {
  sequelizeQuery(query: any, options: any): Bluebird<any> {
    return sequelize.query(query, options);
  }

  queryType(type: string): any {
    return sequelize.QueryTypes[type];
  }
}
