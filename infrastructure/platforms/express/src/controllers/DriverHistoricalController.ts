import {DriverHistoricalRepository} from "../../../../../application/repositories/DriverHistoricalRepository";
import appAssert from "../utils/appAssert";
import catchErrors from "../utils/catchErrors";
import {mapDomainErrorToHttp} from "../utils/errorsMapper";
import {FORBIDDEN, OK} from "../constants/http";
import {AccessTokenPayload} from "../utils/jwt";
import {DriverHistoricalListUsecase} from "../../../../../application/usecases/driverHistorical/DriverHistoricalListUsecase.ts";
import {DriverHistoricalDeleteUsecase} from "../../../../../application/usecases/driverHistorical/DriverHistoricalDeleteUsecase.ts";

export class DriverHistoricalController {
    public constructor(
        private readonly driverHistoricalRepository: DriverHistoricalRepository) {
    }

    listDriverHistoricalHandler = catchErrors(async (request, response) => {
        const currentUser = request.user as AccessTokenPayload;
        const driverHistoricalListUsecase = new DriverHistoricalListUsecase(this.driverHistoricalRepository);
        const { driverId } = request.params;

        const driverHistories = await driverHistoricalListUsecase.execute(driverId, currentUser.role);

        appAssert(
            !(driverHistories instanceof Error),
            ...mapDomainErrorToHttp(driverHistories as Error)
        );

        response.status(OK).json(driverHistories);
    });

    deleteDriverHistoricalHandler = catchErrors(async (request, response) => {
        const currentUser = request.user as AccessTokenPayload;
        const {driverHistoricalId} = request.params;

        const driverHistoryDeleteUsecase = new DriverHistoricalDeleteUsecase(this.driverHistoricalRepository);

        const resultOrError = await driverHistoryDeleteUsecase.execute(driverHistoricalId, currentUser.role);

        appAssert(
            !(resultOrError instanceof Error),
            FORBIDDEN,
            "UnauthorizedAction",
            "You are not authorized to perform this action."
        );

        response.status(OK).json({
            message: "Driver historical record deleted successfully.",
        });
    });
}
