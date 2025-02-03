import { DriverEntity } from "../../domain/entities/DriverEntity";

export interface DriverRepository {
    findAll(): Promise<DriverEntity[]>;
    findAllByCompanyOrDealershipId(companyOrDealerShipId: string): Promise<DriverEntity[] | null>;

    findByCompanyOrDealershipId(companyOrDealerShipId: string): Promise<DriverEntity | null>;
    findById(driverId: string): Promise<DriverEntity | null>;
    findByIdAndCompanyOrDealershipId(driverId: string, companyOrDealerShipId: string): Promise<DriverEntity | null>;

    deleteByIdAndCompanyOrDealershipId(driverId: string, companyOrDealershipId: string): Promise<DriverEntity | null>;

    save(driverEntity: DriverEntity): Promise<DriverEntity>;
    update(driverEntity: DriverEntity): Promise<DriverEntity[]>;
    delete(driverId: string): Promise<void>;
}