import { BreakdownEntity } from "../../domain/entities/BreakdownEntity";

export interface BreakdownRepository {
  findAll(): Promise<BreakdownEntity[]>;
  findById(breakdownId: string): Promise<BreakdownEntity | null>;
  findAllByCompanyOrDealershipId(companyOrDealerShipId: string): Promise<BreakdownEntity[]>;
  findAllByMotorbikeId(motorbikeId: string): Promise<BreakdownEntity[]>;
  save(breakdown: BreakdownEntity): Promise<BreakdownEntity>;
  update(breakdown: BreakdownEntity): Promise<BreakdownEntity | null>;
  delete(identifier: string): Promise<void>;
  deleteByIdAndCompanyOrDealershipId(identifier: string, companyOrDealerShipId: string): Promise<void>;
}
