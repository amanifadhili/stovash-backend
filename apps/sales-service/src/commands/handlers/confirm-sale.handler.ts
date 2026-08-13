import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { ConfirmSaleCommand } from '../impl/confirm-sale.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { Inject } from '@nestjs/common';
import { EventBus } from '@electronic-shop/framework-event';
import { actorOf } from '../../common/actor.js';

@CommandHandler(ConfirmSaleCommand)
export class ConfirmSaleHandler extends BaseCommandHandler<ConfirmSaleCommand> {
  constructor(@Inject('EVENT_BUS') private readonly eventBus: EventBus) {
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

      const updated = await prisma.sale.update({
        where: { id: sale.id },
        data: {
          commercialStatus: 'CONFIRMED',
          status: 'COMPLETED',
          confirmedById: createdById,
          confirmedAt: new Date(),
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