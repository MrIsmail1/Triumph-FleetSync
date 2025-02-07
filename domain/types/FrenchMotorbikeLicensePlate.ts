import {LicensePlateBadFormatError} from "../errors/LicensePlateBadFormatError.ts";

export class FrenchMotorbikeLicensePlate {
    private constructor(readonly value: string) {}

    public static from(value: string) {
        // French motorbike license plate pattern: 2-3 characters, a dash, 3 digits, a dash, 2-3 characters
        const platePattern = /^[A-Z]{2,3}-\d{3}-[A-Z]{2,3}$/;
        const plate = value.trim().toUpperCase();

        if (!platePattern.test(plate)) {
            return new LicensePlateBadFormatError();
        }

        return new FrenchMotorbikeLicensePlate(plate);
    }

    public static reconstitute(value: string) {
        return new FrenchMotorbikeLicensePlate(value);
    }
}
