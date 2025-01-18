import {FleetEntity} from "../../domain/entities/FleetEntity";

export interface FleetRepository {
    findAll(): Promise<FleetEntity[]>;
    findByManagerId(managerId: string): Promise<FleetEntity[] | null>;
    findByClientId(clientId: string): Promise<FleetEntity[] | null>;
    findById(fleetId: string): Promise<FleetEntity | null>;

    create(fleetEntity: FleetEntity): Promise<FleetEntity>;
    update(fleetEntity: FleetEntity): Promise<FleetEntity[]>;
    delete(fleetId: string): Promise<void>;
}