import { WarrantyEntity } from "../../domain/entities/WarrantyEntity";

export interface WarrantyRepository {
  findAll(): Promise<WarrantyEntity[]>; 
  findById(warrantyId: string): Promise<WarrantyEntity | null>;

  findByMotorbikeId(motorbikeId: string): Promise<WarrantyEntity[]>;
  findActiveWarrantyByMotorbikeId(motorbikeId: string): Promise<WarrantyEntity | null>;

  findAllByCompanyOrDealershipId(companyOrDealershipId: string): Promise<WarrantyEntity[]>;

  save(warranty: WarrantyEntity): Promise<void>;
  update(warranty: WarrantyEntity): Promise<WarrantyEntity | null>;
  delete(identifier: string): Promise<void>;
  deleteByMotorbikeId(motorbikeId: string): Promise<void>;
}
