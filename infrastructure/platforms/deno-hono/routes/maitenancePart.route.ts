/* import { Hono } from "hono";
import { MongoMaintenancePartRepository } from "./../../../adapters/repositories/MongoMaintenancePartRepository.ts";
import { PrismaMaintenanceRepository } from "./../../../adapters/repositories/PrismaMaintenanceRepository.ts";

const maintenancePart = new Hono();

const mongoMaintenancePartRepository = new MongoMaintenancePartRepository();
const prismaMaintenanceRepository = new PrismaMaintenanceRepository();

const maintenancePartController = new MaintenancePartController(
  mongoMaintenancePartRepository
);

export default maintenancePart;
 */