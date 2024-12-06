import { ErrorRequestHandler } from "express";
import { INTERNAL_SERVER_ERROR } from "../constants/http";

const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
  console.log(`PATH: ${request.path}`, error);
  response.status(INTERNAL_SERVER_ERROR).send("Internal Server Error");
  return;
};

export default errorHandler;
