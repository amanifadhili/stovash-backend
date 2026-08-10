import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { IdentityServiceController } from './identity-service.controller.js';
import { CommandHandlers } from './commands/handlers/index.js';

@Module({
  imports: [CqrsModule],
  controllers: [IdentityServiceController],
  providers: [
    ...CommandHandlers
  ],
})
export class IdentityServiceModule {}
