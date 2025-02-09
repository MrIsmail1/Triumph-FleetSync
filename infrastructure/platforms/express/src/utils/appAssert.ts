import assert from "node:assert";
import { HttpStatusCode } from "../constants/http";
import AppError from "./AppError";

type AppAssert = (
  condition: any,
  httpStatusCode: HttpStatusCode,
  errorCode: string,
  message: string
) => asserts condition;

/**
 * Asserts that the condition is true, otherwise throws an AppError
 */
const appAssert: AppAssert = (condition, httpStatusCode, errorCode, message) =>
  assert(condition, new AppError(httpStatusCode, errorCode, message));

export default appAssert;
