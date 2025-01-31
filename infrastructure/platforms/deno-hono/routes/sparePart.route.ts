import { SparePartController } from "@/controllers/SparePartController.ts";
import { Hono } from "hono";
import { MongoMaintenancePartRepository } from "./../../../adapters/repositories/MongoMaintenancePartRepository";
import { MongoPartPurchaseRepository } from "./../../../adapters/repositories/MongoPartPurchaseRepository.ts";
import { MongoSparePartRepository } from "./../../../adapters/repositories/MongoSparePartRepository.ts";

const sparePart = new Hono();
const mongoSparePartRepository = new MongoSparePartRepository();
const mongoPartPurchaseRepository = new MongoPartPurchaseRepository();
const mongoMaintenancePartRepository = new MongoMaintenancePartRepository();
const sparePartController = new SparePartController(
  mongoSparePartRepository,
  mongoPartPurchaseRepository,
  mongoMaintenancePartRepository
);

sparePart.get("/list", sparePartController.listSparePartsHandler);
sparePart.post("/create", sparePartController.createSparePartHandler);
sparePart.put("/update/:id", sparePartController.updateSparePartHandler);
sparePart.delete("/delete/:id", sparePartController.deleteSparePartHandler);

export default sparePart;
