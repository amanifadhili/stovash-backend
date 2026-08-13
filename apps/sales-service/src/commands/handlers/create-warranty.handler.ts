import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { CreateWarrantyCommand } from '../impl/create-warranty.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { Inject } from '@nestjs/common';
import { EventBus } from '@electronic-shop/framework-event';
import { actorOf } from '../../common/actor.js';

@CommandHandler(CreateWarrantyCommand)
export class CreateWarrantyHandler extends BaseCommandHandler<CreateWarrantyCommand> {
  constructor(@Inject('EVENT_BUS') private readonly eventBus: EventBus) {
    super();
  }

  async execute(command: CreateWarrantyCommand): Promise<ICommandResponse<any>> {
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

      // When an exact inventory item is referenced, ensure it belongs to this sale.
      if (payload.inventoryItemId) {
        const saleItem = await prisma.saleItem.findFirst({
          where: { saleId: sale.id, inventoryItemId: payload.inventoryItemId },
        });
        if (!saleItem) {
          return {
            status: 'error',
            traceId,
            message: 'Inventory item is not part of this sale',
            errorCode: ErrorCode.VALIDATION_ERROR,
          };
        }
      }

      const warranty = await prisma.saleWarranty.create({
        data: {
          saleId: sale.id,
          saleItemId: payload.saleItemId || null,
          inventoryItemId: payload.inventoryItemId || null,
          warrantyType: payload.warrantyType || 'SELLER',
          startDate: payload.startDate ? new Date(payload.startDate) : null,
          endDate: payload.endDate ? new Date(payload.endDate) : null,
          terms: payload.terms || null,
          notes: payload.notes || null,
          createdById,
        },
      });

      await prisma.saleHistory.create({
        data: {
          saleId: sale.id,
          eventType: 'WARRANTY_CREATED',
          eventData: JSON.stringify({ warrantyId: warranty.id, inventoryItemId: warranty.inventoryItemId, warrantyType: warranty.warrantyType, endDate: warranty.endDate }),
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
          action: 'CreateWarranty',
          resource: 'SaleWarranty',
          resourceId: warranty.id,
          traceId,
          details: JSON.stringify({ orderNumber: sale.orderNumber, warrantyType: warranty.warrantyType }),
        },
      });

      await this.eventBus.publish(
        {
          eventType: 'SaleWarrantyCreated',
          aggregateId: warranty.id,
          aggregateType: 'SaleWarranty',
          tenantId,
          shopId: sale.shopId,
          payload: {
            warrantyId: warranty.id,
            saleId: sale.id,
            saleItemId: warranty.saleItemId,
            inventoryItemId: warranty.inventoryItemId,
            warrantyType: warranty.warrantyType,
            startDate: warranty.startDate,
            endDate: warranty.endDate,
            terms: warranty.terms,
          },
          timestamp: new Date().toISOString(),
          correlationId: traceId,
          createdBy: createdById,
        },
        'sale.warranty-created',
      );

      return { status: 'success', traceId, data: warranty };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to create warranty',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}