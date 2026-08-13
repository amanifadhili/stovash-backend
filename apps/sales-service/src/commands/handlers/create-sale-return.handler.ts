import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { CreateSaleReturnCommand } from '../impl/create-sale-return.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { Inject } from '@nestjs/common';
import { EventBus } from '@electronic-shop/framework-event';
import { actorOf } from '../../common/actor.js';

@CommandHandler(CreateSaleReturnCommand)
export class CreateSaleReturnHandler extends BaseCommandHandler<CreateSaleReturnCommand> {
  constructor(@Inject('EVENT_BUS') private readonly eventBus: EventBus) {
    super();
  }

  async execute(command: CreateSaleReturnCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const { tenantId, shopId, userId, userName, traceId } = actorOf(context);
    const createdById = userId || 'system';

    try {
      if (!tenantId || !shopId) {
        return {
          status: 'error',
          traceId,
          message: 'tenantId and shopId are required in context',
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }
      if (!payload?.items || payload.items.length === 0) {
        return {
          status: 'error',
          traceId,
          message: 'At least one item is required to create a sale return',
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }

      const sale = payload.saleId
        ? await prisma.sale.findUnique({ where: { id: payload.saleId } })
        : null;
      if (payload.saleId && (!sale || sale.tenantId !== tenantId)) {
        return {
          status: 'error',
          traceId,
          message: 'Sale not found for this tenant',
          errorCode: ErrorCode.NOT_FOUND,
        };
      }

      // Compute return totals from the lines: the original sale stays intact.
      let originalAmount = 0;
      let approvedRefund = 0;
      let refundedAmount = 0;
      let retainedAmount = 0;
      const lines = payload.items.map((it) => {
        const lineOriginal = Number(it.originalAmount) || 0;
        const lineApproved = Number(it.approvedRefund) || 0;
        const lineRefunded = Number(it.refundedAmount) || lineApproved;
        const lineRetained = it.retainedAmount != null ? Number(it.retainedAmount) : (lineOriginal - lineApproved);
        originalAmount += lineOriginal;
        approvedRefund += lineApproved;
        refundedAmount += lineRefunded;
        retainedAmount += lineRetained;
        return {
          saleItemId: it.saleItemId || null,
          inventoryItemId: it.inventoryItemId || null,
          productId: it.productId,
          serialNumber: it.serialNumber || '',
          quantity: Number(it.quantity) || 1,
          unitCost: Number(it.unitCost) || 0,
          originalAmount: lineOriginal,
          approvedRefund: lineApproved,
          refundedAmount: lineRefunded,
          retainedAmount: lineRetained,
          conditionState: it.conditionState || null,
          notes: it.notes || null,
        };
      });

      const date = new Date();
      const year = date.getFullYear();
      const prefix = `SR-${year}-`;
      let saleReturn: any = null;
      for (let attempt = 0; attempt < 10 && !saleReturn; attempt++) {
        const last = await prisma.saleReturn.findFirst({
          where: { returnNumber: { startsWith: prefix } },
          orderBy: { returnNumber: 'desc' },
          select: { returnNumber: true },
        });
        let nextNumber = 1;
        if (last) {
          const parsed = parseInt(String(last.returnNumber).split('-')[2] || '0', 10);
          if (!Number.isNaN(parsed)) nextNumber = parsed + 1;
        }
        const returnNumber = `${prefix}${String(nextNumber).padStart(6, '0')}`;
        try {
          saleReturn = await prisma.saleReturn.create({
            data: {
              tenantId,
              shopId,
              saleId: payload.saleId || null,
              customerId: payload.customerId || sale?.customerId || null,
              returnNumber,
              currency: payload.currency || 'RWF',
              exchangeRate: payload.exchangeRate || 1.0,
              totalAmount: approvedRefund,
              originalAmount,
              approvedRefund,
              refundedAmount,
              retainedAmount,
              refundMethod: payload.refundMethod || null,
              reason: payload.reason || null,
              status: 'PENDING',
              refundAmount: approvedRefund, // legacy
              createdById,
            },
          });
        } catch (createErr: any) {
          if (createErr?.code === 'P2002') continue;
          throw createErr;
        }
      }

      if (!saleReturn) {
        return {
          status: 'error',
          traceId,
          message: 'Unable to generate a unique return number',
          errorCode: ErrorCode.INTERNAL_ERROR,
        };
      }

      const saleReturnItems = [];
      for (const line of lines) {
        const item = await prisma.saleReturnItem.create({
          data: { saleReturnId: saleReturn.id, refundAmount: line.approvedRefund, ...line },
        });
        saleReturnItems.push(item);
      }

      // Record the event on the original sale history (if linked).
      if (sale) {
        await prisma.saleHistory.create({
          data: {
            saleId: sale.id,
            eventType: 'RETURN_INITIATED',
            eventData: JSON.stringify({ returnNumber: saleReturn.returnNumber, originalAmount, approvedRefund, retainedAmount, createdBy: userName }),
            userId: createdById,
            userName,
            traceId,
          },
        });
      }

      await prisma.auditLog.create({
        data: {
          tenantId,
          shopId,
          userId: createdById,
          action: 'CreateSaleReturn',
          resource: 'SaleReturn',
          resourceId: saleReturn.id,
          traceId,
          details: JSON.stringify({ returnNumber: saleReturn.returnNumber, saleId: sale?.id || null, approvedRefund }),
        },
      });

      await this.eventBus.publish(
        {
          eventType: 'SaleReturnCreated',
          aggregateId: saleReturn.id,
          aggregateType: 'SaleReturn',
          tenantId,
          shopId,
          payload: {
            returnId: saleReturn.id,
            returnNumber: saleReturn.returnNumber,
            saleId: sale?.id || null,
            originalAmount,
            approvedRefund,
            refundedAmount,
            retainedAmount,
            items: saleReturnItems.map((i: any) => ({
              saleReturnItemId: i.id,
              saleItemId: i.saleItemId,
              inventoryItemId: i.inventoryItemId,
              productId: i.productId,
              serialNumber: i.serialNumber,
              quantity: i.quantity,
              conditionState: i.conditionState,
              approvedRefund: i.approvedRefund,
            })),
          },
          timestamp: new Date().toISOString(),
          correlationId: traceId,
          createdBy: createdById,
        },
        'sale-return.created',
      );

      return {
        status: 'success',
        traceId,
        data: { ...saleReturn, items: saleReturnItems },
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to create sale return',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}