import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { ReconcilePaymentMethodCommand } from '../impl/reconcile-payment-method.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@CommandHandler(ReconcilePaymentMethodCommand)
export class ReconcilePaymentMethodHandler extends BaseCommandHandler<ReconcilePaymentMethodCommand> {
  async execute(command: ReconcilePaymentMethodCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';
    const tenantId = context?.tenantId;
    const shopId = context?.shopId;
    const userId = context?.userId || 'system';

    try {
      if (!tenantId || !shopId || !payload?.methodId || payload?.physicalBalance === undefined || payload?.physicalBalance === null) {
        return {
          status: 'error',
          traceId,
          message: 'Payment method and counted balance are required',
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }

      const physicalBalance = Number(payload.physicalBalance);
      if (!Number.isFinite(physicalBalance) || physicalBalance < 0) {
        return {
          status: 'error',
          traceId,
          message: 'Counted balance must be 0 or more',
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

      const systemBalance = Number(paymentMethod.balance);
      const difference = physicalBalance - systemBalance;

      const reconciliation = await prisma.reconciliation.create({
        data: {
          tenantId,
          shopId,
          methodId: payload.methodId,
          systemBalance,
          physicalBalance,
          difference,
          reconciledBy: userId,
          notes: payload.notes || null,
        },
      });

      try {
        await prisma.auditLog.create({
          data: {
            tenantId,
            shopId,
            userId,
            action: 'ReconcilePaymentMethod',
            resource: 'Reconciliation',
            resourceId: reconciliation.id,
            traceId,
            details: JSON.stringify({
              methodId: payload.methodId,
              systemBalance,
              physicalBalance,
              difference,
              notes: payload.notes,
            }),
          },
        });
      } catch (auditError) {
        console.error('Failed to log audit action:', auditError);
      }

      return {
        status: 'success',
        traceId,
        data: {
          ...reconciliation,
          isBalanced: Math.abs(difference) < 0.01,
        },
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to reconcile payment method',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}
