import { ValidString } from "../types/ValidString";

export class BreakdownEntity {
  private constructor(
    public identifier: string,
    public companyOrDealerShipId: string,
    public description: ValidString,
    public actionTaken: ValidString,
    public resolved: boolean,
    public createdAt: Date,
    public updatedAt: Date,
    public motorbikeId?: string,
    public resolutionDate?: Date,
    public companyOrDealerShipUserFirstName?: string,
    public companyOrDealerShipuserLastName?: string
  ) {}

  public static create(
    companyOrDealerShipId: string,
    description: ValidString,
    actionTaken: ValidString,
    resolved: boolean = false,
    motorbikeId?: string,
    resolutionDate?: Date,
    companyOrDealerShipUserFirstName?: string,
    companyOrDealerShipuserLastName?: string
  ): BreakdownEntity {
    const identifier = crypto.randomUUID();
    const createdAt = new Date();
    const updatedAt = new Date();

    return new BreakdownEntity(
      identifier,
      companyOrDealerShipId,
      description,
      actionTaken,
      resolved,
      createdAt,
      updatedAt,
      motorbikeId,
      resolutionDate,
      companyOrDealerShipUserFirstName,
      companyOrDealerShipuserLastName
    );
  }

  public static reconstitute(data: {
    id: string;
    companyOrDealerShipId: string;
    description: string;
    actionTaken: string;
    resolved: boolean;
    createdAt: Date;
    updatedAt: Date;
    motorbikeId?: string;
    resolutionDate?: Date;
    companyOrDealerShipUserFirstName?: string;
    companyOrDealerShipuserLastName?: string;
  }): BreakdownEntity {
    return new BreakdownEntity(
      data.id,
      data.companyOrDealerShipId,
      ValidString.reconstitute(data.description),
      ValidString.reconstitute(data.actionTaken),
      data.resolved,
      data.createdAt,
      data.updatedAt,
      data.motorbikeId,
      data.resolutionDate,
      data.companyOrDealerShipUserFirstName,
      data.companyOrDealerShipuserLastName
    );
  }
}
