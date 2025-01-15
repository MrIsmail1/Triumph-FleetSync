import {VehicleIdentificationNumberBadFormatError} from "../errors/VehicleIdentificationNumberBadFormatError";

export class VehicleIdentificationNumber {
    private constructor(readonly value: string) {}

    public static from(value: string) {
        // Valide que le VIN respecte les règles (17 caractères alphanumériques, pas de I, O, Q)
        const vinPattern = /^[A-HJ-NPR-Z\d]{17}$/;
        const vin = value.trim().toUpperCase();

        if (!vinPattern.test(vin)) {
            return new VehicleIdentificationNumberBadFormatError();
        }

        return new VehicleIdentificationNumber(vin);
    }

    public static reconstitute(value: string) {
        return new VehicleIdentificationNumber(value);
    }
}
