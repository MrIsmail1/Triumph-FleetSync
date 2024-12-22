import { PasswordBadFormatError } from "../errors/PasswordBadFormatError";

export class Password {
  private constructor(readonly value: string) {}

  public static from(value: string) {
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const password = value.trim();
    if (passwordPattern.test(password)) {
      return new PasswordBadFormatError();
    }
    return new Password(password);
  }
}
