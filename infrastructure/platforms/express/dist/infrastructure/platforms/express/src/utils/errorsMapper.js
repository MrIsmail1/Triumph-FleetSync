"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapDomainErrorToHttp = mapDomainErrorToHttp;
const AccessDeniedError_1 = require("../../../../../domain/errors/AccessDeniedError");
const EmailBadFormatError_1 = require("../../../../../domain/errors/EmailBadFormatError");
const InvalidCredentialsError_1 = require("../../../../../domain/errors/InvalidCredentialsError");
const PasswordBadFormatError_1 = require("../../../../../domain/errors/PasswordBadFormatError");
const RoleSelectionError_1 = require("../../../../../domain/errors/RoleSelectionError");
const StringTooLongError_1 = require("../../../../../domain/errors/StringTooLongError");
const StringTooShortError_1 = require("../../../../../domain/errors/StringTooShortError");
const TooManyPasswordResetRequestsError_1 = require("../../../../../domain/errors/TooManyPasswordResetRequestsError");
const UserAlreadyExistsError_1 = require("../../../../../domain/errors/UserAlreadyExistsError");
const UserEmailVerificationFailedError_1 = require("../../../../../domain/errors/UserEmailVerificationFailedError");
const UserNotFoundError_1 = require("../../../../../domain/errors/UserNotFoundError");
const UserPasswordUpdateFailedError_1 = require("../../../../../domain/errors/UserPasswordUpdateFailedError");
const UserUpdateProfileError_1 = require("../../../../../domain/errors/UserUpdateProfileError");
const VerificationCodeNotFoundError_1 = require("../../../../../domain/errors/VerificationCodeNotFoundError");
const VerificationEmailUnsentError_1 = require("../../../../../domain/errors/VerificationEmailUnsentError");
const http_1 = require("../constants/http");
function mapDomainErrorToHttp(error) {
    if (error instanceof StringTooShortError_1.StringTooShortError) {
        return [http_1.BAD_REQUEST, error.name, "String is too short."];
    }
    if (error instanceof StringTooLongError_1.StringTooLongError) {
        return [http_1.BAD_REQUEST, error.name, "String is too long."];
    }
    if (error instanceof EmailBadFormatError_1.EmailBadFormatError) {
        return [http_1.BAD_REQUEST, error.name, "Invalid email format."];
    }
    if (error instanceof PasswordBadFormatError_1.PasswordBadFormatError) {
        return [http_1.BAD_REQUEST, error.name, "Invalid password format."];
    }
    if (error instanceof RoleSelectionError_1.RoleSelectionError) {
        return [http_1.BAD_REQUEST, error.name, "Invalid role selected."];
    }
    if (error instanceof UserAlreadyExistsError_1.UserAlreadyExistsError) {
        return [http_1.CONFLICT, error.name, "User already exists."];
    }
    if (error instanceof UserNotFoundError_1.UserNotFoundError) {
        return [http_1.BAD_REQUEST, error.name, "User not found."];
    }
    if (error instanceof InvalidCredentialsError_1.InvalidCredentialsError) {
        return [http_1.UNAUTHORIZED, error.name, "Invalid credentials."];
    }
    if (error instanceof VerificationCodeNotFoundError_1.VerificationCodeNotFoundError) {
        return [http_1.BAD_REQUEST, error.name, "Verification code not found."];
    }
    if (error instanceof UserEmailVerificationFailedError_1.UserEmailVerificationFailedError) {
        return [http_1.INTERNAL_SERVER_ERROR, error.name, "Email verification failed."];
    }
    if (error instanceof VerificationEmailUnsentError_1.VerificationEmailUnsentError) {
        return [
            http_1.INTERNAL_SERVER_ERROR,
            error.name,
            "Verification email was not sent.",
        ];
    }
    if (error instanceof TooManyPasswordResetRequestsError_1.TooManyPasswordResetRequestsError) {
        return [
            http_1.TOO_MANY_REQUESTS,
            error.name,
            "Too many password reset requests. Please try again later.",
        ];
    }
    if (error instanceof UserPasswordUpdateFailedError_1.UserPasswordUpdateFailedError) {
        return [http_1.INTERNAL_SERVER_ERROR, error.name, "User password update failed."];
    }
    if (error instanceof AccessDeniedError_1.AccessDeniedError) {
        return [http_1.UNAUTHORIZED, error.name, "Access denied."];
    }
    if (error instanceof UserUpdateProfileError_1.UserUpdateProfileError) {
        return [http_1.BAD_REQUEST, error.name, "Failed to update user profile."];
    }
    return [
        http_1.INTERNAL_SERVER_ERROR,
        "UNKNOWN_ERROR",
        "An unexpected error occurred.",
    ];
}
