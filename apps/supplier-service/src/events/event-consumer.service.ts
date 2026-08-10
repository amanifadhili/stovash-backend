import { Injectable, OnModuleInit } from '@nestjs/common';
import { EventBus } from '@electronic-shop/framework-event';
import { purchaseCreatedConsumer } from './consumers/purchase-created.consumer.js';

@Injectable()
export class EventConsumerService implements OnModuleInit {
  private eventBus: EventBus;

  constructor() {
    this.eventBus = new EventBus({
      url: process.env.RABBITMQ_URL || 'amqp://localhost:5672',
      exchangeName: 'electronic-shop-events',
      queuePrefix: 'supplier-service',
    });
  }

  async onModuleInit() {
    try {
      // Connect to RabbitMQ
      await this.eventBus.connect();

      // Create consumer
      const purchaseConsumer = this.eventBus.createConsumer('supplier-purchases', 'purchase.created');

      // Register handler
      this.eventBus.registerHandler('supplier-purchases', 'PurchaseCreated', purchaseCreatedConsumer);

      // Start consuming
      await this.eventBus.startAllConsumers();

      console.log('Event consumers registered and started for Supplier Service');
    } catch (error) {
      console.error('Failed to initialize event consumers:', error);
    }
  }
}
