import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { SupplierServiceController } from './supplier-service.controller.js';
import { CommandHandlers } from './commands/handlers/index.js';

@Module({
  imports: [CqrsModule],
  controllers: [SupplierServiceController],
  providers: [
    ...CommandHandlers
  ],
})
export class SupplierServiceModule {}
