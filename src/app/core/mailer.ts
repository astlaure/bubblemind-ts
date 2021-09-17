import nodemailer from 'nodemailer';
import mailConfig from '../config/mail';

const mailer = nodemailer.createTransport({
  pool: true,
  host: mailConfig.host,
  port: +mailConfig.port!,
  secure: false, // use TLS
  auth: {
    user: mailConfig.username,
    pass: mailConfig.password,
  },
});

export default mailer;
