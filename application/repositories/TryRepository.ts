import { TryEntity } from "../../domain/entities/TryEntity";

export interface TryRepository {
    findAll(): Promise<TryEntity[]>;
    findAllByDealershipId(dealershipId: string): Promise<TryEntity[]>;
    findAllByDriverId(driverId: string): Promise<TryEntity[]>;
    findAllByMotorbikeId(motorbikeId: string): Promise<TryEntity[]>;

    findById(identifier: string): Promise<TryEntity | null>;

    save(tryEntity: TryEntity): Promise<TryEntity>;
    update(tryEntity: TryEntity): Promise<TryEntity>;
    delete(identifier: string): Promise<void>;
}
