import { EmailBadFormatError } from "../../../../../domain/errors/EmailBadFormatError";
import { InvalidCredentialsError } from "../../../../../domain/errors/InvalidCredentialsError";
import { PasswordBadFormatError } from "../../../../../domain/errors/PasswordBadFormatError";
import { RoleSelectionError } from "../../../../../domain/errors/RoleSelectionError";
import { StringTooLongError } from "../../../../../domain/errors/StringTooLongError";
import { StringTooShortError } from "../../../../../domain/errors/StringTooShortError";
import { UserAlreadyExistsError } from "../../../../../domain/errors/UserAlreadyExistsError";
import { UserEmailVerificationFailedError } from "../../../../../domain/errors/UserEmailVerificationFailedError";
import { VerificationCodeNotFoundError } from "../../../../../domain/errors/VerificationCodeNotFoundError";
import { VerificationEmailUnsentError } from "../../../../../domain/errors/VerificationEmailUnsentError";

import {
  BAD_REQUEST,
  CONFLICT,
  HttpStatusCode,
  INTERNAL_SERVER_ERROR,
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
  return [
    INTERNAL_SERVER_ERROR,
    "UNKNOWN_ERROR",
    "An unexpected error occurred.",
  ];
}
