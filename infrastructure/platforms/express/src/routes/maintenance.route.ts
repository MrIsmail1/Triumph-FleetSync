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

maintenanceRoutes.post("/", authorize(["admin", "manager"]), );
maintenanceRoutes.get("/", authorize(["admin", "technician", "manager", "client"]), maintenanceController.listMaintenancesHandler);
maintenanceRoutes.put("/:id", authorize(["admin", "manager"]), maintenanceController.updateMaintenanceHandler);
maintenanceRoutes.delete("/:id", authorize(["admin"]), maintenanceController.deleteMaintenanceHandler);

export default maintenanceRoutes;
