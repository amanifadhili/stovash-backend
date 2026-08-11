import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { ConvertQuotationToSaleCommand } from '../impl/convert-quotation-to-sale.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { Inject } from '@nestjs/common';
import { EventBus } from '@electronic-shop/framework-event';

@CommandHandler(ConvertQuotationToSaleCommand)
export class ConvertQuotationToSaleHandler extends BaseCommandHandler<ConvertQuotationToSaleCommand> {
  constructor(@Inject('EVENT_BUS') private readonly eventBus: EventBus) {
    super();
  }

  async execute(command: ConvertQuotationToSaleCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';
    const tenantId = context?.tenantId;
    const shopId = context?.shopId;
    const workPeriodId = context?.workPeriodId || null;

    try {
      if (!tenantId || !shopId) {
        return {
          status: 'error',
          traceId,
          message: 'tenantId and shopId are required in context',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      if (!payload?.quotationId || !payload?.items || payload.items.length === 0) {
        return {
          status: 'error',
          traceId,
          message: 'quotationId and items are required',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      // Validate quotation exists in sales DB
      const quotation = await prisma.quotation.findUnique({
        where: { id: payload.quotationId },
        include: { items: true }
      });

      if (!quotation) {
        return {
          status: 'error',
          traceId,
          message: `Quotation ${payload.quotationId} not found`,
          errorCode: ErrorCode.NOT_FOUND
        };
      }

      // Normalize items from payload (no cross-service reads)
      const normalizedItems = payload.items.map((item) => ({
        productId: item.productId || 'unknown',
        serialNumber: item.serialNumber || item.inventoryItemId || 'unknown',
        unitCost: item.unitCost || 0,
        unitPrice: item.unitPrice,
        total: item.unitPrice
      }));

      const totalAmount = normalizedItems.reduce((sum, item) => sum + item.total, 0);
      const totalCost = normalizedItems.reduce((sum, item) => sum + item.unitCost, 0);

      const orderNumber = `SALE-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

      const result = await prisma.$transaction(async (tx) => {
        // 1. Create Sale
        const sale = await tx.sale.create({
          data: {
            tenantId,
            shopId,
            workPeriodId,
            orderNumber,
            totalAmount,
            totalCost,
            profit: totalAmount - totalCost,
            paymentMethod: payload.paymentMethod || 'CASH',
            status: 'COMPLETED',
            createdById: context.userId || 'system',
            items: {
              create: normalizedItems.map(item => ({
                productId: item.productId,
                serialNumber: item.serialNumber,
                quantity: 1,
                unitCost: item.unitCost,
                unitPrice: item.unitPrice,
                total: item.total
              }))
            }
          },
          include: { items: true }
        });

        // 2. Mark quotation as CONVERTED
        await tx.quotation.update({
          where: { id: payload.quotationId },
          data: { status: 'CONVERTED' }
        });

        return { sale };
      });

      // Publish SaleCreated event (consumed by inventory + accounting services)
      await this.eventBus.publish(
        {
          eventType: 'SaleCreated',
          aggregateId: result.sale.id,
          aggregateType: 'Sale',
          tenantId,
          shopId,
          workPeriodId,
          payload: {
            saleId: result.sale.id,
            tenantId,
            shopId,
            workPeriodId,
            orderNumber,
            totalAmount,
            totalCost,
            paymentMethod: payload.paymentMethod || 'CASH',
            items: normalizedItems.map(item => ({
              inventoryItemId: item.productId,
              serialNumber: item.serialNumber,
              productId: item.productId,
              quantity: 1,
              unitCost: item.unitCost,
              unitPrice: item.unitPrice
            }))
          },
          timestamp: new Date().toISOString(),
          correlationId: traceId,
          createdBy: context.userId,
        },
        'sale.created'
      );

      // Log audit action (own audit log)
      try {
        await prisma.auditLog.create({
          data: {
            tenantId,
            shopId,
            userId: context?.userId || null,
            action: 'ConvertQuotationToSale',
            resource: 'Sale',
            resourceId: result.sale.id,
            traceId: context?.traceId || null,
            details: JSON.stringify({
              quotationId: payload.quotationId,
              orderNumber,
              totalAmount,
              itemCount: payload.items.length
            })
          }
        });
      } catch (auditError) {
        console.error('Failed to log audit action:', auditError);
      }

      return {
        status: 'success',
        traceId,
        data: result
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to convert quotation to sale',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
