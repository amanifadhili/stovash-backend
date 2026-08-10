import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class ProcessSalesReturnPayload {
  serialNumber!: string;
  salesOrderId?: string;
  refundAmount!: number;
  reason?: string;
  restock?: boolean;
}

export class ProcessSalesReturnCommand extends BaseCommand<ProcessSalesReturnPayload> {
  constructor(payload: ProcessSalesReturnPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
