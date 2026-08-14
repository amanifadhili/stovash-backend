import { CommandHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { RecordOperationalDepositCommand } from '../impl/record-operational-deposit.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { EventBus } from '@electronic-shop/framework-event';

@CommandHandler(RecordOperationalDepositCommand)
export class RecordOperationalDepositHandler extends BaseCommandHandler<RecordOperationalDepositCommand> {
  constructor(@Inject('EVENT_BUS') private readonly eventBus: EventBus) {
    super();
  }

  async execute(command: RecordOperationalDepositCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';
    const tenantId = context?.tenantId;
    const shopId = context?.shopId;
    const userId = context?.userId || 'system';

    try {
      if (!tenantId || !shopId || !payload?.methodId || payload?.amount == null) {
        return {
          status: 'error',
          traceId,
          message: 'Payment method and amount are required',
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

      const paymentMethod = await prisma.paymentMethod.findFirst({
        where: { id: payload.methodId, tenantId, shopId },
      });
      if (!paymentMethod) {
        return {
          status: 'error',
          traceId,
          message: 'Payment method not found',
          errorCode: ErrorCode.NOT_FOUND,
        };
      }

      const deposit = await prisma.$transaction(async (tx) => {
        const newDeposit = await tx.operationalDeposit.create({
          data: {
            tenantId,
            shopId,
            methodId: payload.methodId,
            amount,
            depositedBy: userId,
            notes: payload.notes || null,
          },
        });
        await tx.paymentMethod.update({
          where: { id: payload.methodId },
          data: { balance: { increment: amount } },
        });
        return newDeposit;
      });

      try {
        await prisma.auditLog.create({
          data: {
            tenantId,
            shopId,
            userId,
            action: 'RecordOperationalDeposit',
            resource: 'OperationalDeposit',
            resourceId: deposit.id,
            traceId,
            details: JSON.stringify({ methodId: payload.methodId, amount, notes: payload.notes }),
          },
        });
      } catch (auditError) {
        console.error('Failed to log audit action:', auditError);
      }

      await this.eventBus.publish(
        {
          eventType: 'TreasuryDepositRecorded',
          aggregateId: deposit.id,
          aggregateType: 'OperationalDeposit',
          tenantId,
          shopId,
          payload: {
            tenantId,
            shopId,
            amount,
            methodType: paymentMethod.type,
            methodName: paymentMethod.name,
            notes: payload.notes || null,
          },
          timestamp: new Date().toISOString(),
          correlationId: traceId,
          createdBy: userId,
        },
        'treasury.deposit.recorded',
      );

      return {
        status: 'success',
        traceId,
        data: { ...deposit, newBalance: Number(paymentMethod.balance) + amount },
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to record operational deposit',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}
