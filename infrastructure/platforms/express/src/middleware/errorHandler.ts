import { ErrorRequestHandler, Response } from "express";
import { z } from "zod";
import { BAD_REQUEST, INTERNAL_SERVER_ERROR } from "../constants/http";
import AppError from "../utils/AppError";
import { clearAuthCookies, REFRESH_PATH } from "../utils/cookies";

const handleZodError = (error: z.ZodError, response: Response) => {
  return response.status(BAD_REQUEST).json({
    message: error.message,
    errors: error.issues.map((error) => ({
      path: error.path.join("."),
      message: error.message,
    })),
  });
};

const handleAppError = (error: AppError, response: Response) => {
  return response.status(error.statusCode).json({
    errorCode: error.errorCode,
    message: error.message,
  });
};

const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
  console.log(`PATH: ${request.path}`, error);

  if (request.path === REFRESH_PATH) {
    clearAuthCookies(response);
  }

  if (error instanceof z.ZodError) {
    handleZodError(error, response);
    return;
  }

  if (error instanceof AppError) {
    handleAppError(error, response);
    return;
  }

  response.status(INTERNAL_SERVER_ERROR).send("Internal Server Error");
};

export default errorHandler;
