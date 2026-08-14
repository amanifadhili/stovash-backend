import { CommandHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { RecordTreasuryLoanCommand } from '../impl/record-treasury-loan.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { EventBus } from '@electronic-shop/framework-event';

@CommandHandler(RecordTreasuryLoanCommand)
export class RecordTreasuryLoanHandler extends BaseCommandHandler<RecordTreasuryLoanCommand> {
  constructor(@Inject('EVENT_BUS') private readonly eventBus: EventBus) {
    super();
  }

  async execute(command: RecordTreasuryLoanCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';
    const tenantId = context?.tenantId;
    const shopId = context?.shopId;
    const userId = context?.userId || 'system';

    try {
      if (!tenantId || !shopId) {
        return { status: 'error', traceId, message: 'tenantId and shopId are required', errorCode: ErrorCode.VALIDATION_ERROR };
      }
      if (!payload?.direction || !['BORROWED', 'LENT'].includes(payload.direction)) {
        return { status: 'error', traceId, message: 'direction must be BORROWED or LENT', errorCode: ErrorCode.VALIDATION_ERROR };
      }
      const amount = Number(payload.amount);
      if (!Number.isFinite(amount) || amount <= 0 || !payload.methodId || !(payload.counterparty || '').trim()) {
        return { status: 'error', traceId, message: 'Counterparty, method, and amount are required', errorCode: ErrorCode.VALIDATION_ERROR };
      }

      const method = await prisma.paymentMethod.findFirst({
        where: { id: payload.methodId, tenantId, shopId },
      });
      if (!method) {
        return { status: 'error', traceId, message: 'Payment method not found', errorCode: ErrorCode.NOT_FOUND };
      }
      if (payload.direction === 'LENT' && Number(method.balance) < amount) {
        return { status: 'error', traceId, message: `Not enough ${method.name} to lend`, errorCode: ErrorCode.VALIDATION_ERROR };
      }

      const loan = await prisma.$transaction(async (tx) => {
        await tx.paymentMethod.update({
          where: { id: method.id },
          data: {
            balance: payload.direction === 'BORROWED'
              ? { increment: amount }
              : { decrement: amount },
          },
        });
        return tx.treasuryLoan.create({
          data: {
            tenantId,
            shopId,
            direction: payload.direction,
            counterparty: payload.counterparty.trim(),
            principal: amount,
            outstanding: amount,
            methodId: method.id,
            status: 'ACTIVE',
            notes: payload.notes || null,
            createdBy: userId,
          },
        });
      });

      await this.eventBus.publish(
        {
          eventType: 'TreasuryLoanRecorded',
          aggregateId: loan.id,
          aggregateType: 'TreasuryLoan',
          tenantId,
          shopId,
          payload: {
            tenantId,
            shopId,
            loanId: loan.id,
            direction: payload.direction,
            amount,
            methodType: method.type,
            methodName: method.name,
            counterparty: loan.counterparty,
          },
          timestamp: new Date().toISOString(),
          correlationId: traceId,
          createdBy: userId,
        },
        'treasury.loan.recorded',
      );

      return { status: 'success', traceId, data: loan };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to record loan',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}
