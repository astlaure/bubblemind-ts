import { Model, DataTypes } from 'sequelize';
import database from '../database';

class Entity extends Model {}

Entity.init({
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(64),
    allowNull: false,
  },
  schema: {
    type: DataTypes.JSON,
    allowNull: false,
  }
}, {
  sequelize: database,
  tableName: 'entities',
});

export default Entity;
