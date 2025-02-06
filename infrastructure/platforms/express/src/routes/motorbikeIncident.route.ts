import {Router} from "express";
import {
    PrismaMotorbikeIncidentRepository
} from "../../../../adapters/repositories/PrismaMotorbikeIncidentRepository.ts";
import {prisma} from "../config/prisma.db.ts";
import {MotorbikeIncidentController} from "../controllers/MotorbikeIncidentController.ts";
import {authorize} from "../middleware/authorize.ts";

const motorbikeIncidentRoutes = Router();
const prismaMotorbikeIncidentRepository = new PrismaMotorbikeIncidentRepository(prisma);
const motorbikeIncidentController = new MotorbikeIncidentController(prismaMotorbikeIncidentRepository);

motorbikeIncidentRoutes.post("/create", authorize(["admin", "dealership", "company"]), motorbikeIncidentController.createIncidentHandler);
motorbikeIncidentRoutes.get("/list", authorize(["admin", "dealership", "company"]), motorbikeIncidentController.listIncidentsHandler);
motorbikeIncidentRoutes.get("/list/driver/:driverId", authorize(["admin", "dealership", "company"]), motorbikeIncidentController.listIncidentsByDriverIdHandler);
motorbikeIncidentRoutes.get("/list/motorbike/:motorbikeId", authorize(["admin", "dealership", "company"]), motorbikeIncidentController.listIncidentsByMotorbikeIdHandler);
motorbikeIncidentRoutes.get("/:incidentId", authorize(["admin", "dealership", "company"]), motorbikeIncidentController.getIncidentHandler);
motorbikeIncidentRoutes.delete("/delete/:incidentId", authorize(["admin"]), motorbikeIncidentController.deleteIncidentHandler);
motorbikeIncidentRoutes.put("/update/:incidentId", authorize(["admin"]), motorbikeIncidentController.updateIncidentHandler);

export default motorbikeIncidentRoutes;
