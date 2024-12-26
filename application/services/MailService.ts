type Params = {
  to: string;
  subject: string;
  text: string;
  html: string;
};
export interface MailService {
  send({ to, subject, text, html }: Params): Promise<any>;
}
