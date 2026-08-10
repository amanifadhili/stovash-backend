import { Injectable, OnModuleInit } from '@nestjs/common';
import { EventBus } from '@electronic-shop/framework-event';
import { saleCreatedConsumer } from './consumers/sale-created.consumer.js';
import { purchaseCreatedConsumer } from './consumers/purchase-created.consumer.js';

@Injectable()
export class EventConsumerService implements OnModuleInit {
  private eventBus: EventBus;

  constructor() {
    this.eventBus = new EventBus({
      url: process.env.RABBITMQ_URL || 'amqp://localhost:5672',
      exchangeName: 'electronic-shop-events',
      queuePrefix: 'accounting-service',
      retryAttempts: 3,
      retryDelay: 1000,
      deadLetterExchange: 'electronic-shop-dlx',
      idempotencyEnabled: true,
    });
  }

  async onModuleInit() {
    try {
      // Connect to RabbitMQ
      await this.eventBus.connect();

      // Create consumers with DLQ configuration
      const saleConsumer = this.eventBus.createConsumer('accounting-sales', 'sale.created', {
        deadLetterQueue: 'accounting-sales-dlq'
      });
      const purchaseConsumer = this.eventBus.createConsumer('accounting-purchases', 'purchase.created', {
        deadLetterQueue: 'accounting-purchases-dlq'
      });

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
