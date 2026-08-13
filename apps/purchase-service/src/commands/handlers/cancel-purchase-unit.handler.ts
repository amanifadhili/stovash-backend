import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { CancelPurchaseUnitCommand } from '../impl/cancel-purchase-unit.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { actorOf } from '../../common/actor.js';
import { recomputePurchaseItemCounts, recomputePurchaseReceivingStatus } from '../../common/receiving-counts.js';

@CommandHandler(CancelPurchaseUnitCommand)
export class CancelPurchaseUnitHandler extends BaseCommandHandler<CancelPurchaseUnitCommand> {
  async execute(command: CancelPurchaseUnitCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const { tenantId, shopId, userId, userName, traceId } = actorOf(context);

    try {
      const { receivedItemId, reason } = payload;
      const cancelledById = userId;
      const cancelledByName = userName;

      const receivedItem = await prisma.purchaseReceivedItem.findFirst({
        where: { id: receivedItemId, purchase: { tenantId, shopId } },
        include: { purchase: true },
      });
      if (!receivedItem) {
        return { status: 'error', traceId, message: 'Received unit not found', errorCode: ErrorCode.NOT_FOUND };
      }
      if (receivedItem.status === 'CANCELLED') {
        return { status: 'error', traceId, message: 'Unit is already cancelled', errorCode: ErrorCode.VALIDATION_ERROR };
      }
      if (receivedItem.status === 'CONFIRMED') {
        return { status: 'error', traceId, message: 'Cannot cancel a confirmed unit', errorCode: ErrorCode.VALIDATION_ERROR };
      }

      const updated = await prisma.purchaseReceivedItem.update({
        where: { id: receivedItemId },
        data: { status: 'CANCELLED' },
      });

      // Status-aware counts: CANCELLED units are excluded from received/accepted.
      await recomputePurchaseItemCounts(receivedItem.purchaseItemId);
      await recomputePurchaseReceivingStatus(receivedItem.purchaseId);

      await prisma.purchaseHistory.create({
        data: {
          purchaseId: receivedItem.purchaseId,
          eventType: 'STATUS_CHANGED',
          eventData: JSON.stringify({ receivedItemId, status: 'CANCELLED', reason: reason || null, cancelledBy: cancelledByName }),
          userId: cancelledById,
          userName: cancelledByName,
          traceId,
        },
      });

      await prisma.auditLog.create({
        data: {
          tenantId: receivedItem.purchase.tenantId,
          shopId: receivedItem.purchase.shopId,
          userId: cancelledById,
          action: 'CancelPurchaseUnit',
          resource: 'PurchaseReceivedItem',
          resourceId: receivedItemId,
          traceId,
          details: JSON.stringify({ purchaseId: receivedItem.purchaseId, serialNumber: receivedItem.serialNumber, reason: reason || null }),
        },
      });

      return { status: 'success', traceId, data: updated };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to cancel purchase unit',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}