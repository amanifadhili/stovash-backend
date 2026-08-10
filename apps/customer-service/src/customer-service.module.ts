import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CustomerServiceController } from './customer-service.controller.js';
import { CommandHandlers } from './commands/handlers/index.js';

@Module({
  imports: [CqrsModule],
  controllers: [CustomerServiceController],
  providers: [
    ...CommandHandlers
  ],
})
export class CustomerServiceModule {}
