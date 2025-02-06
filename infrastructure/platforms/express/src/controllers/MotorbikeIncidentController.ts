import {MotorbikeIncidentRepository} from "../../../../../application/repositories/MotorbikeIncidentRepository";
import {
    MotorbikeIncidentCreateUsecase
} from "../../../../../application/usecases/motorbikeIncident/MotorbikeIncidentCreateUsecase";
import {
    MotorbikeIncidentListUsecase
} from "../../../../../application/usecases/motorbikeIncident/MotorbikeIncidentListUsecase";
import {
    MotorbikeIncidentGetOneUsecase
} from "../../../../../application/usecases/motorbikeIncident/MotorbikeIncidentGetOneUsecase";
import {
    MotorbikeIncidentDeleteUsecase
} from "../../../../../application/usecases/motorbikeIncident/MotorbikeIncidentDeleteUsecase";
import {
    MotorbikeIncidentUpdateUsecase
} from "../../../../../application/usecases/motorbikeIncident/MotorbikeIncidentUpdateUsecase";
import {
    MotorbikeIncidentListByDriverIdUsecase
} from "../../../../../application/usecases/motorbikeIncident/MotorbikeIncidentListByDriverIdUsecase";
import {
    MotorbikeIncidentListByMotorbikeIdUsecase
} from "../../../../../application/usecases/motorbikeIncident/MotorbikeIncidentListByMotorbikeIdUsecase";
import {CREATED, FORBIDDEN, NOT_FOUND, OK} from "../constants/http.ts";
import appAssert from "../utils/appAssert.ts";
import catchErrors from "../utils/catchErrors.ts";
import {mapDomainErrorToHttp} from "../utils/errorsMapper.ts";
import {AccessTokenPayload} from "../utils/jwt.ts";

export class MotorbikeIncidentController {
    constructor(private readonly motorbikeIncidentRepository: MotorbikeIncidentRepository) {
    }

    createIncidentHandler = catchErrors(async (request, response) => {
        const currentUser = request.user as AccessTokenPayload;
        const {driverId, motorbikeId, incidentType, comment} = request.body;

        const motorbikeIncidentCreateUsecase = new MotorbikeIncidentCreateUsecase(this.motorbikeIncidentRepository);
        const incidentOrError = await motorbikeIncidentCreateUsecase.execute(currentUser.userIdentifier, driverId, motorbikeId, incidentType, comment, currentUser.role);

        appAssert(
            !(incidentOrError instanceof Error),
            ...mapDomainErrorToHttp(incidentOrError as Error)
        );

        response.status(CREATED).json({
            message: "Motorbike incident reported successfully.",
        });
    });

    listIncidentsHandler = catchErrors(async (request, response) => {
        const currentUser = request.user as AccessTokenPayload;
        const motorbikeIncidentListUsecase = new MotorbikeIncidentListUsecase(this.motorbikeIncidentRepository);

        const incidents = await motorbikeIncidentListUsecase.execute(currentUser.userIdentifier, currentUser.role);

        appAssert(
            !(incidents instanceof Error),
            ...mapDomainErrorToHttp(incidents as Error)
        );

        response.status(OK).json(incidents);
    });

    listIncidentsByDriverIdHandler = catchErrors(async (request, response) => {
        const currentUser = request.user as AccessTokenPayload;
        const {driverId} = request.params;

        const motorbikeIncidentListByDriverIdUsecase = new MotorbikeIncidentListByDriverIdUsecase(this.motorbikeIncidentRepository);
        const incidents = await motorbikeIncidentListByDriverIdUsecase.execute(driverId, currentUser.role);

        appAssert(
            !(incidents instanceof Error),
            ...mapDomainErrorToHttp(incidents as Error)
        );

        response.status(OK).json(incidents);
    });

    listIncidentsByMotorbikeIdHandler = catchErrors(async (request, response) => {
        const currentUser = request.user as AccessTokenPayload;
        const {motorbikeId} = request.params;

        const motorbikeIncidentListByMotorbikeIdUsecase = new MotorbikeIncidentListByMotorbikeIdUsecase(this.motorbikeIncidentRepository);
        const incidents = await motorbikeIncidentListByMotorbikeIdUsecase.execute(motorbikeId, currentUser.role);

        appAssert(
            !(incidents instanceof Error),
            ...mapDomainErrorToHttp(incidents as Error)
        );

        response.status(OK).json(incidents);
    });

    getIncidentHandler = catchErrors(async (request, response) => {
        const currentUser = request.user as AccessTokenPayload;
        const {incidentId} = request.params;

        const motorbikeIncidentGetOneUsecase = new MotorbikeIncidentGetOneUsecase(this.motorbikeIncidentRepository);
        const incidentOrError = await motorbikeIncidentGetOneUsecase.execute(incidentId, currentUser.role);

        appAssert(
            !(incidentOrError instanceof Error),
            NOT_FOUND,
            "MotorbikeIncidentNotFound",
            "Motorbike incident not found."
        );

        response.status(OK).json(incidentOrError);
    });

    deleteIncidentHandler = catchErrors(async (request, response) => {
        const currentUser = request.user as AccessTokenPayload;
        const {incidentId} = request.params;

        const motorbikeIncidentDeleteUsecase = new MotorbikeIncidentDeleteUsecase(this.motorbikeIncidentRepository);
        const resultOrError = await motorbikeIncidentDeleteUsecase.execute(incidentId, currentUser.role);

        appAssert(
            !(resultOrError instanceof Error),
            FORBIDDEN,
            "UnauthorizedAction",
            "You are not authorized to perform this action."
        );

        response.status(OK).json({
            message: "Motorbike incident deleted successfully.",
        });
    });

    updateIncidentHandler = catchErrors(async (request, response) => {
        const currentUser = request.user as AccessTokenPayload;
        const {incidentId} = request.params;
        const dataToUpdate = request.body;

        const motorbikeIncidentUpdateUsecase = new MotorbikeIncidentUpdateUsecase(this.motorbikeIncidentRepository);
        const updatedIncidentOrError = await motorbikeIncidentUpdateUsecase.execute(incidentId, currentUser.role, dataToUpdate);

        appAssert(
            !(updatedIncidentOrError instanceof Error),
            ...mapDomainErrorToHttp(updatedIncidentOrError as Error)
        );

        response.status(OK).json({
            message: "Motorbike incident updated successfully.",
            updatedIncident: updatedIncidentOrError,
        });
    });
}
