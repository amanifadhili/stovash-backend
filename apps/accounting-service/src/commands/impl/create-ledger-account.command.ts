import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class CreateLedgerAccountPayload {
  code!: string;
  name!: string;
  type!: 'ASSET' | 'LIABILITY' | 'EQUITY' | 'REVENUE' | 'EXPENSE';
  initialBalance?: number;
}

export class CreateLedgerAccountCommand extends BaseCommand<CreateLedgerAccountPayload> {
  constructor(payload: CreateLedgerAccountPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
