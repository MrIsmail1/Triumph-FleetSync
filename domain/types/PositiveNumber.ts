import { NegativeNumberError } from "../errors/NegativeNumberError.ts";
export class PositiveNumber {
  private constructor(public readonly value: number) {}

  public static from(value: number): PositiveNumber | NegativeNumberError {
    const number = value;
    if (number < 0) {
      return new NegativeNumberError();
    }
    return new PositiveNumber(value);
  }

  public static reconstitute(value: number) {
    return new PositiveNumber(value);
  }
}
