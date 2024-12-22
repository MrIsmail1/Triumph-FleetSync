import { SessionRepository } from "@application/repositories/SessionRepository";
import { UserRepository } from "@application/repositories/UserRepository";
import { VerificationCodeRepository } from "@application/repositories/VerificationCodeRepository";
import { SessionCreateUsecase } from "@application/usecases/SessionCreateUsecase";
import { UserRegisterUsecase } from "@application/usecases/UserRegisterUsecase";
import { VerificationCodeCreateUsecase } from "@application/usecases/VerificationCodeCreateUsecase";
import { VerificationCodeType } from "@domain/types/VerificationCodeType";
import jwt from "jsonwebtoken";
import zod from "zod";
import { BcryptPasswordHasherService } from "../../services/BcryptPasswordHasherService";
import { JWT_REFRESH_SECRET, JWT_SECRET } from "../constants/env";
import { BAD_REQUEST, CREATED } from "../constants/http";
import catchErrors from "../utils/catchErrors";
import { setAuthCookies } from "../utils/cookies";
import { oneYearFromNow, thirtyDaysFromNow } from "../utils/date";

export class AuthController {
  public constructor(
    private readonly userRepository: UserRepository,
    private readonly verificationCodeRepository: VerificationCodeRepository,
    private readonly sessionRepository: SessionRepository,
    private readonly bcryptPasswordHasher: BcryptPasswordHasherService
  ) {}

  registerSchema = zod
    .object({
      firstName: zod.string().min(2).max(255),
      lastName: zod.string().min(2).max(255),
      email: zod.string().email().min(6).max(255),
      password: zod.string().min(6).max(255),
      confirmPassword: zod.string().min(6).max(255),
      userAgent: zod.string().optional(),
    })
    .refine((data) => data.password === data.confirmPassword);

  registerHandler = catchErrors(async (request, response) => {
    //validate user using zod
    const validatedRequestData = this.registerSchema.parse({
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
    if (userOrError instanceof Error) {
      return response.status(BAD_REQUEST).json({ error: userOrError.message });
    }

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

    //create refresh token and access token
    const refreshToken = jwt.sign(
      { sessionId: session.identifier },
      JWT_REFRESH_SECRET,
      {
        audience: ["Client"],
        expiresIn: "30d",
      }
    );
    const accessToken = jwt.sign(
      { userId: userOrError.identifier, session: session.identifier },
      JWT_SECRET,
      {
        audience: ["Client"],
        expiresIn: "15m",
      }
    );
    return setAuthCookies({ response, refreshToken, accessToken })
      .status(CREATED)
      .json(userOrError);
  });
}
