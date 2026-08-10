import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class CreatePhysicalConfirmationPayload {
  tenantId!: string;
  shopId!: string;
  methodId!: string;
  confirmedBy!: string; // userId
  amount!: number;
  notes?: string;
}

export class CreatePhysicalConfirmationCommand extends BaseCommand<CreatePhysicalConfirmationPayload> {
  constructor(payload: CreatePhysicalConfirmationPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
