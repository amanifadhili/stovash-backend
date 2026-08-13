import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { AddPurchaseItemCommand } from '../impl/add-purchase-item.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { actorOf } from '../../common/actor.js';

@CommandHandler(AddPurchaseItemCommand)
export class AddPurchaseItemHandler extends BaseCommandHandler<AddPurchaseItemCommand> {
  async execute(command: AddPurchaseItemCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const { tenantId, shopId, userId, userName, traceId } = actorOf(context);

    try {
      const {
        purchaseId,
        productId,
        productName,
        productSku,
        productTracking,
        orderedQty,
        unitPrice,
        discountAmount = 0,
        discountType = 'FIXED',
        taxRate = 0,
        otherCosts = 0,
        purchaseSpecs,
        notes,
      } = payload;
      const createdById = userId;
      const createdByName = userName;

      // Verify purchase exists and is in DRAFT status
      const purchase = await prisma.purchase.findFirst({ where: { id: purchaseId, tenantId, shopId } });
      if (!purchase) {
        return { status: 'error', traceId, message: 'Purchase not found', errorCode: ErrorCode.NOT_FOUND };
      }
      if (purchase.commercialStatus !== 'DRAFT') {
        return { status: 'error', traceId, message: 'Can only add items to DRAFT purchases', errorCode: ErrorCode.VALIDATION_ERROR };
      }

      // Calculate line totals
      const gross = orderedQty * unitPrice;
      const discount = discountType === 'PERCENTAGE' ? (gross * discountAmount / 100) : discountAmount;
      const net = gross - discount;
      const tax = net * (taxRate / 100);
      const lineTotal = net + tax + otherCosts;
      const acquisitionCost = lineTotal / orderedQty; // per unit

      const item = await prisma.purchaseItem.create({
        data: {
          purchaseId,
          productId,
          productName,
          productSku,
          productTracking,
          orderedQty,
          unitPrice,
          discountAmount: discount,
          discountType,
          taxRate,
          taxAmount: tax,
          otherCosts,
          lineTotal,
          acquisitionCost,
          purchaseSpecs,
          notes,
        },
      });

      // Update purchase totals
      await this.recalculatePurchaseTotals(purchaseId);

      // Create history entry
      await prisma.purchaseHistory.create({
        data: {
          purchaseId,
          eventType: 'ITEM_ADDED',
          eventData: JSON.stringify({ productName, orderedQty, unitPrice, lineTotal }),
          userId: createdById,
          userName: createdByName,
          traceId,
        },
      });

      // Audit log
      await prisma.auditLog.create({
        data: {
          tenantId: purchase.tenantId,
          shopId: purchase.shopId,
          userId: createdById,
          action: 'AddPurchaseItem',
          resource: 'PurchaseItem',
          resourceId: item.id,
          traceId,
          details: JSON.stringify({ purchaseId, productName, orderedQty }),
        },
      });

      return { status: 'success', traceId, data: item };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to add purchase item',
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