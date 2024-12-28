import { MailService } from "../../../../application/services/MailService";
import resend from "../src/config/resend";
import { EMAIL_SENDER, NODE_ENV } from "../src/constants/env";

type Params = {
  to: string;
  subject: string;
  text: string;
  html: string;
};

const getFromEmail = () =>
  NODE_ENV === "development" ? "onboarding@resend.dev" : EMAIL_SENDER;
const getToEmail = (to: string) =>
  NODE_ENV === "development" ? "delivered@resend.dev" : to;

export class ResendEmailService implements MailService {
  public async send({ to, subject, text, html }: Params) {
    return await resend.emails.send({
      from: getFromEmail(),
      to: getToEmail(to),
      subject: subject,
      text: text,
      html: html,
    });
  }
}
