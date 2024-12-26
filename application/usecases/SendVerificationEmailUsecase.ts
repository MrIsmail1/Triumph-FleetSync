import { VerificationEmailUnsentError } from "../../domain/errors/VerificationEmailUnsentError";
import { MailService } from "../services/MailService";
type Params = {
  to: string;
  subject: string;
  text: string;
  html: string;
};

export class SendVerificationEmailUsecase {
  public constructor(private readonly mailService: MailService) {}

  public async execute({ to, subject, text, html }: Params) {
    const emailSentOrError = await this.mailService.send({
      to,
      subject,
      text,
      html,
    });
    if (emailSentOrError instanceof Error) {
      return VerificationEmailUnsentError;
    }
    return { success: true };
  }
}
