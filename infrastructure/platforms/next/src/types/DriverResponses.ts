import {User} from "./AuthResponses";
import {Motorbike} from "./MotorbikeResponses";
import {DriverHistorical} from "@/types/DriverHistoricalResponses";

export interface Driver {
    identifier: string;
    firstName?: { value: string };
    lastName?: { value: string };
    email?: { value: string };
    companyOrDealerShipId: string;
    motorbikeId?: string;
    createdAt: string;
    updatedAt: string;
    frenchLicenseNumber?: { value: string };
    dateDeliveryLicence: string,
    dateExpirationLicense: string,
    frenchTypeMotorbikeLicense?: { value: string };
    restrictionConditions?: { value: string };
    experience?: { value: string };
    userFirstName?: string,
    userLastName?: string,
    companyOrDealerShip: User;
    motorbikes: Motorbike[];
    driverHistorical: DriverHistorical;
}
