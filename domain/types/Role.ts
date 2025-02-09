import { RoleDoesNotExistError } from "../errors/RoleDoesNotExistError.ts";
import { RoleSelectionError } from "../errors/RoleSelectionError.ts";

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
    if (role != "company" && role != "dealership") {
      return new RoleSelectionError();
    }
    return new Role(role);
  }
  public static reconstitute(value: string) {
    return new Role(value);
  }
}
