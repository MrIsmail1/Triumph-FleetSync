import { MaintenanceRepository } from "../../../../../application/repositories/MaintenanceRepository";
import { AddMaintenanceUsecase } from "../../../../../application/usecases/maintenance/AddMaintenanceUsecase";
import { ListMaintenancesUsecase } from "../../../../../application/usecases/maintenance/ListMaintenancesUsecase";
import { GetMaintenanceUsecase } from "../../../../../application/usecases/maintenance/GetMaintenanceUsecase";
import { OK, CREATED, NOT_FOUND } from "../constants/http";
import appAssert from "../utils/appAssert";
import catchErrors from "../utils/catchErrors";
import { mapDomainErrorToHttp } from "../utils/errorsMapper";

export class MaintenanceController {
  public constructor(private readonly maintenanceRepository: MaintenanceRepository) {}

  addMaintenanceHandler = catchErrors(async (request, response) => {
    const {
      motorbikeId,
      maintenanceDate,
      mileageAtMaintenance,
      maintenanceType,
      maintenanceCost,
      maintenanceDescription,
      breakdownId,
      warrantyId,
    } = request.body;

    const addMaintenanceUsecase = new AddMaintenanceUsecase(this.maintenanceRepository);

    const maintenanceOrError = await addMaintenanceUsecase.execute({
      motorbikeId,
      maintenanceDate: new Date(maintenanceDate),
      mileageAtMaintenance,
      maintenanceType,
      maintenanceCost,
      maintenanceDescription,
      breakdownId,
      warrantyId,
    });

    appAssert(
      !(maintenanceOrError instanceof Error),
      ...mapDomainErrorToHttp(maintenanceOrError as Error)
    );

    response.status(CREATED).json({
      message: "Maintenance ajoutée avec succès.",
    });
  });

  listMaintenancesHandler = catchErrors(async (request, response) => {
  const listMaintenancesUsecase = new ListMaintenancesUsecase(this.maintenanceRepository);

  const maintenances = await listMaintenancesUsecase.execute();

  appAssert(
    maintenances.length > 0,
    NOT_FOUND,
    "NoMaintenancesFound",
    "Aucune maintenance trouvée."
  );

  response.status(OK).json(maintenances);
});


  getMaintenanceHandler = catchErrors(async (request, response) => {
    const { id } = request.params;

    const getMaintenanceUsecase = new GetMaintenanceUsecase(this.maintenanceRepository);

    const maintenanceOrError = await getMaintenanceUsecase.execute(id);

    appAssert(
      !(maintenanceOrError instanceof Error),
      NOT_FOUND,
      "MaintenanceNotFound",
      "Maintenance non trouvée."
    );

    response.status(OK).json(maintenanceOrError);
  });
}
