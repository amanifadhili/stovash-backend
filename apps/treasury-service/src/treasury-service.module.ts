import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TreasuryServiceController } from './treasury-service.controller.js';
import { CommandHandlers } from './commands/handlers/index.js';
import { EventConsumerService } from './events/event-consumer.service.js';

@Module({
  imports: [CqrsModule],
  controllers: [TreasuryServiceController],
  providers: [
    ...CommandHandlers,
    EventConsumerService,
  ],
})
export class TreasuryServiceModule {}
