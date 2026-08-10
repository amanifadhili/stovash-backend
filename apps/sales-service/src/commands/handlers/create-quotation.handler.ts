import { CommandHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { CreateQuotationCommand } from '../impl/create-quotation.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { EventBus } from '@electronic-shop/framework-event';

@CommandHandler(CreateQuotationCommand)
export class CreateQuotationHandler extends BaseCommandHandler<CreateQuotationCommand> {
  constructor(@Inject('EVENT_BUS') private readonly eventBus: EventBus) {
    super();
  }

  async execute(command: CreateQuotationCommand): Promise<ICommandResponse<any>> {
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

      const totalAmount = payload.items.reduce((sum, item) => {
        const itemTotal = item.quantity * item.unitPrice * (1 - (item.discount || 0));
        return sum + itemTotal;
      }, 0);

      const quoteNumber = `QT-${Date.now()}`;

      const quotation = await prisma.quotation.create({
        data: {
          tenantId: payload.tenantId,
          shopId: payload.shopId,
          customerId: payload.customerId,
          quoteNumber,
          totalAmount,
          validUntil: payload.validUntil,
          status: payload.status || 'DRAFT',
        }
      });

      const quotationItems = await Promise.all(
        payload.items.map(item =>
          prisma.quotationItem.create({
            data: {
              quotationId: quotation.id,
              productId: item.productId,
              quantity: item.quantity,
              unitPrice: item.unitPrice,
              discount: item.discount || 0,
              total: item.quantity * item.unitPrice * (1 - (item.discount || 0)),
            }
          })
        )
      );

      // Publish QuotationCreated event
      await this.eventBus.publish(
        {
          eventType: 'QuotationCreated',
          aggregateId: quotation.id,
          aggregateType: 'Quotation',
          payload: {
            ...quotation,
            items: quotationItems
          },
          timestamp: new Date().toISOString(),
          correlationId: traceId,
        },
        'quotation.created'
      );

      return {
        status: 'success',
        traceId,
        data: {
          ...quotation,
          items: quotationItems
        }
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to create quotation',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
