import { VerificationCodeEntity } from "../../domain/entities/VerificationCodeEntity";

export interface VerificationCodeRepository {
  findById(identifier: string): Promise<VerificationCodeEntity | null>;
  save(verificationCode: VerificationCodeEntity): Promise<void>;
  delete(verificationCode: VerificationCodeEntity): Promise<void>;
}
