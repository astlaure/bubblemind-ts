import express from 'express';
import passport from 'passport';
import authMiddleware from '../middlewares/auth.middleware';

const loginRouter = express.Router();
const local = passport.authenticate('local', { session: true });

loginRouter.get('/profile', authMiddleware, (req, res) => {
  return res.json(req.user);
});

loginRouter.post('/login', local, (req, res) => {
  return res.json(req.user);
});

loginRouter.get('/logout', authMiddleware, (req, res) => {
  req.logout();
  return res.sendStatus(200);
});

export default loginRouter;
