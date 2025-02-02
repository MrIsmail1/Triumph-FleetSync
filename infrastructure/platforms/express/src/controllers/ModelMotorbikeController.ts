import {ModelMotorbikeRepository} from "../../../../../application/repositories/ModelMotorbikeRepository.ts";
import {
    ModelMotorbikeCreateUsecase
} from "../../../../../application/usecases/modelMotorbike/ModelMotorbikeCreateUsecase.ts";
import {
    ModelMotorbikeListUsecase
} from "../../../../../application/usecases/modelMotorbike/ModelMotorbikeListUsecase.ts";
import {
    ModelMotorbikeGetOneUsecase
} from "../../../../../application/usecases/modelMotorbike/ModelMotorbikeGetOneUsecase.ts";
import {
    ModelMotorbikeDeleteUsecase
} from "../../../../../application/usecases/modelMotorbike/ModelMotorbikeDeleteUsecase.ts";
import {
    ModelMotorbikeUpdateUsecase
} from "../../../../../application/usecases/modelMotorbike/ModelMotorbikeUpdateUsecase.ts";
import {CREATED, FORBIDDEN, NOT_FOUND, OK} from "../constants/http.ts";
import appAssert from "../utils/appAssert.ts";
import catchErrors from "../utils/catchErrors.ts";
import {mapDomainErrorToHttp} from "../utils/errorsMapper.ts";
import {AccessTokenPayload} from "../utils/jwt.ts";

export class ModelMotorbikeController {
    public constructor(
        private readonly modelMotorbikeRepository: ModelMotorbikeRepository) {
    }

    createModelMotorbikeHandler = catchErrors(async (request, response) => {
        const currentUser = request.user as AccessTokenPayload;
        const {name, brand, maintenanceIntervalKm, maintenanceIntervalTimeMonths} = request.body;

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
        const currentUser = request.user as AccessTokenPayload;

        const listUsecase = new ModelMotorbikeListUsecase(this.modelMotorbikeRepository);

        const models = await listUsecase.execute(currentUser.role);

        appAssert(
            !(models instanceof Error),
            ...mapDomainErrorToHttp(models as Error)
        );

        response.status(OK).json(models);
    });

    getModelMotorbikeHandler = catchErrors(async (request, response) => {
        const {modelMotorbikeId} = request.params;
        const currentUser = request.user as AccessTokenPayload;

        const getOneUsecase = new ModelMotorbikeGetOneUsecase(this.modelMotorbikeRepository);

        const modelOrError = await getOneUsecase.execute(modelMotorbikeId, currentUser.role);

        appAssert(
            !(modelOrError instanceof Error),
            NOT_FOUND,
            "ModelMotorbikeNotFound",
            "ModelMotorbike not found."
        );

        response.status(OK).json(modelOrError);
    });

    deleteModelMotorbikeHandler = catchErrors(async (request, response) => {
        const currentUser = request.user as AccessTokenPayload;
        const {modelMotorbikeId} = request.params;


        const deleteUsecase = new ModelMotorbikeDeleteUsecase(this.modelMotorbikeRepository);

        const resultOrError = await deleteUsecase.execute(currentUser.role, modelMotorbikeId);

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
        const {modelMotorbikeId} = request.params;
        const dataToUpdate = request.body;
        const currentUser = request.user as AccessTokenPayload;


        console.log("Requête reçue avec modelMotorbikeId :", modelMotorbikeId);
        console.log("Body reçu :", request.body);

        if (!dataToUpdate) {
            console.error("Erreur : dataToUpdate est undefined !");
            return response.status(400).json({ message: "Erreur : Aucune donnée envoyée." });
        }

        const updateUsecase = new ModelMotorbikeUpdateUsecase(this.modelMotorbikeRepository);

        const updatedModelOrError = await updateUsecase.execute(
            modelMotorbikeId,
            currentUser.role,
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