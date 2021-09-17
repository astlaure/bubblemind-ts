import { Model, DataTypes } from 'sequelize';
import database from '../database';

class PasswordReset extends Model {
  id!: number;
  email!: string;
  token!: string;

  readonly createdAt!: string;
  readonly updatedAt!: string;
}

PasswordReset.init({
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  token: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize: database,
  tableName: 'password_resets',
});

export default PasswordReset;
