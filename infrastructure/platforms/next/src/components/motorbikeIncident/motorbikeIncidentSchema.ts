import { z } from "zod";

export const motorbikeIncidentSchema = z.object({
    companyOrDealerShipId: z.string().nonempty("Le concessionnaire est obligatoire"),
    driverId: z.string().nonempty("Le conducteur est obligatoire"),
    motorbikeId: z.string().nonempty("La moto est obligatoire"),
    incidentType: z.string().nonempty("Le type d'incident est obligatoire"),
    comment: z.string().optional(),
});

export type MotorbikeIncidentSchema = z.infer<typeof motorbikeIncidentSchema>;
