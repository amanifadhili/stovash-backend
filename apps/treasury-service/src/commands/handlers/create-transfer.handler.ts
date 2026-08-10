import { CommandHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { CreateTransferCommand } from '../impl/create-transfer.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { EventBus } from '@electronic-shop/framework-event';

@CommandHandler(CreateTransferCommand)
export class CreateTransferHandler extends BaseCommandHandler<CreateTransferCommand> {
  constructor(@Inject('EVENT_BUS') private readonly eventBus: EventBus) {
    super();
  }

  async execute(command: CreateTransferCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';

    try {
      if (!payload?.tenantId || !payload?.shopId || !payload?.fromMethodId || !payload?.toMethodId || !payload?.amount) {
        return {
          status: 'error',
          traceId,
          message: 'Tenant ID, shop ID, from method ID, to method ID, and amount are required',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      if (payload.fromMethodId === payload.toMethodId) {
        return {
          status: 'error',
          traceId,
          message: 'Cannot transfer to the same payment method',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      const transfer = await prisma.$transaction(async (tx) => {
        // Deduct from source
        await tx.paymentMethod.update({
          where: { id: payload.fromMethodId },
          data: { balance: { decrement: payload.amount } }
        });

        // Add to destination
        await tx.paymentMethod.update({
          where: { id: payload.toMethodId },
          data: { balance: { increment: payload.amount } }
        });

        return await tx.transfer.create({
          data: {
            tenantId: payload.tenantId,
            shopId: payload.shopId,
            fromMethodId: payload.fromMethodId,
            toMethodId: payload.toMethodId,
            amount: payload.amount,
            reference: payload.reference,
            status: payload.status || 'COMPLETED',
          }
        });
      });

      // Publish TransferCreated event
      await this.eventBus.publish(
        {
          eventType: 'TransferCreated',
          aggregateId: transfer.id,
          aggregateType: 'Transfer',
          payload: transfer,
          timestamp: new Date().toISOString(),
          correlationId: traceId,
        },
        'transfer.created'
      );

      return {
        status: 'success',
        traceId,
        data: transfer
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to create transfer',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
