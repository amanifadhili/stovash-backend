import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class RecordLoanRepaymentPayload {
  loanId!: string;
  amount!: number;
  methodId!: string;
  notes?: string;
}

export class RecordLoanRepaymentCommand extends BaseCommand<RecordLoanRepaymentPayload> {
  constructor(payload: RecordLoanRepaymentPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
