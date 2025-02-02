import { UserRepository } from "../../../../../application/repositories/UserRepository";
import { VerificationCodeRepository } from "../../../../../application/repositories/VerificationCodeRepository";
import { MailService } from "../../../../../application/services/MailService";
import { SendUserVerificationEmailUsecase } from "../../../../../application/usecases/auth/SendUserVerificationEmailUsecase";
import { VerificationCodeCreateUsecase } from "../../../../../application/usecases/auth/VerificationCodeCreateUsecase";
import { UserDeleteUsecase } from "../../../../../application/usecases/user/UserDeleteUsecase";
import { UserShowProfileUsecase } from "../../../../../application/usecases/user/UserShowProfileUsecase";
import { UsersListUsecase } from "../../../../../application/usecases/user/UsersListUsecase";
import { UserUpdateProfileUsecase } from "../../../../../application/usecases/user/UserUpdateProfileUsecase";
import { VerificationCodeType } from "../../../../../domain/types/VerificationCodeType";
import { APP_ORIGIN } from "../constants/env";
import {NOT_FOUND, OK} from "../constants/http";
import appAssert from "../utils/appAssert";
import catchErrors from "../utils/catchErrors";
import { oneYearFromNow } from "../utils/date";
import { getVerifyEmailTemplate } from "../utils/emailTemplates";
import { mapDomainErrorToHttp } from "../utils/errorsMapper";
import { AccessTokenPayload } from "../utils/jwt";
import {FleetGetOneUsecase} from "../../../../../application/usecases/fleet/FleetGetOneUsecase.ts";

export class UserController {
  public constructor(
    private readonly userRepository: UserRepository,
    private readonly verificationCodeRepository: VerificationCodeRepository,
    private readonly resendEmailService: MailService
  ) {}

  showProfileHandler = catchErrors(async (request, response) => {
    const currentUser = request.user as AccessTokenPayload;
    const userProfileShowUseCase = new UserShowProfileUsecase(
      this.userRepository
    );
    const userOrError = await userProfileShowUseCase.execute(
      currentUser.userIdentifier
    );

    appAssert(
      !(userOrError instanceof Error),
      ...mapDomainErrorToHttp(userOrError as Error)
    );

    response.status(OK).json(userOrError);
  });


  listUsersHandler = catchErrors(async (request, response) => {
    const currentUser = request.user as AccessTokenPayload;
    const usersListUseCase = new UsersListUsecase(this.userRepository);

    const usersOrError = await usersListUseCase.execute(
      currentUser.userIdentifier
    );
    appAssert(
      !(usersOrError instanceof Error),
      ...mapDomainErrorToHttp(usersOrError as Error)
    );
    response.status(OK).json(usersOrError);
  });

  updateUserProfileHandler = catchErrors(async (request, response) => {
    const currentUser = request.user as AccessTokenPayload;
    const dataToUpdate = request.body;
    const userUpdateProfileUsecase = new UserUpdateProfileUsecase(
      this.userRepository
    );
    const userOrError = await userUpdateProfileUsecase.execute(
      dataToUpdate.userIdentifier ?? currentUser.userIdentifier,
      currentUser.role,
      dataToUpdate
    );

    appAssert(
      !(userOrError instanceof Error),
      ...mapDomainErrorToHttp(userOrError as Error)
    );

    if (!userOrError.isVerified) {
      //create email verification code
      const verificationCodeCreateUsecase = new VerificationCodeCreateUsecase(
        this.verificationCodeRepository
      );
      const verificationCode = await verificationCodeCreateUsecase.execute(
        userOrError.identifier,
        VerificationCodeType.EmailVerification,
        oneYearFromNow()
      );

      const emailVerificationUsecase = new SendUserVerificationEmailUsecase(
        this.resendEmailService
      );
      const emailVerificationUrl = `${APP_ORIGIN}/email/verify/${verificationCode.identifier}`;

      const emailSentOrError = await emailVerificationUsecase.execute({
        to: userOrError.email.value,
        ...getVerifyEmailTemplate(emailVerificationUrl),
      });

      appAssert(
        !(emailSentOrError instanceof Error),
        ...mapDomainErrorToHttp(emailSentOrError as Error)
      );
    }

    response.status(OK).json(userOrError);
  });

  deleteUserHandler = catchErrors(async (request, response) => {
    const currentUser = request.user as AccessTokenPayload;
    const userToDeleteId = request.params.id;
    const userDeleteUsecase = new UserDeleteUsecase(this.userRepository);
    const userDeletedOrError = await userDeleteUsecase.execute(
      currentUser.userIdentifier,
      userToDeleteId
    );

    appAssert(
      !(userDeletedOrError instanceof Error),
      ...mapDomainErrorToHttp(userDeletedOrError as Error)
    );

    response.status(OK).json({
      message: "User deleted successfully",
    });
  });
}
