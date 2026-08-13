import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { AddPurchaseReturnItemsCommand, ReturnItemData } from '../impl/add-purchase-return-items.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { actorOf } from '../../common/actor.js';

@CommandHandler(AddPurchaseReturnItemsCommand)
export class AddPurchaseReturnItemsHandler extends BaseCommandHandler<AddPurchaseReturnItemsCommand> {
  async execute(command: AddPurchaseReturnItemsCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const { tenantId, shopId, userId, userName, traceId } = actorOf(context);

    try {
      const { purchaseReturnId, items } = payload;
      const recordedById = userId;
      const recordedByName = userName;

      const returnDoc = await prisma.purchaseReturn.findFirst({ where: { id: purchaseReturnId, tenantId, shopId } });
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
          const receivedItem = await prisma.purchaseReceivedItem.findFirst({
            where: { id: item.receivedItemId, purchaseId: returnDoc.purchaseId },
            include: { purchase: { select: { tenantId: true, shopId: true } } },
          });
          if (!receivedItem || receivedItem.purchase.tenantId !== tenantId || receivedItem.purchase.shopId !== shopId) {
            return { status: 'error', traceId, message: 'Received item not found', errorCode: ErrorCode.NOT_FOUND };
          }
          await prisma.purchaseReceivedItem.update({
            where: { id: item.receivedItemId },
            data: { notes: receivedItem.notes + '\nRETURNED: ' + returnItem.id },
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