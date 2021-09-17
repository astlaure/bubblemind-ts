import passport from 'passport';
import LocalStrategy from '../strategies/local.strategy';
import RememberMeStrategy from '../strategies/remember-me.strategy';
import User from '../models/user.model';

passport.use(LocalStrategy);
passport.use(RememberMeStrategy);

passport.serializeUser((user, done) => done(null, (user as User).id));

passport.deserializeUser(async (id: number, done) => {
  try {
    const user = await User.findByPk(1);
    return done(null, user);
  } catch (err) {
    return done(err);
  }
});

export default passport;
