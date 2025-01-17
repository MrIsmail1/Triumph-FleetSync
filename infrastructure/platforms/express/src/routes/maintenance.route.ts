import { Router } from "express";
import { PrismaMaintenanceRepository } from "../../../../adapters/repositories/PrismaMaintenanceRepository";
import { prisma } from "../config/prisma.db";
import { MaintenanceController } from "../controllers/MaintenanceController";
import { authorize } from "../middleware/authorize";

const maintenanceRoutes = Router();

const prismaMaintenanceRepository = new PrismaMaintenanceRepository(prisma);
const maintenanceController = new MaintenanceController(prismaMaintenanceRepository);

maintenanceRoutes.post(
  "/",
  /* authorize(["admin", "technician"]), */
  maintenanceController.addMaintenanceHandler
);

maintenanceRoutes.get(
  "/",
  /* authorize(["admin", "technician", "manager"]), */
  maintenanceController.listMaintenancesHandler
);

maintenanceRoutes.get(
  "/:id",
  /* authorize(["admin", "technician", "manager"]), */
  maintenanceController.getMaintenanceHandler
);

export default maintenanceRoutes;
