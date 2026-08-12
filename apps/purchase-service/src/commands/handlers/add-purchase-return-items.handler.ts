import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { AddPurchaseReturnItemsCommand, ReturnItemData } from '../impl/add-purchase-return-items.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@CommandHandler(AddPurchaseReturnItemsCommand)
export class AddPurchaseReturnItemsHandler extends BaseCommandHandler<AddPurchaseReturnItemsCommand> {
  async execute(command: AddPurchaseReturnItemsCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || payload.traceId || 'unknown';

    try {
      const { purchaseReturnId, items, recordedById, recordedByName } = payload;

      const returnDoc = await prisma.purchaseReturn.findUnique({ where: { id: purchaseReturnId } });
      if (!returnDoc) {
        return { status: 'error', traceId, message: 'Purchase return not found', errorCode: ErrorCode.NOT_FOUND };
      }

      const results = [];
      let totalRefund = 0;

      for (const item of items) {
        const returnItem = await prisma.purchaseReturnItem.create({
          data: {
            purchaseReturnId,
            purchaseItemId: item.purchaseItemId,
            productId: item.productId,
            productName: item.productName,
            productSku: item.productSku,
            receivedItemId: item.receivedItemId,
            serialNumber: item.serialNumber,
            imei1: item.imei1,
            imei2: item.imei2,
            quantity: item.quantity,
            refundAmount: item.refundAmount,
            condition: item.condition,
            reason: item.reason,
          },
        });

        results.push(returnItem);
        totalRefund += item.refundAmount;

        // If linked to a received item, mark it as returned
        if (item.receivedItemId) {
          await prisma.purchaseReceivedItem.update({
            where: { id: item.receivedItemId },
            data: { notes: (await prisma.purchaseReceivedItem.findUnique({ where: { id: item.receivedItemId } })).notes + '\nRETURNED: ' + returnItem.id },
          });
        }
      }

      await prisma.purchaseReturn.update({
        where: { id: purchaseReturnId },
        data: { totalAmount: returnDoc.totalAmount + items.reduce((sum, i) => sum + i.refundAmount, 0), refundAmount: returnDoc.refundAmount + totalRefund },
      });

      await prisma.auditLog.create({
        data: {
          tenantId: returnDoc.tenantId,
          shopId: returnDoc.shopId,
          userId: recordedById,
          action: 'AddPurchaseReturnItems',
          resource: 'PurchaseReturnItem',
          traceId,
          details: JSON.stringify({ purchaseReturnId, itemsCount: items.length }),
        },
      });

      return { status: 'success', traceId, data: { items: results, totalRefund } };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to add return items',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}