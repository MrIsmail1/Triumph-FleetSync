import { Router } from "express";
import {PrismaFleetRepository} from "../../../../adapters/repositories/PrismaFleetRepository.ts";
import { prisma } from "../config/prisma.db.ts";
import { PrismaUserRepository } from "../../../../adapters/repositories/PrismaUserRepository.ts";
import { FleetController } from "../controllers/FleetController.ts";
import {authorize} from "../middleware/authorize.ts";

const fleetRoutes = Router();

const prismaFleetRepository = new PrismaFleetRepository(prisma);
const prismaUserRepository = new PrismaUserRepository(prisma);

const fleetController = new FleetController(
    prismaFleetRepository,
    prismaUserRepository
);

fleetRoutes.get("/fleet/:fleetId", authorize(["admin", "client", "manager"]), fleetController.getFleetHandler);
fleetRoutes.get("/list", authorize(["admin", "client", "manager"]), fleetController.listFleetsHandler);
fleetRoutes.post("/create", authorize(["admin", "technician", "client", "manager"]), fleetController.createFleetHandler);
fleetRoutes.put("/update/:fleetId", authorize(["admin", "client"]), fleetController.updateFleetHandler);
fleetRoutes.delete("/delete/:fleetId", authorize(["admin", "client"]), fleetController.deleteFleetHandler);

export default fleetRoutes;
