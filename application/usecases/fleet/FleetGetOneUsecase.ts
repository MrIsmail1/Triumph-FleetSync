import {FleetRepository} from "../../repositories/FleetRepository";

export class FleetGetOneUsecase {
    public constructor(private readonly fleetRepository: FleetRepository){
    }

    public async execute(fleetId: string) {
        return await this.fleetRepository.findById(fleetId);
    }
}