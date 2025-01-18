import {MotorbikeEntity} from "../../domain/entities/MotorbikeEntity";

export interface MotorbikeRepository {
    findAll(): Promise<MotorbikeEntity[]>;
    findById(motorbikeId: string): Promise<MotorbikeEntity | null>;
    findAllByFleetId(fleetId: string): Promise<MotorbikeEntity[] | null>;
    findAllByClientId(clientId: string): Promise<MotorbikeEntity[] | null>;

    create(motorbikeEntity: MotorbikeEntity): Promise<MotorbikeEntity>;
    update(motorbikeEntity: MotorbikeEntity): Promise<MotorbikeEntity[]>;
    delete(motorbikeId: string): Promise<void>;
}