import { Injectable } from '@nestjs/common';
import { EmailNotificationProvider } from './providers/email-notification.provider.js';
import { SmsNotificationProvider } from './providers/sms-notification.provider.js';
import { PushNotificationProvider } from './providers/push-notification.provider.js';
import { WebhookNotificationProvider } from './providers/webhook-notification.provider.js';

@Injectable()
export class NotificationService {
  constructor(
    private readonly emailProvider: EmailNotificationProvider,
    private readonly smsProvider: SmsNotificationProvider,
    private readonly pushProvider: PushNotificationProvider,
    private readonly webhookProvider: WebhookNotificationProvider,
  ) {}

  async sendSaleNotification(data: any) {
    const { customerId, salesOrderId, totalAmount } = data;
    
    // Send email notification
    await this.emailProvider.send({
      to: data.customerEmail,
      subject: `Sale Confirmation - Order #${salesOrderId}`,
      template: 'sale-confirmation',
      data: { salesOrderId, totalAmount },
    });

    // Send SMS notification
    if (data.customerPhone) {
      await this.smsProvider.send({
        to: data.customerPhone,
        message: `Thank you for your purchase! Order #${salesOrderId} for $${totalAmount} has been confirmed.`,
      });
    }
  }

  async sendPurchaseNotification(data: any) {
    const { supplierId, purchaseOrderId, totalCost } = data;
    
    await this.emailProvider.send({
      to: data.supplierEmail,
      subject: `Purchase Order #${purchaseOrderId} Created`,
      template: 'purchase-order',
      data: { purchaseOrderId, totalCost },
    });
  }

  async sendWorkPeriodNotification(data: any) {
    const { shopId, workPeriodId, totalSales } = data;
    
    await this.emailProvider.send({
      to: data.managerEmail,
      subject: `Work Period #${workPeriodId} Closed`,
      template: 'work-period-closed',
      data: { workPeriodId, totalSales },
    });
  }

  async sendLowStockAlert(data: any) {
    const { productId, productName, currentStock, threshold } = data;
    
    await this.emailProvider.send({
      to: data.managerEmail,
      subject: `Low Stock Alert: ${productName}`,
      template: 'low-stock-alert',
      data: { productName, currentStock, threshold },
    });

    await this.pushProvider.send({
      to: data.managerUserId,
      title: 'Low Stock Alert',
      body: `${productName} is running low (${currentStock} remaining)`,
    });
  }

  async sendPaymentNotification(data: any) {
    const { customerId, amount, paymentMethod } = data;
    
    await this.emailProvider.send({
      to: data.customerEmail,
      subject: 'Payment Received',
      template: 'payment-received',
      data: { amount, paymentMethod },
    });
  }

  async sendLoanPaymentReminder(data: any) {
    const { customerId, salesOrderId, dueDate, amount } = data;
    
    await this.emailProvider.send({
      to: data.customerEmail,
      subject: `Loan Payment Due - Order #${salesOrderId}`,
      template: 'loan-payment-reminder',
      data: { salesOrderId, dueDate, amount },
    });

    if (data.customerPhone) {
      await this.smsProvider.send({
        to: data.customerPhone,
        message: `Reminder: Loan payment of $${amount} for Order #${salesOrderId} is due on ${dueDate}.`,
      });
    }
  }

  async sendCustomNotification(data: any) {
    const { type, recipient, message, channels } = data;

    if (channels.includes('email')) {
      await this.emailProvider.send({
        to: recipient.email,
        subject: message.subject || 'Notification',
        template: 'custom',
        data: message,
      });
    }

    if (channels.includes('sms') && recipient.phone) {
      await this.smsProvider.send({
        to: recipient.phone,
        message: message.text,
      });
    }

    if (channels.includes('push') && recipient.userId) {
      await this.pushProvider.send({
        to: recipient.userId,
        title: message.title,
        body: message.text,
      });
    }

    if (channels.includes('webhook') && recipient.webhookUrl) {
      await this.webhookProvider.send({
        url: recipient.webhookUrl,
        payload: message,
      });
    }
  }
}
