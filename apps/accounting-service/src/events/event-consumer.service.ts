import { Injectable, OnModuleInit, Inject } from '@nestjs/common';
import { EventBus } from '@electronic-shop/framework-event';
import { saleCreatedConsumer } from './consumers/sale-created.consumer.js';
import { purchaseCreatedConsumer } from './consumers/purchase-created.consumer.js';

@Injectable()
export class EventConsumerService implements OnModuleInit {
  constructor(
    @Inject('EVENT_BUS') private readonly eventBus: EventBus,
  ) {}

  async onModuleInit() {
    try {
      // Create consumers
      const saleConsumer = this.eventBus.createConsumer('accounting-sales', 'sale.created');
      const purchaseConsumer = this.eventBus.createConsumer('accounting-purchases', 'purchase.created');

      // Register handlers
      this.eventBus.registerHandler('accounting-sales', 'SaleCreated', saleCreatedConsumer);
      this.eventBus.registerHandler('accounting-purchases', 'PurchaseCreated', purchaseCreatedConsumer);

      // Start consuming
      await this.eventBus.startAllConsumers();

      console.log('Event consumers registered and started for Accounting Service');
    } catch (error) {
      console.error('Failed to initialize event consumers:', error);
    }
  }
}
