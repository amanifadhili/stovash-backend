import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';
import { RecordPettyCashExpensePayload } from '../../engine-ledger/record-petty-cash-expense.js';

export class RecordPettyCashExpenseCommand extends BaseCommand<RecordPettyCashExpensePayload> {
  constructor(payload: RecordPettyCashExpensePayload, context?: IRequestContext) {
    super(payload, context);
  }
}
