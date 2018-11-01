import * as Sequelize from 'sequelize';

const db = 'natter';
const username = 'root';
const password = 'Wjdgus123!';

export const sequelize = new Sequelize(db, username, password, {
  dialect: 'mysql',
  port: 3306,
});

sequelize.authenticate();
