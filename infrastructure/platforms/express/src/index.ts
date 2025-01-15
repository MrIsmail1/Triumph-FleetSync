import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import express from "express";
import passport from "passport";
import connectToMongoDB from "./config/mongo.db";
import { APP_ORIGIN, NODE_ENV, PORT } from "./constants/env";
import errorHandler from "./middleware/errorHandler";
import "./middleware/passport";
import authRoutes from "./routes/auth.route";
import sessionRoutes from "./routes/session.route";
import userRoutes from "./routes/user.route";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: APP_ORIGIN,
    credentials: true,
  })
);
app.use(cookieParser());
app.use(passport.initialize());

//auth routes
app.use("/api/auth", authRoutes);

//protected routes
app.use(
  "/api/user",
  passport.authenticate("jwt", { session: false }),
  userRoutes
);
app.use(
  "/api/session",
  passport.authenticate("jwt", { session: false }),
  sessionRoutes
);

app.use(errorHandler);
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT} in ${NODE_ENV} environment.`);
  await connectToMongoDB();
});
