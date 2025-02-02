import { OK } from "@/constants/http.ts";
import { SparePartSchema } from "@/schemas/SparePartSchema.ts";
import { sparePartFilterSchema } from "@/schemas/SparePartsFilterSchema.ts";
import appAssert from "@/utils/appAssert.ts";
import { mapDomainErrorToHttp } from "@/utils/errorsMapper.ts";
import { Context } from "hono";
import { SparePartRepository } from "./../../../../application/repositories/SparePartRepository.ts";
import { SparePartCreateUsecase } from "./../../../../application/usecases/sparePart/SparePartCreateUsecase.ts";
import { SparePartDeleteUsecase } from "./../../../../application/usecases/sparePart/SparePartDeleteUsecase.ts";
import { SparePartListUsecase } from "./../../../../application/usecases/sparePart/SparePartListUsecase.ts";
import { SparePartUpdateUsecase } from "./../../../../application/usecases/sparePart/SparePartUpdateUsecase.ts";

export class SparePartController {
  constructor(private sparePartRepository: SparePartRepository) {}

  listSparePartsHandler = async (c: Context) => {
    const currentUserRole = c.get("role");
    const rawQuery = {
      id: c.req.query("id"),
      name: c.req.query("name"),
      partNumber: c.req.query("partNumber"),
      brand: c.req.query("brand"),
      stockQuantity: c.req.query("stockQuantity"),
      reorderThreshold: c.req.query("reorderThreshold"),
    };
    const validatedFilters = sparePartFilterSchema.parse(rawQuery);
    const sparePartsListUseCase = new SparePartListUsecase(
      this.sparePartRepository
    );

    const sparePartsOrError = await sparePartsListUseCase.execute(
      currentUserRole,
      validatedFilters
    );

    appAssert(
      !(sparePartsOrError instanceof Error),
      ...mapDomainErrorToHttp(sparePartsOrError as Error)
    );

    return c.json(sparePartsOrError, OK);
  };

  createSparePartHandler = async (c: Context) => {
    const currentUserRole = c.get("role");
    const rawBody = await c.req.json();

    const validateSparePart = SparePartSchema.parse(rawBody);
    const sparePartCreationUseCase = new SparePartCreateUsecase(
      this.sparePartRepository
    );
    const sparePartOrError = await sparePartCreationUseCase.execute(
      currentUserRole,
      validateSparePart
    );

    appAssert(
      !(sparePartOrError instanceof Error),
      ...mapDomainErrorToHttp(sparePartOrError as Error)
    );

    return c.json(sparePartOrError, OK);
  };

  updateSparePartHandler = async (c: Context) => {
    const currentUserRole = c.get("role");
    const sparePartId = c.req.param("id");
    const rawBody = await c.req.json();
    const validateSparePart = SparePartSchema.parse(rawBody);
    const sparePartUpdateUseCase = new SparePartUpdateUsecase(
      this.sparePartRepository
    );
    const sparePartOrError = await sparePartUpdateUseCase.execute(
      currentUserRole,
      sparePartId,
      validateSparePart
    );

    appAssert(
      !(sparePartOrError instanceof Error),
      ...mapDomainErrorToHttp(sparePartOrError as Error)
    );

    return c.json(sparePartOrError, OK);
  };

  deleteSparePartHandler = async (c: Context) => {
    const currentUserRole = c.get("role");
    const sparePartId = c.req.param("id");
    const sparePartDeleteUseCase = new SparePartDeleteUsecase(
      this.sparePartRepository
    );
    const sparePartOrError = await sparePartDeleteUseCase.execute(
      currentUserRole,
      sparePartId
    );

    appAssert(
      !(sparePartOrError instanceof Error),
      ...mapDomainErrorToHttp(sparePartOrError as Error)
    );

    return c.json(sparePartOrError, OK);
  };
}
