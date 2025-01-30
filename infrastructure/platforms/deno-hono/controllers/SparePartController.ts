import { OK } from "@/constants/http.ts";
import { sparePartFilterSchema } from "@/schemas/SparePartsFilterSchema.ts";
import appAssert from "@/utils/appAssert.ts";
import { mapDomainErrorToHttp } from "@/utils/errorsMapper.ts";
import { Context } from "hono";
import { SparePartRepository } from "./../../../../application/repositories/SparePartRepository.ts";
import { SparePartListUsecase } from "./../../../../application/usecases/sparePart/SparePartListUsecase.ts";

export class SparePartController {
  constructor(private sparePartRepository: SparePartRepository) {}

  listSparePartsHandler = async (c: Context) => {
    const validatedFilters = sparePartFilterSchema.parse({
      ...c.body,
    });
    const sparePartsListUseCase = new SparePartListUsecase(
      this.sparePartRepository
    );

    const sparePartsOrError = await sparePartsListUseCase.execute(
      "client",
      validatedFilters
    );

    appAssert(
      !(sparePartsOrError instanceof Error),
      ...mapDomainErrorToHttp(sparePartsOrError as Error)
    );

    return c.json(sparePartsOrError, OK);
  };
}
