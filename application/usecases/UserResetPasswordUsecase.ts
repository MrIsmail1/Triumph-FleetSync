import { UserNotFoundError } from "../../domain/errors/UserNotFoundError";
import { UserPasswordUpdateFailedError } from "../../domain/errors/UserPasswordUpdateFailedError";
import { VerificationCodeNotFoundError } from "../../domain/errors/VerificationCodeNotFoundError";
import { Password } from "../../domain/types/Password";
import { VerificationCodeType } from "../../domain/types/VerificationCodeType";
import { SessionRepository } from "../repositories/SessionRepository";
import { UserRepository } from "../repositories/UserRepository";
import { VerificationCodeRepository } from "../repositories/VerificationCodeRepository";
import { PasswordHasherService } from "../services/PasswordHasherService";

type ResetPasswordParams = {
  password: string;
  verificationCode: string;
};

export class UserResetPasswordUsecase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly verificationCodeRepository: VerificationCodeRepository,
    private readonly sessionRepository: SessionRepository,
    private readonly passwordHasher: PasswordHasherService
  ) {}
  async execute({ password, verificationCode }: ResetPasswordParams) {
    const verificationCodeExits =
      await this.verificationCodeRepository.findUnexpired({
        identifier: verificationCode,
        type: VerificationCodeType.PasswordReset,
        expiresAt: new Date(),
      });
    if (!verificationCodeExits) {
      return new VerificationCodeNotFoundError();
    }
    const user = await this.userRepository.findById(
      verificationCodeExits.userId
    );

    if (!user) {
      return new UserNotFoundError();
    }
    const passwordOrError = Password.from(password);
    if (passwordOrError instanceof Error) {
      return passwordOrError;
    }
    const hashedPassword = await this.passwordHasher.hash(passwordOrError);
    user.passwordHash = hashedPassword;
    const updatedUser = await this.userRepository.update(user);

    if (!updatedUser) {
      return new UserPasswordUpdateFailedError();
    }
    await this.verificationCodeRepository.delete(
      verificationCodeExits.identifier
    );
    await this.sessionRepository.deleteByUserId(user.identifier);
    const { passwordHash: _, ...userWithoutPassword } = updatedUser;
    return userWithoutPassword;
  }
}
