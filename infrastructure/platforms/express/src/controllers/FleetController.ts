import { FleetRepository } from "../../../../../application/repositories/FleetRepository.ts";
import appAssert from "../utils/appAssert.ts";
import catchErrors from "../utils/catchErrors.ts";
import { mapDomainErrorToHttp } from "../utils/errorsMapper.ts";
import { UserRepository } from "../../../../../application/repositories/UserRepository.ts";
import {FleetCreateUsecase} from "../../../../../application/usecases/fleet/FleetCreateUsecase.ts";
import {CREATED, FORBIDDEN, NOT_FOUND, OK} from "../constants/http.ts";
import {FleetListUsecase} from "../../../../../application/usecases/fleet/FleetListUsecase.ts";
import {FleetGetOneUsecase} from "../../../../../application/usecases/fleet/FleetGetOneUsecase.ts";
import {FleetDeleteUsecase} from "../../../../../application/usecases/fleet/FleetDeleteUsecase.ts";
import {FleetUpdateUsecase} from "../../../../../application/usecases/fleet/FleetUpdateUsecase.ts";
import {AccessTokenPayload} from "../utils/jwt.ts";

export class FleetController {
    public constructor(
        private readonly fleetRepository: FleetRepository,
        private readonly userRepository: UserRepository
    ) {}

    createFleetHandler = catchErrors(async (request, response) => {
        const currentUser = request.user as AccessTokenPayload;

        const { clientId, managerId, name } = request.body;

        const fleetCreateUsecase = new FleetCreateUsecase(this.fleetRepository);

        const fleetOrError = await fleetCreateUsecase.execute(
            clientId,
            managerId,
            name,
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
        console.log(currentUser);
        const fleetListUsecase = new FleetListUsecase(
            this.fleetRepository,
            this.userRepository
        );

        const fleets = await fleetListUsecase.execute(currentUser.userIdentifier);
        console.log(fleets);

        appAssert(
            !(fleets instanceof Error),
            ...mapDomainErrorToHttp(fleets as Error)
        );

        response.status(OK).json(fleets);
    });

    getFleetHandler = catchErrors(async (request, response) => {
        const { fleetId } = request.params;

        const fleetGetOneUsecase = new FleetGetOneUsecase(this.fleetRepository);

        const fleetOrError = await fleetGetOneUsecase.execute(fleetId);

        appAssert(
            !(fleetOrError instanceof Error),
            NOT_FOUND,
            "FleetNotFound",
            "Fleet not found."
        );

        response.status(OK).json(fleetOrError);
    });

    deleteFleetHandler = catchErrors(async (request, response) => {
        const { fleetId } = request.params;
        const { userRole } = request.body;

        const fleetDeleteUsecase = new FleetDeleteUsecase(this.fleetRepository);

        const resultOrError = await fleetDeleteUsecase.execute(userRole, fleetId);

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
        const { fleetId} = request.params;
        const dataToUpdate = request.body;
        console.log(dataToUpdate);

        const fleetUpdateUsecase = new FleetUpdateUsecase(this.fleetRepository, this.userRepository);

        const updatedFleetOrError = await fleetUpdateUsecase.execute(
            fleetId,
            currentUser.role,
            dataToUpdate
        );

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
