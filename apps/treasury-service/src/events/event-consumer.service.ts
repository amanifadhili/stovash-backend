import { Injectable, OnModuleInit } from '@nestjs/common';
import { EventBus } from '@electronic-shop/framework-event';
import { paymentMethodCreatedConsumer } from './consumers/payment-method-created.consumer.js';

@Injectable()
export class EventConsumerService implements OnModuleInit {
  private eventBus: EventBus;

  constructor() {
    this.eventBus = new EventBus({
      url: process.env.RABBITMQ_URL || 'amqp://localhost:5672',
      exchangeName: 'electronic-shop-events',
      queuePrefix: 'treasury-service',
    });
  }

  async onModuleInit() {
    try {
      // Connect to RabbitMQ
      await this.eventBus.connect();

      // Create consumer
      const paymentMethodConsumer = this.eventBus.createConsumer('treasury-payment-methods', 'payment-method.created');

      // Register handler
      this.eventBus.registerHandler('treasury-payment-methods', 'PaymentMethodCreated', paymentMethodCreatedConsumer);

      // Start consuming
      await this.eventBus.startAllConsumers();

      console.log('Event consumers registered and started for Treasury Service');
    } catch (error) {
      console.error('Failed to initialize event consumers:', error);
    }
  }
}
