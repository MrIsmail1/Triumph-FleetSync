import {DriverHistoricalRepository} from "../../repositories/DriverHistoricalRepository";
import {DriverHistoricalEntity} from "../../../domain/entities/DriverHistoricalEntity";

export class DriverHistoricalCreateUsecase {
    public constructor(private readonly driverHistoricalRepository: DriverHistoricalRepository) {
    }

    public async execute(driverId: string, motorbikeId: string) {

        const newDriverHistory = DriverHistoricalEntity.create(
            driverId,
            motorbikeId,
        );

        return await this.driverHistoricalRepository.save(newDriverHistory);
    }
}
