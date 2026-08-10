import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { NotificationService } from './notification.service.js';

@Controller()
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @EventPattern('SaleCreated')
  async handleSaleCreated(@Payload() data: any) {
    await this.notificationService.sendSaleNotification(data);
  }

  @EventPattern('PurchaseCreated')
  async handlePurchaseCreated(@Payload() data: any) {
    await this.notificationService.sendPurchaseNotification(data);
  }

  @EventPattern('WorkPeriodClosed')
  async handleWorkPeriodClosed(@Payload() data: any) {
    await this.notificationService.sendWorkPeriodNotification(data);
  }

  @EventPattern('LowStockAlert')
  async handleLowStockAlert(@Payload() data: any) {
    await this.notificationService.sendLowStockAlert(data);
  }

  @EventPattern('PaymentReceived')
  async handlePaymentReceived(@Payload() data: any) {
    await this.notificationService.sendPaymentNotification(data);
  }

  @EventPattern('LoanPaymentDue')
  async handleLoanPaymentDue(@Payload() data: any) {
    await this.notificationService.sendLoanPaymentReminder(data);
  }
}
