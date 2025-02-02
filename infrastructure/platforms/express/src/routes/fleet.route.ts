import {Router} from "express";
import {PrismaFleetRepository} from "../../../../adapters/repositories/PrismaFleetRepository.ts";
import {prisma} from "../config/prisma.db.ts";
import {FleetController} from "../controllers/FleetController.ts";
import {authorize} from "../middleware/authorize.ts";

const fleetRoutes = Router();

const prismaFleetRepository = new PrismaFleetRepository(prisma);

const fleetController = new FleetController(prismaFleetRepository);

fleetRoutes.get("/fleet/:fleetId", authorize(["admin", "company", "dealership"]), fleetController.getFleetHandler);
fleetRoutes.get("/list", authorize(["admin", "company", "dealership"]), fleetController.listFleetsHandler);
fleetRoutes.post("/create", authorize(["admin", "company", "dealership"]), fleetController.createFleetHandler);
fleetRoutes.put("/update/:fleetId", authorize(["admin", "company", "dealership"]), fleetController.updateFleetHandler);
fleetRoutes.delete("/delete/:fleetId", authorize(["admin", "company", "dealership"]), fleetController.deleteFleetHandler);

export default fleetRoutes;
