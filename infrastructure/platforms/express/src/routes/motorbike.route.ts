import {Router} from "express";
import {PrismaMotorbikeRepository} from "../../../../adapters/repositories/PrismaMotorbikeRepository.ts";
import {prisma} from "../config/prisma.db.ts";
import {MotorbikeController} from "../controllers/MotorbikeController.ts";
import {authorize} from "../middleware/authorize.ts";

const motorbikeRoutes = Router();

const prismaMotorbikeRepository = new PrismaMotorbikeRepository(prisma);
const motorbikeController = new MotorbikeController(prismaMotorbikeRepository);

motorbikeRoutes.post("/create", authorize(["admin"]), motorbikeController.createMotorbikeHandler);
motorbikeRoutes.get("/motorbike/:motorbikeId", authorize(["admin", "company", "dealership"]), motorbikeController.getMotorbikeHandler);
motorbikeRoutes.get("/list", authorize(["admin", "company", "dealership"]), motorbikeController.listMotorbikesHandler);
motorbikeRoutes.put("/update/:motorbikeId", authorize(["admin", "company", "dealership"]), motorbikeController.updateMotorbikeHandler);
motorbikeRoutes.delete("/delete/:motorbikeId", authorize(["admin"]), motorbikeController.deleteMotorbikeHandler);

export default motorbikeRoutes;