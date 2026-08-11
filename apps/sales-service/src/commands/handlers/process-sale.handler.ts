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
        serialNumber: item.serialNumber || item.inventoryItemId || 'unknown',
        unitCost: item.unitCost || 0,
        unitPrice: item.unitPrice,
        total: item.unitPrice
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
