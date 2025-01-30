import { SparePartNotFoundError } from "../../../domain/errors/SparePartNotFoundError.ts";
import { UnauthorizedActionError } from "../../../domain/errors/UnauthorizedActionError.ts";
import { SparePartRepository } from "../../repositories/SparePartRepository.ts";

export class SparePartDeleteUsecase {
  constructor(private readonly sparePartRepository: SparePartRepository) {}

  public async execute(userRole: string, sparePartId: string) {
    if (userRole !== "admin") {
      return new UnauthorizedActionError();
    }
    const sparePartOrError = await this.sparePartRepository.findById(
      sparePartId
    );
    if (!sparePartOrError) {
      return new SparePartNotFoundError();
    }

    return await this.sparePartRepository.delete(sparePartId);
  }
}
