import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CustomerServiceController } from './customer-service.controller.js';
import { CommandHandlers } from './commands/handlers/index.js';
import { EventConsumerService } from './events/event-consumer.service.js';

@Module({
  imports: [CqrsModule],
  controllers: [CustomerServiceController],
  providers: [
    ...CommandHandlers,
    EventConsumerService,
  ],
})
export class CustomerServiceModule {}
