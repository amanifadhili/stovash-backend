import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { ReceiveGoodsCommand } from '../impl/receive-goods.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { Inject } from '@nestjs/common';
import { EventBus } from '@electronic-shop/framework-event';

@CommandHandler(ReceiveGoodsCommand)
export class ReceiveGoodsHandler extends BaseCommandHandler<ReceiveGoodsCommand> {
  constructor(@Inject('EVENT_BUS') private readonly eventBus: EventBus) {
    super();
  }

  async execute(command: ReceiveGoodsCommand): Promise<ICommandResponse<any>> {
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

      // Calculate totals and verify unique serial numbers (own models only)
      let totalAmount = 0;
      for (const item of payload.items) {
        if (!item.productId || !item.serialNumber || item.purchaseCost === undefined) {
          return {
            status: 'error',
            traceId,
            message: 'Each item must have productId, serialNumber, and purchaseCost',
            errorCode: ErrorCode.VALIDATION_ERROR
          };
        }

        const existingItem = await prisma.inventoryItem.findFirst({
          where: { tenantId, serialNumber: item.serialNumber }
        });

        if (existingItem) {
          return {
            status: 'error',
            traceId,
            message: `Serial number ${item.serialNumber} already exists in inventory`,
            errorCode: ErrorCode.BUSINESS_RULE_VIOLATION
          };
        }

        totalAmount += item.purchaseCost;
      }

      const result = await prisma.$transaction(async (tx) => {
        // Create serialized InventoryItems with proper lifecycle status
        const createdInventoryItems = [];
        for (const item of payload.items) {
          // Create item with RECEIVED status per AD-0016 lifecycle
          const invItem = await tx.inventoryItem.create({
            data: {
              tenantId,
              shopId,
              productId: item.productId,
              serialNumber: item.serialNumber,
              purchaseCost: item.purchaseCost,
              status: 'RECEIVED'
            }
          });

          // Immediately transition to AVAILABLE after receiving
          const updatedItem = await tx.inventoryItem.update({
            where: { id: invItem.id },
            data: { status: 'AVAILABLE' }
          });

          // Record movement
          await tx.inventoryMovement.create({
            data: {
              tenantId,
              shopId,
              inventoryItemId: invItem.id,
              movementType: 'IN',
              quantity: 1,
              referenceId: payload.notes || null,
              referenceType: 'GOODS_RECEIPT',
              createdBy: context.userId || 'system'
            }
          });

          createdInventoryItems.push(updatedItem);
        }

        return { createdInventoryItems };
      });

      // Publish PurchaseCreated event (consumed by accounting service)
      await this.eventBus.publish(
        {
          eventType: 'PurchaseCreated',
          aggregateId: result.createdInventoryItems[0]?.id || 'unknown',
          aggregateType: 'GoodsReceipt',
          tenantId,
          shopId,
          workPeriodId,
          payload: {
            tenantId,
            shopId,
            workPeriodId,
            poNumber: `GR-${Date.now()}`,
            vendorName: payload.vendorName,
            totalAmount,
            items: payload.items.map(i => ({
              productId: i.productId,
              serialNumber: i.serialNumber,
              purchaseCost: i.purchaseCost
            }))
          },
          timestamp: new Date().toISOString(),
          correlationId: traceId,
          createdBy: context.userId,
        },
        'purchase.created'
      );

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
