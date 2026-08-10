import { ICommand } from '@electronic-shop/types';

export class RecordInventoryIncidentCommand implements ICommand {
  readonly command = 'RecordInventoryIncident';
  readonly description = 'Record inventory damage, loss, or theft';

  constructor(
    public readonly payload: {
      inventoryItemId: string;
      incidentType: string; // DAMAGED, LOST, STOLEN
      description?: string;
      writeOffAmount?: number;
    },
    public readonly context: any
  ) {}
}
