import { MaintenancePart } from "../../domain/entities/MaintenancePart.ts";

export interface MaintenancePartRepository {
  findById(identifier: string): Promise<MaintenancePart | null>;
  save(maintenancePart: MaintenancePart): Promise<void>;
  update(maintenancePart: MaintenancePart): Promise<MaintenancePart | null>;
  delete(identifier: string): Promise<void>;
  findByMaintenanceId(maintenanceId: string): Promise<MaintenancePart[]>;
}
