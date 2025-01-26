import { MaintenanceRepository } from "../../../../../application/repositories/MaintenanceRepository";
import { UserRepository } from "../../../../../application/repositories/UserRepository";
import { MaintenanceCreateUsecase } from "../../../../../application/usecases/maintenance/MaintenanceCreateUsecase";
import { MaintenanceDeleteUsecase } from "../../../../../application/usecases/maintenance/MaintenanceDeleteUsecase";
import { MaintenancesListUsecase } from "../../../../../application/usecases/maintenance/MaintenancesListUsecase";
import { MaintenanceUpdateUsecase } from "../../../../../application/usecases/maintenance/MaintenanceUpdateUsecase";
import { CREATED, OK } from "../constants/http";
import {
  maintenanceCreateSchema,
  maintenanceUpdateSchema,
} from "../schemas/maintenanceSchema";
import appAssert from "../utils/appAssert";
import catchErrors from "../utils/catchErrors";
import { mapDomainErrorToHttp } from "../utils/errorsMapper";
import { AccessTokenPayload } from "../utils/jwt";

export class MaintenanceController {
  public constructor(
    private readonly maintenanceRepository: MaintenanceRepository,
    private readonly userRepository: UserRepository
  ) {}

  addMaintenanceHandler = catchErrors(async (request, response) => {
    const currentUser = request.user as AccessTokenPayload;

    const validatedMaintenanceData = maintenanceCreateSchema.parse({
      ...request.body,
      clientId: currentUser.userIdentifier,
      userRole: currentUser.role,
    });

    const maintenanceCreateUsecase = new MaintenanceCreateUsecase(
      this.maintenanceRepository
    );

    const maintenanceOrError = await maintenanceCreateUsecase.execute(
      validatedMaintenanceData
    );

    appAssert(
      !(maintenanceOrError instanceof Error),
      ...mapDomainErrorToHttp(maintenanceOrError as Error)
    );

    response.status(CREATED).json({
      message: "Maintenance ajoutée avec succès.",
      maintenance: maintenanceOrError,
    });
  });

  listMaintenancesHandler = catchErrors(async (request, response) => {
    const currentUser = request.user as AccessTokenPayload;
    const maintenancesListUsecase = new MaintenancesListUsecase(
      this.maintenanceRepository,
      this.userRepository
    );

    const maintenancesOrError = await maintenancesListUsecase.execute(
      currentUser.userIdentifier,
      currentUser.role
    );

    appAssert(
      !(maintenancesOrError instanceof Error),
      ...mapDomainErrorToHttp(maintenancesOrError as Error)
    );

    response.status(OK).json(maintenancesOrError);
  });

  updateMaintenanceHandler = catchErrors(async (request, response) => {
    const currentUser = request.user as AccessTokenPayload;
    const { id: maintenanceId } = request.params;

    const validatedMaintenanceData = maintenanceUpdateSchema.parse(
      request.body
    );

    const maintenanceUpdateUsecase = new MaintenanceUpdateUsecase(
      this.maintenanceRepository
    );

    const maintenanceOrError = await maintenanceUpdateUsecase.execute(
      currentUser.userIdentifier,
      currentUser.role,
      maintenanceId,
      validatedMaintenanceData
    );

    appAssert(
      !(maintenanceOrError instanceof Error),
      ...mapDomainErrorToHttp(maintenanceOrError as Error)
    );

    response.status(OK).json({
      message: "Maintenance mise à jour avec succès.",
      maintenance: maintenanceOrError,
    });
  });

  deleteMaintenanceHandler = catchErrors(async (request, response) => {
    const currentUser = request.user as AccessTokenPayload;
    const { id: maintenanceId } = request.params;

    const maintenanceDeleteUsecase = new MaintenanceDeleteUsecase(
      this.maintenanceRepository
    );

    const maintenanceDeletedOrError = await maintenanceDeleteUsecase.execute(
      currentUser.role,
      maintenanceId
    );

    appAssert(
      !(maintenanceDeletedOrError instanceof Error),
      ...mapDomainErrorToHttp(maintenanceDeletedOrError as Error)
    );

    response.status(OK).json({
      message: "Maintenance supprimée avec succès.",
    });
  });
}
