export class MaintenanceHistoryItem {
  private constructor(
    public readonly maintenanceId: string,
    public readonly motorbikeId: string,
    public readonly date: Date,
    public readonly description: string,
    public readonly laborCost: number,
    public readonly partsUsed: {
      partId: string;
      quantityUsed: number;
      cost: number;
    }[],
    public readonly totalMaintenanceCost: number
  ) {}

  public static from(values: {
    maintenanceId: string;
    motorbikeId: string;
    date: Date;
    description: string;
    laborCost: number;
    partsUsed: {
      partId: string;
      quantityUsed: number;
      cost: number;
    }[];
    totalMaintenanceCost: number;
  }) {
    return new MaintenanceHistoryItem(
      values.maintenanceId,
      values.motorbikeId,
      values.date,
      values.description,
      values.laborCost,
      values.partsUsed,
      values.totalMaintenanceCost
    );
  }
}
