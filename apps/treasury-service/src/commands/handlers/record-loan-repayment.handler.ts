import { CommandHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { RecordLoanRepaymentCommand } from '../impl/record-loan-repayment.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { EventBus } from '@electronic-shop/framework-event';

@CommandHandler(RecordLoanRepaymentCommand)
export class RecordLoanRepaymentHandler extends BaseCommandHandler<RecordLoanRepaymentCommand> {
  constructor(@Inject('EVENT_BUS') private readonly eventBus: EventBus) {
    super();
  }

  async execute(command: RecordLoanRepaymentCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';
    const tenantId = context?.tenantId;
    const shopId = context?.shopId;
    const userId = context?.userId || 'system';

    try {
      if (!tenantId || !shopId || !payload?.loanId || !payload?.methodId) {
        return { status: 'error', traceId, message: 'loanId and methodId are required', errorCode: ErrorCode.VALIDATION_ERROR };
      }
      const amount = Number(payload.amount);
      if (!Number.isFinite(amount) || amount <= 0) {
        return { status: 'error', traceId, message: 'Amount must be greater than zero', errorCode: ErrorCode.VALIDATION_ERROR };
      }

      const loan = await prisma.treasuryLoan.findFirst({
        where: { id: payload.loanId, tenantId, shopId },
      });
      if (!loan || loan.status !== 'ACTIVE') {
        return { status: 'error', traceId, message: 'Active loan not found', errorCode: ErrorCode.NOT_FOUND };
      }
      if (amount > Number(loan.outstanding) + 0.01) {
        return { status: 'error', traceId, message: `Outstanding is only RWF ${loan.outstanding}`, errorCode: ErrorCode.VALIDATION_ERROR };
      }

      const method = await prisma.paymentMethod.findFirst({
        where: { id: payload.methodId, tenantId, shopId },
      });
      if (!method) {
        return { status: 'error', traceId, message: 'Payment method not found', errorCode: ErrorCode.NOT_FOUND };
      }
      if (loan.direction === 'BORROWED' && Number(method.balance) < amount) {
        return { status: 'error', traceId, message: `Not enough ${method.name} to repay`, errorCode: ErrorCode.VALIDATION_ERROR };
      }

      const outstanding = Math.max(0, Number(loan.outstanding) - amount);
      const repayment = await prisma.$transaction(async (tx) => {
        await tx.paymentMethod.update({
          where: { id: method.id },
          data: {
            balance: loan.direction === 'BORROWED'
              ? { decrement: amount }
              : { increment: amount },
          },
        });
        await tx.treasuryLoan.update({
          where: { id: loan.id },
          data: {
            outstanding,
            status: outstanding <= 0.01 ? 'REPAID' : 'ACTIVE',
          },
        });
        return tx.treasuryLoanRepayment.create({
          data: {
            tenantId,
            shopId,
            loanId: loan.id,
            methodId: method.id,
            amount,
            notes: payload.notes || null,
            createdBy: userId,
          },
        });
      });

      await this.eventBus.publish(
        {
          eventType: 'TreasuryLoanRepaymentRecorded',
          aggregateId: repayment.id,
          aggregateType: 'TreasuryLoanRepayment',
          tenantId,
          shopId,
          payload: {
            tenantId,
            shopId,
            loanId: loan.id,
            direction: loan.direction,
            amount,
            methodType: method.type,
            methodName: method.name,
            counterparty: loan.counterparty,
          },
          timestamp: new Date().toISOString(),
          correlationId: traceId,
          createdBy: userId,
        },
        'treasury.loan.repaid',
      );

      return { status: 'success', traceId, data: repayment };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to record repayment',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}
