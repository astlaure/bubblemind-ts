import mjml2html from 'mjml';
import fs from 'fs/promises';
import path from 'path';
import handlebars from 'handlebars';
import mailConfig from '../config/mail';
import mailer from '../core/mailer';

const languages: any = {};
const templates: any = {};

mailConfig.languages.forEach((language: string) => {
  // eslint-disable-next-line global-require,import/no-dynamic-require
  languages[language] = require(path.resolve(`mail/locales/${language}.json`));
});

const mailUtil = {
  sendMail: async (template: string, language: string, context: any) => {
    const compiledTemplate = templates[template] || await mailUtil.compileTemplate(template);

    const data = {
      ...context,
      labels: languages[language][template],
    };

    await mailer.sendMail({
      to: context.email,
      from: mailConfig.from,
      subject: data.labels.subject,
      html: compiledTemplate(data),
    });
  },
  compileTemplate: async (template: string) => {
    const mjml = await fs.readFile(path.resolve(`mail/templates/${template}.mjml`), { encoding: 'utf-8' });
    const html = mjml2html(mjml);
    templates[template] = handlebars.compile(html);
    return templates[template];
  },
};

export default mailUtil;
