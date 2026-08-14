import { CommandHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { CreatePaymentMethodCommand } from '../impl/create-payment-method.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { EventBus } from '@electronic-shop/framework-event';

@CommandHandler(CreatePaymentMethodCommand)
export class CreatePaymentMethodHandler extends BaseCommandHandler<CreatePaymentMethodCommand> {
  constructor(@Inject('EVENT_BUS') private readonly eventBus: EventBus) {
    super();
  }

  async execute(command: CreatePaymentMethodCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';

    try {
      const tenantId = payload?.tenantId || context?.tenantId;
      const shopId = payload?.shopId || context?.shopId;

      if (!tenantId || !shopId || !payload?.name || !payload?.type) {
        return {
          status: 'error',
          traceId,
          message: 'Name and type are required',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      const paymentMethod = await prisma.paymentMethod.create({
        data: {
          tenantId,
          shopId,
          name: payload.name,
          type: payload.type,
          accountNumber: payload.accountNumber,
          bankName: payload.bankName,
          balance: payload.balance || 0,
          currency: payload.currency || 'RWF',
          isActive: payload.isActive !== undefined ? payload.isActive : true,
        }
      });

      // Publish PaymentMethodCreated event
      await this.eventBus.publish(
        {
          eventType: 'PaymentMethodCreated',
          aggregateId: paymentMethod.id,
          aggregateType: 'PaymentMethod',
          payload: paymentMethod,
          timestamp: new Date().toISOString(),
          correlationId: traceId,
        },
        'payment-method.created'
      );

      return {
        status: 'success',
        traceId,
        data: paymentMethod
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to create payment method',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
