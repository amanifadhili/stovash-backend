import { CommandHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { CreatePurchaseCommand } from '../impl/create-purchase.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { EventBus } from '@electronic-shop/framework-event';

@CommandHandler(CreatePurchaseCommand)
export class CreatePurchaseHandler extends BaseCommandHandler<CreatePurchaseCommand> {
  constructor(@Inject('EVENT_BUS') private readonly eventBus: EventBus) {
    super();
  }

  async execute(command: CreatePurchaseCommand): Promise<ICommandResponse<any>> {
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

      const totalCost = payload.items.reduce((sum, item) => sum + (item.quantity * item.unitCost), 0);

      const purchase = await prisma.purchase.create({
        data: {
          tenantId: payload.tenantId,
          shopId: payload.shopId,
          supplierId: payload.supplierId,
          totalCost,
          status: payload.status || 'COMPLETED',
        }
      });

      const purchaseItems = await Promise.all(
        payload.items.map(item =>
          prisma.purchaseItem.create({
            data: {
              purchaseId: purchase.id,
              productId: item.productId,
              quantity: item.quantity,
              unitCost: item.unitCost,
              totalCost: item.quantity * item.unitCost,
            }
          })
        )
      );

      // Publish PurchaseCreated event
      await this.eventBus.publish(
        {
          eventType: 'PurchaseCreated',
          aggregateId: purchase.id,
          aggregateType: 'Purchase',
          payload: {
            ...purchase,
            items: purchaseItems
          },
          timestamp: new Date().toISOString(),
          correlationId: traceId,
        },
        'purchase.created'
      );

      return {
        status: 'success',
        traceId,
        data: {
          ...purchase,
          items: purchaseItems
        }
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to create purchase',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
