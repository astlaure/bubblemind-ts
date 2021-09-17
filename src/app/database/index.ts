import { Sequelize } from 'sequelize';
import databaseConfig from '../config/database';

const database = new Sequelize(databaseConfig[process.env.NODE_ENV!]);

export default database;
