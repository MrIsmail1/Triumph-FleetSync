import {FleetEntity} from "../../domain/entities/FleetEntity";

export interface FleetRepository {
    findAll(): Promise<FleetEntity[]>;
    findAllByCompanyOrDealershipId(companyOrDealerShipId: string): Promise<FleetEntity[] | null>;

    findByCompanyOrDealershipId(companyOrDealerShipId: string): Promise<FleetEntity | null>;
    findById(fleetId: string): Promise<FleetEntity | null>;
    findByIdAndCompanyOrDealershipId(fleetId: string, currentUserIdentifier: string): Promise<FleetEntity | null>;

    deleteByIdAndCompanyOrDealershipId(fleetId: string, companyOrDealershipId: string): Promise<FleetEntity | null>;

    save(fleetEntity: FleetEntity): Promise<FleetEntity>;
    update(fleetEntity: FleetEntity): Promise<FleetEntity[]>;
    delete(fleetId: string): Promise<void>;

}