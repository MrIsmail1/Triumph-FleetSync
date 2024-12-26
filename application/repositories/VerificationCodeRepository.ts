import { VerificationCodeEntity } from "../../domain/entities/VerificationCodeEntity";

export interface VerificationCodeRepository {
  findById(identifier: string): Promise<VerificationCodeEntity | null>;
  findOne(
    conditions: Partial<VerificationCodeEntity>
  ): Promise<VerificationCodeEntity | null>;
  save(verificationCode: VerificationCodeEntity): Promise<void>;
  delete(identifier: string): Promise<void>;
}
