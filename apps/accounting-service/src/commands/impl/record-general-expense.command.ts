import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';
import { RecordGeneralExpensePayload } from '../../engine-ledger/record-general-expense.js';

export class RecordGeneralExpenseCommand extends BaseCommand<RecordGeneralExpensePayload> {
  constructor(payload: RecordGeneralExpensePayload, context?: IRequestContext) {
    super(payload, context);
  }
}
