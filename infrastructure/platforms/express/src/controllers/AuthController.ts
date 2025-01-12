import { SessionRepository } from "../../../../../application/repositories/SessionRepository";
import { UserRepository } from "../../../../../application/repositories/UserRepository";
import { VerificationCodeRepository } from "../../../../../application/repositories/VerificationCodeRepository";
import { SendPasswordResetEmailUsecase } from "../../../../../application/usecases/auth/SendPasswordResetEmailUsecase";
import { SendUserVerificationEmailUsecase } from "../../../../../application/usecases/auth/SendUserVerificationEmailUsecase";
import { SessionCreateUsecase } from "../../../../../application/usecases/auth/SessionCreateUsecase";
import { UserCreatePasswordResetLinkUsecase } from "../../../../../application/usecases/auth/UserCreatePasswordResetLinkUsecase";
import { UserLoginUsecase } from "../../../../../application/usecases/auth/UserLoginUsecase";
import { UserRegisterUsecase } from "../../../../../application/usecases/auth/UserRegisterUsecase";
import { UserVerifyEmailUsecase } from "../../../../../application/usecases/auth/UserVerifyEmailUsecase";
import { VerificationCodeCreateUsecase } from "../../../../../application/usecases/auth/VerificationCodeCreateUsecase";
import { VerificationCodeType } from "../../../../../domain/types/VerificationCodeType";
import { BcryptPasswordHasherService } from "../../services/BcryptPasswordHasherService";
import { ResendEmailService } from "../../services/ResendEmailService";
import { APP_ORIGIN } from "../constants/env";

import { UserResetPasswordUsecase } from "../../../../../application/usecases/auth/UserResetPasswordUsecase";
import {
  CREATED,
  INTERNAL_SERVER_ERROR,
  OK,
  UNAUTHORIZED,
} from "../constants/http";
import {
  emailSchema,
  loginSchema,
  passwordResetSchema,
  registerSchema,
  verificationCodeSchema,
} from "../schemas/authSchema";
import appAssert from "../utils/appAssert";
import catchErrors from "../utils/catchErrors";
import {
  clearAuthCookies,
  getAccessTokenCookieOptions,
  getRefreshTokenCookieOptions,
  setAuthCookies,
} from "../utils/cookies";
import {
  fiveMinutesAgo,
  ONE_DAY_MS,
  oneHourFromNow,
  oneYearFromNow,
  thirtyDaysFromNow,
} from "../utils/date";
import {
  getPasswordResetTemplate,
  getVerifyEmailTemplate,
} from "../utils/emailTemplates";
import { mapDomainErrorToHttp } from "../utils/errorsMapper";

import {
  RefreshTokenPayload,
  refreshTokenSignOptions,
  signToken,
  verifyToken,
} from "../utils/jwt";

export class AuthController {
  public constructor(
    private readonly userRepository: UserRepository,
    private readonly verificationCodeRepository: VerificationCodeRepository,
    private readonly sessionRepository: SessionRepository,
    private readonly bcryptPasswordHasher: BcryptPasswordHasherService,
    private readonly resendEmailService: ResendEmailService
  ) {}

  registerHandler = catchErrors(async (request, response) => {
    //validate user using zod
    const validatedUserData = registerSchema.parse({
      ...request.body,
      userAgent: request.headers["user-agent"],
    });
    //register user
    const userRegisterUsecase = new UserRegisterUsecase(
      this.userRepository,
      this.bcryptPasswordHasher
    );
    const userOrError = await userRegisterUsecase.execute(
      validatedUserData.firstName,
      validatedUserData.lastName,
      validatedUserData.email,
      validatedUserData.password,
      "client"
    );
    //if error return error
    appAssert(
      !(userOrError instanceof Error), // Assert no error occurred
      ...mapDomainErrorToHttp(userOrError as Error) // Map the error to HTTP response
    );

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
    //create session
    const sessionCreateUsecase = new SessionCreateUsecase(
      this.sessionRepository
    );
    const session = await sessionCreateUsecase.execute(
      userOrError.identifier,
      thirtyDaysFromNow(),
      validatedUserData.userAgent
    );

    if (session) {
      //create refresh token and access token
      const sessionInfo = { sessionIdentifier: session.identifier };

      const accessToken = signToken({
        ...sessionInfo,
        userIdentifier: userOrError.identifier,
      });
      const refreshToken = signToken(sessionInfo, refreshTokenSignOptions);
      return setAuthCookies({ response, refreshToken, accessToken })
        .status(CREATED)
        .json(userOrError);
    }
  });

  loginHandler = catchErrors(async (request, response) => {
    const validatedUserData = loginSchema.parse({
      ...request.body,
      userAgent: request.headers["user-agent"],
    });

    const userLoginUsecase = new UserLoginUsecase(
      this.userRepository,
      this.bcryptPasswordHasher
    );
    const userOrError = await userLoginUsecase.execute(
      validatedUserData.email,
      validatedUserData.password
    );
    appAssert(
      !(userOrError instanceof Error),
      ...mapDomainErrorToHttp(userOrError as Error)
    );

    const sessionCreateUsecase = new SessionCreateUsecase(
      this.sessionRepository
    );
    const session = await sessionCreateUsecase.execute(
      userOrError.identifier,
      thirtyDaysFromNow(),
      validatedUserData.userAgent
    );

    if (session) {
      //create refresh token and access Token
      const refreshToken = signToken(
        { sessionIdentifier: session.identifier },
        refreshTokenSignOptions
      );

      const accessToken = signToken({
        sessionIdentifier: session.identifier,
        userIdentifier: userOrError.identifier,
        role: userOrError.role.value,
      });

      return setAuthCookies({ response, accessToken, refreshToken })
        .status(OK)
        .json({
          message: "Login successful",
        });
    }
  });

  logoutHandler = catchErrors(async (request, response) => {
    const accessToken = request.cookies.accessToken as string | undefined;
    const { payload } = verifyToken(accessToken || "");
    if (payload) {
      await this.sessionRepository.delete(payload.sessionIdentifier);
    }
    return clearAuthCookies(response)
      .status(OK)
      .json({ message: "Logout successful" });
  });

  refreshHandler = catchErrors(async (request, response) => {
    const refreshToken = request.cookies.refreshToken as string | undefined;
    appAssert(
      refreshToken,
      UNAUTHORIZED,
      "RefreshTokenMissingError",
      "No refresh token provided"
    );
    const { payload } = verifyToken<RefreshTokenPayload>(refreshToken, {
      secret: refreshTokenSignOptions.secret,
    });

    appAssert(
      payload,
      UNAUTHORIZED,
      "InvalidRefreshTokenError",
      "Invalid token"
    );

    const session = await this.sessionRepository.findById(
      payload.sessionIdentifier
    );

    const nowDate = Date.now();
    appAssert(
      session && session.expiresAt.getTime() > nowDate,
      UNAUTHORIZED,
      "SessionExpiredError",
      "Session expired"
    );

    //refresh session if it expires in 1 day
    const sessionNeedsRefresh =
      session.expiresAt.getTime() - nowDate < ONE_DAY_MS;
    if (sessionNeedsRefresh) {
      session.expiresAt = thirtyDaysFromNow();
      await this.sessionRepository.save(session);
    }

    const newRefreshToken = sessionNeedsRefresh
      ? signToken(
          {
            sessionIdentifier: session.identifier,
          },
          refreshTokenSignOptions
        )
      : undefined;

    const accessToken = signToken({
      sessionIdentifier: session.identifier,
      userIdentifier: session.userId,
    });

    if (newRefreshToken) {
      response.cookie(
        "refreshToken",
        newRefreshToken,
        getRefreshTokenCookieOptions()
      );
    }

    return response
      .status(OK)
      .cookie("accessToken", accessToken, getAccessTokenCookieOptions())
      .json({
        message: "Access Token refreshed",
      });
  });

  verifyEmailHandler = catchErrors(async (request, response) => {
    const verificationCode = verificationCodeSchema.parse(request.params.code);
    const userVerifyEmailUsecase = new UserVerifyEmailUsecase(
      this.userRepository,
      this.verificationCodeRepository
    );
    const userOrError = await userVerifyEmailUsecase.execute(verificationCode);
    appAssert(
      !(userOrError instanceof Error),
      ...mapDomainErrorToHttp(userOrError as Error)
    );

    return response.status(OK).json({
      message: "User email verified successfully",
    });
  });

  sendPasswordResetHandler = catchErrors(async (request, response) => {
    const userEmail = emailSchema.parse(request.body.email);
    const userCreatePasswordResetLinkUsecase =
      new UserCreatePasswordResetLinkUsecase(
        this.userRepository,
        this.verificationCodeRepository
      );
    const passwordResetLinkDataOrError =
      await userCreatePasswordResetLinkUsecase.execute(
        userEmail,
        fiveMinutesAgo(), //request time limit
        oneHourFromNow(), //request expires at
        APP_ORIGIN
      );

    appAssert(
      !(passwordResetLinkDataOrError instanceof Error),
      ...mapDomainErrorToHttp(passwordResetLinkDataOrError as Error)
    );

    const sendPasswordResetEmailUsecase = new SendPasswordResetEmailUsecase(
      this.resendEmailService
    );
    const emailSentOrError = await sendPasswordResetEmailUsecase.execute({
      to: passwordResetLinkDataOrError.userEmail,
      ...getPasswordResetTemplate(passwordResetLinkDataOrError.resetLink),
    });
    appAssert(
      emailSentOrError.data?.id,
      INTERNAL_SERVER_ERROR,
      emailSentOrError?.name,
      emailSentOrError?.message
    );

    return response.status(OK).json({
      message: "Password reset link sent successfully",
    });
  });

  resetPasswordHandler = catchErrors(async (request, response) => {
    const requestData = passwordResetSchema.parse(request.body);
    const userResetPasswordUsecase = new UserResetPasswordUsecase(
      this.userRepository,
      this.verificationCodeRepository,
      this.sessionRepository,
      this.bcryptPasswordHasher
    );
    const userOrError = await userResetPasswordUsecase.execute(requestData);
    appAssert(
      !(userOrError instanceof Error),
      ...mapDomainErrorToHttp(userOrError as Error)
    );
    return clearAuthCookies(response).status(OK).json({
      message: "Password reset successfully",
    });
  });
}
