import {MotorbikeRepository} from "../../repositories/MotorbikeRepository";

export class MotorbikeGetOneUsecase {
    public constructor(private readonly motorbikeRepository: MotorbikeRepository){
    }

    public async execute(motorbikeId: string) {
        return await this.motorbikeRepository.findById(motorbikeId);
    }
}