import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { ProcessSalesReturnCommand } from '../impl/process-sales-return.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { Inject } from '@nestjs/common';
import { EventBus } from '@electronic-shop/framework-event';

@CommandHandler(ProcessSalesReturnCommand)
export class ProcessSalesReturnHandler extends BaseCommandHandler<ProcessSalesReturnCommand> {
  constructor(@Inject('EVENT_BUS') private readonly eventBus: EventBus) {
    super();
  }

  async execute(command: ProcessSalesReturnCommand): Promise<ICommandResponse<any>> {
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
          message: 'tenantId and shopId are required in context for processing sales returns',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      if (!payload?.serialNumber || payload.refundAmount === undefined) {
        return {
          status: 'error',
          traceId,
          message: 'serialNumber and refundAmount are required',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      const invItem = await prisma.inventoryItem.findFirst({
        where: { tenantId, shopId, serialNumber: payload.serialNumber }
      });

      if (!invItem) {
        return {
          status: 'error',
          traceId,
          message: `Inventory item with serial number ${payload.serialNumber} not found`,
          errorCode: ErrorCode.NOT_FOUND
        };
      }

      const restock = payload.restock !== undefined ? payload.restock : true;

      // Update InventoryItem status per AD-0016 lifecycle (own model only)
      let updatedInvItem = await prisma.inventoryItem.update({
        where: { id: invItem.id },
        data: { status: 'RETURNED' }
      });

      // If restocking, transition to AVAILABLE after return processing
      if (restock) {
        updatedInvItem = await prisma.inventoryItem.update({
          where: { id: invItem.id },
          data: { status: 'AVAILABLE' }
        });
      }

      // Record movement
      await prisma.inventoryMovement.create({
        data: {
          tenantId,
          shopId,
          inventoryItemId: invItem.id,
          movementType: 'IN',
          quantity: 1,
          referenceId: payload.salesOrderId || null,
          referenceType: 'SALE_RETURN',
          createdBy: context.userId || 'system'
        }
      });

      // Publish SaleReturnCreated event (consumed by accounting service)
      await this.eventBus.publish(
        {
          eventType: 'SaleReturnCreated',
          aggregateId: invItem.id,
          aggregateType: 'InventoryItem',
          tenantId,
          shopId,
          workPeriodId,
          payload: {
            tenantId,
            shopId,
            workPeriodId,
            salesOrderId: payload.salesOrderId || null,
            serialNumber: payload.serialNumber,
            refundAmount: payload.refundAmount,
            reason: payload.reason || 'Customer Return',
            restock
          },
          timestamp: new Date().toISOString(),
          correlationId: traceId,
          createdBy: context.userId,
        },
        'sale-return.created'
      );

      return {
        status: 'success',
        traceId,
        data: { updatedInvItem, restock }
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to process sales return',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
