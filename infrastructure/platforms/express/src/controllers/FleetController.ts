import {FleetRepository} from "../../../../../application/repositories/FleetRepository.ts";
import appAssert from "../utils/appAssert.ts";
import catchErrors from "../utils/catchErrors.ts";
import {mapDomainErrorToHttp} from "../utils/errorsMapper.ts";
import {FleetCreateUsecase} from "../../../../../application/usecases/fleet/FleetCreateUsecase.ts";
import {CREATED, FORBIDDEN, NOT_FOUND, OK} from "../constants/http.ts";
import {FleetListUsecase} from "../../../../../application/usecases/fleet/FleetListUsecase.ts";
import {FleetGetOneUsecase} from "../../../../../application/usecases/fleet/FleetGetOneUsecase.ts";
import {FleetDeleteUsecase} from "../../../../../application/usecases/fleet/FleetDeleteUsecase.ts";
import {FleetUpdateUsecase} from "../../../../../application/usecases/fleet/FleetUpdateUsecase.ts";
import {AccessTokenPayload} from "../utils/jwt.ts";

export class FleetController {
    public constructor(
        private readonly fleetRepository: FleetRepository) {
    }

    createFleetHandler = catchErrors(async (request, response) => {
        const currentUser = request.user as AccessTokenPayload;
        const {name} = request.body;

        const fleetCreateUsecase = new FleetCreateUsecase(this.fleetRepository);

        const fleetOrError = await fleetCreateUsecase.execute(
            name,
            currentUser.userIdentifier,
            currentUser.role
        );

        appAssert(
            !(fleetOrError instanceof Error),
            ...mapDomainErrorToHttp(fleetOrError as Error)
        );

        response.status(CREATED).json({
            message: "Fleet created successfully.",
        });
    });

    listFleetsHandler = catchErrors(async (request, response) => {
        const currentUser = request.user as AccessTokenPayload;
        const fleetListUsecase = new FleetListUsecase(this.fleetRepository);

        const fleets = await fleetListUsecase.execute(currentUser.userIdentifier, currentUser.role);

        appAssert(
            !(fleets instanceof Error),
            ...mapDomainErrorToHttp(fleets as Error)
        );

        response.status(OK).json(fleets);
    });

    getFleetHandler = catchErrors(async (request, response) => {
        const currentUser = request.user as AccessTokenPayload;
        const {fleetId} = request.params;

        const fleetGetOneUsecase = new FleetGetOneUsecase(this.fleetRepository);

        const fleetOrError = await fleetGetOneUsecase.execute(fleetId, currentUser.userIdentifier, currentUser.role);

        appAssert(
            !(fleetOrError instanceof Error),
            NOT_FOUND,
            "FleetNotFound",
            "Fleet not found."
        );

        response.status(OK).json(fleetOrError);
    });

    deleteFleetHandler = catchErrors(async (request, response) => {
        const currentUser = request.user as AccessTokenPayload;
        const {fleetId} = request.params;

        const fleetDeleteUsecase = new FleetDeleteUsecase(this.fleetRepository);

        const resultOrError = await fleetDeleteUsecase.execute(fleetId, currentUser.userIdentifier, currentUser.role);

        appAssert(
            !(resultOrError instanceof Error),
            FORBIDDEN,
            "UnauthorizedAction",
            "You are not authorized to perform this action."
        );

        response.status(OK).json({
            message: "Fleet deleted successfully.",
        });
    });

    updateFleetHandler = catchErrors(async (request, response) => {
        const currentUser = request.user as AccessTokenPayload;
        const {fleetId} = request.params;
        const dataToUpdate = request.body;

        const fleetUpdateUsecase = new FleetUpdateUsecase(this.fleetRepository);

        const updatedFleetOrError = await fleetUpdateUsecase.execute(fleetId, currentUser.userIdentifier, currentUser.role, dataToUpdate);

        appAssert(
            !(updatedFleetOrError instanceof Error),
            ...mapDomainErrorToHttp(updatedFleetOrError as Error)
        );

        response.status(OK).json({
            message: "Fleet updated successfully.",
            updatedFleet: updatedFleetOrError,
        });
    });
}
