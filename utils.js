import mg from 'mailgun-js';

export const mailgun = () =>
  mg({
    apiKey: '1309d606faeb37265557797a0f30fd2c-2a9a428a-8d9ebb64',
    domain: 'mail.meni-web.com',
  });