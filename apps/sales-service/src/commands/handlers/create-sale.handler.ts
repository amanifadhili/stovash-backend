import { CommandHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { CreateSaleCommand } from '../impl/create-sale.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { EventBus } from '@electronic-shop/framework-event';

@CommandHandler(CreateSaleCommand)
export class CreateSaleHandler extends BaseCommandHandler<CreateSaleCommand> {
  constructor(@Inject('EVENT_BUS') private readonly eventBus: EventBus) {
    super();
  }

  async execute(command: CreateSaleCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';

    try {
      if (!payload?.tenantId || !payload?.shopId || !payload?.items || payload.items.length === 0) {
        return {
          status: 'error',
          traceId,
          message: 'Tenant ID, shop ID, and at least one item are required',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      const totalAmount = payload.items.reduce((sum, item) => sum + (item.quantity * item.unitPrice), 0);

      const sale = await prisma.sale.create({
        data: {
          tenantId: payload.tenantId,
          shopId: payload.shopId,
          customerId: payload.customerId,
          totalAmount,
          status: payload.status || 'COMPLETED',
        }
      });

      const saleItems = await Promise.all(
        payload.items.map(item =>
          prisma.saleItem.create({
            data: {
              saleId: sale.id,
              productId: item.productId,
              quantity: item.quantity,
              unitPrice: item.unitPrice,
              totalPrice: item.quantity * item.unitPrice,
            }
          })
        )
      );

      // Publish SaleCreated event
      await this.eventBus.publish(
        {
          eventType: 'SaleCreated',
          aggregateId: sale.id,
          aggregateType: 'Sale',
          payload: {
            ...sale,
            items: saleItems
          },
          timestamp: new Date().toISOString(),
          correlationId: traceId,
        },
        'sale.created'
      );

      return {
        status: 'success',
        traceId,
        data: {
          ...sale,
          items: saleItems
        }
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to create sale',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
