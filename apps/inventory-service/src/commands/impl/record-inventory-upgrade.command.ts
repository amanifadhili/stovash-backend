import { ICommand } from '@electronic-shop/types';

export type RecordInventoryUpgradePayment = {
  amount: number;
  paymentMethod?: string;
  accountId?: string;
  reference?: string;
  idempotencyKey?: string;
};

export class RecordInventoryUpgradeCommand implements ICommand {
  readonly command = 'RecordInventoryUpgrade';
  readonly description = 'Record a capitalized unit expense (maintenance, parts) paid from Operational';

  constructor(
    public readonly payload: {
      inventoryItemId: string;
      upgradeType: string;
      description?: string;
      details?: Record<string, string> | null;
      cost: number;
      occurredOn?: string;
      payments?: RecordInventoryUpgradePayment[];
      idempotencyKey?: string;
    },
    public readonly context: any
  ) {}
}
