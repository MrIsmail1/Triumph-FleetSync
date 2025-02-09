import { MaintenanceEntity } from "../../domain/entities/MaintenanceEntity";

export interface MaintenanceRepository {
  findById(identifier: string): Promise<MaintenanceEntity | null>;
  findAll(filters?: {
    companyOrDealershipId?: string;
    motorbikeId?: string;
    fromDate?: Date;
    toDate?: Date;
  }): Promise<MaintenanceEntity[]>;
  findAllByClientId(clientId: string): Promise<MaintenanceEntity[]>;
  findByCompanyOrDealershipId(
    companyOrDealershipId: string,
    filters?: {
      motorbikeId?: string;
      fromDate?: Date;
      toDate?: Date;
    }
  ): Promise<MaintenanceEntity[]>;

  save(maintenance: MaintenanceEntity): Promise<void>;
  update(maintenance: MaintenanceEntity): Promise<MaintenanceEntity | null>;
  delete(identifier: string): Promise<void>;
}
