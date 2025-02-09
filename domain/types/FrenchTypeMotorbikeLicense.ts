import {InvalidLicenseTypeError} from "../errors/InvalidLicenseTypeError";


export class FrenchTypeMotorbikeLicense {
    private constructor(public readonly value: string) {}

    public static validTypes = ["A", "A1", "A2", "AM"]; // Permis moto en France

    public static from(value: string): FrenchTypeMotorbikeLicense | InvalidLicenseTypeError {
        const formattedValue = value.trim().toUpperCase();

        if (!FrenchTypeMotorbikeLicense.validTypes.includes(formattedValue)) {
            return new InvalidLicenseTypeError();
        }

        return new FrenchTypeMotorbikeLicense(formattedValue);
    }

    public static reconstitute(value: string): FrenchTypeMotorbikeLicense {
        return new FrenchTypeMotorbikeLicense(value);
    }
}
