import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';
import { CreateTreasuryMovementPayload } from '../../treasury-movement/types.js';

export class CreateTreasuryMovementCommand extends BaseCommand<CreateTreasuryMovementPayload> {
  constructor(payload: CreateTreasuryMovementPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
