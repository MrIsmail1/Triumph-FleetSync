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
      return new RoleSelectionError();
    }
    return new Role(role);
  }

  public isClient(): boolean {
    return this.value === "Client";
  }
}
