import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { ProcessSaleCommand } from '../impl/process-sale.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { Inject } from '@nestjs/common';
import { EventBus } from '@electronic-shop/framework-event';

@CommandHandler(ProcessSaleCommand)
export class ProcessSaleHandler extends BaseCommandHandler<ProcessSaleCommand> {
  constructor(@Inject('EVENT_BUS') private readonly eventBus: EventBus) {
    super();
  }

  async execute(command: ProcessSaleCommand): Promise<ICommandResponse<any>> {
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
          message: 'tenantId and shopId are required in context for POS sales',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      if (!payload?.items || payload.items.length === 0) {
        return {
          status: 'error',
          traceId,
          message: 'At least one item is required to process a POS sale',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      // Validate & normalize items from payload (no cross-service reads)
      const normalizedItems = payload.items.map((item) => ({
        productId: item.productId || 'unknown',
        inventoryItemId: item.inventoryItemId || null,
        serialNumber: item.serialNumber || item.inventoryItemId || 'unknown',
        unitCost: item.unitCost || 0,
        unitPrice: item.unitPrice,
        total: item.unitPrice,
        quantity: item.quantity || 1,
      }));

      const totalAmount = normalizedItems.reduce((sum, item) => sum + item.total, 0);
      const totalCost = normalizedItems.reduce((sum, item) => sum + item.unitCost, 0);

      // Execute transaction for Sale + SaleItems (own models only)
      const orderNumber = `POS-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

      const result = await prisma.$transaction(async (tx) => {
        const sale = await tx.sale.create({
          data: {
            tenantId,
            shopId,
            workPeriodId,
            orderNumber,
            status: 'COMPLETED',
            commercialStatus: 'CONFIRMED',
            fulfillmentStatus: 'NOT_FULFILLED',
            paymentStatus: 'UNPAID',
            accountingStatus: 'UNPOSTED',
            subtotal: totalAmount,
            discountTotal: 0,
            taxTotal: 0,
            otherChargesTotal: 0,
            grandTotal: totalAmount,
            amountPaid: 0,
            amountDue: totalAmount,
            totalAmount,
            totalCost,
            profit: totalAmount - totalCost,
            paymentMethod: payload.paymentMethod || 'CASH',
            confirmedById: context.userId || 'system',
            confirmedAt: new Date(),
            createdById: context.userId || 'system',
            items: {
              create: normalizedItems.map(item => ({
                productId: item.productId,
                inventoryItemId: item.inventoryItemId,
                serialNumber: item.serialNumber,
                quantity: item.quantity,
                unitCost: item.unitCost,
                unitPrice: item.unitPrice,
                total: item.total,
                lineTotal: item.total
              }))
            }
          },
          include: { items: true }
        });

        // History entries for the POS flow
        await tx.saleHistory.create({
          data: {
            saleId: sale.id,
            eventType: 'CREATED',
            eventData: JSON.stringify({ orderNumber, createdBy: context.userId || 'system' }),
            userId: context.userId || 'system',
            userName: context?.email || context?.userId || 'system',
            traceId,
          },
        });
        await tx.saleHistory.create({
          data: {
            saleId: sale.id,
            eventType: 'CONFIRMED',
            eventData: JSON.stringify({ orderNumber, confirmedBy: context?.email || context?.userId || 'system' }),
            userId: context.userId || 'system',
            userName: context?.email || context?.userId || 'system',
            traceId,
          },
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
              inventoryItemId: item.inventoryItemId,
              serialNumber: item.serialNumber,
              productId: item.productId,
              quantity: item.quantity,
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
            action: 'ProcessSale',
            resource: 'Sale',
            resourceId: result.sale.id,
            traceId: context?.traceId || null,
            details: JSON.stringify({
              orderNumber,
              totalAmount,
              totalCost,
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
        message: error.message || 'Failed to process POS sale',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
