import { MotorbikeRepository } from "../../../../../application/repositories/MotorbikeRepository.ts";
import { MotorbikeCreateUsecase } from "../../../../../application/usecases/motorbike/MotorbikeCreateUsecase.ts";
import { MotorbikeListUsecase } from "../../../../../application/usecases/motorbike/MotorbikeListUsecase.ts";
import { MotorbikeGetOneUsecase } from "../../../../../application/usecases/motorbike/MotorbikeGetOneUsecase.ts";
import { MotorbikeDeleteUsecase } from "../../../../../application/usecases/motorbike/MotorbikeDeleteUsecase.ts";
import { MotorbikeUpdateUsecase } from "../../../../../application/usecases/motorbike/MotorbikeUpdateUsecase.ts";
import { OK, CREATED, NOT_FOUND, FORBIDDEN } from "../constants/http.ts";
import appAssert from "../utils/appAssert.ts";
import catchErrors from "../utils/catchErrors.ts";
import { mapDomainErrorToHttp } from "../utils/errorsMapper.ts";
import {UserRepository} from "../../../../../application/repositories/UserRepository.ts";
import {AccessTokenPayload} from "../utils/jwt.ts";

export class MotorbikeController {
    public constructor(private readonly motorbikeRepository: MotorbikeRepository,
                       private readonly userRepository: UserRepository) {}

    createMotorbikeHandler = catchErrors(async (request, response) => {
        const currentUser = request.user as AccessTokenPayload;
        const {
            modelId,
            fleetId,
            clientId,
            color,
            licensePlate,
            vehicleIdentificationNumber,
            mileage,
            status,
        } = request.body;

        const motorbikeCreateUsecase = new MotorbikeCreateUsecase(this.motorbikeRepository);

        const motorbikeOrError = await motorbikeCreateUsecase.execute(
            modelId,
            fleetId,
            clientId,
            color,
            licensePlate,
            vehicleIdentificationNumber,
            mileage,
            status,
            currentUser.role
        );

        appAssert(
            !(motorbikeOrError instanceof Error),
            ...mapDomainErrorToHttp(motorbikeOrError as Error)
        );

        response.status(CREATED).json({
            message: "Motorbike created successfully.",
        });
    });

    listMotorbikesHandler = catchErrors(async (request, response) => {
        const { currentUserIdentifier } = request.body;

        const motorbikeListUsecase = new MotorbikeListUsecase(this.motorbikeRepository, this.userRepository);

        const motorbikes = await motorbikeListUsecase.execute(currentUserIdentifier);

        appAssert(
            !(motorbikes instanceof Error),
            ...mapDomainErrorToHttp(motorbikes as Error)
        );

        response.status(OK).json(motorbikes);
    });

    getMotorbikeHandler = catchErrors(async (request, response) => {
        const { id } = request.params;

        const motorbikeGetOneUsecase = new MotorbikeGetOneUsecase(this.motorbikeRepository);

        const motorbikeOrError = await motorbikeGetOneUsecase.execute(id);

        appAssert(
            !(motorbikeOrError instanceof Error),
            NOT_FOUND,
            "MotorbikeNotFound",
            "Motorbike not found."
        );

        response.status(OK).json(motorbikeOrError);
    });

    deleteMotorbikeHandler = catchErrors(async (request, response) => {
        const { id} = request.params;
        const { userRole } = request.body;

        const motorbikeDeleteUsecase = new MotorbikeDeleteUsecase(this.motorbikeRepository);

        const resultOrError = await motorbikeDeleteUsecase.execute(userRole, id);

        appAssert(
            !(resultOrError instanceof Error),
            FORBIDDEN,
            "UnauthorizedAction",
            "You are not authorized to perform this action."
        );

        response.status(OK).json({
            message: "Motorbike deleted successfully.",
        });
    });

    updateMotorbikeHandler = catchErrors(async (request, response) => {
        const currentUser = request.user as AccessTokenPayload;

        const { id} = request.params;
        console.log(id);
        const dataToUpdate = request.body;
        console.log(dataToUpdate);
        const motorbikeUpdateUsecase = new MotorbikeUpdateUsecase(this.motorbikeRepository);

        const updatedMotorbikeOrError = await motorbikeUpdateUsecase.execute(id, currentUser.role, dataToUpdate);

        appAssert(
            !(updatedMotorbikeOrError instanceof Error),
            ...mapDomainErrorToHttp(updatedMotorbikeOrError as Error)
        );

        response.status(OK).json({
            message: "Motorbike updated successfully.",
            updatedMotorbike: updatedMotorbikeOrError,
        });
    });
}
