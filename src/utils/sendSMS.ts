import Twilio from "twilio";

const twilioClient = Twilio(process.env.TWILIO_SID || 'AC6f9595b8156fbfbd2b719e48e85392e1', process.env.TWILIO_TOKEN || 'b3135069146f8ac32c52b7796494bedf');
const sendSMS = (to: string, body: string) => {
  return twilioClient.messages.create({
    body,
    to,
    from: process.env.TWILIO_PHONE || '+13195354117'
  });
};
export const sendVerificationSMS = (to: string, key: string) =>
  sendSMS(to, `Your verification key is: ${key}`);
