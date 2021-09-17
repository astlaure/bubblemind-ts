import { Strategy } from 'passport-local';
import User from '../models/user.model';
import passwordUtil from '../utils/password.util';

const LocalStrategy = new Strategy({
  usernameField: 'email',
  session: true,
}, async (email, password, done) => {
  try {
    const user = await User.findOne({ where: { email } });

    if (!user || !(await passwordUtil.compare(password, user.password))) {
      return done(null, false);
    }

    return done(null, user);
  } catch (err) {
    return done(err);
  }
});

export default LocalStrategy;
