import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { AssessReturnedItemCommand } from '../impl/assess-returned-item.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { EventBus } from '@electronic-shop/framework-event';
import { actorOf } from '../../common/actor.js';
import { firstValueFrom, timeout } from 'rxjs';

const ALLOWED_CONDITIONS = new Set([
  'SELLABLE',
  'DAMAGED',
  'REQUIRES_REPAIR',
  'DEFECTIVE',
  'QUARANTINED',
  'RETURN_TO_SUPPLIER',
]);

@CommandHandler(AssessReturnedItemCommand)
export class AssessReturnedItemHandler extends BaseCommandHandler<AssessReturnedItemCommand> {
  constructor(
    @Inject('EVENT_BUS') private readonly eventBus: EventBus,
    @Inject('INVENTORY_SERVICE') private readonly inventoryClient: ClientProxy,
  ) {
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

      const conditionState = String(payload.conditionState).trim().toUpperCase();
      if (!ALLOWED_CONDITIONS.has(conditionState)) {
        return {
          status: 'error',
          traceId,
          message: `conditionState must be one of: ${[...ALLOWED_CONDITIONS].join(', ')}`,
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

      // Inventory first so a stock failure does not leave a half-assessed return row.
      if (item.inventoryItemId) {
        const stock = await firstValueFrom(
          this.inventoryClient
            .send(
              { cmd: 'ApplyReturnedItemAssessment' },
              {
                payload: {
                  inventoryItemId: item.inventoryItemId,
                  saleReturnItemId: item.id,
                  conditionState,
                  assessedBy: createdById,
                },
                context: {
                  tenantId,
                  shopId: item.saleReturn.shopId,
                  userId: createdById,
                  traceId,
                },
              },
            )
            .pipe(timeout(15000)),
        );
        if (!stock || stock.status === 'error') {
          return {
            status: 'error',
            traceId,
            message: stock?.message || 'Inventory could not apply this assessment',
            errorCode: stock?.errorCode || ErrorCode.BUSINESS_RULE_VIOLATION,
          };
        }
      }

      const updated = await prisma.saleReturnItem.update({
        where: { id: item.id },
        data: {
          conditionState,
          notes: payload.notes ?? item.notes,
        },
      });

      if (item.saleReturn.saleId) {
        await prisma.saleHistory.create({
          data: {
            saleId: item.saleReturn.saleId,
            eventType: 'RETURN',
            eventData: JSON.stringify({
              saleReturnItemId: item.id,
              serialNumber: item.serialNumber,
              conditionState,
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
          details: JSON.stringify({
            serialNumber: item.serialNumber,
            conditionState,
          }),
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
            tenantId,
            shopId: item.saleReturn.shopId,
            saleReturnItemId: item.id,
            saleReturnId: item.saleReturnId,
            inventoryItemId: item.inventoryItemId,
            serialNumber: item.serialNumber,
            conditionState,
            assessedBy: createdById,
            traceId,
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
