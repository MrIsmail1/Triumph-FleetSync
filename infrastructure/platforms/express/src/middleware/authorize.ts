import { RequestHandler } from "express";
import { FORBIDDEN, UNAUTHORIZED } from "../constants/http";
import appAssert from "../utils/appAssert";

export const authorize = (requiredRole: string): RequestHandler => {
  return (request, response, next) => {
    const user = request.user;
    appAssert(user, UNAUTHORIZED, "Unauthorized", "Invalid access token");
    appAssert(
      user.role === requiredRole,
      FORBIDDEN,
      "Unauthorized",
      "Access denied"
    );
    next();
  };
};
