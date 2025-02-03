import {ModelMotorbikeEntity} from "../../domain/entities/ModelMotorbikeEntity";

export interface ModelMotorbikeRepository {
    findAll(): Promise<ModelMotorbikeEntity[]>;
    findById(modelMotorbikeId: string): Promise<ModelMotorbikeEntity | null>;

    save(modelMotorbikeEntity: ModelMotorbikeEntity): Promise<ModelMotorbikeEntity>;
    update(modelMotorbikeEntity: ModelMotorbikeEntity): Promise<ModelMotorbikeEntity[]>;
    delete(modelMotorbikeId: string): Promise<void>;
}