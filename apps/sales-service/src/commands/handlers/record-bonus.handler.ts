import { ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { RecordBonusCommand } from '../impl/record-bonus.command.js';
import { prisma } from '../../database/client.js';

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

      // Create bonus record (own model only)
      const bonus = await prisma.bonus.create({
        data: {
          tenantId,
          shopId,
          customerId: recipientType === 'CUSTOMER' ? recipientId : undefined,
          amount,
          type: recipientType === 'STAFF' ? 'STAFF' : 'LOYALTY',
          description: reason || salesOrderId || null
        }
      });

      // Log audit
      await prisma.auditLog.create({
        data: {
          tenantId,
          shopId,
          userId,
          action: 'RECORD_BONUS',
          resource: 'Bonus',
          resourceId: bonus.id,
          details: JSON.stringify({
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
