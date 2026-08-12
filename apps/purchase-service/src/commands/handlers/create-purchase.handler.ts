import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { CreatePurchaseCommand } from '../impl/create-purchase.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { v4 as uuidv4 } from 'uuid';
import { actorOf } from '../../common/actor.js';

@CommandHandler(CreatePurchaseCommand)
export class CreatePurchaseHandler extends BaseCommandHandler<CreatePurchaseCommand> {
  async execute(command: CreatePurchaseCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const { tenantId, shopId, userId, userName, traceId } = actorOf(context);

    try {
      const {
        supplierId,
        supplierName,
        supplierContact,
        supplierAddress,
        supplierTaxId,
        purchaseDate,
        supplierInvoiceNo,
        currency = 'RWF',
        exchangeRate = 1.0,
        notes,
      } = payload;
      const createdById = userId;
      const createdByName = userName;

      // Generate purchase number
      const date = purchaseDate ? new Date(purchaseDate) : new Date();
      const year = date.getFullYear();
      const count = await prisma.purchase.count({
        where: { tenantId, createdAt: { gte: new Date(year, 0, 1), lt: new Date(year + 1, 0, 1) } },
      });
      const purchaseNumber = `PUR-${year}-${String(count + 1).padStart(6, '0')}`;

      const purchase = await prisma.purchase.create({
        data: {
          tenantId,
          shopId,
          purchaseNumber,
          supplierId,
          supplierName,
          supplierContact,
          supplierAddress,
          supplierTaxId,
          purchaseDate: date,
          supplierInvoiceNo,
          currency,
          exchangeRate,
          commercialStatus: 'DRAFT',
          receivingStatus: 'NOT_RECEIVED',
          paymentStatus: 'UNPAID',
          accountingStatus: 'UNPOSTED',
          subtotal: 0,
          discountTotal: 0,
          taxTotal: 0,
          otherCostTotal: 0,
          grandTotal: 0,
          amountPaid: 0,
          amountOutstanding: 0,
          notes,
          createdById,
        },
      });

      // Create history entry
      await prisma.purchaseHistory.create({
        data: {
          purchaseId: purchase.id,
          eventType: 'CREATED',
          eventData: JSON.stringify({ purchaseNumber, supplierName, createdBy: createdByName }),
          userId: createdById,
          userName: createdByName,
          traceId,
        },
      });

      // Audit log
      await prisma.auditLog.create({
        data: {
          tenantId,
          shopId,
          userId: createdById,
          action: 'CreatePurchase',
          resource: 'Purchase',
          resourceId: purchase.id,
          traceId,
          details: JSON.stringify({ purchaseNumber, supplierName }),
        },
      });

      return {
        status: 'success',
        traceId,
        data: purchase,
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to create purchase',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}