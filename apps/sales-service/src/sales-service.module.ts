import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { SalesServiceController } from './sales-service.controller.js';
import { CommandHandlers } from './commands/handlers/index.js';
import { EventBusConnectionService } from './events/event-bus-connection.service.js';
import { EventBus } from '@electronic-shop/framework-event';

@Module({
  imports: [CqrsModule],
  controllers: [SalesServiceController],
  providers: [
    ...CommandHandlers,
    EventBusConnectionService,
    {
      provide: 'EVENT_BUS',
      useFactory: () => {
        return new EventBus({
          url: process.env.RABBITMQ_URL || 'amqp://localhost:5672',
          exchangeName: 'electronic-shop-events',
          queuePrefix: 'sales-service',
        });
      },
    },
  ],
})
export class SalesServiceModule {}
