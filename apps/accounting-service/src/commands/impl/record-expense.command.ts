import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';
import { ExpenseCategoryCode } from '../../expenses/expense-catalog.js';

export class RecordExpensePayload {
  category!: ExpenseCategoryCode;
  amount!: number;
  paymentMethod!: 'CASH' | 'MOMO' | 'BANK' | 'BANK_TRANSFER' | 'CARD';
  paidTo?: string;
  notes?: string;
}

export class RecordExpenseCommand extends BaseCommand<RecordExpensePayload> {
  constructor(payload: RecordExpensePayload, context?: IRequestContext) {
    super(payload, context);
  }
}
