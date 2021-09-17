import 'dotenv/config';

const appConfig = {
  env: process.env.NODE_ENV,
  port: process.env.APP_PORT,
  secret: process.env.APP_SECRET,
  url: process.env.APP_URL,
};

export default appConfig;
