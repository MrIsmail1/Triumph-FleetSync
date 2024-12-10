import { PasswordBadFormatError } from "../errors/PasswordBadFormatError";

export class Password {
  private constructor(readonly password: string) {}

  public static from(value: string) {
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (passwordPattern.test(value.trim())) {
      return new PasswordBadFormatError();
    }
    return new Password(value.trim());
  }
}
