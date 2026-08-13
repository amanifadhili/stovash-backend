import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { FulfillSaleCommand } from '../impl/fulfill-sale.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { Inject } from '@nestjs/common';
import { EventBus } from '@electronic-shop/framework-event';
import { actorOf } from '../../common/actor.js';

@CommandHandler(FulfillSaleCommand)
export class FulfillSaleHandler extends BaseCommandHandler<FulfillSaleCommand> {
  constructor(@Inject('EVENT_BUS') private readonly eventBus: EventBus) {
    super();
  }

  async execute(command: FulfillSaleCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const { tenantId, userId, userName, traceId } = actorOf(context);
    const createdById = userId || 'system';

    try {
      if (!payload?.saleId) {
        return {
          status: 'error',
          traceId,
          message: 'saleId is required',
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }

      const sale = await prisma.sale.findUnique({
        where: { id: payload.saleId },
        include: { items: true },
      });
      if (!sale || sale.tenantId !== tenantId) {
        return {
          status: 'error',
          traceId,
          message: 'Sale not found for this tenant',
          errorCode: ErrorCode.NOT_FOUND,
        };
      }
      if (sale.commercialStatus !== 'CONFIRMED') {
        return {
          status: 'error',
          traceId,
          message: 'Only CONFIRMED sales can be fulfilled',
          errorCode: ErrorCode.BUSINESS_RULE_VIOLATION,
        };
      }
      if (sale.fulfillmentStatus === 'FULFILLED') {
        return {
          status: 'error',
          traceId,
          message: 'Sale is already fulfilled',
          errorCode: ErrorCode.BUSINESS_RULE_VIOLATION,
        };
      }

      const updated = await prisma.sale.update({
        where: { id: sale.id },
        data: {
          fulfillmentStatus: 'FULFILLED',
          fulfilledById: createdById,
          fulfilledAt: new Date(),
        },
      });

      await prisma.saleHistory.create({
        data: {
          saleId: sale.id,
          eventType: 'FULFILLED',
          eventData: JSON.stringify({ orderNumber: sale.orderNumber, fulfilledBy: userName, items: (sale.items ?? []).length }),
          userId: createdById,
          userName,
          traceId,
        },
      });

      await prisma.auditLog.create({
        data: {
          tenantId,
          shopId: sale.shopId,
          userId: createdById,
          action: 'FulfillSale',
          resource: 'Sale',
          resourceId: sale.id,
          traceId,
          details: JSON.stringify({ orderNumber: sale.orderNumber }),
        },
      });

      // Emit the fulfillment event carrying exact inventory item ids + costs so
      // inventory-service can transition AVAILABLE -> SOLD (Specific Identification).
      await this.eventBus.publish(
        {
          eventType: 'SaleFulfilled',
          aggregateId: sale.id,
          aggregateType: 'Sale',
          tenantId,
          shopId: sale.shopId,
          payload: {
            saleId: sale.id,
            orderNumber: sale.orderNumber,
            customerId: sale.customerId || null,
            fulfillmentStatus: 'FULFILLED',
            items: (sale.items ?? []).map((i: any) => ({
              saleItemId: i.id,
              productId: i.productId,
              inventoryItemId: i.inventoryItemId,
              serialNumber: i.serialNumber,
              quantity: i.quantity,
              unitCost: i.unitCost,
              unitPrice: i.unitPrice,
            })),
          },
          timestamp: new Date().toISOString(),
          correlationId: traceId,
          createdBy: createdById,
        },
        'sale.fulfilled',
      );

      return { status: 'success', traceId, data: updated };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to fulfill sale',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}