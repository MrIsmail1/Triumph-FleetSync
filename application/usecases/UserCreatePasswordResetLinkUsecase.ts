import { VerificationCodeEntity } from "../../domain/entities/VerificationCodeEntity";
import { TooManyPasswordResetRequestsError } from "../../domain/errors/TooManyPasswordResetRequestsError";
import { UserNotFoundError } from "../../domain/errors/UserNotFoundError";
import { Email } from "../../domain/types/Email";
import { VerificationCodeType } from "../../domain/types/VerificationCodeType";
import { UserRepository } from "../repositories/UserRepository";
import { VerificationCodeRepository } from "../repositories/VerificationCodeRepository";

export class UserCreatePasswordResetLinkUsecase {
  public constructor(
    private readonly userRepository: UserRepository,
    private readonly verificationCodeRepository: VerificationCodeRepository
  ) {}

  public async execute(
    email: string,
    requestTimeLimit: Date,
    requestExpiresAt: Date,
    baseUrl: string
  ) {
    const userEmailOrError = Email.from(email);

    if (userEmailOrError instanceof Error) {
      return userEmailOrError;
    }

    const user = await this.userRepository.findByEmail(userEmailOrError);

    if (!user) {
      return new UserNotFoundError();
    }

    const countVerificationCodes =
      await this.verificationCodeRepository.countPasswordResetAttempts({
        userId: user.identifier,
        type: VerificationCodeType.PasswordReset,
        createdAt: requestTimeLimit,
      });

    if (countVerificationCodes >= 1) {
      return new TooManyPasswordResetRequestsError();
    }

    const verificationCode = await VerificationCodeEntity.create(
      user.identifier,
      VerificationCodeType.PasswordReset,
      requestExpiresAt
    );

    await this.verificationCodeRepository.save(verificationCode);

    const resetPasswordUrl = `${baseUrl}/password/reset?code=${
      verificationCode.identifier
    }&exp=${requestExpiresAt.getTime()}`;
    return {
      userEmail: user.email.value,
      resetLink: resetPasswordUrl,
    };
  }
}
