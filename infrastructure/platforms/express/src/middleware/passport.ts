import passport from "passport";
import {
  ExtractJwt,
  Strategy as JwtStrategy,
  StrategyOptionsWithRequest,
} from "passport-jwt";
import { JWT_SECRET } from "../constants/env";
import { UNAUTHORIZED } from "../constants/http";
import appAssert from "../utils/appAssert";
import { AccessTokenPayload } from "../utils/jwt";

const options: StrategyOptionsWithRequest = {
  jwtFromRequest: ExtractJwt.fromExtractors([
    (request) => {
      const accessToken = request.cookies.accessToken as string | undefined;
      appAssert(
        accessToken,
        UNAUTHORIZED,
        "Unauthorized",
        "Invalid access token"
      );
      return accessToken;
    },
  ]),
  secretOrKey: JWT_SECRET,
  passReqToCallback: true,
  algorithms: ["HS256"],
};

passport.use(
  new JwtStrategy(options, async (req, payload: AccessTokenPayload, done) => {
    try {
      console.log(payload);
      appAssert(payload, UNAUTHORIZED, "Unauthorized", "Invalid access token");

      done(null, {
        userIdentifier: payload.userIdentifier,
        sessionIdentifier: payload.sessionIdentifier,
        role: payload.role,
      });
    } catch (error) {
      return done(error, false);
    }
  })
);
