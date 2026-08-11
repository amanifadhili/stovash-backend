import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { EventBus } from '@electronic-shop/framework-event';
import { saleCreatedConsumer } from './consumers/sale-created.consumer.js';
import { purchaseCreatedConsumer } from './consumers/purchase-created.consumer.js';
import { salePaymentRecordedConsumer } from './consumers/sale-payment-recorded.consumer.js';
import { purchasePaymentRecordedConsumer } from './consumers/purchase-payment-recorded.consumer.js';

@Injectable()
export class EventConsumerService implements OnModuleInit {
  constructor(@Inject('EVENT_BUS') private readonly eventBus: EventBus) {}

  async onModuleInit() {
    try {
      await this.eventBus.connect();

      this.eventBus.createConsumer('accounting-sales', 'sale.created');
      this.eventBus.createConsumer('accounting-purchases', 'purchase.created');
      this.eventBus.createConsumer('accounting-sale-payments', 'sale-payment.recorded');
      this.eventBus.createConsumer('accounting-purchase-payments', 'purchase-payment.recorded');

      this.eventBus.registerHandler('accounting-sales', 'SaleCreated', saleCreatedConsumer);
      this.eventBus.registerHandler('accounting-purchases', 'PurchaseCreated', purchaseCreatedConsumer);
      this.eventBus.registerHandler('accounting-sale-payments', 'SalePaymentRecorded', salePaymentRecordedConsumer);
      this.eventBus.registerHandler('accounting-purchase-payments', 'PurchasePaymentRecorded', purchasePaymentRecordedConsumer);

      await this.eventBus.startAllConsumers();
      console.log('Event consumers registered and started for Accounting Service');
    } catch (error) {
      console.error('Failed to initialize event consumers:', error);
    }
  }
}
