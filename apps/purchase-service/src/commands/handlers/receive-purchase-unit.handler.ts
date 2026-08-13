import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { ReceivePurchaseUnitCommand } from '../impl/receive-purchase-unit.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { actorOf } from '../../common/actor.js';

@CommandHandler(ReceivePurchaseUnitCommand)
export class ReceivePurchaseUnitHandler extends BaseCommandHandler<ReceivePurchaseUnitCommand> {
  async execute(command: ReceivePurchaseUnitCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const { tenantId, shopId, userId, userName, traceId } = actorOf(context);

    try {
      const {
        purchaseId,
        purchaseItemId,
        serialNumber,
        imei1,
        imei2,
        condition = 'ACCEPTED',
        actualSpecs,
        unitAcquisitionCost,
        receivedAt,
        notes,
      } = payload;
      const receivedById = userId;
      const receivedByName = userName;

      if (unitAcquisitionCost === undefined || unitAcquisitionCost === null) {
        return { status: 'error', traceId, message: 'unitAcquisitionCost is required', errorCode: ErrorCode.VALIDATION_ERROR };
      }

      const purchase = await prisma.purchase.findFirst({ where: { id: purchaseId, tenantId, shopId } });
      if (!purchase) {
        return { status: 'error', traceId, message: 'Purchase not found', errorCode: ErrorCode.NOT_FOUND };
      }
      if (purchase.commercialStatus !== 'CONFIRMED') {
        return { status: 'error', traceId, message: 'Purchase must be CONFIRMED to receive units', errorCode: ErrorCode.VALIDATION_ERROR };
      }

      const purchaseItem = await prisma.purchaseItem.findUnique({ where: { id: purchaseItemId } });
      if (!purchaseItem || purchaseItem.purchaseId !== purchase.id) {
        return { status: 'error', traceId, message: 'Purchase item not found', errorCode: ErrorCode.NOT_FOUND };
      }

      // Cannot receive more than the remaining ordered quantity.
      if (purchaseItem.receivedQty >= purchaseItem.orderedQty) {
        return { status: 'error', traceId, message: 'All ordered quantity has already been received', errorCode: ErrorCode.VALIDATION_ERROR };
      }

      // Duplicate serial/IMEI guard (own purchase + inventory-wide handled elsewhere).
      if (serialNumber) {
        const existing = await prisma.purchaseReceivedItem.findFirst({
          where: { serialNumber, purchaseId: purchase.id },
        });
        if (existing) {
          return { status: 'error', traceId, message: `Serial number ${serialNumber} already exists`, errorCode: ErrorCode.VALIDATION_ERROR };
        }
      }
      if (imei1) {
        const existing = await prisma.purchaseReceivedItem.findFirst({ where: { imei1, purchaseId: purchase.id } });
        if (existing) {
          return { status: 'error', traceId, message: `IMEI ${imei1} already exists`, errorCode: ErrorCode.VALIDATION_ERROR };
        }
      }

      // Reuse or create a receiving batch for this purchase on this receivedAt date.
      const recvDate = receivedAt ? new Date(receivedAt) : new Date();
      let receiving = await prisma.purchaseReceiving.findFirst({
        where: { purchaseId, receivedAt: recvDate },
      });
      if (!receiving) {
        const receivingCount = await prisma.purchaseReceiving.count({ where: { purchaseId } });
        const receivingNumber = `GRN-${String(receivingCount + 1).padStart(4, '0')}`;
        receiving = await prisma.purchaseReceiving.create({
          data: {
            purchaseId,
            receivingNumber,
            receivedById,
            receivedAt: recvDate,
            receivedAtShop: shopId,
            notes,
          },
        });
      }

      const receivedItem = await prisma.purchaseReceivedItem.create({
        data: {
          purchaseId: purchase.id,
          purchaseItemId,
          receivingId: receiving.id,
          serialNumber,
          imei1,
          imei2,
          condition,
          actualSpecs,
          unitAcquisitionCost,
          status: 'PENDING',
          receivedAt: recvDate,
          receivedById,
          notes,
        },
      });

      await this.updatePurchaseItemCounts(purchaseItemId);
      await this.updatePurchaseReceivingStatus(purchase.id);

      await prisma.purchaseHistory.create({
        data: {
          purchaseId: purchase.id,
          eventType: 'RECEIVING_STARTED',
          eventData: JSON.stringify({ receivedItemId: receivedItem.id, serialNumber, receivedBy: receivedByName, receivedAt: recvDate }),
          userId: receivedById,
          userName: receivedByName,
          traceId,
        },
      });

      await prisma.auditLog.create({
        data: {
          tenantId: purchase.tenantId,
          shopId: purchase.shopId,
          userId: receivedById,
          action: 'ReceivePurchaseUnit',
          resource: 'PurchaseReceivedItem',
          resourceId: receivedItem.id,
          traceId,
          details: JSON.stringify({ purchaseId, purchaseItemId, serialNumber }),
        },
      });

      return { status: 'success', traceId, data: receivedItem };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to receive purchase unit',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }

  private async updatePurchaseItemCounts(purchaseItemId: string) {
    const receivedItems = await prisma.purchaseReceivedItem.findMany({ where: { purchaseItemId } });
    const receivedQty = receivedItems.length;
    const acceptedQty = receivedItems.filter((i) => i.condition === 'ACCEPTED').length;
    const rejectedQty = receivedItems.filter((i) => i.condition !== 'ACCEPTED').length;
    await prisma.purchaseItem.update({
      where: { id: purchaseItemId },
      data: { receivedQty, acceptedQty, rejectedQty },
    });
  }

  private async updatePurchaseReceivingStatus(purchaseId: string) {
    const items = await prisma.purchaseItem.findMany({ where: { purchaseId } });
    const totalOrdered = items.reduce((sum, i) => sum + i.orderedQty, 0);
    const totalReceived = items.reduce((sum, i) => sum + i.receivedQty, 0);

    let status: 'NOT_RECEIVED' | 'PARTIALLY_RECEIVED' | 'FULLY_RECEIVED' = 'NOT_RECEIVED';
    if (totalReceived === 0) status = 'NOT_RECEIVED';
    else if (totalReceived >= totalOrdered) status = 'FULLY_RECEIVED';
    else status = 'PARTIALLY_RECEIVED';

    await prisma.purchase.update({ where: { id: purchaseId }, data: { receivingStatus: status } });
  }
}
