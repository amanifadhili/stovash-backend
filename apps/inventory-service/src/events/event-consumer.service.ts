import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { EventBus } from '@electronic-shop/framework-event';
import { saleCreatedConsumer } from './consumers/sale-created.consumer.js';
import { purchaseCreatedConsumer } from './consumers/purchase-created.consumer.js';
import { saleFulfilledConsumer } from './consumers/sale-fulfilled.consumer.js';
import { saleReturnedConsumer } from './consumers/sale-returned.consumer.js';
import { returnedItemAssessedConsumer } from './consumers/returned-item-assessed.consumer.js';
import { purchaseUnitConfirmedConsumer } from './consumers/purchase-unit-confirmed.consumer.js';

@Injectable()
export class EventConsumerService implements OnModuleInit {
  constructor(@Inject('EVENT_BUS') private readonly eventBus: EventBus) {}

  async onModuleInit() {
    try {
      // Create consumers BEFORE connecting
      this.eventBus.createConsumer('inventory-sales', 'sale.created');
      this.eventBus.createConsumer('inventory-purchases', 'purchase.created');
      this.eventBus.createConsumer('inventory-sales-fulfilled', 'sale.fulfilled');
      this.eventBus.createConsumer('inventory-sale-returns', 'sale-return.created');
      this.eventBus.createConsumer('inventory-return-assessed', 'sale-return.assessed');
      this.eventBus.createConsumer('inventory-purchase-confirmed', 'purchase.unit.confirmed');

      this.eventBus.registerHandler('inventory-sales', 'SaleCreated', saleCreatedConsumer);
      this.eventBus.registerHandler('inventory-purchases', 'PurchaseCreated', purchaseCreatedConsumer);
      this.eventBus.registerHandler('inventory-sales-fulfilled', 'SaleFulfilled', saleFulfilledConsumer);
      this.eventBus.registerHandler('inventory-sale-returns', 'SaleReturnCreated', saleReturnedConsumer);
      this.eventBus.registerHandler('inventory-return-assessed', 'ReturnedItemAssessed', returnedItemAssessedConsumer);
      this.eventBus.registerHandler('inventory-purchase-confirmed', 'PurchaseUnitConfirmed', purchaseUnitConfirmedConsumer);

      // Now connect (will connect publisher + all consumers)
      await this.eventBus.connect();

      await this.eventBus.startAllConsumers();
      console.log('Event consumers registered and started for Inventory Service');
    } catch (error) {
      console.error('Failed to initialize event consumers:', error);
    }
  }
}