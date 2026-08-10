import { CommandHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { CreateSupplierOrderCommand } from '../impl/create-supplier-order.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { EventBus } from '@electronic-shop/framework-event';

@CommandHandler(CreateSupplierOrderCommand)
export class CreateSupplierOrderHandler extends BaseCommandHandler<CreateSupplierOrderCommand> {
  constructor(@Inject('EVENT_BUS') private readonly eventBus: EventBus) {
    super();
  }

  async execute(command: CreateSupplierOrderCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';

    try {
      if (!payload?.tenantId || !payload?.shopId || !payload?.supplierId || !payload?.items || payload.items.length === 0) {
        return {
          status: 'error',
          traceId,
          message: 'Tenant ID, shop ID, supplier ID, and at least one item are required',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      const totalAmount = payload.items.reduce((sum, item) => sum + (item.quantity * item.unitPrice), 0);

      const orderNumber = `SO-${Date.now()}`;

      const supplierOrder = await prisma.supplierOrder.create({
        data: {
          tenantId: payload.tenantId,
          shopId: payload.shopId,
          supplierId: payload.supplierId,
          orderNumber,
          totalAmount,
          status: payload.status || 'PENDING',
        }
      });

      const supplierOrderItems = await Promise.all(
        payload.items.map(item =>
          prisma.supplierOrderItem.create({
            data: {
              supplierOrderId: supplierOrder.id,
              productId: item.productId,
              quantity: item.quantity,
              unitPrice: item.unitPrice,
              total: item.quantity * item.unitPrice,
            }
          })
        )
      );

      // Publish SupplierOrderCreated event
      await this.eventBus.publish(
        {
          eventType: 'SupplierOrderCreated',
          aggregateId: supplierOrder.id,
          aggregateType: 'SupplierOrder',
          payload: {
            ...supplierOrder,
            items: supplierOrderItems
          },
          timestamp: new Date().toISOString(),
          correlationId: traceId,
        },
        'supplier-order.created'
      );

      return {
        status: 'success',
        traceId,
        data: {
          ...supplierOrder,
          items: supplierOrderItems
        }
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to create supplier order',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
