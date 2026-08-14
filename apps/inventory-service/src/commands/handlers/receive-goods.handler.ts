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

      let totalAmount = 0;
      for (const item of payload.items) {
        const isAccessory = item.deviceType === 'ACCESSORY';
        if (isAccessory) {
          const qty = item.quantity && item.quantity > 0 ? item.quantity : 1;
          totalAmount += item.purchaseCost * qty;
        } else {
          if (item.serialNumber) {
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
          }
          totalAmount += item.purchaseCost;
        }
      }

      const result = await prisma.$transaction(async (tx) => {
        const createdItems: any[] = [];

        for (const item of payload.items) {
          const isAccessory = item.deviceType === 'ACCESSORY';
          let productId = item.productId;

          // If no productId provided, find by name or create product
          if (!productId && item.name) {
            let prod = await tx.product.findFirst({
              where: { tenantId, name: { equals: item.name.trim(), mode: 'insensitive' } }
            });

            if (!prod) {
              const prefix = isAccessory ? 'ACC' : 'DEV';
              const cleanName = item.name.replace(/[^a-zA-Z0-9]/g, '').substring(0, 5).toUpperCase() || 'ITEM';
              const generatedSku = `${prefix}-${cleanName}-${Date.now().toString(36).toUpperCase()}`;

              prod = await tx.product.create({
                data: {
                  tenantId,
                  shopId,
                  name: item.name.trim(),
                  sku: generatedSku,
                  brandId: isAccessory ? null : (item.brandId || null),
                  categoryId: isAccessory ? null : (item.categoryId || null),
                  type: isAccessory ? 'ACCESSORY' : 'DEVICE',
                  productType: 'PHYSICAL_GOOD',
                  trackingMethod: isAccessory ? 'NON_SERIALIZED' : 'SERIALIZED',
                  specifications: { deviceType: isAccessory ? 'ACCESSORY' : 'DEVICE' },
                  quantityOnHand: 0,
                  createdBy: context.userId || 'system'
                }
              });
            }
            productId = prod.id;
          }

          if (!productId) {
            throw new Error(`Product selection or name is required for item "${item.name || 'Unknown'}"`);
          }

          // If selling price provided, update/create ProductPrice
          if (item.sellingPrice !== undefined && item.sellingPrice > 0) {
            await tx.productPrice.create({
              data: {
                productId,
                tenantId,
                sellingPrice: item.sellingPrice,
                createdBy: context.userId || 'system'
              }
            });
          }

          if (isAccessory) {
            const qtyToAdd = item.quantity && item.quantity > 0 ? item.quantity : 1;
            const updatedProduct = await tx.product.update({
              where: { id: productId },
              data: {
                quantityOnHand: { increment: qtyToAdd }
              }
            });

            await tx.inventoryMovement.create({
              data: {
                tenantId,
                shopId,
                productId,
                movementType: 'IN',
                quantity: qtyToAdd,
                referenceId: payload.notes || null,
                referenceType: 'GOODS_RECEIPT',
                createdBy: context.userId || 'system'
              }
            });

            createdItems.push(updatedProduct);
          } else {
            // Device (Serialized)
            const serial = item.serialNumber || `SN-${Date.now()}-${Math.floor(Math.random()*1000)}`;

            const invItem = await tx.inventoryItem.create({
              data: {
                tenantId,
                shopId,
                productId,
                serialNumber: serial,
                purchaseCost: item.purchaseCost,
                status: 'AVAILABLE',
                createdBy: context.userId || 'system'
              }
            });

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

            createdItems.push(invItem);
          }
        }

        return { createdItems };
      });

      // Publish PurchaseCreated event
      await this.eventBus.publish(
        {
          eventType: 'PurchaseCreated',
          aggregateId: result.createdItems[0]?.id || 'unknown',
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
            items: payload.items
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
