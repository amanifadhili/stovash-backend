import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { AssessReturnedItemCommand } from '../impl/assess-returned-item.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { Inject } from '@nestjs/common';
import { EventBus } from '@electronic-shop/framework-event';
import { actorOf } from '../../common/actor.js';

@CommandHandler(AssessReturnedItemCommand)
export class AssessReturnedItemHandler extends BaseCommandHandler<AssessReturnedItemCommand> {
  constructor(@Inject('EVENT_BUS') private readonly eventBus: EventBus) {
    super();
  }

  async execute(command: AssessReturnedItemCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const { tenantId, userId, userName, traceId } = actorOf(context);
    const createdById = userId || 'system';

    try {
      if (!payload?.saleReturnItemId || !payload?.conditionState) {
        return {
          status: 'error',
          traceId,
          message: 'saleReturnItemId and conditionState are required',
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }

      const item = await prisma.saleReturnItem.findUnique({
        where: { id: payload.saleReturnItemId },
        include: { saleReturn: true },
      });
      if (!item || item.saleReturn.tenantId !== tenantId) {
        return {
          status: 'error',
          traceId,
          message: 'Sale return item not found for this tenant',
          errorCode: ErrorCode.NOT_FOUND,
        };
      }

      const updated = await prisma.saleReturnItem.update({
        where: { id: item.id },
        data: {
          conditionState: payload.conditionState,
          notes: payload.notes ?? item.notes,
        },
      });

      // Record the assessment on the original sale history when linked.
      if (item.saleReturn.saleId) {
        await prisma.saleHistory.create({
          data: {
            saleId: item.saleReturn.saleId,
            eventType: 'RETURN',
            eventData: JSON.stringify({
              saleReturnItemId: item.id,
              serialNumber: item.serialNumber,
              conditionState: payload.conditionState,
              assessedBy: userName,
            }),
            userId: createdById,
            userName,
            traceId,
          },
        });
      }

      await prisma.auditLog.create({
        data: {
          tenantId,
          shopId: item.saleReturn.shopId,
          userId: createdById,
          action: 'AssessReturnedItem',
          resource: 'SaleReturnItem',
          resourceId: item.id,
          traceId,
          details: JSON.stringify({ serialNumber: item.serialNumber, conditionState: payload.conditionState }),
        },
      });

      await this.eventBus.publish(
        {
          eventType: 'ReturnedItemAssessed',
          aggregateId: item.id,
          aggregateType: 'SaleReturnItem',
          tenantId,
          shopId: item.saleReturn.shopId,
          payload: {
            saleReturnItemId: item.id,
            saleReturnId: item.saleReturnId,
            inventoryItemId: item.inventoryItemId,
            serialNumber: item.serialNumber,
            conditionState: payload.conditionState,
          },
          timestamp: new Date().toISOString(),
          correlationId: traceId,
          createdBy: createdById,
        },
        'sale-return.assessed',
      );

      return { status: 'success', traceId, data: updated };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to assess returned item',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}