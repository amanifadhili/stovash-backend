import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TenantServiceController } from './tenant-service.controller.js';
import { CommandHandlers } from './commands/handlers/index.js';

@Module({
  imports: [CqrsModule],
  controllers: [TenantServiceController],
  providers: [
    ...CommandHandlers
  ],
})
export class TenantServiceModule {}
