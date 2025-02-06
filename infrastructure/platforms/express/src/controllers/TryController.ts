import {TryRepository} from "../../../../../application/repositories/TryRepository";
import {TryCreateUsecase} from "../../../../../application/usecases/try/TryCreateUsecase";
import {TryListUsecase} from "../../../../../application/usecases/try/TryListUsecase";
import {TryGetOneUsecase} from "../../../../../application/usecases/try/TryGetOneUsecase";
import {TryDeleteUsecase} from "../../../../../application/usecases/try/TryDeleteUsecase";
import {TryUpdateUsecase} from "../../../../../application/usecases/try/TryUpdateUsecase";
import {TryListByDriverIdUsecase} from "../../../../../application/usecases/try/TryListByDriverIdUsecase";
import {TryListByMotorbikeIdUsecase} from "../../../../../application/usecases/try/TryListByMotorbikeIdUsecase";
import {CREATED, FORBIDDEN, NOT_FOUND, OK} from "../constants/http.ts";
import appAssert from "../utils/appAssert.ts";
import catchErrors from "../utils/catchErrors.ts";
import {mapDomainErrorToHttp} from "../utils/errorsMapper.ts";
import {AccessTokenPayload} from "../utils/jwt.ts";

export class TryController {
    constructor(private readonly tryRepository: TryRepository) {
    }

    createTryHandler = catchErrors(async (request, response) => {
        const currentUser = request.user as AccessTokenPayload;
        const {driverId, motorbikeId, endDate} = request.body;

        const tryCreateUsecase = new TryCreateUsecase(this.tryRepository);
        const tryOrError = await tryCreateUsecase.execute(currentUser.userIdentifier, driverId, motorbikeId, new Date(endDate), currentUser.role);

        appAssert(
            !(tryOrError instanceof Error),
            ...mapDomainErrorToHttp(tryOrError as Error)
        );

        response.status(CREATED).json({
            message: "Try record created successfully.",
        });
    });

    listTriesHandler = catchErrors(async (request, response) => {
        const currentUser = request.user as AccessTokenPayload;
        const tryListUsecase = new TryListUsecase(this.tryRepository);

        const tries = await tryListUsecase.execute(currentUser.userIdentifier, currentUser.role);

        appAssert(
            !(tries instanceof Error),
            ...mapDomainErrorToHttp(tries as Error)
        );

        response.status(OK).json(tries);
    });

    listTriesByDriverIdHandler = catchErrors(async (request, response) => {
        const currentUser = request.user as AccessTokenPayload;
        const {driverId} = request.params;

        const tryListByDriverIdUsecase = new TryListByDriverIdUsecase(this.tryRepository);
        const tries = await tryListByDriverIdUsecase.execute(driverId, currentUser.role);

        appAssert(
            !(tries instanceof Error),
            ...mapDomainErrorToHttp(tries as Error)
        );

        response.status(OK).json(tries);
    });

    listTriesByMotorbikeIdHandler = catchErrors(async (request, response) => {
        const currentUser = request.user as AccessTokenPayload;
        const {motorbikeId} = request.params;

        const tryListByMotorbikeIdUsecase = new TryListByMotorbikeIdUsecase(this.tryRepository);
        const tries = await tryListByMotorbikeIdUsecase.execute(motorbikeId, currentUser.role);

        appAssert(
            !(tries instanceof Error),
            ...mapDomainErrorToHttp(tries as Error)
        );

        response.status(OK).json(tries);
    });

    getTryHandler = catchErrors(async (request, response) => {
        const currentUser = request.user as AccessTokenPayload;
        const {tryId} = request.params;

        const tryGetOneUsecase = new TryGetOneUsecase(this.tryRepository);
        const tryOrError = await tryGetOneUsecase.execute(tryId, currentUser.role);

        appAssert(
            !(tryOrError instanceof Error),
            NOT_FOUND,
            "TryNotFound",
            "Try record not found."
        );

        response.status(OK).json(tryOrError);
    });

    deleteTryHandler = catchErrors(async (request, response) => {
        const currentUser = request.user as AccessTokenPayload;
        const {tryId} = request.params;

        const tryDeleteUsecase = new TryDeleteUsecase(this.tryRepository);
        const resultOrError = await tryDeleteUsecase.execute(tryId, currentUser.role);

        appAssert(
            !(resultOrError instanceof Error),
            FORBIDDEN,
            "UnauthorizedAction",
            "You are not authorized to perform this action."
        );

        response.status(OK).json({
            message: "Try record deleted successfully.",
        });
    });

    updateTryHandler = catchErrors(async (request, response) => {
        const currentUser = request.user as AccessTokenPayload;
        const {tryId} = request.params;
        const dataToUpdate = request.body;

        const tryUpdateUsecase = new TryUpdateUsecase(this.tryRepository);
        const updatedTryOrError = await tryUpdateUsecase.execute(tryId, dataToUpdate, currentUser.role);

        appAssert(
            !(updatedTryOrError instanceof Error),
            ...mapDomainErrorToHttp(updatedTryOrError as Error)
        );

        response.status(OK).json({
            message: "Try record updated successfully.",
            updatedTry: updatedTryOrError,
        });
    });
}
