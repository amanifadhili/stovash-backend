import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { BaseCommandHandler } from '@electronic-shop/framework-command';

@Controller()
export class TreasuryServiceController {
  @MessagePattern('treasury.createPaymentMethod')
  async createPaymentMethod(data: any) {
    return { status: 'success', data };
  }

  @MessagePattern('treasury.createTransfer')
  async createTransfer(data: any) {
    return { status: 'success', data };
  }

  @MessagePattern('treasury.createPhysicalConfirmation')
  async createPhysicalConfirmation(data: any) {
    return { status: 'success', data };
  }
}
