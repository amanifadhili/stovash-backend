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

    try {
      if (!payload?.methodId || payload?.physicalBalance === undefined || payload?.physicalBalance === null) {
        return {
          status: 'error',
          traceId,
          message: 'Payment method ID and physical balance are required',
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

      const systemBalance = paymentMethod.balance;
      const physicalBalance = payload.physicalBalance;
      const difference = physicalBalance - systemBalance;

      // Create reconciliation record
      const reconciliation = await prisma.reconciliation.create({
        data: {
          tenantId: paymentMethod.tenantId,
          shopId: paymentMethod.shopId,
          methodId: payload.methodId,
          systemBalance,
          physicalBalance,
          difference,
          reconciledBy: context?.userId || 'system',
          notes: payload.notes
        }
      });

      // Log audit action
      try {
        await prisma.auditLog.create({
          data: {
            tenantId: paymentMethod.tenantId,
            shopId: paymentMethod.shopId,
            userId: context?.userId || null,
            action: 'ReconcilePaymentMethod',
            resource: 'Reconciliation',
            resourceId: reconciliation.id,
            traceId: context?.traceId || null,
            details: JSON.stringify({
              methodId: payload.methodId,
              systemBalance,
              physicalBalance,
              difference,
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
          ...reconciliation,
          isBalanced: difference === 0
        }
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to reconcile payment method',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
