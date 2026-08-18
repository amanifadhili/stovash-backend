import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';
import { RecordWorkerAdvancePayload } from '../../engine-ledger/record-worker-advance.js';

export class RecordWorkerAdvanceCommand extends BaseCommand<RecordWorkerAdvancePayload> {
  constructor(payload: RecordWorkerAdvancePayload, context?: IRequestContext) {
    super(payload, context);
  }
}
