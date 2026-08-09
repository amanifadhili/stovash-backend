import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { AccountingServiceController } from './accounting-service.controller.js';
import { CommandHandlers } from './commands/handlers/index.js';

@Module({
  imports: [CqrsModule],
  controllers: [AccountingServiceController],
  providers: [
    ...CommandHandlers
  ],
})
export class AccountingServiceModule {}
