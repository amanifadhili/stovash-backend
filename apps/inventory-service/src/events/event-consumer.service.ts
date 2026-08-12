import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { EventBus } from '@electronic-shop/framework-event';
import { saleCreatedConsumer } from './consumers/sale-created.consumer.js';
import { purchaseCreatedConsumer } from './consumers/purchase-created.consumer.js';

@Injectable()
export class EventConsumerService implements OnModuleInit {
  constructor(@Inject('EVENT_BUS') private readonly eventBus: EventBus) {}

  async onModuleInit() {
    try {
      // Create consumers BEFORE connecting
      this.eventBus.createConsumer('inventory-sales', 'sale.created');
      this.eventBus.createConsumer('inventory-purchases', 'purchase.created');

      this.eventBus.registerHandler('inventory-sales', 'SaleCreated', saleCreatedConsumer);
      this.eventBus.registerHandler('inventory-purchases', 'PurchaseCreated', purchaseCreatedConsumer);

      // Now connect (will connect publisher + all consumers)
      await this.eventBus.connect();

      await this.eventBus.startAllConsumers();
      console.log('Event consumers registered and started for Inventory Service');
    } catch (error) {
      console.error('Failed to initialize event consumers:', error);
    }
  }
}