"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const SendUserVerificationEmailUsecase_1 = require("../../../../../application/usecases/auth/SendUserVerificationEmailUsecase");
const VerificationCodeCreateUsecase_1 = require("../../../../../application/usecases/auth/VerificationCodeCreateUsecase");
const UserDeleteUsecase_1 = require("../../../../../application/usecases/user/UserDeleteUsecase");
const UserShowProfileUsecase_1 = require("../../../../../application/usecases/user/UserShowProfileUsecase");
const UsersListUsecase_1 = require("../../../../../application/usecases/user/UsersListUsecase");
const UserUpdateProfileUsecase_1 = require("../../../../../application/usecases/user/UserUpdateProfileUsecase");
const VerificationCodeType_1 = require("../../../../../domain/types/VerificationCodeType");
const env_1 = require("../constants/env");
const http_1 = require("../constants/http");
const appAssert_1 = __importDefault(require("../utils/appAssert"));
const catchErrors_1 = __importDefault(require("../utils/catchErrors"));
const date_1 = require("../utils/date");
const emailTemplates_1 = require("../utils/emailTemplates");
const errorsMapper_1 = require("../utils/errorsMapper");
class UserController {
    constructor(userRepository, verificationCodeRepository, resendEmailService) {
        this.userRepository = userRepository;
        this.verificationCodeRepository = verificationCodeRepository;
        this.resendEmailService = resendEmailService;
        this.showProfileHandler = (0, catchErrors_1.default)(async (request, response) => {
            const currentUser = request.user;
            const userProfileShowUseCase = new UserShowProfileUsecase_1.UserShowProfileUsecase(this.userRepository);
            const userOrError = await userProfileShowUseCase.execute(currentUser.userIdentifier);
            (0, appAssert_1.default)(!(userOrError instanceof Error), ...(0, errorsMapper_1.mapDomainErrorToHttp)(userOrError));
            response.status(http_1.OK).json(userOrError);
        });
        this.listUsersHandler = (0, catchErrors_1.default)(async (request, response) => {
            const currentUser = request.user;
            const usersListUseCase = new UsersListUsecase_1.UsersListUsecase(this.userRepository);
            const usersOrError = await usersListUseCase.execute(currentUser.userIdentifier);
            (0, appAssert_1.default)(!(usersOrError instanceof Error), ...(0, errorsMapper_1.mapDomainErrorToHttp)(usersOrError));
            response.status(http_1.OK).json(usersOrError);
        });
        this.updateUserProfileHandler = (0, catchErrors_1.default)(async (request, response) => {
            const currentUser = request.user;
            const dataToUpdate = request.body;
            const userUpdateProfileUsecase = new UserUpdateProfileUsecase_1.UserUpdateProfileUsecase(this.userRepository);
            const userOrError = await userUpdateProfileUsecase.execute(dataToUpdate.userIdentifier ?? currentUser.userIdentifier, currentUser.role, dataToUpdate);
            (0, appAssert_1.default)(!(userOrError instanceof Error), ...(0, errorsMapper_1.mapDomainErrorToHttp)(userOrError));
            if (!userOrError.isVerified) {
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
            }
            response.status(http_1.OK).json(userOrError);
        });
        this.deleteUserHandler = (0, catchErrors_1.default)(async (request, response) => {
            const currentUser = request.user;
            const userToDeleteId = request.params.id;
            const userDeleteUsecase = new UserDeleteUsecase_1.UserDeleteUsecase(this.userRepository);
            const userDeletedOrError = await userDeleteUsecase.execute(currentUser.userIdentifier, userToDeleteId);
            (0, appAssert_1.default)(!(userDeletedOrError instanceof Error), ...(0, errorsMapper_1.mapDomainErrorToHttp)(userDeletedOrError));
            response.status(http_1.OK).json({
                message: "User deleted successfully",
            });
        });
    }
}
exports.UserController = UserController;
