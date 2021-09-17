import { QueryInterface, DataTypes } from 'sequelize';

const createUsersTable = {
  up: async (query: QueryInterface) => {
    await query.createTable('users', {
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
      createdAt: {
        type: DataTypes.DATE,
      },
      updatedAt: {
        type: DataTypes.DATE,
      },
    });
  },
  down: async (query: QueryInterface) => {
    await query.dropTable('users');
  },
};

module.exports = createUsersTable;
