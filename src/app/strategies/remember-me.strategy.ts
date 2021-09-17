import { Strategy } from 'passport-remember-me-extended';
import User from '../models/user.model';
import tokenUtil from '../utils/token.util';

const RememberMeStrategy = new Strategy(async (rememberToken, done) => {
  try {
    const user = await User.findOne({ where: { rememberToken } });

    if (!user) {
      return done(null, false);
    }

    user.rememberToken = null;
    await user.save();
    return done(null, user);
  } catch (err) {
    return done(err);
  }
}, async (user, done) => {
  try {
    const rememberToken = tokenUtil.generate(32);
    // eslint-disable-next-line no-param-reassign
    user.rememberToken = rememberToken;
    await user.save();
    return done(null, rememberToken);
  } catch (err) {
    return done(err);
  }
});

export default RememberMeStrategy;
