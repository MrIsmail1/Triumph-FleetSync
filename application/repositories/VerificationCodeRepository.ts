import { VerificationCodeEntity } from "../../domain/entities/VerificationCodeEntity";

export interface VerificationCodeRepository {
  findById(identifier: string): Promise<VerificationCodeEntity | null>;
  findUnexpired(
    conditions: Partial<VerificationCodeEntity>
  ): Promise<VerificationCodeEntity | null>;
  countPasswordResetAttempts(
    conditions: Partial<VerificationCodeEntity>
  ): Promise<number>;
  save(verificationCode: VerificationCodeEntity): Promise<void>;
  delete(identifier: string): Promise<void>;
}
