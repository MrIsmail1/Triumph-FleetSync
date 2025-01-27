import { MaintenanceEntity } from "../../domain/entities/MaintenanceEntity";

export interface MaintenanceRepository {
  findById(identifier: string): Promise<MaintenanceEntity | null>;
  findAll(): Promise<MaintenanceEntity[]>;
  findAllByClientId(clientId: string): Promise<MaintenanceEntity[]>;

  save(maintenance: MaintenanceEntity): Promise<void>;
  update(maintenance: MaintenanceEntity): Promise<MaintenanceEntity | null>;
  delete(identifier: string): Promise<void>;
}
