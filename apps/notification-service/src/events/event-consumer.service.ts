import { Injectable, OnModuleInit } from '@nestjs/common';
import { EventBus } from '@electronic-shop/framework-event';
import { tenantCreatedConsumer } from './consumers/tenant-created.consumer.js';

@Injectable()
export class EventConsumerService implements OnModuleInit {
  private eventBus: EventBus;

  constructor() {
    this.eventBus = new EventBus({
      url: process.env.RABBITMQ_URL || 'amqp://localhost:5672',
      exchangeName: 'electronic-shop-events',
      queuePrefix: 'notification-service',
    });
  }

  async onModuleInit() {
    try {
      // Create consumer BEFORE connecting
      this.eventBus.createConsumer('notification-tenant-created', 'tenant.created');
      this.eventBus.registerHandler('notification-tenant-created', 'TenantCreated', tenantCreatedConsumer);

      // Now connect (will connect publisher + all consumers)
      await this.eventBus.connect();

      await this.eventBus.startAllConsumers();
      console.log('Event consumers registered and started for Notification Service');
    } catch (error) {
      console.error('Failed to initialize event consumers:', error);
    }
  }
}
