import { Motorbike } from "./MotorbikeResponses";
import { User } from "./AuthResponses";

export interface MaintenanceResponse {
  identifier: string;
  motorbikeId: string;
  companyOrDealerShipId?: string;
  maintenanceDate: string;
  mileageAtMaintenance: number;
  maintenanceType: {value:string};
  maintenanceCost: number;
  maintenanceDescription?: {value:string};
  createdAt: string;
  updatedAt: string;
  motorbike?: Motorbike;
  companyOrDealerShip?: User;
}
