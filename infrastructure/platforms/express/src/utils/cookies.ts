import { CookieOptions, Response } from "express";
import { fifteenMinutesFromNow, thirtyDaysFromNow } from "./date";

const secure = process.env.NODE_ENV === "production";

const defaults: CookieOptions = {
  sameSite: "strict",
  httpOnly: true,
  secure: secure,
};

const getAccessTokenCookieOptions = (): CookieOptions => ({
  ...defaults,
  expires: fifteenMinutesFromNow(),
});
const getRefreshTokenCookieOptions = (): CookieOptions => ({
  ...defaults,
  expires: thirtyDaysFromNow(),
  path: "/api/auth/refresh",
});

type Params = {
  response: Response;
  accessToken: string;
  refreshToken: string;
};
export const setAuthCookies = ({
  response,
  refreshToken,
  accessToken,
}: Params) => {
  return response
    .cookie("refreshToken", refreshToken, getRefreshTokenCookieOptions())
    .cookie("accessToken", accessToken, getAccessTokenCookieOptions());
};
