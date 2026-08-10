import { CommandHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { CreateSaleReturnCommand } from '../impl/create-sale-return.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { EventBus } from '@electronic-shop/framework-event';

@CommandHandler(CreateSaleReturnCommand)
export class CreateSaleReturnHandler extends BaseCommandHandler<CreateSaleReturnCommand> {
  constructor(@Inject('EVENT_BUS') private readonly eventBus: EventBus) {
    super();
  }

  async execute(command: CreateSaleReturnCommand): Promise<ICommandResponse<any>> {
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

      const returnNumber = `SR-${Date.now()}`;

      const saleReturn = await prisma.saleReturn.create({
        data: {
          tenantId: payload.tenantId,
          shopId: payload.shopId,
          saleId: payload.saleId,
          customerId: payload.customerId,
          returnNumber,
          totalAmount: payload.totalAmount,
          refundAmount: payload.refundAmount,
          reason: payload.reason,
          status: payload.status || 'PENDING',
        }
      });

      const saleReturnItems = await Promise.all(
        payload.items.map(item =>
          prisma.saleReturnItem.create({
            data: {
              saleReturnId: saleReturn.id,
              productId: item.productId,
              serialNumber: item.serialNumber,
              quantity: item.quantity,
              unitCost: item.unitCost,
              refundAmount: item.refundAmount,
            }
          })
        )
      );

      // Publish SaleReturnCreated event
      await this.eventBus.publish(
        {
          eventType: 'SaleReturnCreated',
          aggregateId: saleReturn.id,
          aggregateType: 'SaleReturn',
          payload: {
            ...saleReturn,
            items: saleReturnItems
          },
          timestamp: new Date().toISOString(),
          correlationId: traceId,
        },
        'sale-return.created'
      );

      return {
        status: 'success',
        traceId,
        data: {
          ...saleReturn,
          items: saleReturnItems
        }
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to create sale return',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
