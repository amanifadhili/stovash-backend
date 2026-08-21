import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class ProcessSaleReplacementPayload {
  saleId!: string;
  saleItemId!: string;
  replacementInventoryItemId!: string;
  reason!: string;
  idempotencyKey!: string;
  /** Optional assert that the line still points at this unit. */
  originalInventoryItemId?: string;
}

export class ProcessSaleReplacementCommand extends BaseCommand<ProcessSaleReplacementPayload> {
  constructor(payload: ProcessSaleReplacementPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
