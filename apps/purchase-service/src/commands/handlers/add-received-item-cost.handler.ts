import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { AddReceivedItemCostCommand } from '../impl/add-received-item-cost.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { actorOf } from '../../common/actor.js';

@CommandHandler(AddReceivedItemCostCommand)
export class AddReceivedItemCostHandler extends BaseCommandHandler<AddReceivedItemCostCommand> {
  async execute(command: AddReceivedItemCostCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const { tenantId, shopId, userId, userName, traceId } = actorOf(context);

    try {
      const { receivedItemId, label, amount, notes } = payload;
      const addedById = userId;
      const addedByName = userName;

      if (!label || amount === undefined || amount === null || amount < 0) {
        return { status: 'error', traceId, message: 'A valid label and amount are required', errorCode: ErrorCode.VALIDATION_ERROR };
      }

      const receivedItem = await prisma.purchaseReceivedItem.findFirst({
        where: { id: receivedItemId, purchase: { tenantId, shopId } },
        include: { purchase: true },
      });
      if (!receivedItem) {
        return { status: 'error', traceId, message: 'Received unit not found', errorCode: ErrorCode.NOT_FOUND };
      }

      const cost = await prisma.purchaseReceivedItemCost.create({
        data: { receivedItemId, label, amount, addedById, notes },
      });

      // Recompute the unit's additional cost total.
      const costs = await prisma.purchaseReceivedItemCost.findMany({ where: { receivedItemId } });
      const additionalCost = costs.reduce((sum, c) => sum + c.amount, 0);

      await prisma.purchaseReceivedItem.update({
        where: { id: receivedItemId },
        data: { additionalCost },
      });

      await prisma.purchaseHistory.create({
        data: {
          purchaseId: receivedItem.purchaseId,
          eventType: 'STATUS_CHANGED',
          eventData: JSON.stringify({ receivedItemId, costLabel: label, amount, addedBy: addedByName }),
          userId: addedById,
          userName: addedByName,
          traceId,
        },
      });

      await prisma.auditLog.create({
        data: {
          tenantId: receivedItem.purchase.tenantId,
          shopId: receivedItem.purchase.shopId,
          userId: addedById,
          action: 'AddReceivedItemCost',
          resource: 'PurchaseReceivedItemCost',
          resourceId: cost.id,
          traceId,
          details: JSON.stringify({ receivedItemId, label, amount }),
        },
      });

      return { status: 'success', traceId, data: cost };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to add received item cost',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}
