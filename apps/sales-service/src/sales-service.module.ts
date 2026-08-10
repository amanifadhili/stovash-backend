import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { SalesServiceController } from './sales-service.controller.js';
import { CommandHandlers } from './commands/handlers/index.js';

@Module({
  imports: [CqrsModule],
  controllers: [SalesServiceController],
  providers: [
    ...CommandHandlers
  ],
})
export class SalesServiceModule {}
