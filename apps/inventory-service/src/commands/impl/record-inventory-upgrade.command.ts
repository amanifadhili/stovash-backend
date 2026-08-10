import { ICommand } from '@electronic-shop/types';

export class RecordInventoryUpgradeCommand implements ICommand {
  readonly command = 'RecordInventoryUpgrade';
  readonly description = 'Record a capitalized inventory upgrade (SSD, RAM, etc.)';

  constructor(
    public readonly payload: {
      inventoryItemId: string;
      upgradeType: string;
      description?: string;
      cost: number;
    },
    public readonly context: any
  ) {}
}
