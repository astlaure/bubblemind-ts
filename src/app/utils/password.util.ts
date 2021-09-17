import bcrypt from 'bcrypt';

const passwordUtil = {
  hash: async (password: string) => bcrypt.hash(password, 10),
  compare: async (password: string, encrypted: string) => bcrypt.compare(password, encrypted),
};

export default passwordUtil;
