import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { UpdatePurchaseItemCommand } from '../impl/update-purchase-item.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { actorOf } from '../../common/actor.js';

@CommandHandler(UpdatePurchaseItemCommand)
export class UpdatePurchaseItemHandler extends BaseCommandHandler<UpdatePurchaseItemCommand> {
  async execute(command: UpdatePurchaseItemCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const { tenantId, shopId, userId, userName, traceId } = actorOf(context);

    try {
      const { purchaseItemId, ...updates } = payload;
      const updatedById = userId;
      const updatedByName = userName;

      const item = await prisma.purchaseItem.findUnique({ where: { id: purchaseItemId } });
      if (!item) {
        return { status: 'error', traceId, message: 'Purchase item not found', errorCode: ErrorCode.NOT_FOUND };
      }

      const purchase = await prisma.purchase.findFirst({ where: { id: item.purchaseId, tenantId, shopId } });
      if (!purchase || purchase.commercialStatus !== 'DRAFT') {
        return { status: 'error', traceId, message: 'Can only update items in DRAFT purchases', errorCode: ErrorCode.VALIDATION_ERROR };
      }

      // Calculate new totals if quantity/price changed
      const orderedQty = updates.orderedQty ?? item.orderedQty;
      const unitPrice = updates.unitPrice ?? item.unitPrice;
      const discountAmount = updates.discountAmount ?? item.discountAmount;
      const discountType = updates.discountType ?? item.discountType;
      const otherCosts = updates.otherCosts ?? item.otherCosts;

      const gross = orderedQty * unitPrice;
      const discount = discountType === 'PERCENTAGE' ? (gross * discountAmount / 100) : discountAmount;
      const net = gross - discount;
      const lineTotal = net + otherCosts;
      const acquisitionCost = orderedQty > 0 ? lineTotal / orderedQty : 0;

      const updatedItem = await prisma.purchaseItem.update({
        where: { id: purchaseItemId },
        data: {
          ...updates,
          discountAmount: discount,
          lineTotal,
          acquisitionCost,
        },
      });

      // Recalculate purchase totals
      await this.recalculatePurchaseTotals(item.purchaseId);

      // History
      await prisma.purchaseHistory.create({
        data: {
          purchaseId: item.purchaseId,
          eventType: 'ITEM_UPDATED',
          eventData: JSON.stringify({ itemId: purchaseItemId, changes: updates }),
          userId: updatedById,
          userName: updatedByName,
          traceId,
        },
      });

      // Audit
      await prisma.auditLog.create({
        data: {
          tenantId: purchase.tenantId,
          shopId: purchase.shopId,
          userId: updatedById,
          action: 'UpdatePurchaseItem',
          resource: 'PurchaseItem',
          resourceId: purchaseItemId,
          traceId,
          details: JSON.stringify({ changes: updates }),
        },
      });

      return { status: 'success', traceId, data: updatedItem };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to update purchase item',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }

  private async recalculatePurchaseTotals(purchaseId: string) {
    const items = await prisma.purchaseItem.findMany({ where: { purchaseId } });
    const subtotal = items.reduce((sum, i) => sum + i.orderedQty * i.unitPrice, 0);
    const discountTotal = items.reduce((sum, i) => sum + i.discountAmount, 0);
    const otherCostTotal = items.reduce((sum, i) => sum + i.otherCosts, 0);
    const grandTotal = items.reduce((sum, i) => sum + i.lineTotal, 0);

    const paidAgg = await prisma.purchasePayment.aggregate({
      where: { purchaseId },
      _sum: { amount: true },
    });
    const amountPaid = paidAgg._sum.amount || 0;
    const amountOutstanding = Math.max(0, grandTotal - amountPaid);

    await prisma.purchase.update({
      where: { id: purchaseId },
      data: { subtotal, discountTotal, otherCostTotal, grandTotal, amountPaid, amountOutstanding },
    });
  }
}