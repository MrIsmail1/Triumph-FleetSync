import {MotorbikeEntity} from "../../domain/entities/MotorbikeEntity";

export interface MotorbikeRepository {
    findAll(): Promise<MotorbikeEntity[]>;
    findAllByCompanyOrDealershipId(companyOrDealershipId: string): Promise<MotorbikeEntity[] | null>;
    findAllByFleetId(fleetId: string): Promise<MotorbikeEntity[] | null>;

    findById(motorbikeId: string): Promise<MotorbikeEntity | null>;
    findByIdAndCompanyOrDealershipId(motorbikeId: string, companyOrDealershipId: string): Promise<MotorbikeEntity | null>;

    deleteByIdAndCompanyOrDealershipId(motorbikeId: string, companyOrDealershipId: string): Promise<void>;

    save(motorbikeEntity: MotorbikeEntity): Promise<MotorbikeEntity>;
    update(motorbikeEntity: MotorbikeEntity): Promise<MotorbikeEntity[]>;
    delete(motorbikeId: string): Promise<void>;
}