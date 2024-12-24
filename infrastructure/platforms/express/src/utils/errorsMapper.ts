import { EmailBadFormatError } from "../../../../../domain/errors/EmailBadFormatError";
import { PasswordBadFormatError } from "../../../../../domain/errors/PasswordBadFormatError";
import { RoleSelectionError } from "../../../../../domain/errors/RoleSelectionError";
import { StringTooLongError } from "../../../../../domain/errors/StringTooLongError";
import { StringTooShortError } from "../../../../../domain/errors/StringTooShortError";
import { UserAlreadyExistsError } from "../../../../../domain/errors/UserAlreadyExistsError";
import {
  BAD_REQUEST,
  CONFLICT,
  HttpStatusCode,
  INTERNAL_SERVER_ERROR,
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

  return [
    INTERNAL_SERVER_ERROR,
    "UNKNOWN_ERROR",
    "An unexpected error occurred.",
  ];
}
