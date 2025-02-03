import { ValidString } from "../types/ValidString";

export class BreakdownEntity {
  private constructor(
    public identifier: string,
    public description: ValidString,
    public createdAt: Date,
    public updatedAt: Date,
    public companyOrDealerShipId: string
  ) {}

  public static create(description: ValidString, clientId: string): BreakdownEntity {
    const identifier = crypto.randomUUID();
    const createdAt = new Date();
    const updatedAt = new Date();

    return new BreakdownEntity(identifier, description, createdAt, updatedAt, clientId);
  }

  public static reconstitute(data: {
    id: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    companyOrDealerShipId: string;
  }): BreakdownEntity {
    return new BreakdownEntity(
      data.id,
      ValidString.reconstitute(data.description),
      data.createdAt,
      data.updatedAt,
      data.companyOrDealerShipId
    );
  }
}
