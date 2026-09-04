import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { ConfirmPurchaseUnitCommand } from '../impl/confirm-purchase-unit.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { actorOf } from '../../common/actor.js';
import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { EventBus } from '@electronic-shop/framework-event';
import { recomputePurchaseItemAcquisitionCost, recomputePurchaseItemCounts, recomputePurchaseReceivingStatus } from '../../common/receiving-counts.js';
import { publishPurchaseUnitConfirmed } from '../../common/publish-purchase-unit-confirmed.js';

@CommandHandler(ConfirmPurchaseUnitCommand)
export class ConfirmPurchaseUnitHandler extends BaseCommandHandler<ConfirmPurchaseUnitCommand> {
  constructor(
    @Inject('INVENTORY_SERVICE') private readonly inventoryClient: ClientProxy,
    @Inject('EVENT_BUS') private readonly eventBus: EventBus,
  ) {
    super();
  }

  async execute(command: ConfirmPurchaseUnitCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const { tenantId, shopId, userId, userName, traceId } = actorOf(context);

    try {
      const { receivedItemId } = payload;
      const confirmedById = userId;
      const confirmedByName = userName;

      const receivedItem = await prisma.purchaseReceivedItem.findFirst({
        where: { id: receivedItemId, purchase: { tenantId, shopId } },
        include: { purchase: true },
      });
      if (!receivedItem) {
        return { status: 'error', traceId, message: 'Received unit not found', errorCode: ErrorCode.NOT_FOUND };
      }
      if (receivedItem.status === 'CANCELLED') {
        return { status: 'error', traceId, message: 'Cannot confirm a cancelled unit', errorCode: ErrorCode.VALIDATION_ERROR };
      }
      if (receivedItem.status === 'CONFIRMED') {
        return { status: 'success', traceId, data: receivedItem };
      }

      const updated = await prisma.purchaseReceivedItem.update({
        where: { id: receivedItemId },
        data: { status: 'CONFIRMED', confirmedAt: new Date(), confirmedById },
      });

      // Recompose counts so PENDING/CANCELLED units don't inflate received totals.
      await recomputePurchaseItemCounts(receivedItem.purchaseItemId);
      await recomputePurchaseItemAcquisitionCost(receivedItem.purchaseItemId);
      await recomputePurchaseReceivingStatus(receivedItem.purchaseId);

      const purchaseItem = await prisma.purchaseItem.findUnique({
        where: { id: receivedItem.purchaseItemId },
      });

      await publishPurchaseUnitConfirmed(this.inventoryClient, this.eventBus, updated, purchaseItem, context);

      await prisma.purchaseHistory.create({
        data: {
          purchaseId: receivedItem.purchaseId,
          eventType: 'RECEIVING_COMPLETED',
          eventData: JSON.stringify({ receivedItemId, confirmedBy: confirmedByName }),
          userId: confirmedById,
          userName: confirmedByName,
          traceId,
        },
      });

      await prisma.auditLog.create({
        data: {
          tenantId: receivedItem.purchase.tenantId,
          shopId: receivedItem.purchase.shopId,
          userId: confirmedById,
          action: 'ConfirmPurchaseUnit',
          resource: 'PurchaseReceivedItem',
          resourceId: receivedItemId,
          traceId,
          details: JSON.stringify({ purchaseId: receivedItem.purchaseId, serialNumber: receivedItem.serialNumber }),
        },
      });

      return { status: 'success', traceId, data: updated };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to confirm purchase unit',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}
