import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { ApplyReturnedItemAssessmentCommand } from '../impl/apply-returned-item-assessment.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { inventoryStatusForReturnCondition } from '../../common/return-condition-status.js';

@CommandHandler(ApplyReturnedItemAssessmentCommand)
export class ApplyReturnedItemAssessmentHandler extends BaseCommandHandler<ApplyReturnedItemAssessmentCommand> {
  async execute(command: ApplyReturnedItemAssessmentCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';
    const tenantId = context?.tenantId;
    const userId = context?.userId || payload.assessedBy || 'system';

    try {
      if (!tenantId) {
        return {
          status: 'error',
          traceId,
          message: 'tenantId is required',
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }
      if (!payload?.inventoryItemId || !payload?.conditionState) {
        return {
          status: 'error',
          traceId,
          message: 'inventoryItemId and conditionState are required',
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }

      const invItem = await prisma.inventoryItem.findFirst({
        where: { tenantId, id: payload.inventoryItemId },
      });
      if (!invItem) {
        return {
          status: 'error',
          traceId,
          message: 'Inventory item not found',
          errorCode: ErrorCode.NOT_FOUND,
        };
      }

      const status = inventoryStatusForReturnCondition(payload.conditionState);
      if (invItem.status !== status) {
        await prisma.inventoryItem.update({
          where: { id: invItem.id },
          data: { status, updatedBy: userId },
        });
      }

      return {
        status: 'success',
        traceId,
        data: {
          inventoryItemId: invItem.id,
          previousStatus: invItem.status,
          status,
          conditionState: payload.conditionState,
          saleReturnItemId: payload.saleReturnItemId,
        },
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to apply returned item assessment',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}
