import { MaintenanceRepository } from "../../../../../application/repositories/MaintenanceRepository";
import { UserRepository } from "../../../../../application/repositories/UserRepository";
import { MaintenanceCreateUsecase } from "../../../../../application/usecases/maintenance/MaintenanceCreateUsecase";
import { MaintenanceDeleteUsecase } from "../../../../../application/usecases/maintenance/MaintenanceDeleteUsecase";
import { MaintenancesListUsecase } from "../../../../../application/usecases/maintenance/MaintenancesListUsecase";
import { MaintenanceUpdateUsecase } from "../../../../../application/usecases/maintenance/MaintenanceUpdateUsecase";
import { CREATED, OK, NOT_FOUND } from "../constants/http";
import appAssert from "../utils/appAssert";
import catchErrors from "../utils/catchErrors";
import { mapDomainErrorToHttp } from "../utils/errorsMapper";
import { AccessTokenPayload } from "../utils/jwt";

export class MaintenanceController {
  public constructor(
    private readonly maintenanceRepository: MaintenanceRepository,
    private readonly userRepository: UserRepository
  ) {}

  /**
   * ✅ Créer une maintenance
   */
  addMaintenanceHandler = catchErrors(async (request, response) => {
    const currentUser = request.user as AccessTokenPayload;

    const {
      motorbikeId,
      maintenanceDate,
      mileageAtMaintenance,
      maintenanceType,
      maintenanceCost,
      maintenanceDescription,
      companyOrDealerShipId,
      breakdownId,
      warrantyId,
    } = request.body;

    const maintenanceCreateUsecase = new MaintenanceCreateUsecase(this.maintenanceRepository);
    
    const maintenanceOrError = await maintenanceCreateUsecase.execute(
      motorbikeId,
      maintenanceDate,
      mileageAtMaintenance,
      maintenanceType,
      maintenanceCost,
      maintenanceDescription,
      currentUser.userIdentifier,
      currentUser.role,
      companyOrDealerShipId,
      breakdownId ?? undefined,
      warrantyId ?? undefined
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

  /**
   * ✅ Lister les maintenances
   */
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

  /**
   * ✅ Récupérer une maintenance spécifique
   */
  getMaintenanceHandler = catchErrors(async (request, response) => {
    const currentUser = request.user as AccessTokenPayload;
    const { maintenanceId } = request.params;

    const maintenancesListUsecase = new MaintenancesListUsecase(
      this.maintenanceRepository,
      this.userRepository
    );

    const maintenanceOrError = await maintenancesListUsecase.execute(
      currentUser.userIdentifier,
      currentUser.role,
      maintenanceId
    );

    appAssert(
      !(maintenanceOrError instanceof Error),
      NOT_FOUND,
      "MaintenanceNotFound",
      "Maintenance introuvable."
    );

    response.status(OK).json(maintenanceOrError);
  });

  /**
   * ✅ Mettre à jour une maintenance
   */
  updateMaintenanceHandler = catchErrors(async (request, response) => {
    const currentUser = request.user as AccessTokenPayload;
    const maintenanceId = request.params.id;
    const dataToUpdate = request.body;

    const maintenanceUpdateUsecase = new MaintenanceUpdateUsecase(this.maintenanceRepository);

    const maintenanceOrError = await maintenanceUpdateUsecase.execute(
      currentUser.userIdentifier,
      currentUser.role,
      maintenanceId,
      dataToUpdate
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
    const maintenanceId = request.params.id;

    const maintenanceDeleteUsecase = new MaintenanceDeleteUsecase(this.maintenanceRepository);

    const maintenanceDeletedOrError = await maintenanceDeleteUsecase.execute(
      maintenanceId, // Correction ici
      currentUser.userIdentifier,
      currentUser.role
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
