import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { ReceivePurchaseUnitCommand } from '../impl/receive-purchase-unit.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { actorOf } from '../../common/actor.js';
import { recomputePurchaseItemCounts, recomputePurchaseReceivingStatus } from '../../common/receiving-counts.js';

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
        condition = 'GOOD',
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

      // Guard on ACCEPTED quantity (not raw received) so rejected/damaged units
      // can be replaced by receiving additional units later.
      if (purchaseItem.acceptedQty >= purchaseItem.orderedQty) {
        return { status: 'error', traceId, message: 'All ordered quantity has already been received and accepted', errorCode: ErrorCode.VALIDATION_ERROR };
      }

      // Duplicate serial/IMEI guard across ALL purchases of this tenant+shop.
      const existingSerial = serialNumber
        ? await prisma.purchaseReceivedItem.findFirst({
            where: { serialNumber, purchase: { tenantId, shopId } },
          })
        : null;
      if (existingSerial) {
        return { status: 'error', traceId, message: `Serial number ${serialNumber} already exists`, errorCode: ErrorCode.VALIDATION_ERROR };
      }
      const existingImei = imei1
        ? await prisma.purchaseReceivedItem.findFirst({
            where: { imei1, purchase: { tenantId, shopId } },
          })
        : null;
      if (existingImei) {
        return { status: 'error', traceId, message: `IMEI ${imei1} already exists`, errorCode: ErrorCode.VALIDATION_ERROR };
      }

      // Reuse the most recent receiving batch for this purchase so units added
      // later group into the same GRN instead of spawning a GRN per unit.
      const recvDate = receivedAt ? new Date(receivedAt) : new Date();
      let receiving = await prisma.purchaseReceiving.findFirst({
        where: { purchaseId },
        orderBy: { createdAt: 'desc' },
      });
      if (!receiving) {
        const receivingCount = await prisma.purchaseReceiving.count({
          where: { receivedAtShop: shopId },
        });
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

      await recomputePurchaseItemCounts(purchaseItemId);
      await recomputePurchaseReceivingStatus(purchase.id);

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
}
