import { Router } from "express";
import { PrismaDriverRepository } from "../../../../adapters/repositories/PrismaDriverRepository.ts";
import { prisma } from "../config/prisma.db.ts";
import { DriverController } from "../controllers/DriverController.ts";
import { authorize } from "../middleware/authorize.ts";

const driverRoutes = Router();

const prismaDriverRepository = new PrismaDriverRepository(prisma);
const driverController = new DriverController(prismaDriverRepository);

driverRoutes.post("/create", authorize(["admin", "company", "dealership"]), driverController.createDriverHandler);
driverRoutes.get("/driver/:driverId", authorize(["admin", "company", "dealership"]), driverController.getDriverHandler);
driverRoutes.get("/list", authorize(["admin", "company", "dealership"]), driverController.listDriversHandler);
driverRoutes.put("/update/:driverId", authorize(["admin", "company", "dealership"]), driverController.updateDriverHandler);
driverRoutes.delete("/delete/:driverId", authorize(["admin", "company", "dealership"]), driverController.deleteDriverHandler);

export default driverRoutes;
