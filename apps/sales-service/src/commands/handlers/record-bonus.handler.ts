import { ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { RecordBonusCommand } from '../impl/record-bonus.command.js';
import { prisma } from '@electronic-shop/database';

@CommandHandler(RecordBonusCommand)
export class RecordBonusHandler implements ICommandHandler<RecordBonusCommand> {
  async execute(command: RecordBonusCommand) {
    const { payload, context } = command;
    const { recipientType, recipientId, amount, reason, salesOrderId } = payload;
    const { tenantId, shopId, userId, traceId } = context;

    try {
      // Validate amount
      if (amount <= 0) {
        return {
          status: 'error',
          errorCode: 'INVALID_AMOUNT',
          message: 'Bonus amount must be greater than zero'
        };
      }

      // Verify work period is open
      const workPeriod = await prisma.workPeriod.findFirst({
        where: { tenantId, shopId, status: 'OPEN' }
      });

      if (!workPeriod) {
        return {
          status: 'error',
          errorCode: 'NO_OPEN_WORK_PERIOD',
          message: 'No open work period found'
        };
      }

      // Create bonus record
      const bonus = await prisma.bonus.create({
        data: {
          tenantId,
          shopId,
          recipientType,
          recipientId,
          amount,
          reason,
          salesOrderId,
          recordedBy: userId,
          workPeriodId: workPeriod.id
        }
      });

      // If it's a staff bonus, update staff total bonuses
      if (recipientType === 'STAFF') {
        await prisma.staff.update({
          where: { id: recipientId },
          data: {
            totalBonuses: { increment: amount }
          }
        });
      }

      // Log audit
      await prisma.auditLog.create({
        data: {
          tenantId,
          shopId,
          userId,
          action: 'RECORD_BONUS',
          entityType: 'Bonus',
          entityId: bonus.id,
          changes: JSON.stringify({
            recipientType,
            recipientId,
            amount,
            reason,
            salesOrderId
          }),
          traceId
        }
      });

      return {
        status: 'success',
        data: {
          bonusId: bonus.id,
          recipientType,
          recipientId,
          amount,
          reason
        }
      };
    } catch (error) {
      console.error('Error recording bonus:', error);
      return {
        status: 'error',
        errorCode: 'BONUS_RECORDING_FAILED',
        message: error instanceof Error ? error.message : 'Failed to record bonus'
      };
    }
  }
}
