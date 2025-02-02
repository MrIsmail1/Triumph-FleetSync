import { MaintenancePartSchema } from "@/schemas/MaintenancePartSchema.ts";
import appAssert from "@/utils/appAssert.ts";
import { mapDomainErrorToHttp } from "@/utils/errorsMapper.ts";
import { Context } from "hono";
import { MaintenancePartRepository } from "./../../../../application/repositories/MaintenancePartRepository.ts";
import { UsePartInMaintenanceUsecase } from "./../../../../application/usecases/maintenancePart/UsePartInMaintenanceUsecase.ts";
export class MaintenancePartController {
  constructor(private maintenancePartRepository: MaintenancePartRepository) {}

  usePartInMaintenanceHandler = async (c: Context) => {
    const currentUserRole = c.get("role");
    const maintenanceId = c.req.param("maintenanceId");
    const partId = c.req.param("partId");
    const rawBody = await c.req.json();

    const validateUsePart = MaintenancePartSchema.parse(rawBody);
    const usePartInMaintenanceUseCase = new UsePartInMaintenanceUsecase(
      this.sparePartRepository,
      this.maintenanceRepository,
      this.maintenancePartRepository
    );
    const usePartOrError = await usePartInMaintenanceUseCase.execute(
      currentUserRole,
      maintenanceId,
      partId,
      validateUsePart.quantityUsed,
      validateUsePart.cost
    );

    appAssert(
      !(usePartOrError instanceof Error),
      ...mapDomainErrorToHttp(usePartOrError as Error)
    );

    return c.json(usePartOrError, OK);
  };
}
