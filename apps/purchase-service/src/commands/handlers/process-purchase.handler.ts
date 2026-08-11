import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { ProcessPurchaseCommand } from '../impl/process-purchase.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { Inject } from '@nestjs/common';
import { EventBus } from '@electronic-shop/framework-event';

@CommandHandler(ProcessPurchaseCommand)
export class ProcessPurchaseHandler extends BaseCommandHandler<ProcessPurchaseCommand> {
  constructor(@Inject('EVENT_BUS') private readonly eventBus: EventBus) {
    super();
  }

  async execute(command: ProcessPurchaseCommand): Promise<ICommandResponse<any>> {
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
          message: 'tenantId and shopId are required in context for purchasing & receiving goods',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      if (!payload?.items || payload.items.length === 0) {
        return {
          status: 'error',
          traceId,
          message: 'At least one item is required to receive goods',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      if (!payload.vendorName) {
        return {
          status: 'error',
          traceId,
          message: 'vendorName is required',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      // Validate & normalize items from payload (no cross-service reads)
      let totalAmount = 0;
      const normalizedItems = [];
      for (const item of payload.items) {
        if (!item.productId || !item.serialNumber || item.purchaseCost === undefined) {
          return {
            status: 'error',
            traceId,
            message: 'Each item must have productId, serialNumber, and purchaseCost',
            errorCode: ErrorCode.VALIDATION_ERROR
          };
        }
        normalizedItems.push({
          productId: item.productId,
          serialNumber: item.serialNumber,
          purchaseCost: item.purchaseCost,
          quantity: item.quantity || 1
        });
        totalAmount += item.purchaseCost * (item.quantity || 1);
      }

      const poNumber = `PO-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

      // Create Purchase + PurchaseItems (own models only)
      const result = await prisma.$transaction(async (tx) => {
        const purchase = await tx.purchase.create({
          data: {
            tenantId,
            shopId,
            poNumber,
            totalAmount,
            totalCost: totalAmount,
            status: 'RECEIVED',
            createdById: context.userId || 'system',
            items: {
              create: normalizedItems.map((i) => ({
                productId: i.productId,
                serialNumber: i.serialNumber,
                quantity: i.quantity,
                purchaseCost: i.purchaseCost,
                total: i.purchaseCost * i.quantity
              }))
            }
          },
          include: { items: true }
        });

        return { purchase };
      });

      // Publish PurchaseCreated event (consumed by inventory + accounting services)
      await this.eventBus.publish(
        {
          eventType: 'PurchaseCreated',
          aggregateId: result.purchase.id,
          aggregateType: 'Purchase',
          tenantId,
          shopId,
          workPeriodId,
          payload: {
            purchaseId: result.purchase.id,
            tenantId,
            shopId,
            workPeriodId,
            poNumber,
            vendorName: payload.vendorName,
            totalAmount,
            totalCost: totalAmount,
            paymentAccountCode: payload.paymentAccountCode || '2001',
            items: normalizedItems.map(i => ({
              productId: i.productId,
              serialNumber: i.serialNumber,
              quantity: i.quantity,
              purchaseCost: i.purchaseCost
            }))
          },
          timestamp: new Date().toISOString(),
          correlationId: traceId,
          createdBy: context.userId,
        },
        'purchase.created'
      );

      // Log audit action (own audit log)
      try {
        await prisma.auditLog.create({
          data: {
            tenantId,
            shopId,
            userId: context?.userId || null,
            action: 'ProcessPurchase',
            resource: 'Purchase',
            resourceId: result.purchase.id,
            traceId: context?.traceId || null,
            details: JSON.stringify({
              poNumber,
              vendorName: payload.vendorName,
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
        message: error.message || 'Failed to receive goods',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
