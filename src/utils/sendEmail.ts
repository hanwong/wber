import Mailgun from "mailgun-js";
const mailGunClient = new Mailgun({
  apiKey: process.env.MAILGUN_API_KEY || "993b6e7d75d0cf0fa25b8783503b1f3b-b0aac6d0-5e4b4a2c",
  domain: "sandboxe6d2e27806334e00bd796c38d343f1b9.mailgun.org"
});
const sendEmail = (subject: string, html: string) => {
  const emailData = {
    from: "hanationbear@gmail.com",
    to: "hanationbear@gmail.com",
    subject,
    html
  };
  return mailGunClient.messages().send(emailData);
};
export const sendVerificationEmail = (fullName: string, key: string) => {
  const emailSubject = `Hello! ${fullName}, please verify your email`;
  const emailBody = `Verify your email by clicking <a href="http://nuber.com/verification/${key}/">here</a>`;
  return sendEmail(emailSubject, emailBody);
};