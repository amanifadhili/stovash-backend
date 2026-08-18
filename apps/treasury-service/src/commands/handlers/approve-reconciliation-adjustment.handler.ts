import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { ICommandResponse } from '@electronic-shop/types';
import { ApproveReconciliationAdjustmentCommand } from '../impl/approve-reconciliation-adjustment.command.js';
import { approveReconciliationAdjustment } from '../../treasury-movement/reconciliation.js';
import { AccountingBooksBridge } from '../../treasury-movement/accounting-books-bridge.js';

@CommandHandler(ApproveReconciliationAdjustmentCommand)
export class ApproveReconciliationAdjustmentHandler extends BaseCommandHandler<ApproveReconciliationAdjustmentCommand> {
  constructor(private readonly books: AccountingBooksBridge) {
    super();
  }

  async execute(command: ApproveReconciliationAdjustmentCommand): Promise<ICommandResponse<any>> {
    return approveReconciliationAdjustment(command.payload, command.context, this.books);
  }
}
