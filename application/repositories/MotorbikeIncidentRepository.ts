import { MotorbikeIncidentEntity } from "../../domain/entities/MotorbikeIncidentEntity";

export interface MotorbikeIncidentRepository {
    findAll(): Promise<MotorbikeIncidentEntity[]>;
    findAllByCompanyOrDealerShipId(dealershipId: string): Promise<MotorbikeIncidentEntity[]>;
    findAllByDriverId(driverId: string): Promise<MotorbikeIncidentEntity[]>;
    findAllByMotorbikeId(motorbikeId: string): Promise<MotorbikeIncidentEntity[]>;

    findById(identifier: string): Promise<MotorbikeIncidentEntity | null>;

    save(incidentEntity: MotorbikeIncidentEntity): Promise<MotorbikeIncidentEntity>;
    update(incidentEntity: MotorbikeIncidentEntity): Promise<MotorbikeIncidentEntity>;
    delete(identifier: string): Promise<void>;
}
