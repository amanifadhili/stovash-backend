import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { EventBus } from '@electronic-shop/framework-event';
import { paymentMethodCreatedConsumer } from './consumers/payment-method-created.consumer.js';

@Injectable()
export class EventConsumerService implements OnModuleInit {
  constructor(@Inject('EVENT_BUS') private readonly eventBus: EventBus) {}

  async onModuleInit() {
    try {
      await this.eventBus.connect();

      this.eventBus.createConsumer('treasury-payment-methods', 'payment-method.created');

      this.eventBus.registerHandler('treasury-payment-methods', 'PaymentMethodCreated', paymentMethodCreatedConsumer);

      await this.eventBus.startAllConsumers();
      console.log('Event consumers registered and started for Treasury Service');
    } catch (error) {
      console.error('Failed to initialize event consumers:', error);
    }
  }
}
