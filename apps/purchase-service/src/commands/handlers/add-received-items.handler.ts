import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { AddReceivedItemsCommand, ReceivedItemData } from '../impl/add-received-items.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@CommandHandler(AddReceivedItemsCommand)
export class AddReceivedItemsHandler extends BaseCommandHandler<AddReceivedItemsCommand> {
  async execute(command: AddReceivedItemsCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || payload.traceId || 'unknown';

    try {
      const { receivingId, items, recordedById, recordedByName } = payload;

      const receiving = await prisma.purchaseReceiving.findUnique({
        where: { id: receivingId },
        include: { purchase: true },
      });
      if (!receiving) {
        return { status: 'error', traceId, message: 'Receiving not found', errorCode: ErrorCode.NOT_FOUND };
      }

      const purchase = receiving.purchase;
      if (purchase.commercialStatus !== 'CONFIRMED') {
        return { status: 'error', traceId, message: 'Purchase must be CONFIRMED', errorCode: ErrorCode.VALIDATION_ERROR };
      }

      const results = [];
      for (const item of items) {
        const purchaseItem = await prisma.purchaseItem.findUnique({
          where: { id: item.purchaseItemId },
        });
        if (!purchaseItem || purchaseItem.purchaseId !== purchase.id) {
          continue;
        }

        // Check for duplicate serial/IMEI
        if (item.serialNumber) {
          const existing = await prisma.purchaseReceivedItem.findFirst({
            where: { serialNumber: item.serialNumber, purchaseId: purchase.id },
          });
          if (existing) {
            return { status: 'error', traceId, message: `Serial number ${item.serialNumber} already exists`, errorCode: ErrorCode.VALIDATION_ERROR };
          }
        }
        if (item.imei1) {
          const existing = await prisma.purchaseReceivedItem.findFirst({
            where: { imei1: item.imei1, purchaseId: purchase.id },
          });
          if (existing) {
            return { status: 'error', traceId, message: `IMEI ${item.imei1} already exists`, errorCode: ErrorCode.VALIDATION_ERROR };
          }
        }

        const receivedItem = await prisma.purchaseReceivedItem.create({
          data: {
            purchaseId: purchase.id,
            purchaseItemId: item.purchaseItemId,
            receivingId,
            serialNumber: item.serialNumber,
            imei1: item.imei1,
            imei2: item.imei2,
            condition: item.condition,
            actualSpecs: item.actualSpecs,
            unitAcquisitionCost: item.unitAcquisitionCost,
            notes: item.notes,
          },
        });

        results.push(receivedItem);

        // Update purchase item received/accepted/rejected counts
        await this.updatePurchaseItemCounts(item.purchaseItemId);
      }

      // Update overall purchase receiving status
      await this.updatePurchaseReceivingStatus(purchase.id);

      await prisma.purchaseHistory.create({
        data: {
          purchaseId: purchase.id,
          eventType: 'RECEIVING_COMPLETED',
          eventData: JSON.stringify({ receivingId, itemsCount: items.length, recordedBy: recordedByName }),
          userId: recordedById,
          userName: recordedByName,
          traceId,
        },
      });

      await prisma.auditLog.create({
        data: {
          tenantId: purchase.tenantId,
          shopId: purchase.shopId,
          userId: recordedById,
          action: 'AddReceivedItems',
          resource: 'PurchaseReceivedItem',
          traceId,
          details: JSON.stringify({ receivingId, itemsCount: items.length }),
        },
      });

      return { status: 'success', traceId, data: { items: results } };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to add received items',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }

  private async updatePurchaseItemCounts(purchaseItemId: string) {
    const receivedItems = await prisma.purchaseReceivedItem.findMany({
      where: { purchaseItemId },
    });
    const receivedQty = receivedItems.length;
    const acceptedQty = receivedItems.filter(i => i.condition === 'ACCEPTED').length;
    const rejectedQty = receivedItems.filter(i => i.condition !== 'ACCEPTED').length;

    await prisma.purchaseItem.update({
      where: { id: purchaseItemId },
      data: { receivedQty, acceptedQty, rejectedQty },
    });
  }

  private async updatePurchaseReceivingStatus(purchaseId: string) {
    const items = await prisma.purchaseItem.findMany({ where: { purchaseId } });
    const totalOrdered = items.reduce((sum, i) => sum + i.orderedQty, 0);
    const totalReceived = items.reduce((sum, i) => sum + i.receivedQty, 0);
    const totalAccepted = items.reduce((sum, i) => sum + i.acceptedQty, 0);

    let status: 'NOT_RECEIVED' | 'PARTIALLY_RECEIVED' | 'FULLY_RECEIVED' = 'NOT_RECEIVED';
    if (totalReceived === 0) status = 'NOT_RECEIVED';
    else if (totalAccepted >= totalOrdered) status = 'FULLY_RECEIVED';
    else status = 'PARTIALLY_RECEIVED';

    await prisma.purchase.update({
      where: { id: purchaseId },
      data: { receivingStatus: status },
    });
  }
}