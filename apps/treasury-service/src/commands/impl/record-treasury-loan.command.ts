import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class RecordTreasuryLoanPayload {
  direction!: 'BORROWED' | 'LENT';
  counterparty!: string;
  amount!: number;
  methodId!: string;
  notes?: string;
}

export class RecordTreasuryLoanCommand extends BaseCommand<RecordTreasuryLoanPayload> {
  constructor(payload: RecordTreasuryLoanPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
