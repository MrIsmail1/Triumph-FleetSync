import { MaintenanceRepository } from "../../application/repositories/MaintenanceRepository";
import { UserRepository } from "../../application/repositories/UserRepository";
import { MailService } from "../services/MailService";

export class MaintenanceReminderService {
  constructor(
    private readonly maintenanceRepository: MaintenanceRepository,
    private readonly userRepository: UserRepository,
    private readonly emailService: MailService
  ) {}

  private addDays(date: Date, days: number): Date {
    return new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
  }

  private isWithinInterval(date: Date, start: Date, end: Date): boolean {
    return date >= start && date <= end;
  }

  public async sendMaintenanceReminders() {

    const maintenances = await this.maintenanceRepository.findAll();

    const today = new Date();
    const nextWeek = this.addDays(today, 7);
    const maintenanceThresholdKm = 10000;

    for (const maintenance of maintenances) {
      const { maintenanceDate, mileageAtMaintenance, companyOrDealerShipId, motorbikeId } = maintenance;

      // 🔍 Récupération de l'entreprise/concessionnaire
      const companyOrDealerShip = await this.userRepository.findById(companyOrDealerShipId);
      if (!companyOrDealerShip) {
        console.warn(`⚠️ Entreprise/concessionnaire introuvable pour la maintenance de ${motorbikeId}, ID: ${companyOrDealerShipId}`);
        continue;
      }

      if (!companyOrDealerShip.email) {
        console.warn(`⚠️ Aucune adresse email trouvée pour l'entreprise/concessionnaire ${companyOrDealerShipId}`);
        continue;
      }

      // 📆 Calcul de la prochaine maintenance (1 an après la dernière)
      const upcomingMaintenanceDate = this.addDays(maintenanceDate, 365);

      // ✅ Détermination du besoin d'envoi d'email
      const shouldNotifyByDate = this.isWithinInterval(upcomingMaintenanceDate, today, nextWeek);
      const shouldNotifyByMileage = mileageAtMaintenance >= maintenanceThresholdKm * 0.9;

      if (shouldNotifyByDate || shouldNotifyByMileage) {
        await this.emailService.send({
          to: companyOrDealerShip.email.toString(),
          subject: "🚀 Rappel d'entretien de votre flotte",
          text: `Bonjour ${companyOrDealerShip.firstName}, il est temps de planifier l'entretien de votre flotte.`,
          html: `
            <p>Bonjour <strong>${companyOrDealerShip.firstName}</strong>,</p>
            <p>Votre moto <strong>${motorbikeId}</strong> approche de son entretien :</p>
            <ul>
              <li><strong>Date prévue :</strong> ${upcomingMaintenanceDate.toLocaleDateString()}</li>
              <li><strong>Kilométrage actuel :</strong> ${mileageAtMaintenance} km</li>
            </ul>
            <p>Merci de planifier un rendez-vous avec votre atelier ou de mettre à jour le kilométrage.</p>
          `,
        });

      }
    }

  }
}
