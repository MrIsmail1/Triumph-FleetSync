import { ValidString } from "../types/ValidString";

export class WarrantyEntity {
  private constructor(
    public identifier: string,
    public validFrom: Date,
    public validUntil: Date,
    public providerName: ValidString,
    public warrantyDetails: ValidString,
    public createdAt: Date,
    public updatedAt: Date
  ) {}

  public static create(
    validFrom: Date,
    validUntil: Date,
    providerName: ValidString,
    warrantyDetails: ValidString
  ): WarrantyEntity {
    const identifier = crypto.randomUUID();
    const createdAt = new Date();
    const updatedAt = new Date();

    return new WarrantyEntity(
      identifier,
      validFrom,
      validUntil,
      providerName,
      warrantyDetails,
      createdAt,
      updatedAt
    );
  }

  public static reconstitute(data: {
    id: string;
    validFrom: Date;
    validUntil: Date;
    providerName: string;
    warrantyDetails: string;
    createdAt: Date;
    updatedAt: Date;
  }): WarrantyEntity {
    return new WarrantyEntity(
      data.id,
      data.validFrom,
      data.validUntil,
      ValidString.reconstitute(data.providerName),
      ValidString.reconstitute(data.warrantyDetails),
      data.createdAt,
      data.updatedAt
    );
  }
}
