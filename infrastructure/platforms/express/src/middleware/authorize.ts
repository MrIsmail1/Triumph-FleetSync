import { RequestHandler } from "express";
import { FORBIDDEN, UNAUTHORIZED } from "../constants/http";
import appAssert from "../utils/appAssert";
import { AccessTokenPayload } from "../utils/jwt";

export const authorize = (requiredRoles: string[]): RequestHandler => {
  return (request, response, next) => {
    const user = request.user as AccessTokenPayload;
    appAssert(user, UNAUTHORIZED, "Unauthorized", "Invalid access token");
    appAssert(
      !requiredRoles.includes(user.role),
      FORBIDDEN,
      "Unauthorized",
      "Access denied"
    );
    next();
  };
};
