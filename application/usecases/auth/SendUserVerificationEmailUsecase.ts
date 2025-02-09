import { VerificationEmailUnsentError } from "../../../domain/errors/VerificationEmailUnsentError";
import { MailService } from "../../services/MailService";
type Params = {
  to: string;
  subject: string;
  text: string;
  html: string;
};

export class SendUserVerificationEmailUsecase {
  public constructor(private readonly mailService: MailService) {}

  public async execute({
    to,
    subject,
    text,
    html,
  }: Params): Promise<boolean | VerificationEmailUnsentError> {
    const emailSentOrError = await this.mailService.send({
      to,
      subject,
      text,
      html,
    });
    if (emailSentOrError instanceof Error) {
      return new VerificationEmailUnsentError();
    }
    return true;
  }
}
