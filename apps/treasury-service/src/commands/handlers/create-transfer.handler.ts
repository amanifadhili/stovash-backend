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
    const tenantId = payload?.tenantId || context?.tenantId;
    const shopId = payload?.shopId || context?.shopId;
    const userId = context?.userId || 'system';

    try {
      if (!tenantId || !shopId || !payload?.fromMethodId || !payload?.toMethodId || !payload?.amount) {
        return {
          status: 'error',
          traceId,
          message: 'From method, to method, and amount are required',
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }

      const amount = Number(payload.amount);
      if (!Number.isFinite(amount) || amount <= 0) {
        return {
          status: 'error',
          traceId,
          message: 'Amount must be greater than zero',
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }

      if (payload.fromMethodId === payload.toMethodId) {
        return {
          status: 'error',
          traceId,
          message: 'Cannot transfer to the same payment method',
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }

      const from = await prisma.paymentMethod.findFirst({
        where: { id: payload.fromMethodId, tenantId, shopId },
      });
      const to = await prisma.paymentMethod.findFirst({
        where: { id: payload.toMethodId, tenantId, shopId },
      });
      if (!from || !to) {
        return {
          status: 'error',
          traceId,
          message: 'Payment method not found',
          errorCode: ErrorCode.NOT_FOUND,
        };
      }
      if (Number(from.balance) < amount) {
        return {
          status: 'error',
          traceId,
          message: `Not enough ${from.name} balance (have RWF ${from.balance})`,
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }

      const transfer = await prisma.$transaction(async (tx) => {
        await tx.paymentMethod.update({
          where: { id: from.id },
          data: { balance: { decrement: amount } },
        });
        await tx.paymentMethod.update({
          where: { id: to.id },
          data: { balance: { increment: amount } },
        });
        return tx.transfer.create({
          data: {
            tenantId,
            shopId,
            fromMethodId: from.id,
            toMethodId: to.id,
            amount,
            reference: payload.reference || null,
            status: 'COMPLETED',
            approvedBy: userId,
            approvedAt: new Date(),
          },
        });
      });

      await this.eventBus.publish(
        {
          eventType: 'TreasuryTransferCreated',
          aggregateId: transfer.id,
          aggregateType: 'Transfer',
          tenantId,
          shopId,
          payload: {
            tenantId,
            shopId,
            amount,
            fromMethodId: from.id,
            toMethodId: to.id,
            fromType: from.type,
            toType: to.type,
            fromName: from.name,
            toName: to.name,
            reference: payload.reference || null,
          },
          timestamp: new Date().toISOString(),
          correlationId: traceId,
          createdBy: userId,
        },
        'treasury.transfer.created',
      );

      return { status: 'success', traceId, data: transfer };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to create transfer',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}
