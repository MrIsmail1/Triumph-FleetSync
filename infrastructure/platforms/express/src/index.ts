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
import maintenanceRoutes from "./routes/maintenance.route";
import motorbikeRoutes from "./routes/motorbike.route";
import fleetRoutes from "./routes/fleet.route";
import modelMotorbikeRoute from "./routes/modelMotorbike.route";
import driverRoutes from "./routes/driver.route";
import driverHistoricalRoute from "./routes/driverHistorical.route";
import tryRoutes from "./routes/try.routes";
import motorbikeIncidentRoutes from "./routes/motorbikeIncident.route";
import breakdownRoutes from "./routes/breakdown.route";
import warrantyRoutes from "./routes/warranty.route";


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

app.use("/api/auth", authRoutes);

// Protected routes
app.use("/api/user", passport.authenticate("jwt", { session: false }), userRoutes);
app.use("/api/session", passport.authenticate("jwt", { session: false }), sessionRoutes);
app.use("/api/maintenance", passport.authenticate("jwt", { session: false }), maintenanceRoutes)
app.use("/api/warranty", passport.authenticate("jwt", { session: false }), warrantyRoutes)
app.use("/api/breakdown", passport.authenticate("jwt", { session: false }), breakdownRoutes);
app.use("/api/motorbike", passport.authenticate("jwt", { session: false }), motorbikeRoutes);
app.use("/api/modelmotorbike", passport.authenticate("jwt", { session: false }), modelMotorbikeRoute);
app.use("/api/fleet", passport.authenticate("jwt", { session: false }), fleetRoutes);
app.use("/api/driver", passport.authenticate("jwt", { session: false }), driverRoutes);
app.use("/api/driverhistorical", passport.authenticate("jwt", { session: false }), driverHistoricalRoute);
app.use("/api/try", passport.authenticate("jwt", { session: false }), tryRoutes);
app.use("/api/motorbikeincident", passport.authenticate("jwt", { session: false }), motorbikeIncidentRoutes);


app.use(errorHandler);
app.listen(PORT, async () => {
  console.log(`🚀 Server is running on port ${PORT} in ${NODE_ENV} environment.`);
  await connectToMongoDB();
});
