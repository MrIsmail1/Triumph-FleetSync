"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearAuthCookies = exports.setAuthCookies = exports.getRefreshTokenCookieOptions = exports.getAccessTokenCookieOptions = exports.REFRESH_PATH = void 0;
const date_1 = require("./date");
const secure = process.env.NODE_ENV === "production";
exports.REFRESH_PATH = "/api/auth/refresh";
const defaults = {
    sameSite: "strict",
    httpOnly: true,
    secure: secure,
};
const getAccessTokenCookieOptions = () => ({
    ...defaults,
    expires: (0, date_1.fifteenMinutesFromNow)(),
});
exports.getAccessTokenCookieOptions = getAccessTokenCookieOptions;
const getRefreshTokenCookieOptions = () => ({
    ...defaults,
    expires: (0, date_1.thirtyDaysFromNow)(),
    path: exports.REFRESH_PATH,
});
exports.getRefreshTokenCookieOptions = getRefreshTokenCookieOptions;
const setAuthCookies = ({ response, accessToken, refreshToken, }) => {
    return response
        .cookie("accessToken", accessToken, (0, exports.getAccessTokenCookieOptions)())
        .cookie("refreshToken", refreshToken, (0, exports.getRefreshTokenCookieOptions)());
};
exports.setAuthCookies = setAuthCookies;
const clearAuthCookies = (response) => {
    return response.clearCookie("accessToken").clearCookie("refreshToken", {
        path: exports.REFRESH_PATH,
    });
};
exports.clearAuthCookies = clearAuthCookies;
