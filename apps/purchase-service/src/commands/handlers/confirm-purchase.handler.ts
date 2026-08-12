import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { ConfirmPurchaseCommand } from '../impl/confirm-purchase.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { actorOf } from '../../common/actor.js';

@CommandHandler(ConfirmPurchaseCommand)
export class ConfirmPurchaseHandler extends BaseCommandHandler<ConfirmPurchaseCommand> {
  async execute(command: ConfirmPurchaseCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const { userId, userName, traceId } = actorOf(context);

    try {
      const { purchaseId } = payload;
      const approvedById = userId;
      const approvedByName = userName;

      const purchase = await prisma.purchase.findUnique({ where: { id: purchaseId } });
      if (!purchase) {
        return { status: 'error', traceId, message: 'Purchase not found', errorCode: ErrorCode.NOT_FOUND };
      }
      if (purchase.commercialStatus !== 'DRAFT') {
        return { status: 'error', traceId, message: 'Only DRAFT purchases can be confirmed', errorCode: ErrorCode.VALIDATION_ERROR };
      }

      const items = await prisma.purchaseItem.findMany({ where: { purchaseId } });
      if (items.length === 0) {
        return { status: 'error', traceId, message: 'Cannot confirm purchase without items', errorCode: ErrorCode.VALIDATION_ERROR };
      }

      const updated = await prisma.purchase.update({
        where: { id: purchaseId },
        data: {
          commercialStatus: 'CONFIRMED',
          approvedById,
          approvedAt: new Date(),
        },
      });

      await prisma.purchaseHistory.create({
        data: {
          purchaseId,
          eventType: 'CONFIRMED',
          eventData: JSON.stringify({ approvedBy: approvedByName }),
          userId: approvedById,
          userName: approvedByName,
          traceId,
        },
      });

      await prisma.auditLog.create({
        data: {
          tenantId: purchase.tenantId,
          shopId: purchase.shopId,
          userId: approvedById,
          action: 'ConfirmPurchase',
          resource: 'Purchase',
          resourceId: purchaseId,
          traceId,
          details: JSON.stringify({ purchaseNumber: purchase.purchaseNumber }),
        },
      });

      return { status: 'success', traceId, data: updated };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to confirm purchase',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}