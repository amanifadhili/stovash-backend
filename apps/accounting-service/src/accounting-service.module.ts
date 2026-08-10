import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { AccountingServiceController } from './accounting-service.controller.js';
import { CommandHandlers } from './commands/handlers/index.js';
import { QueryHandlers } from './queries/handlers/index.js';
import { EventConsumerService } from './events/event-consumer.service.js';
import { EventBus } from '@electronic-shop/framework-event';

@Module({
  imports: [CqrsModule],
  controllers: [AccountingServiceController],
  providers: [
    ...CommandHandlers,
    ...QueryHandlers,
    EventConsumerService,
    {
      provide: 'EVENT_BUS',
      useFactory: () => new EventBus({
        url: process.env.RABBITMQ_URL || 'amqp://localhost:5672',
        exchangeName: 'electronic-shop-events',
        queuePrefix: 'accounting-service',
      }),
    },
  ],
})
export class AccountingServiceModule {}

