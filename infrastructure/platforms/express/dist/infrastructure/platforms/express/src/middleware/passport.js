"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const passport_jwt_1 = require("passport-jwt");
const env_1 = require("../constants/env");
const http_1 = require("../constants/http");
const appAssert_1 = __importDefault(require("../utils/appAssert"));
const options = {
    jwtFromRequest: passport_jwt_1.ExtractJwt.fromExtractors([
        (request) => {
            const accessToken = request.cookies.accessToken;
            (0, appAssert_1.default)(accessToken, http_1.UNAUTHORIZED, "Unauthorized", "Invalid access token");
            return accessToken;
        },
    ]),
    secretOrKey: env_1.JWT_SECRET,
    passReqToCallback: true,
    algorithms: ["HS256"],
};
passport_1.default.use(new passport_jwt_1.Strategy(options, async (req, payload, done) => {
    try {
        (0, appAssert_1.default)(payload, http_1.UNAUTHORIZED, "Unauthorized", "Invalid access token");
        done(null, {
            userIdentifier: payload.userIdentifier,
            sessionIdentifier: payload.sessionIdentifier,
            role: payload.role,
        });
    }
    catch (error) {
        return done(error, false);
    }
}));
