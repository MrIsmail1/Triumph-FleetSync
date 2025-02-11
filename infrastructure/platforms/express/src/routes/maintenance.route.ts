import { Router } from "express";
import { PrismaMaintenanceRepository } from "../../../../adapters/repositories/PrismaMaintenanceRepository";
import { PrismaUserRepository } from "../../../../adapters/repositories/PrismaUserRepository";
import { prisma } from "../config/prisma.db";
import { MaintenanceController } from "../controllers/MaintenanceController";
import { authorize } from "../middleware/authorize";

const maintenanceRoutes = Router();

const prismaMaintenanceRepository = new PrismaMaintenanceRepository(prisma);
const prismaUserRepository = new PrismaUserRepository(prisma);
const maintenanceController = new MaintenanceController(
  prismaMaintenanceRepository,
  prismaUserRepository
);

maintenanceRoutes.post(
  "/create",
  authorize(["admin", "company","technician","dealership" ]),
  maintenanceController.addMaintenanceHandler
);

maintenanceRoutes.get(
  "/list",
  maintenanceController.listMaintenancesHandler
);

maintenanceRoutes.put(
  "/update/:id",
  authorize(["admin", "company"]),
  maintenanceController.updateMaintenanceHandler
);

maintenanceRoutes.delete(
  "/delete/:id",
  authorize(["admin"]),
  maintenanceController.deleteMaintenanceHandler
);

export default maintenanceRoutes;
