import {LicenseNumberBadFormatError} from "../errors/LicenseNumberBadFormatError";

export class FrenchLicenseNumber {
    private constructor(readonly value: string) {}

    public static from(value: string) {
        // Pattern : exactement 12 chiffres
        const licensePattern = /^\d{12}$/;
        const license = value.trim();

        if (!licensePattern.test(license)) {
            return new LicenseNumberBadFormatError();
        }

        return new FrenchLicenseNumber(license);
    }

    public static reconstitute(value: string) {
        return new FrenchLicenseNumber(value);
    }
}
