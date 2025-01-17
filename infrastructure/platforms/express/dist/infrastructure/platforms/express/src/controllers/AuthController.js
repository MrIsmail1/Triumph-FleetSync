"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const SendPasswordResetEmailUsecase_1 = require("../../../../../application/usecases/auth/SendPasswordResetEmailUsecase");
const SendUserVerificationEmailUsecase_1 = require("../../../../../application/usecases/auth/SendUserVerificationEmailUsecase");
const SessionCreateUsecase_1 = require("../../../../../application/usecases/auth/SessionCreateUsecase");
const UserCreatePasswordResetLinkUsecase_1 = require("../../../../../application/usecases/auth/UserCreatePasswordResetLinkUsecase");
const UserLoginUsecase_1 = require("../../../../../application/usecases/auth/UserLoginUsecase");
const UserRegisterUsecase_1 = require("../../../../../application/usecases/auth/UserRegisterUsecase");
const UserVerifyEmailUsecase_1 = require("../../../../../application/usecases/auth/UserVerifyEmailUsecase");
const VerificationCodeCreateUsecase_1 = require("../../../../../application/usecases/auth/VerificationCodeCreateUsecase");
const VerificationCodeType_1 = require("../../../../../domain/types/VerificationCodeType");
const env_1 = require("../constants/env");
const UserResetPasswordUsecase_1 = require("../../../../../application/usecases/auth/UserResetPasswordUsecase");
const http_1 = require("../constants/http");
const authSchema_1 = require("../schemas/authSchema");
const appAssert_1 = __importDefault(require("../utils/appAssert"));
const catchErrors_1 = __importDefault(require("../utils/catchErrors"));
const cookies_1 = require("../utils/cookies");
const date_1 = require("../utils/date");
const emailTemplates_1 = require("../utils/emailTemplates");
const errorsMapper_1 = require("../utils/errorsMapper");
const jwt_1 = require("../utils/jwt");
class AuthController {
    constructor(userRepository, verificationCodeRepository, sessionRepository, bcryptPasswordHasher, resendEmailService) {
        this.userRepository = userRepository;
        this.verificationCodeRepository = verificationCodeRepository;
        this.sessionRepository = sessionRepository;
        this.bcryptPasswordHasher = bcryptPasswordHasher;
        this.resendEmailService = resendEmailService;
        this.registerHandler = (0, catchErrors_1.default)(async (request, response) => {
            //validate user using zod
            const validatedUserData = authSchema_1.registerSchema.parse({
                ...request.body,
                userAgent: request.headers["user-agent"],
            });
            //register user
            const userRegisterUsecase = new UserRegisterUsecase_1.UserRegisterUsecase(this.userRepository, this.bcryptPasswordHasher);
            const userOrError = await userRegisterUsecase.execute(validatedUserData.firstName, validatedUserData.lastName, validatedUserData.email, validatedUserData.password, "client");
            //if error return error
            (0, appAssert_1.default)(!(userOrError instanceof Error), // Assert no error occurred
            ...(0, errorsMapper_1.mapDomainErrorToHttp)(userOrError) // Map the error to HTTP response
            );
            //create email verification code
            const verificationCodeCreateUsecase = new VerificationCodeCreateUsecase_1.VerificationCodeCreateUsecase(this.verificationCodeRepository);
            const verificationCode = await verificationCodeCreateUsecase.execute(userOrError.identifier, VerificationCodeType_1.VerificationCodeType.EmailVerification, (0, date_1.oneYearFromNow)());
            const emailVerificationUsecase = new SendUserVerificationEmailUsecase_1.SendUserVerificationEmailUsecase(this.resendEmailService);
            const emailVerificationUrl = `${env_1.APP_ORIGIN}/email/verify/${verificationCode.identifier}`;
            const emailSentOrError = await emailVerificationUsecase.execute({
                to: userOrError.email.value,
                ...(0, emailTemplates_1.getVerifyEmailTemplate)(emailVerificationUrl),
            });
            (0, appAssert_1.default)(!(emailSentOrError instanceof Error), ...(0, errorsMapper_1.mapDomainErrorToHttp)(emailSentOrError));
            //create session
            const sessionCreateUsecase = new SessionCreateUsecase_1.SessionCreateUsecase(this.sessionRepository);
            const session = await sessionCreateUsecase.execute(userOrError.identifier, (0, date_1.thirtyDaysFromNow)(), validatedUserData.userAgent);
            if (session) {
                //create refresh token and access token
                const sessionInfo = { sessionIdentifier: session.identifier };
                const accessToken = (0, jwt_1.signToken)({
                    ...sessionInfo,
                    userIdentifier: userOrError.identifier,
                });
                const refreshToken = (0, jwt_1.signToken)(sessionInfo, jwt_1.refreshTokenSignOptions);
                return (0, cookies_1.setAuthCookies)({ response, refreshToken, accessToken })
                    .status(http_1.CREATED)
                    .json(userOrError);
            }
        });
        this.loginHandler = (0, catchErrors_1.default)(async (request, response) => {
            const validatedUserData = authSchema_1.loginSchema.parse({
                ...request.body,
                userAgent: request.headers["user-agent"],
            });
            const userLoginUsecase = new UserLoginUsecase_1.UserLoginUsecase(this.userRepository, this.bcryptPasswordHasher);
            const userOrError = await userLoginUsecase.execute(validatedUserData.email, validatedUserData.password);
            (0, appAssert_1.default)(!(userOrError instanceof Error), ...(0, errorsMapper_1.mapDomainErrorToHttp)(userOrError));
            const sessionCreateUsecase = new SessionCreateUsecase_1.SessionCreateUsecase(this.sessionRepository);
            const session = await sessionCreateUsecase.execute(userOrError.identifier, (0, date_1.thirtyDaysFromNow)(), validatedUserData.userAgent);
            if (session) {
                //create refresh token and access Token
                const refreshToken = (0, jwt_1.signToken)({ sessionIdentifier: session.identifier }, jwt_1.refreshTokenSignOptions);
                const accessToken = (0, jwt_1.signToken)({
                    sessionIdentifier: session.identifier,
                    userIdentifier: userOrError.identifier,
                    role: userOrError.role.value,
                });
                return (0, cookies_1.setAuthCookies)({ response, accessToken, refreshToken })
                    .status(http_1.OK)
                    .json({
                    message: "Login successful",
                });
            }
        });
        this.logoutHandler = (0, catchErrors_1.default)(async (request, response) => {
            const accessToken = request.cookies.accessToken;
            const { payload } = (0, jwt_1.verifyToken)(accessToken || "");
            if (payload) {
                await this.sessionRepository.delete(payload.sessionIdentifier);
            }
            return (0, cookies_1.clearAuthCookies)(response)
                .status(http_1.OK)
                .json({ message: "Logout successful" });
        });
        this.refreshHandler = (0, catchErrors_1.default)(async (request, response) => {
            const refreshToken = request.cookies.refreshToken;
            (0, appAssert_1.default)(refreshToken, http_1.UNAUTHORIZED, "RefreshTokenMissingError", "No refresh token provided");
            const { payload } = (0, jwt_1.verifyToken)(refreshToken, {
                secret: jwt_1.refreshTokenSignOptions.secret,
            });
            (0, appAssert_1.default)(payload, http_1.UNAUTHORIZED, "InvalidRefreshTokenError", "Invalid token");
            const session = await this.sessionRepository.findById(payload.sessionIdentifier);
            const nowDate = Date.now();
            (0, appAssert_1.default)(session && session.expiresAt.getTime() > nowDate, http_1.UNAUTHORIZED, "SessionExpiredError", "Session expired");
            //refresh session if it expires in 1 day
            const sessionNeedsRefresh = session.expiresAt.getTime() - nowDate < date_1.ONE_DAY_MS;
            if (sessionNeedsRefresh) {
                session.expiresAt = (0, date_1.thirtyDaysFromNow)();
                await this.sessionRepository.save(session);
            }
            const newRefreshToken = sessionNeedsRefresh
                ? (0, jwt_1.signToken)({
                    sessionIdentifier: session.identifier,
                }, jwt_1.refreshTokenSignOptions)
                : undefined;
            const accessToken = (0, jwt_1.signToken)({
                sessionIdentifier: session.identifier,
                userIdentifier: session.userId,
            });
            if (newRefreshToken) {
                response.cookie("refreshToken", newRefreshToken, (0, cookies_1.getRefreshTokenCookieOptions)());
            }
            return response
                .status(http_1.OK)
                .cookie("accessToken", accessToken, (0, cookies_1.getAccessTokenCookieOptions)())
                .json({
                message: "Access Token refreshed",
            });
        });
        this.verifyEmailHandler = (0, catchErrors_1.default)(async (request, response) => {
            const verificationCode = authSchema_1.verificationCodeSchema.parse(request.params.code);
            const userVerifyEmailUsecase = new UserVerifyEmailUsecase_1.UserVerifyEmailUsecase(this.userRepository, this.verificationCodeRepository);
            const userOrError = await userVerifyEmailUsecase.execute(verificationCode);
            (0, appAssert_1.default)(!(userOrError instanceof Error), ...(0, errorsMapper_1.mapDomainErrorToHttp)(userOrError));
            return response.status(http_1.OK).json({
                message: "User email verified successfully",
            });
        });
        this.sendPasswordResetHandler = (0, catchErrors_1.default)(async (request, response) => {
            const userEmail = authSchema_1.emailSchema.parse(request.body.email);
            const userCreatePasswordResetLinkUsecase = new UserCreatePasswordResetLinkUsecase_1.UserCreatePasswordResetLinkUsecase(this.userRepository, this.verificationCodeRepository);
            const passwordResetLinkDataOrError = await userCreatePasswordResetLinkUsecase.execute(userEmail, (0, date_1.fiveMinutesAgo)(), //request time limit
            (0, date_1.oneHourFromNow)(), //request expires at
            env_1.APP_ORIGIN);
            (0, appAssert_1.default)(!(passwordResetLinkDataOrError instanceof Error), ...(0, errorsMapper_1.mapDomainErrorToHttp)(passwordResetLinkDataOrError));
            const sendPasswordResetEmailUsecase = new SendPasswordResetEmailUsecase_1.SendPasswordResetEmailUsecase(this.resendEmailService);
            const emailSentOrError = await sendPasswordResetEmailUsecase.execute({
                to: passwordResetLinkDataOrError.userEmail,
                ...(0, emailTemplates_1.getPasswordResetTemplate)(passwordResetLinkDataOrError.resetLink),
            });
            (0, appAssert_1.default)(emailSentOrError.data?.id, http_1.INTERNAL_SERVER_ERROR, emailSentOrError?.name, emailSentOrError?.message);
            return response.status(http_1.OK).json({
                message: "Password reset link sent successfully",
            });
        });
        this.resetPasswordHandler = (0, catchErrors_1.default)(async (request, response) => {
            const requestData = authSchema_1.passwordResetSchema.parse(request.body);
            const userResetPasswordUsecase = new UserResetPasswordUsecase_1.UserResetPasswordUsecase(this.userRepository, this.verificationCodeRepository, this.sessionRepository, this.bcryptPasswordHasher);
            const userOrError = await userResetPasswordUsecase.execute(requestData);
            (0, appAssert_1.default)(!(userOrError instanceof Error), ...(0, errorsMapper_1.mapDomainErrorToHttp)(userOrError));
            return (0, cookies_1.clearAuthCookies)(response).status(http_1.OK).json({
                message: "Password reset successfully",
            });
        });
    }
}
exports.AuthController = AuthController;
