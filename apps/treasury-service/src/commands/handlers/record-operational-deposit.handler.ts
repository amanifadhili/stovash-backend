import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { RecordOperationalDepositCommand } from '../impl/record-operational-deposit.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@CommandHandler(RecordOperationalDepositCommand)
export class RecordOperationalDepositHandler extends BaseCommandHandler<RecordOperationalDepositCommand> {
  async execute(command: RecordOperationalDepositCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';

    try {
      if (!payload?.methodId || !payload?.amount) {
        return {
          status: 'error',
          traceId,
          message: 'Payment method ID and amount are required',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      if (payload.amount <= 0) {
        return {
          status: 'error',
          traceId,
          message: 'Amount must be greater than zero',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      // Verify payment method exists
      const paymentMethod = await prisma.paymentMethod.findUnique({
        where: { id: payload.methodId }
      });

      if (!paymentMethod) {
        return {
          status: 'error',
          traceId,
          message: 'Payment method not found',
          errorCode: ErrorCode.NOT_FOUND
        };
      }

      // Record operational deposit
      const deposit = await prisma.$transaction(async (tx) => {
        // Create deposit record
        const newDeposit = await tx.operationalDeposit.create({
          data: {
            tenantId: paymentMethod.tenantId,
            shopId: paymentMethod.shopId,
            methodId: payload.methodId,
            amount: payload.amount,
            depositedBy: context?.userId || 'system',
            notes: payload.notes
          }
        });

        // Update payment method balance
        await tx.paymentMethod.update({
          where: { id: payload.methodId },
          data: {
            balance: {
              increment: payload.amount
            }
          }
        });

        return newDeposit;
      });

      // Log audit action
      try {
        await prisma.auditLog.create({
          data: {
            tenantId: paymentMethod.tenantId,
            shopId: paymentMethod.shopId,
            userId: context?.userId || null,
            action: 'RecordOperationalDeposit',
            resource: 'OperationalDeposit',
            resourceId: deposit.id,
            traceId: context?.traceId || null,
            details: JSON.stringify({
              methodId: payload.methodId,
              amount: payload.amount,
              notes: payload.notes
            })
          }
        });
      } catch (auditError) {
        console.error('Failed to log audit action:', auditError);
      }

      return {
        status: 'success',
        traceId,
        data: {
          ...deposit,
          newBalance: paymentMethod.balance + payload.amount
        }
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to record operational deposit',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
