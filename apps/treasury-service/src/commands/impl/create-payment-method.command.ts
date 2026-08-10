import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class CreatePaymentMethodPayload {
  tenantId!: string;
  shopId!: string;
  name!: string;
  type!: string; // CASH, BANK, MOBILE, CARD
  accountNumber?: string;
  bankName?: string;
  balance?: number;
  currency?: string;
  isActive?: boolean;
}

export class CreatePaymentMethodCommand extends BaseCommand<CreatePaymentMethodPayload> {
  constructor(payload: CreatePaymentMethodPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
