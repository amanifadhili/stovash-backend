import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class IssueRefundItemInput {
  saleItemId?: string;
  inventoryItemId?: string | null;
  productId?: string;
  serialNumber?: string;
  quantity?: number;
  unitCost?: number;
}

export class IssueRefundPayload {
  saleId!: string;
  kind!: 'PHYSICAL' | 'GOODWILL';
  amountMinor!: number | string;
  reason!: string;
  occurredOn?: string;
  idempotencyKey!: string;
  fromKind?: string | null;
  fromPhysicalId?: string | null;
  items?: IssueRefundItemInput[];
}

export class IssueRefundCommand extends BaseCommand<IssueRefundPayload> {
  constructor(payload: IssueRefundPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
