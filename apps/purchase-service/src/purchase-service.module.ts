import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PurchaseServiceController } from './purchase-service.controller.js';
import { CommandHandlers } from './commands/handlers/index.js';
import { QueryHandlers } from './queries/handlers/index.js';
import { EventBusConnectionService } from './events/event-bus-connection.service.js';
import { EventBus } from '@electronic-shop/framework-event';

@Module({
  imports: [
    CqrsModule,
    ClientsModule.register([
      {
        name: 'SUPPLIER_SERVICE',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: parseInt(process.env.SUPPLIER_SERVICE_PORT || '3012', 10),
        },
      },
      {
        name: 'INVENTORY_SERVICE',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: parseInt(process.env.INVENTORY_SERVICE_PORT || '3004', 10),
        },
      },
      {
        name: 'ACCOUNTING_SERVICE',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: parseInt(process.env.ACCOUNTING_SERVICE_PORT || '3003', 10),
        },
      },
      {
        name: 'TREASURY_SERVICE',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: parseInt(process.env.TREASURY_SERVICE_PORT || '3006', 10),
        },
      },
    ]),
  ],
  controllers: [PurchaseServiceController],
  providers: [
    ...CommandHandlers,
    ...QueryHandlers,
    EventBusConnectionService,
    {
      provide: 'EVENT_BUS',
      useFactory: () => {
        return new EventBus({
          url: process.env.RABBITMQ_URL || 'amqp://localhost:5672',
          exchangeName: 'electronic-shop-events',
          queuePrefix: 'purchase-service',
        });
      },
    },
  ],
})
export class PurchaseServiceModule {}
