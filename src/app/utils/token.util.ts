import crypto from 'crypto';

const tokenUtil = {
  generate(length: number) {
    return crypto.randomBytes(length).toString('hex');
  },
};

export default tokenUtil;
