import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { InventoryServiceController } from './inventory-service.controller.js';
import { CommandHandlers } from './commands/handlers/index.js';

@Module({
  imports: [CqrsModule],
  controllers: [InventoryServiceController],
  providers: [
    ...CommandHandlers
  ],
})
export class InventoryServiceModule {}
