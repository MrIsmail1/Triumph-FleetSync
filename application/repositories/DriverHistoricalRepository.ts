import { DriverHistoricalEntity } from "../../domain/entities/DriverHistoricalEntity";

export interface DriverHistoricalRepository {
    findAll(): Promise<DriverHistoricalEntity[]>;
    findAllByDriverId(driverId: string): Promise<DriverHistoricalEntity[]>;
    findById(identifier: string): Promise<DriverHistoricalEntity | null>;

    save(driverHistoryEntity: DriverHistoricalEntity): Promise<DriverHistoricalEntity>;
    delete(identifier: string): Promise<void>;
}