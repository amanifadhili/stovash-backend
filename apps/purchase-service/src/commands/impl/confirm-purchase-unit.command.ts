import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export interface ConfirmPurchaseUnitPayload {
  receivedItemId: string;
  confirmedById?: string;
  confirmedByName?: string;
  traceId?: string;
}

export class ConfirmPurchaseUnitCommand extends BaseCommand<ConfirmPurchaseUnitPayload> {
  constructor(payload: ConfirmPurchaseUnitPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
