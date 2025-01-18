import {ModelMotorbikeEntity} from "../../domain/entities/ModelMotorbikeEntity";

export interface ModelMotorbikeRepository {
    findAll(): Promise<ModelMotorbikeEntity[]>;
    findAllbyClientId(clientId: string): Promise<ModelMotorbikeEntity[]>;
    findById(modelMotorbikeId: string): Promise<ModelMotorbikeEntity | null>;

    create(modelMotorbikeEntity: ModelMotorbikeEntity): Promise<ModelMotorbikeEntity>;
    update(modelMotorbikeEntity: ModelMotorbikeEntity): Promise<ModelMotorbikeEntity[]>;
    delete(modelMotorbikeId: string): Promise<void>;
}