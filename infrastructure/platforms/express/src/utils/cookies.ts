import { CookieOptions, Response } from "express";
import { fifteenMinutesFromNow, thirtyDaysFromNow } from "./date";

const secure = process.env.NODE_ENV === "production";
export const REFRESH_PATH = "/api/auth/refresh";

const defaults: CookieOptions = {
  sameSite: "strict",
  httpOnly: true,
  secure: secure,
};

export const getAccessTokenCookieOptions = (): CookieOptions => ({
  ...defaults,
  expires: fifteenMinutesFromNow(),
});
export const getRefreshTokenCookieOptions = (): CookieOptions => ({
  ...defaults,
  expires: thirtyDaysFromNow(),
  path: REFRESH_PATH,
});

type Params = {
  response: Response;
  accessToken: string;
  refreshToken: string;
};
export const setAuthCookies = ({
  response,
  accessToken,
  refreshToken,
}: Params) => {
  return response
    .cookie("accessToken", accessToken, getAccessTokenCookieOptions())
    .cookie("refreshToken", refreshToken, getRefreshTokenCookieOptions());
};

export const clearAuthCookies = (response: Response) => {
  return response.clearCookie("accessToken").clearCookie("refreshToken", {
    path: REFRESH_PATH,
  });
};
