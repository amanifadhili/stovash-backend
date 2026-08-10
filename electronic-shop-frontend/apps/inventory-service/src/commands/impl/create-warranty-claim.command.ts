import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class CreateWarrantyClaimPayload {
  serialNumber!: string;
  customerName?: string;
  issueDescription!: string;
  status?: string;
  resolution?: string;
}

export class CreateWarrantyClaimCommand extends BaseCommand<CreateWarrantyClaimPayload> {
  constructor(payload: CreateWarrantyClaimPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
