import { SessionRepository } from "../../../../../application/repositories/SessionRepository";
import { UserRepository } from "../../../../../application/repositories/UserRepository";
import { VerificationCodeRepository } from "../../../../../application/repositories/VerificationCodeRepository";
import { SessionCreateUsecase } from "../../../../../application/usecases/SessionCreateUsecase";
import { UserLoginUsecase } from "../../../../../application/usecases/UserLoginUsecase";
import { UserRegisterUsecase } from "../../../../../application/usecases/UserRegisterUsecase";
import { VerificationCodeCreateUsecase } from "../../../../../application/usecases/VerificationCodeCreateUsecase";
import { VerificationCodeType } from "../../../../../domain/types/VerificationCodeType";
import { BcryptPasswordHasherService } from "../../services/BcryptPasswordHasherService";
import { CREATED, OK } from "../constants/http";
import { loginSchema } from "../schemas/loginSchema";
import { registerSchema } from "../schemas/registerSchema";
import appAssert from "../utils/appAssert";
import catchErrors from "../utils/catchErrors";
import { clearAuthCookies, setAuthCookies } from "../utils/cookies";
import { oneYearFromNow, thirtyDaysFromNow } from "../utils/date";
import { mapDomainErrorToHttp } from "../utils/errorsMapper";
import { refreshTokenSignOptions, signToken, verifyToken } from "../utils/jwt";

export class AuthController {
  public constructor(
    private readonly userRepository: UserRepository,
    private readonly verificationCodeRepository: VerificationCodeRepository,
    private readonly sessionRepository: SessionRepository,
    private readonly bcryptPasswordHasher: BcryptPasswordHasherService
  ) {}

  registerHandler = catchErrors(async (request, response) => {
    //validate user using zod
    const validatedRequestData = registerSchema.parse({
      ...request.body,
      userAgent: request.headers["user-agent"],
    });
    //register user
    const userRegisterUsecase = new UserRegisterUsecase(
      this.userRepository,
      this.bcryptPasswordHasher
    );
    const userOrError = await userRegisterUsecase.execute(
      validatedRequestData.firstName,
      validatedRequestData.lastName,
      validatedRequestData.email,
      validatedRequestData.password,
      "Client"
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

    //create session
    const sessionCreateUsecase = new SessionCreateUsecase(
      this.sessionRepository
    );
    const session = await sessionCreateUsecase.execute(
      userOrError.identifier,
      thirtyDaysFromNow(),
      validatedRequestData.userAgent
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
    const validatedRequestData = loginSchema.parse({
      ...request.body,
      userAgent: request.headers["user-agent"],
    });

    const userLoginUsecase = new UserLoginUsecase(
      this.userRepository,
      this.bcryptPasswordHasher
    );
    const userOrError = await userLoginUsecase.execute(
      validatedRequestData.email,
      validatedRequestData.password
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
      validatedRequestData.userAgent
    );

    if (session) {
      //create refresh token and access Token
      console.log(session);
      const refreshToken = signToken(
        { sessionIdentifier: session.identifier },
        refreshTokenSignOptions
      );

      const accessToken = signToken({
        sessionIdentifier: session.identifier,
        userIdentifier: userOrError.identifier,
      });

      return setAuthCookies({ response, accessToken, refreshToken })
        .status(OK)
        .json("Login successful.");
    }
  });

  logoutHandler = catchErrors(async (request, response) => {
    const accessToken = request.cookies.accessToken;
    const { payload } = verifyToken(accessToken);
    if (payload) {
      console.log(payload);
      await this.sessionRepository.delete(payload.sessionIdentifier);
    }
    return clearAuthCookies(response).status(OK).json("Logout successful.");
  });
}
