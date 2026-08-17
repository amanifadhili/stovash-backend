import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { ConfirmSaleCommand } from '../impl/confirm-sale.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { EventBus } from '@electronic-shop/framework-event';
import { actorOf } from '../../common/actor.js';
import { firstValueFrom, timeout } from 'rxjs';

@CommandHandler(ConfirmSaleCommand)
export class ConfirmSaleHandler extends BaseCommandHandler<ConfirmSaleCommand> {
  constructor(
    @Inject('EVENT_BUS') private readonly eventBus: EventBus,
    @Inject('INVENTORY_SERVICE') private readonly inventoryClient: ClientProxy,
  ) {
    super();
  }

  async execute(command: ConfirmSaleCommand): Promise<ICommandResponse<any>> {
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
      if (sale.commercialStatus !== 'DRAFT') {
        return {
          status: 'error',
          traceId,
          message: 'Only DRAFT sales can be confirmed',
          errorCode: ErrorCode.BUSINESS_RULE_VIOLATION,
        };
      }
      if (!sale.items || sale.items.length === 0) {
        return {
          status: 'error',
          traceId,
          message: 'Cannot confirm a sale without items',
          errorCode: ErrorCode.BUSINESS_RULE_VIOLATION,
        };
      }

      // Fail closed: deduct / lock stock before marking the sale fulfilled.
      const stockResult = await firstValueFrom(
        this.inventoryClient
          .send(
            { cmd: 'ApplySaleFulfillment' },
            {
              payload: {
                saleId: sale.id,
                shopId: sale.shopId,
                customerId: sale.customerId || null,
                fulfilledBy: createdById,
                items: (sale.items ?? []).map((i: any) => ({
                  saleItemId: i.id,
                  productId: i.productId,
                  inventoryItemId: i.inventoryItemId,
                  serialNumber: i.serialNumber,
                  quantity: i.quantity,
                })),
              },
              context: {
                tenantId,
                shopId: sale.shopId,
                userId: createdById,
                traceId,
              },
            },
          )
          .pipe(timeout(15000)),
      );

      if (!stockResult || stockResult.status === 'error') {
        return {
          status: 'error',
          traceId,
          message: stockResult?.message || 'Inventory could not fulfill this sale',
          errorCode: stockResult?.errorCode || ErrorCode.BUSINESS_RULE_VIOLATION,
        };
      }

      const updated = await prisma.sale.update({
        where: { id: sale.id },
        data: {
          commercialStatus: 'CONFIRMED',
          status: 'COMPLETED',
          fulfillmentStatus: 'FULFILLED',
          confirmedById: createdById,
          confirmedAt: new Date(),
          fulfilledById: createdById,
          fulfilledAt: new Date(),
        },
      });

      await prisma.saleHistory.create({
        data: {
          saleId: sale.id,
          eventType: 'CONFIRMED',
          eventData: JSON.stringify({ orderNumber: sale.orderNumber, confirmedBy: userName }),
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
          action: 'ConfirmSale',
          resource: 'Sale',
          resourceId: sale.id,
          traceId,
          details: JSON.stringify({ orderNumber: sale.orderNumber }),
        },
      });

      await this.eventBus.publish(
        {
          eventType: 'SaleConfirmed',
          aggregateId: sale.id,
          aggregateType: 'Sale',
          tenantId,
          shopId: sale.shopId,
          payload: {
            saleId: sale.id,
            orderNumber: sale.orderNumber,
            commercialStatus: 'CONFIRMED',
          },
          timestamp: new Date().toISOString(),
          correlationId: traceId,
          createdBy: createdById,
        },
        'sale.confirmed',
      );

      // Idempotent replay for other consumers / late subscribers.
      await this.eventBus.publish(
        {
          eventType: 'SaleFulfilled',
          aggregateId: sale.id,
          aggregateType: 'Sale',
          tenantId,
          shopId: sale.shopId,
          payload: {
            tenantId,
            shopId: sale.shopId,
            saleId: sale.id,
            orderNumber: sale.orderNumber,
            customerId: sale.customerId || null,
            fulfillmentStatus: 'FULFILLED',
            fulfilledBy: createdById,
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
        message: error.message || 'Failed to confirm sale',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}
