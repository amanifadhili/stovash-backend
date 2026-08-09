import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { IdentityServiceService } from './identity-service.service.js';

@Controller()
export class IdentityServiceController {
  constructor(private readonly identityServiceService: IdentityServiceService) {}

  @MessagePattern({ cmd: 'CreateTenant' })
  async handleCreateTenant(@Payload() data: { payload: any, context: any }) {
    console.log('Received CreateTenant command', data);
    return this.identityServiceService.createTenant(data.payload, data.context);
  }

  @MessagePattern({ cmd: 'CreateUser' })
  async handleCreateUser(@Payload() data: { payload: any, context: any }) {
    return this.identityServiceService.createUser(data.payload, data.context);
  }
}
