import {MotorbikeEntity} from "../../domain/entities/MotorbikeEntity";

export interface MotorbikeRepository {
    findAll(): Promise<MotorbikeEntity[]>;
    findById(motorbikeId: string): Promise<MotorbikeEntity | null>;
    findByFleetId(fleetId: string): Promise<MotorbikeEntity[] | null>;
    findByClientId(clientId: string): Promise<MotorbikeEntity[] | null>;

    save(motorbikeEntity: MotorbikeEntity): Promise<MotorbikeEntity>;
    update(motorbikeEntity: MotorbikeEntity): Promise<MotorbikeEntity[]>;
    delete(motorbikeId: string): Promise<void>;
}