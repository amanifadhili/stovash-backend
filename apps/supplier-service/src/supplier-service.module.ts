import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { SupplierServiceController } from './supplier-service.controller.js';
import { CommandHandlers } from './commands/handlers/index.js';
import { EventBus } from '@electronic-shop/framework-event';

@Module({
  imports: [CqrsModule],
  controllers: [SupplierServiceController],
  providers: [
    ...CommandHandlers,
    {
      provide: 'EVENT_BUS',
      useFactory: () => {
        return new EventBus({
          url: process.env.RABBITMQ_URL || 'amqp://localhost:5672',
          exchangeName: 'electronic-shop-events',
          queuePrefix: 'supplier-service',
        });
      },
    },
  ],
})
export class SupplierServiceModule {}
