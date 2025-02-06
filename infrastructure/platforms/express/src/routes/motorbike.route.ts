import {Router} from "express";
import {PrismaMotorbikeRepository} from "../../../../adapters/repositories/PrismaMotorbikeRepository.ts";
import {PrismaDriverHistoricalRepository} from "../../../../adapters/repositories/PrismaDriverHistoricalRepository.ts";
import {prisma} from "../config/prisma.db.ts";
import {MotorbikeController} from "../controllers/MotorbikeController.ts";
import {authorize} from "../middleware/authorize.ts";
import {
    DriverHistoricalCreateUsecase
} from "../../../../../application/usecases/driverHistorical/DriverHistoricalCreateUsecase.ts";

const motorbikeRoutes = Router();

const prismaMotorbikeRepository = new PrismaMotorbikeRepository(prisma);
const prismaDriverHistoricalRepository = new PrismaDriverHistoricalRepository(prisma);
const driverHistoricalCreateUsecase = new DriverHistoricalCreateUsecase(prismaDriverHistoricalRepository);

const motorbikeController = new MotorbikeController(prismaMotorbikeRepository, driverHistoricalCreateUsecase);

motorbikeRoutes.post("/create", authorize(["admin"]), motorbikeController.createMotorbikeHandler);
motorbikeRoutes.get("/motorbike/:motorbikeId", authorize(["admin", "company", "dealership"]), motorbikeController.getMotorbikeHandler);
motorbikeRoutes.get("/list", authorize(["admin", "company", "dealership"]), motorbikeController.listMotorbikesHandler);
motorbikeRoutes.get("/listfleetId/:fleetId", authorize(["admin", "company", "dealership"]), motorbikeController.listMotorbikesByFleetIdHandler);
motorbikeRoutes.put("/update/:motorbikeId", authorize(["admin", "company", "dealership"]), motorbikeController.updateMotorbikeHandler);
motorbikeRoutes.delete("/delete/:motorbikeId", authorize(["admin"]), motorbikeController.deleteMotorbikeHandler);

export default motorbikeRoutes;