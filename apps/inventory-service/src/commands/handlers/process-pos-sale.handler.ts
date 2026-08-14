import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { ProcessPosSaleCommand } from '../impl/process-pos-sale.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { Inject } from '@nestjs/common';
import { EventBus } from '@electronic-shop/framework-event';

@CommandHandler(ProcessPosSaleCommand)
export class ProcessPosSaleHandler extends BaseCommandHandler<ProcessPosSaleCommand> {
  constructor(@Inject('EVENT_BUS') private readonly eventBus: EventBus) {
    super();
  }

  async execute(command: ProcessPosSaleCommand): Promise<ICommandResponse<any>> {
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

      // Validate items
      const allocatedItems: Array<{
        invItem?: any;
        product?: any;
        quantity: number;
        unitPrice: number;
        unitCost: number;
      }> = [];
      let totalAmount = 0;
      let totalCost = 0;

      for (const itemInput of payload.items) {
        const qty = itemInput.quantity && itemInput.quantity > 0 ? itemInput.quantity : 1;

        if (itemInput.productId && !itemInput.inventoryItemId && !itemInput.serialNumber) {
          // Accessory / Non-serialized product sale
          const prod = await prisma.product.findFirst({
            where: { id: itemInput.productId, tenantId }
          });
          if (!prod) {
            return {
              status: 'error',
              traceId,
              message: `Product ${itemInput.productId} not found`,
              errorCode: ErrorCode.NOT_FOUND
            };
          }
          if (prod.quantityOnHand < qty) {
            return {
              status: 'error',
              traceId,
              message: `Insufficient stock for product "${prod.name}" (available: ${prod.quantityOnHand}, requested: ${qty})`,
              errorCode: ErrorCode.BUSINESS_RULE_VIOLATION
            };
          }

          const unitCost = 0; // Average cost if applicable
          allocatedItems.push({
            product: prod,
            quantity: qty,
            unitPrice: itemInput.unitPrice,
            unitCost
          });

          totalAmount += itemInput.unitPrice * qty;
          totalCost += unitCost * qty;
        } else {
          // Serialized Device sale
          let invItem = null;
          if (itemInput.inventoryItemId) {
            invItem = await prisma.inventoryItem.findFirst({
              where: { id: itemInput.inventoryItemId, tenantId, shopId }
            });
          } else if (itemInput.serialNumber) {
            invItem = await prisma.inventoryItem.findFirst({
              where: { tenantId, shopId, serialNumber: itemInput.serialNumber }
            });
          }

          if (!invItem) {
            return {
              status: 'error',
              traceId,
              message: `Inventory item ${itemInput.inventoryItemId || itemInput.serialNumber} not found`,
              errorCode: ErrorCode.NOT_FOUND
            };
          }

          if (invItem.status !== 'AVAILABLE') {
            return {
              status: 'error',
              traceId,
              message: `Item ${invItem.serialNumber} is not AVAILABLE (current status: ${invItem.status})`,
              errorCode: ErrorCode.BUSINESS_RULE_VIOLATION
            };
          }

          allocatedItems.push({
            invItem,
            quantity: 1,
            unitPrice: itemInput.unitPrice,
            unitCost: invItem.purchaseCost
          });

          totalAmount += itemInput.unitPrice;
          totalCost += invItem.purchaseCost;
        }
      }

      const result = await prisma.$transaction(async (tx) => {
        for (const item of allocatedItems) {
          if (item.product) {
            // Accessory stock deduction
            await tx.product.update({
              where: { id: item.product.id },
              data: {
                quantityOnHand: { decrement: item.quantity }
              }
            });

            await tx.inventoryMovement.create({
              data: {
                tenantId,
                shopId,
                productId: item.product.id,
                movementType: 'OUT',
                quantity: item.quantity,
                referenceId: item.product.id,
                referenceType: 'SALE',
                createdBy: context.userId || 'system'
              }
            });
          } else if (item.invItem) {
            // Device unit sale
            await tx.inventoryItem.update({
              where: { id: item.invItem.id },
              data: { status: 'SOLD' }
            });

            await tx.inventoryMovement.create({
              data: {
                tenantId,
                shopId,
                inventoryItemId: item.invItem.id,
                movementType: 'OUT',
                quantity: 1,
                referenceId: item.invItem.id,
                referenceType: 'SALE',
                createdBy: context.userId || 'system'
              }
            });
          }
        }

        return { allocatedItems };
      });

      // Publish SaleCreated event
      const orderNumber = `POS-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
      await this.eventBus.publish(
        {
          eventType: 'SaleCreated',
          aggregateId: orderNumber,
          aggregateType: 'InventorySale',
          tenantId,
          shopId,
          workPeriodId,
          payload: {
            tenantId,
            shopId,
            workPeriodId,
            orderNumber,
            totalAmount,
            totalCost,
            paymentMethod: payload.paymentMethod || 'CASH',
            items: allocatedItems.map(item => ({
              inventoryItemId: item.invItem?.id || null,
              productId: item.product?.id || item.invItem?.productId,
              serialNumber: item.invItem?.serialNumber || null,
              quantity: item.quantity,
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

      return {
        status: 'success',
        traceId,
        data: {
          orderNumber,
          totalAmount,
          totalCost
        }
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
