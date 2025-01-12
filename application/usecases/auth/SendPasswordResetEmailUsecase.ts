import { MailService } from "../../services/MailService";
type Params = {
  to: string;
  subject: string;
  text: string;
  html: string;
};
export class SendPasswordResetEmailUsecase {
  public constructor(private readonly mailService: MailService) {}

  public async execute({ to, subject, text, html }: Params) {
    const emailSentOrError = await this.mailService.send({
      to: to,
      subject: subject,
      text: text,
      html: html,
    });

    return emailSentOrError;
  }
}
