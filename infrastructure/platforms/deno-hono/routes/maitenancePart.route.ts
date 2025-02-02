import { prisma } from "@/config/prisma.db.ts";
import { MaintenancePartController } from "@/controllers/MaintenancePartController.ts";
import { Hono } from "hono";
import { MongoMaintenancePartRepository } from "./../../../adapters/repositories/MongoMaintenancePartRepository.ts";
import { MongoSparePartRepository } from "./../../../adapters/repositories/MongoSparePartRepository.ts";
import { PrismaMaintenanceRepository } from "./../../../adapters/repositories/PrismaMaintenanceRepository.ts";

const maintenancePart = new Hono();

const mongoMaintenancePartRepository = new MongoMaintenancePartRepository();
const mongoSparePartRepository = new MongoSparePartRepository();
const prismaMaintenanceRepository = new PrismaMaintenanceRepository(prisma);

const maintenancePartController = new MaintenancePartController(
  mongoMaintenancePartRepository,
  prismaMaintenanceRepository,
  mongoSparePartRepository
);

maintenancePart.post(
  "/maintenance/:maintenanceId/part/:partId",
  maintenancePartController.usePartInMaintenanceHandler
);

maintenancePart.get(
  "/maintenance/history",
  maintenancePartController.reviewMaintenanceHistoryHandler
);
export default maintenancePart;
