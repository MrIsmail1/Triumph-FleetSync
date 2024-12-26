import { UserEmailVerificationFailedError } from "../../domain/errors/UserEmailVerificationFailedError";
import { UserNotFoundError } from "../../domain/errors/UserNotFoundError";
import { VerificationCodeNotFoundError } from "../../domain/errors/VerificationCodeNotFoundError";
import { VerificationCodeType } from "../../domain/types/VerificationCodeType";
import { UserRepository } from "../repositories/UserRepository";
import { VerificationCodeRepository } from "../repositories/VerificationCodeRepository";

export class UserVerifyEmailUsecase {
  public constructor(
    private readonly userRepository: UserRepository,
    private readonly verificationCodeRepository: VerificationCodeRepository
  ) {}

  public async execute(code: string) {
    const verificationCode = await this.verificationCodeRepository.findOne({
      identifier: code,
      type: VerificationCodeType.EmailVerification,
      expiresAt: new Date(),
    });

    if (!verificationCode) {
      return new VerificationCodeNotFoundError();
    }

    const user = await this.userRepository.findById(verificationCode.userId);

    if (!user) {
      return new UserNotFoundError();
    }

    const updatedUser = await this.userRepository.update({
      ...user,
      isVerified: true,
    });

    if (!updatedUser) {
      return new UserEmailVerificationFailedError();
    }

    await this.verificationCodeRepository.delete(verificationCode.identifier);

    const { passwordHash: _, ...userWithoutPassword } = updatedUser;
    return userWithoutPassword;
  }
}
