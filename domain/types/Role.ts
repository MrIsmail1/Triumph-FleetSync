import { RoleDoesNotExistError } from "../errors/RoleDoesNotExistError";
import { RoleSelectionError } from "../errors/RoleSelectionError";

export class Role {
  private constructor(readonly value: string) {}
  private static readonly validRoles = [
    "admin",
    "technician",
    "company",
    "dealership",
  ];

  public static from(value: string) {
    const role = value.trim();
    if (!this.validRoles.includes(role)) {
      return new RoleDoesNotExistError();
    }
    return new Role(role);
  }

  public static isClient(value: string) {
    const role = value.trim();
    if (role != "client") {
      return new RoleSelectionError();
    }
    return new Role(role);
  }
  public static reconstitute(value: string) {
    return new Role(value);
  }
}
