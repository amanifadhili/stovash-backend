import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { SupplierServiceController } from './supplier-service.controller.js';
import { CommandHandlers } from './commands/handlers/index.js';
import { EventConsumerService } from './events/event-consumer.service.js';

@Module({
  imports: [CqrsModule],
  controllers: [SupplierServiceController],
  providers: [
    ...CommandHandlers,
    EventConsumerService,
  ],
})
export class SupplierServiceModule {}
