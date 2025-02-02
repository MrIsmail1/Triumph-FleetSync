import { OK } from "@/constants/http.ts";
import { maintenanceHitoryFilterSchema } from "@/schemas/maintenanceHistoryFilterSchema.ts";
import { MaintenancePartSchema } from "@/schemas/MaintenancePartSchema.ts";
import appAssert from "@/utils/appAssert.ts";
import { mapDomainErrorToHttp } from "@/utils/errorsMapper.ts";
import { Context } from "hono";
import { MongoSparePartRepository } from "../../../adapters/repositories/MongoSparePartRepository.ts";
import { MaintenancePartRepository } from "./../../../../application/repositories/MaintenancePartRepository.ts";
import { MaintenanceRepository } from "./../../../../application/repositories/MaintenanceRepository.ts";
import { ReviewMaintenanceHistoryUsecase } from "./../../../../application/usecases/maintenancePart/ReviewMaintenanceHistoryUsecase.ts";
import { UsePartInMaintenanceUsecase } from "./../../../../application/usecases/maintenancePart/UsePartInMaintenanceUsecase.ts";
export class MaintenancePartController {
  constructor(
    private maintenancePartRepository: MaintenancePartRepository,
    private maintenanceRepository: MaintenanceRepository,
    private sparePartRepository: MongoSparePartRepository
  ) {}

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
      {
        maintenanceId: maintenanceId,
        partId: partId,
        quantityUsed: validateUsePart.quantityUsed,
        cost: validateUsePart.cost,
      }
    );

    appAssert(
      !(usePartOrError instanceof Error),
      ...mapDomainErrorToHttp(usePartOrError as Error)
    );

    return c.json(usePartOrError, OK);
  };

  reviewMaintenanceHistoryHandler = async (c: Context) => {
    const currentUserRole = c.get("role");
    const currentUserId = c.get("userId");
    const rawQuery = {
      companyOrDealershipId: c.req.query("companyOrDealershipId"),
      motorbikeId: c.req.query("motorbikeId"),
      fromDate: c.req.query("fromDate"),
      toDate: c.req.query("toDate"),
    };
    const filters = maintenanceHitoryFilterSchema.parse(rawQuery);

    const reviewMaintenanceHistoryUseCase = new ReviewMaintenanceHistoryUsecase(
      this.maintenanceRepository,
      this.maintenancePartRepository
    );
    const maintenanceHistory = await reviewMaintenanceHistoryUseCase.execute(
      currentUserId,
      currentUserRole,
      filters
    );

    return c.json(maintenanceHistory, OK);
  };
}
