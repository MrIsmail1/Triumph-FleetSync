import { BreakdownEntity } from "../../domain/entities/BreakdownEntity";

export interface BreakdownRepository {
  findAll(): Promise<BreakdownEntity[]>;
  findById(breakdownId: string): Promise<BreakdownEntity | null>;
  findAllByClientId(companyOrDealerShipId: string): Promise<BreakdownEntity[]>;
  
  save(breakdown: BreakdownEntity): Promise<void>;
  update(breakdown: BreakdownEntity): Promise<BreakdownEntity | null>;
  delete(identifier: string): Promise<void>;
}