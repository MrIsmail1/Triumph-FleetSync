import { RoleDoesNotExistError } from "../errors/RoleDoesNotExistError";
import { RoleSelectionError } from "../errors/RoleSelectionError";

export class Role {
  private constructor(readonly value: string) {}
  private static readonly validRoles = [
    "Admin",
    "Technician",
    "Client",
    "Manager",
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
    if (role != "Client") {
      return new RoleSelectionError();
    }
    return new Role(role);
  }
  public static reconstitute(value: string) {
    return new Role(value);
  }
}
