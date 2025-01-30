import {
  BAD_REQUEST,
  CONFLICT,
  HttpStatusCode,
  INTERNAL_SERVER_ERROR,
  NOT_FOUND,
  TOO_MANY_REQUESTS,
  UNAUTHORIZED,
} from "../constants/http.ts";
import { AccessDeniedError } from "./../../../../domain/errors/AccessDeniedError.ts";
import { BreakdownNotFoundError } from "./../../../../domain/errors/BreakdownNotFoundError.ts";
import { EmailBadFormatError } from "./../../../../domain/errors/EmailBadFormatError.ts";
import { InvalidBreakdownDescriptionError } from "./../../../../domain/errors/InvalidBreakdownDescriptionError.ts";
import { InvalidCredentialsError } from "./../../../../domain/errors/InvalidCredentialsError.ts";
import { InvalidMaintenanceError } from "./../../../../domain/errors/InvalidMaintenanceError.ts";
import { InvalidWarrantyDateError } from "./../../../../domain/errors/InvalidWarrantyDateError.ts";
import { InvalidWarrantyProviderNameError } from "./../../../../domain/errors/InvalidWarrantyProviderNameError.ts";
import { MaintenanceNotFoundError } from "./../../../../domain/errors/MaintenanceNotFoundError.ts";
import { MaintenanceUpdateError } from "./../../../../domain/errors/MaintenanceUpdateError.ts";
import { PasswordBadFormatError } from "./../../../../domain/errors/PasswordBadFormatError.ts";
import { RoleSelectionError } from "./../../../../domain/errors/RoleSelectionError.ts";
import { StringTooLongError } from "./../../../../domain/errors/StringTooLongError.ts";
import { StringTooShortError } from "./../../../../domain/errors/StringTooShortError.ts";
import { TooManyPasswordResetRequestsError } from "./../../../../domain/errors/TooManyPasswordResetRequestsError.ts";
import { UnauthorizedActionError } from "./../../../../domain/errors/UnauthorizedActionError.ts";
import { UserAlreadyExistsError } from "./../../../../domain/errors/UserAlreadyExistsError.ts";
import { UserEmailVerificationFailedError } from "./../../../../domain/errors/UserEmailVerificationFailedError.ts";
import { UserNotFoundError } from "./../../../../domain/errors/UserNotFoundError.ts";
import { UserPasswordUpdateFailedError } from "./../../../../domain/errors/UserPasswordUpdateFailedError.ts";
import { UserUpdateProfileError } from "./../../../../domain/errors/UserUpdateProfileError.ts";
import { VerificationCodeNotFoundError } from "./../../../../domain/errors/VerificationCodeNotFoundError.ts";
import { VerificationEmailUnsentError } from "./../../../../domain/errors/VerificationEmailUnsentError.ts";
import { WarrantyNotFoundError } from "./../../../../domain/errors/WarrantyNotFoundError.ts";
import { WarrantyUpdateError } from "./../../../../domain/errors/WarrantyUpdateError.ts";

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

  if (error instanceof UnauthorizedActionError) {
    return [UNAUTHORIZED, error.name, "Unauthorized action."];
  }

  if (error instanceof InvalidMaintenanceError) {
    return [NOT_FOUND, error.name, "Invalid maintenance."];
  }

  if (error instanceof UserUpdateProfileError) {
    return [BAD_REQUEST, error.name, "Failed to update user profile."];
  }

  if (error instanceof BreakdownNotFoundError) {
    return [NOT_FOUND, error.name, "Breakdown not found."];
  }

  if (error instanceof InvalidBreakdownDescriptionError) {
    return [BAD_REQUEST, error.name, "Invalid breakdown description."];
  }

  if (error instanceof WarrantyNotFoundError) {
    return [NOT_FOUND, error.name, "Warranty not found."];
  }

  if (error instanceof InvalidWarrantyDateError) {
    return [BAD_REQUEST, error.name, "Invalid warranty date range."];
  }

  if (error instanceof InvalidWarrantyProviderNameError) {
    return [BAD_REQUEST, error.name, "Invalid warranty provider name."];
  }

  if (error instanceof MaintenanceNotFoundError) {
    return [NOT_FOUND, error.name, "Maintenance not found"];
  }

  if (error instanceof MaintenanceUpdateError) {
    return [NOT_FOUND, error.name, "Maintenance update failed"];
  }

  if (error instanceof WarrantyUpdateError) {
    return [NOT_FOUND, error.name, "Warranty update failed"];
  }

  return [
    INTERNAL_SERVER_ERROR,
    "UNKNOWN_ERROR",
    "An unexpected error occurred.",
  ];
}
