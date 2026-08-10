import { CommandHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { CreatePurchaseReturnCommand } from '../impl/create-purchase-return.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { EventBus } from '@electronic-shop/framework-event';

@CommandHandler(CreatePurchaseReturnCommand)
export class CreatePurchaseReturnHandler extends BaseCommandHandler<CreatePurchaseReturnCommand> {
  constructor(@Inject('EVENT_BUS') private readonly eventBus: EventBus) {
    super();
  }

  async execute(command: CreatePurchaseReturnCommand): Promise<ICommandResponse<any>> {
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

      const returnNumber = `PR-${Date.now()}`;

      const purchaseReturn = await prisma.purchaseReturn.create({
        data: {
          tenantId: payload.tenantId,
          shopId: payload.shopId,
          purchaseId: payload.purchaseId,
          supplierId: payload.supplierId,
          returnNumber,
          totalAmount: payload.totalAmount,
          refundAmount: payload.refundAmount,
          reason: payload.reason,
          status: payload.status || 'PENDING',
        }
      });

      const purchaseReturnItems = await Promise.all(
        payload.items.map(item =>
          prisma.purchaseReturnItem.create({
            data: {
              purchaseReturnId: purchaseReturn.id,
              productId: item.productId,
              serialNumber: item.serialNumber,
              quantity: item.quantity,
              refundAmount: item.refundAmount,
            }
          })
        )
      );

      // Publish PurchaseReturnCreated event
      await this.eventBus.publish(
        {
          eventType: 'PurchaseReturnCreated',
          aggregateId: purchaseReturn.id,
          aggregateType: 'PurchaseReturn',
          payload: {
            ...purchaseReturn,
            items: purchaseReturnItems
          },
          timestamp: new Date().toISOString(),
          correlationId: traceId,
        },
        'purchase-return.created'
      );

      return {
        status: 'success',
        traceId,
        data: {
          ...purchaseReturn,
          items: purchaseReturnItems
        }
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to create purchase return',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
