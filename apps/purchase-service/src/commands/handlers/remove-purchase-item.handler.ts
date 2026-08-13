import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { RemovePurchaseItemCommand } from '../impl/remove-purchase-item.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { actorOf } from '../../common/actor.js';

@CommandHandler(RemovePurchaseItemCommand)
export class RemovePurchaseItemHandler extends BaseCommandHandler<RemovePurchaseItemCommand> {
  async execute(command: RemovePurchaseItemCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const { tenantId, shopId, userId, userName, traceId } = actorOf(context);

    try {
      const { purchaseItemId } = payload;
      const deletedById = userId;
      const deletedByName = userName;

      const item = await prisma.purchaseItem.findUnique({ where: { id: purchaseItemId } });
      if (!item) {
        return { status: 'error', traceId, message: 'Purchase item not found', errorCode: ErrorCode.NOT_FOUND };
      }

      const purchase = await prisma.purchase.findFirst({ where: { id: item.purchaseId, tenantId, shopId } });
      if (!purchase || purchase.commercialStatus !== 'DRAFT') {
        return { status: 'error', traceId, message: 'Can only remove items from DRAFT purchases', errorCode: ErrorCode.VALIDATION_ERROR };
      }

      await prisma.purchaseItem.delete({ where: { id: purchaseItemId } });
      await this.recalculatePurchaseTotals(item.purchaseId);

      await prisma.purchaseHistory.create({
        data: {
          purchaseId: item.purchaseId,
          eventType: 'ITEM_REMOVED',
          eventData: JSON.stringify({ itemId: purchaseItemId, productName: item.productName }),
          userId: deletedById,
          userName: deletedByName,
          traceId,
        },
      });

      await prisma.auditLog.create({
        data: {
          tenantId: purchase.tenantId,
          shopId: purchase.shopId,
          userId: deletedById,
          action: 'RemovePurchaseItem',
          resource: 'PurchaseItem',
          resourceId: purchaseItemId,
          traceId,
          details: JSON.stringify({ productName: item.productName }),
        },
      });

      return { status: 'success', traceId, data: { deleted: true } };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to remove purchase item',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }

  private async recalculatePurchaseTotals(purchaseId: string) {
    const items = await prisma.purchaseItem.findMany({ where: { purchaseId } });
    const subtotal = items.reduce((sum, i) => sum + i.orderedQty * i.unitPrice, 0);
    const discountTotal = items.reduce((sum, i) => sum + i.discountAmount, 0);
    const taxTotal = items.reduce((sum, i) => sum + i.taxAmount, 0);
    const otherCostTotal = items.reduce((sum, i) => sum + i.otherCosts, 0);
    const grandTotal = items.reduce((sum, i) => sum + i.lineTotal, 0);

    await prisma.purchase.update({
      where: { id: purchaseId },
      data: { subtotal, discountTotal, taxTotal, otherCostTotal, grandTotal, amountOutstanding: grandTotal },
    });
  }
}