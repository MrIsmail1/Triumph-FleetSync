import { MaintenancePart } from "../../domain/entities/MaintenancePart";

export interface MaintenancePartRepository {
  findById(identifier: string): Promise<MaintenancePart | null>;
  save(maintenancePart: MaintenancePart): Promise<MaintenancePart>;
  update(maintenancePart: MaintenancePart): Promise<MaintenancePart>;
  delete(identifier: string): Promise<void>;
}
