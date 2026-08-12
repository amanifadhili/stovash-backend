import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { CancelPurchaseCommand } from '../impl/cancel-purchase.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@CommandHandler(CancelPurchaseCommand)
export class CancelPurchaseHandler extends BaseCommandHandler<CancelPurchaseCommand> {
  async execute(command: CancelPurchaseCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || payload.traceId || 'unknown';

    try {
      const { purchaseId, cancelledById, cancelledByName, reason } = payload;

      const purchase = await prisma.purchase.findUnique({ where: { id: purchaseId } });
      if (!purchase) {
        return { status: 'error', traceId, message: 'Purchase not found', errorCode: ErrorCode.NOT_FOUND };
      }
      if (purchase.commercialStatus === 'CANCELLED') {
        return { status: 'error', traceId, message: 'Purchase already cancelled', errorCode: ErrorCode.VALIDATION_ERROR };
      }
      if (purchase.receivingStatus !== 'NOT_RECEIVED') {
        return { status: 'error', traceId, message: 'Cannot cancel purchase that has received items', errorCode: ErrorCode.VALIDATION_ERROR };
      }
      if (purchase.amountPaid > 0) {
        return { status: 'error', traceId, message: 'Cannot cancel purchase with payments', errorCode: ErrorCode.VALIDATION_ERROR };
      }

      const updated = await prisma.purchase.update({
        where: { id: purchaseId },
        data: { commercialStatus: 'CANCELLED' },
      });

      await prisma.purchaseHistory.create({
        data: {
          purchaseId,
          eventType: 'CANCELLED',
          eventData: JSON.stringify({ reason, cancelledBy: cancelledByName }),
          userId: cancelledById,
          userName: cancelledByName,
          traceId,
        },
      });

      await prisma.auditLog.create({
        data: {
          tenantId: purchase.tenantId,
          shopId: purchase.shopId,
          userId: cancelledById,
          action: 'CancelPurchase',
          resource: 'Purchase',
          resourceId: purchaseId,
          traceId,
          details: JSON.stringify({ reason, purchaseNumber: purchase.purchaseNumber }),
        },
      });

      return { status: 'success', traceId, data: updated };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to cancel purchase',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}