import { AccessDeniedError } from "../../../../../domain/errors/AccessDeniedError";
import { EmailBadFormatError } from "../../../../../domain/errors/EmailBadFormatError";
import { InvalidCredentialsError } from "../../../../../domain/errors/InvalidCredentialsError";
import { PasswordBadFormatError } from "../../../../../domain/errors/PasswordBadFormatError";
import { RoleSelectionError } from "../../../../../domain/errors/RoleSelectionError";
import { StringTooLongError } from "../../../../../domain/errors/StringTooLongError";
import { StringTooShortError } from "../../../../../domain/errors/StringTooShortError";
import { TooManyPasswordResetRequestsError } from "../../../../../domain/errors/TooManyPasswordResetRequestsError";
import { UserAlreadyExistsError } from "../../../../../domain/errors/UserAlreadyExistsError";
import { UserEmailVerificationFailedError } from "../../../../../domain/errors/UserEmailVerificationFailedError";
import { UserNotFoundError } from "../../../../../domain/errors/UserNotFoundError";
import { UserPasswordUpdateFailedError } from "../../../../../domain/errors/UserPasswordUpdateFailedError";
import { UserUpdateProfileError } from "../../../../../domain/errors/UserUpdateProfileError";
import { VerificationCodeNotFoundError } from "../../../../../domain/errors/VerificationCodeNotFoundError";
import { VerificationEmailUnsentError } from "../../../../../domain/errors/VerificationEmailUnsentError";

import {
  BAD_REQUEST,
  CONFLICT,
  HttpStatusCode,
  INTERNAL_SERVER_ERROR,
  TOO_MANY_REQUESTS,
  UNAUTHORIZED,
} from "../constants/http";

export function mapDomainErrorToHttp(
  error: Error
): [HttpStatusCode, string, string] {
  if (error instanceof StringTooShortError) {
    return [BAD_REQUEST, error.name, "String is too short."];
  }
  if (error instanceof StringTooLongError) {
    return [BAD_REQUEST, error.name, "String is too long."];
  }
  if (error instanceof EmailBadFormatError) {
    return [BAD_REQUEST, error.name, "Invalid email format."];
  }
  if (error instanceof PasswordBadFormatError) {
    return [BAD_REQUEST, error.name, "Invalid password format."];
  }
  if (error instanceof RoleSelectionError) {
    return [BAD_REQUEST, error.name, "Invalid role selected."];
  }
  if (error instanceof UserAlreadyExistsError) {
    return [CONFLICT, error.name, "User already exists."];
  }
  if (error instanceof UserNotFoundError) {
    return [BAD_REQUEST, error.name, "User not found."];
  }
  if (error instanceof InvalidCredentialsError) {
    return [UNAUTHORIZED, error.name, "Invalid credentials."];
  }
  if (error instanceof VerificationCodeNotFoundError) {
    return [BAD_REQUEST, error.name, "Verification code not found."];
  }

  if (error instanceof UserEmailVerificationFailedError) {
    return [INTERNAL_SERVER_ERROR, error.name, "Email verification failed."];
  }

  if (error instanceof VerificationEmailUnsentError) {
    return [
      INTERNAL_SERVER_ERROR,
      error.name,
      "Verification email was not sent.",
    ];
  }

  if (error instanceof TooManyPasswordResetRequestsError) {
    return [
      TOO_MANY_REQUESTS,
      error.name,
      "Too many password reset requests. Please try again later.",
    ];
  }

  if (error instanceof UserPasswordUpdateFailedError) {
    return [INTERNAL_SERVER_ERROR, error.name, "User password update failed."];
  }

  if (error instanceof AccessDeniedError) {
    return [UNAUTHORIZED, error.name, "Access denied."];
  }

  if (error instanceof UserUpdateProfileError) {
    return [BAD_REQUEST, error.name, "Failed to update user profile."];
  }
  return [
    INTERNAL_SERVER_ERROR,
    "UNKNOWN_ERROR",
    "An unexpected error occurred.",
  ];
}
