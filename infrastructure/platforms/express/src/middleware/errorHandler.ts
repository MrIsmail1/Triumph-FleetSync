import { ErrorRequestHandler, Response } from "express";
import { z } from "zod";
import { BAD_REQUEST, INTERNAL_SERVER_ERROR } from "../constants/http";

const handleZodError = (error: z.ZodError, response: Response) => {
  return response.status(BAD_REQUEST).json({
    message: error.message,
    errors: error.issues.map((error) => ({
      path: error.path.join("."),
      message: error.message,
    })),
  });
};

const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
  console.log(`PATH: ${request.path}`, error);

  if (error instanceof z.ZodError) {
    handleZodError(error, response);
    return;
  }

  response.status(INTERNAL_SERVER_ERROR).send("Internal Server Error");
};

export default errorHandler;
