import {Router} from "express";
import {PrismaTryRepository} from "../../../../adapters/repositories/PrismaTryRepository.ts";
import {prisma} from "../config/prisma.db.ts";
import {TryController} from "../controllers/TryController.ts";
import {authorize} from "../middleware/authorize.ts";

const tryRoutes = Router();
const prismaTryRepository = new PrismaTryRepository(prisma);
const tryController = new TryController(prismaTryRepository);

tryRoutes.post("/create", authorize(["admin", "dealership"]), tryController.createTryHandler);
tryRoutes.get("/list", authorize(["admin", "dealership"]), tryController.listTriesHandler);
tryRoutes.get("/list/driver/:driverId", authorize(["admin", "dealership"]), tryController.listTriesByDriverIdHandler);
tryRoutes.get("/list/motorbike/:motorbikeId", authorize(["admin", "dealership"]), tryController.listTriesByMotorbikeIdHandler);
tryRoutes.get("/:tryId", authorize(["admin", "dealership"]), tryController.getTryHandler);
tryRoutes.delete("/delete/:tryId", authorize(["admin", "dealership"]), tryController.deleteTryHandler);
tryRoutes.put("/update/:tryId", authorize(["admin", "dealership"]), tryController.updateTryHandler);

export default tryRoutes;
