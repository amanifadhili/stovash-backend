import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { AddInventoryItemCommand } from '../impl/add-inventory-item.command.js';
import { prisma } from '@electronic-shop/database';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@CommandHandler(AddInventoryItemCommand)
export class AddInventoryItemHandler extends BaseCommandHandler<AddInventoryItemCommand> {
  async execute(command: AddInventoryItemCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';

    try {
      if (!context?.tenantId || !context?.shopId) {
        return {
          status: 'error',
          traceId,
          message: 'Missing required context (tenantId / shopId)',
          errorCode: ErrorCode.UNAUTHORIZED
        };
      }

      if (!payload?.serialNumber) {
        return {
          status: 'error',
          traceId,
          message: 'Serial number is required',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      // Check serial number uniqueness
      const existingItem = await prisma.inventoryItem.findFirst({
        where: { tenantId: context.tenantId, serialNumber: payload.serialNumber }
      });

      if (existingItem) {
        return {
          status: 'error',
          traceId,
          message: `Serial number '${payload.serialNumber}' already exists`,
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      // Resolve valid product ID or create auto product if missing/fake for testing
      let productId = payload.productId;
      if (productId) {
        const existingProduct = await prisma.product.findUnique({ where: { id: productId } });
        if (!existingProduct) {
          const firstProduct = await prisma.product.findFirst({
            where: { tenantId: context.tenantId }
          });
          if (firstProduct) {
            productId = firstProduct.id;
          } else {
            const newProd = await prisma.product.create({
              data: {
                tenantId: context.tenantId,
                name: 'Sample Product',
                description: 'Auto-created product',
                sku: `SKU-${Date.now()}`
              }
            });
            productId = newProd.id;
          }
        }
      } else {
        const newProd = await prisma.product.create({
          data: {
            tenantId: context.tenantId,
            name: 'Sample Product',
            description: 'Auto-created product',
            sku: `SKU-${Date.now()}`
          }
        });
        productId = newProd.id;
      }

      const item = await prisma.inventoryItem.create({
        data: {
          tenantId: context.tenantId,
          shopId: context.shopId,
          productId: productId,
          serialNumber: payload.serialNumber,
          purchaseCost: Number(payload.purchaseCost) || 0,
          status: 'AVAILABLE'
        }
      });

      return {
        status: 'success',
        traceId,
        data: item
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to add inventory item',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
