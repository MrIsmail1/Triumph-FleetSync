import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import express from "express";
import connectToMongoDB from "./config/mongo.db";
import { APP_ORIGIN, NODE_ENV, PORT } from "./constants/env";
import errorHandler from "./middleware/errorHandler";

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

app.use(errorHandler);
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT} in ${NODE_ENV} enironment.`);
  await connectToMongoDB();
});
