export interface NotificationService {
  sendAlert(message: string): Promise<void>;
}
