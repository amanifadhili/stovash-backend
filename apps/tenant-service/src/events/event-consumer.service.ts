import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { EventBus } from '@electronic-shop/framework-event';
import { tenantCreatedConsumer } from './consumers/tenant-created.consumer.js';

@Injectable()
export class EventConsumerService implements OnModuleInit {
  constructor(@Inject('EVENT_BUS') private readonly eventBus: EventBus) {}

  async onModuleInit() {
    try {
      // Create consumer BEFORE connecting
      this.eventBus.createConsumer('tenant-tenant-created', 'tenant.created');
      this.eventBus.registerHandler('tenant-tenant-created', 'TenantCreated', tenantCreatedConsumer);

      // Now connect (will connect publisher + all consumers)
      await this.eventBus.connect();

      await this.eventBus.startAllConsumers();
      console.log('Event consumers registered and started for Tenant Service');
    } catch (error) {
      console.error('Failed to initialize event consumers:', error);
    }
  }
}
