import { UNAUTHORIZED } from "@/constants/http.ts";
import appAssert from "@/utils/appAssert.ts";
import { verifyToken } from "@/utils/jwt.ts";
import { Context } from "hono";
import { getCookie } from "hono/cookie";

const authenticate = async (c: Context, next: () => Promise<void>) => {
  const accessToken = getCookie(c, "accessToken");
  appAssert(accessToken, UNAUTHORIZED, "Unauthorized", "Invalid access token");
  const { error, payload } = verifyToken(accessToken);
  appAssert(
    !error && payload,
    UNAUTHORIZED,
    "Unauthorized",
    "Invalid access token"
  );

  c.set("userId", payload.userIdentifier);
  c.set("sessionId", payload.sessionIdentifier);
  await next();
};

export default authenticate;
