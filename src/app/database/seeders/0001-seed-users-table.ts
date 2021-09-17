import { QueryInterface } from 'sequelize';
import passwordUtil from '../../utils/password.util';

const seedUsersTable = {
  up: async (query: QueryInterface) => {
    await query.bulkInsert('users', [
      {
        name: 'dummy user',
        email: 'dummy@user.io',
        password: await passwordUtil.hash('password'),
      },
    ]);
  },
  down: async (query: QueryInterface) => {
    await query.bulkDelete('users', {});
  },
};

module.exports = seedUsersTable;
