import { PartPurchaseStatusError } from "./../errors/PartPurchaseStatusError";
export class PartPurchaseStatus {
  private constructor(public readonly value: string) {}
  private static readonly values = ["PENDING", "RECEIVED", "CANCELLED"];

  public static from(
    value: string
  ): PartPurchaseStatus | PartPurchaseStatusError {
    if (!PartPurchaseStatus.values.includes(value)) {
      return new PartPurchaseStatusError();
    }
    return new PartPurchaseStatus(value);
  }

  public static reconstitute(value: string) {
    return new PartPurchaseStatus(value);
  }
}
