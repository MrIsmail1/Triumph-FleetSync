import { ValidString } from "../types/ValidString";

export class MaintenanceEntity {
  private constructor(
    public identifier: string,
    public motorbikeId: string,
    public createdAt: Date,
    public updatedAt: Date,
    public maintenanceDate: Date,
    public mileageAtMaintenance: number,
    public maintenanceType: ValidString,
    public maintenanceCost: number,
    public maintenanceDescription: ValidString,
    public breakdownId: string | null,
    public warrantyId: string | null,
    public companyOrDealerShipId: string
  ) {}

  public static create(
    motorbikeId: string,
    maintenanceDate: Date,
    mileageAtMaintenance: number,
    maintenanceType: ValidString,
    maintenanceCost: number,
    maintenanceDescription: ValidString,
    companyOrDealerShipId: string,
    breakdownId: string | null,
    warrantyId: string | null
  ): MaintenanceEntity {
    const identifier = crypto.randomUUID();
    const createdAt = new Date();
    const updatedAt = new Date();

    return new MaintenanceEntity(
      identifier,
      motorbikeId,
      createdAt,
      updatedAt,
      maintenanceDate,
      mileageAtMaintenance,
      maintenanceType,
      maintenanceCost,
      maintenanceDescription,
      breakdownId,
      warrantyId,
      companyOrDealerShipId
    );
  }

  public static reconstitute(data: {
    id: string;
    motorbikeId: string;
    createdAt: Date;
    updatedAt: Date;
    maintenanceDate: Date;
    mileageAtMaintenance: number;
    maintenanceType: string;
    maintenanceCost: number;
    maintenanceDescription: string;
    breakdownId: string | null;
    warrantyId: string | null;
    companyOrDealerShipId: string;
  }): MaintenanceEntity {
    return new MaintenanceEntity(
      data.id,
      data.motorbikeId,
      data.createdAt,
      data.updatedAt,
      data.maintenanceDate,
      data.mileageAtMaintenance,
      ValidString.reconstitute(data.maintenanceType),
      data.maintenanceCost,
      ValidString.reconstitute(data.maintenanceDescription),
      data.breakdownId,
      data.warrantyId,
      data.companyOrDealerShipId
    );
  }
}
