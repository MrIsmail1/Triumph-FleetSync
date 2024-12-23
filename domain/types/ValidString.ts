import { StringTooLongError } from "../errors/StringTooLongError";
import { StringTooShortError } from "../errors/StringTooShortError";
export class ValidString {
  private constructor(readonly value: string) {}

  public static from(value: string) {
    const trimmedValue = value.trim();
    if (trimmedValue.length < 3) {
      return new StringTooShortError();
    }
    if (trimmedValue.length > 254) {
      return new StringTooLongError();
    }
    return new ValidString(trimmedValue);
  }
  public static reconstitute(value: string) {
    return new ValidString(value);
  }
}
