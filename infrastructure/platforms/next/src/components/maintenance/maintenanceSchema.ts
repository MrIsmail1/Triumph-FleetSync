import { z } from "zod";

export const maintenanceSchema = z.object({
    motorbikeId: z.string().nonempty("Sélectionnez une moto"),
    companyOrDealerShipId: z.string().nonempty("Sélectionnez une company"),
    maintenanceDate: z.string().nonempty("La date est obligatoire"),
    mileageAtMaintenance: z.coerce.number().min(1, "Le kilométrage doit être supérieur à 0"),
    maintenanceType: z.string().nonempty("Le type de maintenance est requis"),
    maintenanceCost: z.coerce.number().min(0, "Le coût doit être positif"),
    maintenanceDescription: z.string().optional(),
});

export type MaintenanceSchema = z.infer<typeof maintenanceSchema>;
