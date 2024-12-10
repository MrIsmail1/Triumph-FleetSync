import { EmailBadFormatError } from "../errors/EmailBadFormatError";

export class Email {
  private constructor(public readonly value: string) {}

  public static from(value: string) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const email = value.trim();
    if (emailPattern.test(email)) {
      return new EmailBadFormatError();
    }
    return new Email(email);
  }
}
