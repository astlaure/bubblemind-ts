import 'dotenv/config';

const mailConfig = {
  from: process.env.SMTP_FROM,
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  username: process.env.SMTP_USERNAME,
  password: process.env.SMTP_PASSWORD,
  languages: ['en', 'fr'],
};

export default mailConfig;
