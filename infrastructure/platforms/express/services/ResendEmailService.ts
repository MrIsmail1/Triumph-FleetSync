import { MailService } from "../../../../application/services/MailService";
import resend from "../src/config/resend";

type Params = {
  to: string;
  subject: string;
  text: string;
  html: string;
};

export class ResendEmailService implements MailService {
  public async send({ to, subject, text, html }: Params) {
    return await resend.emails.send({
      from: "onboarding@resend.dev",
      to: to,
      subject: subject,
      text: text,
      html: html,
    });
  }
}
