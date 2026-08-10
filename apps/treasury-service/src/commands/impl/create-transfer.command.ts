import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class CreateTransferPayload {
  tenantId!: string;
  shopId!: string;
  fromMethodId!: string;
  toMethodId!: string;
  amount!: number;
  reference?: string;
  status?: string;
}

export class CreateTransferCommand extends BaseCommand<CreateTransferPayload> {
  constructor(payload: CreateTransferPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
