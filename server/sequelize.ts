import * as Sequelize from 'sequelize';
import * as Bluebird from 'bluebird';
import config from './config/config';

const sequelize = new Sequelize(config.db.db, config.db.username, config.db.password, {
  dialect: config.db.dialect,
  port: config.db.post,
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
