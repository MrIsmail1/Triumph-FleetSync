import { VerificationCodeType } from "../types/VerificationCodeType";

export class VerificationCodeEntity {
  private constructor(
    public identifier: string,
    public userId: string,
    public type: VerificationCodeType,
    public expiresAt: Date,
    public createdAt: Date,
    public updatedAt: Date
  ) {}

  public static create(
    userId: string,
    type: VerificationCodeType,
    expiresAt: Date
  ): VerificationCodeEntity {
    const identifier = crypto.randomUUID();
    const createdAt = new Date();
    const updatedAt = new Date();
    return new VerificationCodeEntity(
      identifier,
      userId,
      type,
      expiresAt,
      createdAt,
      updatedAt
    );
  }
}
