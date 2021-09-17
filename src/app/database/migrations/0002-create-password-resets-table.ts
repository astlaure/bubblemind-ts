import { QueryInterface, DataTypes } from 'sequelize';

const createPasswordResetsTable = {
  up: async (query: QueryInterface) => {
    await query.createTable('password_resets', {
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
      createdAt: {
        type: DataTypes.DATE,
      },
      updatedAt: {
        type: DataTypes.DATE,
      },
    });
  },
  down: async (query: QueryInterface) => {
    await query.dropTable('password_resets');
  },
};

module.exports = createPasswordResetsTable;
