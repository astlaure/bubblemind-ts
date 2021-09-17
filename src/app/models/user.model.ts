import { Model, DataTypes } from 'sequelize';
import database from '../database';
import { UserDto } from '../interfaces/user.interface';

class User extends Model {
  id!: number;
  name!:string;
  email!: string;
  password!: string;
  rememberToken!: string | null;

  toJSON(): UserDto {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
    };
  }
}

User.init({
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rememberToken: {
    type: DataTypes.STRING,
  },
}, {
  sequelize: database,
  tableName: 'users',
});

export default User;
