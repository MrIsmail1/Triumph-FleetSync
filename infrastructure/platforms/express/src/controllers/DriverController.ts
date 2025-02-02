import { DriverRepository } from "../../../../../application/repositories/DriverRepository.ts";
import appAssert from "../utils/appAssert.ts";
import catchErrors from "../utils/catchErrors.ts";
import { mapDomainErrorToHttp } from "../utils/errorsMapper.ts";
import { DriverCreateUsecase } from "../../../../../application/usecases/driver/DriverCreateUsecase.ts";
import { CREATED, FORBIDDEN, NOT_FOUND, OK } from "../constants/http.ts";
import { DriverListUsecase } from "../../../../../application/usecases/driver/DriverListUsecase.ts";
import { DriverGetOneUsecase } from "../../../../../application/usecases/driver/DriverGetOneUsecase.ts";
import { DriverDeleteUsecase } from "../../../../../application/usecases/driver/DriverDeleteUsecase.ts";
import { DriverUpdateUsecase } from "../../../../../application/usecases/driver/DriverUpdateUsecase.ts";
import { AccessTokenPayload } from "../utils/jwt.ts";

export class DriverController {
    public constructor(
        private readonly driverRepository: DriverRepository) {}

    createDriverHandler = catchErrors(async (request, response) => {
        const currentUser = request.user as AccessTokenPayload;
        const { firstName, lastName, email, motorbikeId } = request.body;

        const driverCreateUsecase = new DriverCreateUsecase(this.driverRepository);

        const driverOrError = await driverCreateUsecase.execute(
            firstName,
            lastName,
            email,
            currentUser.userIdentifier,
            motorbikeId,
            currentUser.role
        );

        appAssert(
            !(driverOrError instanceof Error),
            ...mapDomainErrorToHttp(driverOrError as Error)
        );

        response.status(CREATED).json({
            message: "Driver created successfully.",
        });
    });

    listDriversHandler = catchErrors(async (request, response) => {
        const currentUser = request.user as AccessTokenPayload;
        const driverListUsecase = new DriverListUsecase(this.driverRepository);

        const drivers = await driverListUsecase.execute(currentUser.userIdentifier, currentUser.role);

        appAssert(
            !(drivers instanceof Error),
            ...mapDomainErrorToHttp(drivers as Error)
        );

        response.status(OK).json(drivers);
    });

    getDriverHandler = catchErrors(async (request, response) => {
        const currentUser = request.user as AccessTokenPayload;
        const { driverId } = request.params;

        const driverGetOneUsecase = new DriverGetOneUsecase(this.driverRepository);

        const driverOrError = await driverGetOneUsecase.execute(driverId, currentUser.userIdentifier, currentUser.role);

        appAssert(
            !(driverOrError instanceof Error),
            NOT_FOUND,
            "DriverNotFound",
            "Driver not found."
        );

        response.status(OK).json(driverOrError);
    });

    deleteDriverHandler = catchErrors(async (request, response) => {
        const currentUser = request.user as AccessTokenPayload;
        const { driverId } = request.params;

        const driverDeleteUsecase = new DriverDeleteUsecase(this.driverRepository);

        const resultOrError = await driverDeleteUsecase.execute(driverId, currentUser.userIdentifier, currentUser.role);

        appAssert(
            !(resultOrError instanceof Error),
            FORBIDDEN,
            "UnauthorizedAction",
            "You are not authorized to perform this action."
        );

        response.status(OK).json({
            message: "Driver deleted successfully.",
        });
    });

    updateDriverHandler = catchErrors(async (request, response) => {
        const currentUser = request.user as AccessTokenPayload;
        const { driverId } = request.params;
        const dataToUpdate = request.body;

        const driverUpdateUsecase = new DriverUpdateUsecase(this.driverRepository);

        const updatedDriverOrError = await driverUpdateUsecase.execute(driverId, currentUser.userIdentifier, currentUser.role, dataToUpdate);

        appAssert(
            !(updatedDriverOrError instanceof Error),
            ...mapDomainErrorToHttp(updatedDriverOrError as Error)
        );

        response.status(OK).json({
            message: "Driver updated successfully.",
            updatedDriver: updatedDriverOrError,
        });
    });
}
