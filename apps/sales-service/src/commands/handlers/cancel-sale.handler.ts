import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { CancelSaleCommand } from '../impl/cancel-sale.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { Inject } from '@nestjs/common';
import { EventBus } from '@electronic-shop/framework-event';
import { actorOf } from '../../common/actor.js';

@CommandHandler(CancelSaleCommand)
export class CancelSaleHandler extends BaseCommandHandler<CancelSaleCommand> {
  constructor(@Inject('EVENT_BUS') private readonly eventBus: EventBus) {
    super();
  }

  async execute(command: CancelSaleCommand): Promise<ICommandResponse<any>> {
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

      const sale = await prisma.sale.findUnique({ where: { id: payload.saleId } });
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
          message: 'Only DRAFT sales can be cancelled',
          errorCode: ErrorCode.BUSINESS_RULE_VIOLATION,
        };
      }

      const updated = await prisma.sale.update({
        where: { id: sale.id },
        data: {
          commercialStatus: 'CANCELLED',
          status: 'CANCELLED',
          cancelledById: createdById,
          cancelledAt: new Date(),
          notes: payload.reason || sale.notes,
        },
      });

      await prisma.saleHistory.create({
        data: {
          saleId: sale.id,
          eventType: 'CANCELLED',
          eventData: JSON.stringify({ orderNumber: sale.orderNumber, reason: payload.reason || null, cancelledBy: userName }),
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
          action: 'CancelSale',
          resource: 'Sale',
          resourceId: sale.id,
          traceId,
          details: JSON.stringify({ orderNumber: sale.orderNumber, reason: payload.reason || null }),
        },
      });

      await this.eventBus.publish(
        {
          eventType: 'SaleCancelled',
          aggregateId: sale.id,
          aggregateType: 'Sale',
          tenantId,
          shopId: sale.shopId,
          payload: {
            saleId: sale.id,
            orderNumber: sale.orderNumber,
            commercialStatus: 'CANCELLED',
            reason: payload.reason || null,
          },
          timestamp: new Date().toISOString(),
          correlationId: traceId,
          createdBy: createdById,
        },
        'sale.cancelled',
      );

      return { status: 'success', traceId, data: updated };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to cancel sale',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}