import AppError from "@/utils/AppError.ts";
import assert from "node:assert";
import { HttpStatusCode } from "../constants/http.ts";

type AppAssert = (
  condition: unknown,
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
