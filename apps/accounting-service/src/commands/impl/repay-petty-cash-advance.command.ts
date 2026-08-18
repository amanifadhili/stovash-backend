import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';
import { RepayPettyCashAdvancePayload } from '../../engine-ledger/repay-petty-cash-advance.js';

export class RepayPettyCashAdvanceCommand extends BaseCommand<RepayPettyCashAdvancePayload> {
  constructor(payload: RepayPettyCashAdvancePayload, context?: IRequestContext) {
    super(payload, context);
  }
}
