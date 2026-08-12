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
      // Create consumer BEFORE connecting
      this.eventBus.createConsumer('supplier-purchases', 'purchase.created');
      this.eventBus.registerHandler('supplier-purchases', 'PurchaseCreated', purchaseCreatedConsumer);

      // Now connect (will connect publisher + all consumers)
      await this.eventBus.connect();

      await this.eventBus.startAllConsumers();
      console.log('Event consumers registered and started for Supplier Service');
    } catch (error) {
      console.error('Failed to initialize event consumers:', error);
    }
  }
}