import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';
import { CreatePhysicalAccountPayload } from '../../financial-structure/types.js';

export class CreatePhysicalAccountCommand extends BaseCommand<CreatePhysicalAccountPayload> {
  constructor(payload: CreatePhysicalAccountPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
