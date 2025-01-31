import connectToMongoDB from "@/config/mongo.db.ts";
import { APP_ORIGIN } from "@/constants/env.ts";
import { BAD_REQUEST, INTERNAL_SERVER_ERROR } from "@/constants/http.ts";
import authenticate from "@/middleware/authenticate.ts";
import sparePart from "@/routes/sparePart.route.ts";
import AppError from "@/utils/AppError.ts";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { ContentfulStatusCode } from "hono/utils/http-status";
import { ZodError } from "zod";

const app = new Hono().basePath("/api");
app.use("/*", cors({ origin: APP_ORIGIN, credentials: true }));
app.onError((err, c) => {
  if (err instanceof ZodError) {
    return c.json(
      {
        message: "Validation failed",
        issues: err.issues.map((issue) => issue.message),
      },
      BAD_REQUEST
    );
  }

  if (err instanceof AppError) {
    return c.json(
      { errorCode: err.errorCode, message: err.message },
      { status: err.statusCode as ContentfulStatusCode }
    );
  }

  console.error("[ERROR]", err);
  return c.json(
    {
      message: "Internal server error",
    },
    INTERNAL_SERVER_ERROR
  );
});

app.use("/spare-parts/*", authenticate);
app.route("/spare-parts", sparePart);

await connectToMongoDB();
Deno.serve(app.fetch);
