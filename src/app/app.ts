import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import helmet from 'helmet';
import csurf from 'csurf';
import sessionFileStore from 'session-file-store';
import csrfMiddleware from './middlewares/csrf.middleware';
import appRouter from './routers/app.router';
import errorHandler from './handlers/error.handler';
import loginRouter from './routers/login.router';
import passwordRouter from './routers/password.router';
import security from './middlewares/security.middleware';

const FileStore = sessionFileStore(session);
const app = express();

app.use(express.static('public', { index: false }));
app.use('/uploads', express.static('storage/uploads'));
app.use('/attachments', express.static('mail/attachments'));
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: process.env.APP_SECRET!,
  store: new FileStore({
    path: 'storage/sessions',
  }),
  resave: true,
  saveUninitialized: true,
}));
app.use(security.initialize());
app.use(security.session());
app.use(security.authenticate('remember-me'));
app.use(csurf());

app.use(csrfMiddleware);
app.use('/api/auth', loginRouter);
app.use('/api/passwords', passwordRouter);
app.use(appRouter);
app.use(errorHandler);

export default app;
