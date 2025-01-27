import { ModelMotorbikeRepository } from "../../../../../application/repositories/ModelMotorbikeRepository.ts";
import { ModelMotorbikeCreateUsecase } from "../../../../../application/usecases/modelMotorbike/ModelMotorbikeCreateUsecase.ts";
import { ModelMotorbikeListUsecase } from "../../../../../application/usecases/modelMotorbike/ModelMotorbikeListUsecase.ts";
import { ModelMotorbikeGetOneUsecase } from "../../../../../application/usecases/modelMotorbike/ModelMotorbikeGetOneUsecase.ts";
import { ModelMotorbikeDeleteUsecase } from "../../../../../application/usecases/modelMotorbike/ModelMotorbikeDeleteUsecase.ts";
import { ModelMotorbikeUpdateUsecase } from "../../../../../application/usecases/modelMotorbike/ModelMotorbikeUpdateUsecase.ts";
import { OK, CREATED, NOT_FOUND, FORBIDDEN } from "../constants/http.ts";
import appAssert from "../utils/appAssert.ts";
import catchErrors from "../utils/catchErrors.ts";
import { mapDomainErrorToHttp } from "../utils/errorsMapper.ts";
import { UserRepository } from "../../../../../application/repositories/UserRepository.ts";
import {AccessTokenPayload} from "../utils/jwt.ts";

export class ModelMotorbikeController {
    public constructor(
        private readonly modelMotorbikeRepository: ModelMotorbikeRepository,
        private readonly userRepository: UserRepository
    ) {}

    createModelMotorbikeHandler = catchErrors(async (request, response) => {
        const currentUser = request.user as AccessTokenPayload;
        const { name, brand, maintenanceIntervalKm, maintenanceIntervalTimeMonths } = request.body;

        const createUsecase = new ModelMotorbikeCreateUsecase(this.modelMotorbikeRepository);

        const modelOrError = await createUsecase.execute(
            name,
            brand,
            maintenanceIntervalKm,
            maintenanceIntervalTimeMonths,
            currentUser.role,
        );

        appAssert(
            !(modelOrError instanceof Error),
            ...mapDomainErrorToHttp(modelOrError as Error)
        );

        response.status(CREATED).json({
            message: "ModelMotorbike created successfully.",
        });
    });

    listModelMotorbikesHandler = catchErrors(async (request, response) => {
        const { userRole } = request.body;

        const listUsecase = new ModelMotorbikeListUsecase(this.modelMotorbikeRepository);

        const models = await listUsecase.execute(userRole);

        appAssert(
            !(models instanceof Error),
            ...mapDomainErrorToHttp(models as Error)
        );

        response.status(OK).json(models);
    });

    getModelMotorbikeHandler = catchErrors(async (request, response) => {
        const { modelMotorbikeId } = request.params;
        const { userRole } = request.body;

        const getOneUsecase = new ModelMotorbikeGetOneUsecase(this.modelMotorbikeRepository);

        const modelOrError = await getOneUsecase.execute(modelMotorbikeId, userRole);

        appAssert(
            !(modelOrError instanceof Error),
            NOT_FOUND,
            "ModelMotorbikeNotFound",
            "ModelMotorbike not found."
        );

        response.status(OK).json(modelOrError);
    });

    deleteModelMotorbikeHandler = catchErrors(async (request, response) => {
        const { modelMotorbikeId } = request.params;
        const { userRole } = request.body;

        const deleteUsecase = new ModelMotorbikeDeleteUsecase(this.modelMotorbikeRepository);

        const resultOrError = await deleteUsecase.execute(userRole, modelMotorbikeId);

        appAssert(
            !(resultOrError instanceof Error),
            FORBIDDEN,
            "UnauthorizedAction",
            "You are not authorized to perform this action."
        );

        response.status(OK).json({
            message: "ModelMotorbike deleted successfully.",
        });
    });

    updateModelMotorbikeHandler = catchErrors(async (request, response) => {
        const { modelMotorbikeId } = request.params;
        const { userRole, dataToUpdate } = request.body;

        const updateUsecase = new ModelMotorbikeUpdateUsecase(this.modelMotorbikeRepository);

        const updatedModelOrError = await updateUsecase.execute(
            modelMotorbikeId,
            userRole,
            dataToUpdate
        );

        appAssert(
            !(updatedModelOrError instanceof Error),
            ...mapDomainErrorToHttp(updatedModelOrError as Error)
        );

        response.status(OK).json({
            message: "ModelMotorbike updated successfully.",
            updatedModelMotorbike: updatedModelOrError,
        });
    });
}