import { Router } from "express";
import { PrismaDriverHistoricalRepository } from "../../../../adapters/repositories/PrismaDriverHistoricalRepository";
import { prisma } from "../config/prisma.db";
import { DriverHistoricalController } from "../controllers/DriverHistoricalController";
import { authorize } from "../middleware/authorize";

const driverHistoricalRoutes = Router();

const prismaDriverHistoricalRepository = new PrismaDriverHistoricalRepository(prisma);
const driverHistoricalController = new DriverHistoricalController(prismaDriverHistoricalRepository);

driverHistoricalRoutes.get("/list/:driverId", authorize(["admin", "company", "dealership"]), driverHistoricalController.listDriverHistoricalHandler);
driverHistoricalRoutes.delete("/delete/:driverHistoricalId", authorize(["admin", "company", "dealership"]), driverHistoricalController.deleteDriverHistoricalHandler);

export default driverHistoricalRoutes;
