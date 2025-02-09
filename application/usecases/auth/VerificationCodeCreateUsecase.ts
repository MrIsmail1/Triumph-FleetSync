import { VerificationCodeEntity } from "../../../domain/entities/VerificationCodeEntity";
import { VerificationCodeType } from "../../../domain/types/VerificationCodeType";
import { VerificationCodeRepository } from "../../repositories/VerificationCodeRepository";

export class VerificationCodeCreateUsecase {
  public constructor(
    private readonly verificationCodeRepository: VerificationCodeRepository
  ) {}

  public async execute(
    userId: string,
    type: VerificationCodeType,
    expiresAt: Date
  ) {
    const existingVerificationCode =
      await this.verificationCodeRepository.findById(userId);

    if (existingVerificationCode) {
      return existingVerificationCode;
    }

    const verificationCode = VerificationCodeEntity.create(
      userId,
      type,
      expiresAt
    );
    await this.verificationCodeRepository.save(verificationCode);
    return verificationCode;
  }
}
