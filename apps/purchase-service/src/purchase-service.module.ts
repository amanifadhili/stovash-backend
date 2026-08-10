import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PurchaseServiceController } from './purchase-service.controller.js';
import { CommandHandlers } from './commands/handlers/index.js';

@Module({
  imports: [CqrsModule],
  controllers: [PurchaseServiceController],
  providers: [
    ...CommandHandlers
  ],
})
export class PurchaseServiceModule {}
