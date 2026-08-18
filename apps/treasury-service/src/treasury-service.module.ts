import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TreasuryServiceController } from './treasury-service.controller.js';
import { CommandHandlers } from './commands/handlers/index.js';
import { QueryHandlers } from './queries/handlers/index.js';
import { EventConsumerService } from './events/event-consumer.service.js';
import { EventBus } from '@electronic-shop/framework-event';
import { AccountingBooksBridge } from './treasury-movement/accounting-books-bridge.js';

@Module({
  imports: [
    CqrsModule,
    ClientsModule.register([
      {
        name: 'ACCOUNTING_SERVICE',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: parseInt(process.env.ACCOUNTING_SERVICE_PORT || '3003', 10),
        },
      },
    ]),
  ],
  controllers: [TreasuryServiceController],
  providers: [
    ...CommandHandlers,
    ...QueryHandlers,
    AccountingBooksBridge,
    EventConsumerService,
    {
      provide: 'EVENT_BUS',
      useFactory: () => {
        return new EventBus({
          url: process.env.RABBITMQ_URL || 'amqp://localhost:5672',
          exchangeName: 'electronic-shop-events',
          queuePrefix: 'treasury-service',
        });
      },
    },
  ],
})
export class TreasuryServiceModule {}
