import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { RecordPurchasePaymentCommand } from '../impl/record-purchase-payment.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { Inject } from '@nestjs/common';
import { EventBus } from '@electronic-shop/framework-event';

@CommandHandler(RecordPurchasePaymentCommand)
export class RecordPurchasePaymentHandler extends BaseCommandHandler<RecordPurchasePaymentCommand> {
  constructor(@Inject('EVENT_BUS') private readonly eventBus: EventBus) {
    super();
  }

  async execute(command: RecordPurchasePaymentCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';
    const tenantId = context?.tenantId;
    const shopId = context?.shopId;
    const workPeriodId = context?.workPeriodId || null;

    try {
      if (!tenantId || !shopId) {
        return {
          status: 'error',
          traceId,
          message: 'tenantId and shopId are required in context',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      if (!payload?.purchaseOrderId || !payload?.amount || !payload?.paymentMethod) {
        return {
          status: 'error',
          traceId,
          message: 'purchaseOrderId, amount, and paymentMethod are required',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      // Verify purchase exists (own model)
      const purchase = await prisma.purchase.findUnique({
        where: { id: payload.purchaseOrderId }
      });

      if (!purchase) {
        return {
          status: 'error',
          traceId,
          message: `Purchase ${payload.purchaseOrderId} not found`,
          errorCode: ErrorCode.NOT_FOUND
        };
      }

      if (purchase.tenantId !== tenantId || purchase.shopId !== shopId) {
        return {
          status: 'error',
          traceId,
          message: 'Purchase does not belong to this tenant/shop',
          errorCode: ErrorCode.UNAUTHORIZED
        };
      }

      // Record payment on the purchase (own model only)
      const payment = await prisma.purchasePayment.create({
        data: {
          purchaseId: purchase.id,
          amount: payload.amount,
          method: payload.paymentMethod,
          reference: `PAY-${Date.now()}`
        }
      });

      // Publish PurchasePaymentRecorded event for accounting journal posting
      await this.eventBus.publish(
        {
          eventType: 'PurchasePaymentRecorded',
          aggregateId: payment.id,
          aggregateType: 'PurchasePayment',
          tenantId,
          shopId,
          workPeriodId,
          payload: {
            paymentId: payment.id,
            purchaseId: purchase.id,
            tenantId,
            shopId,
            workPeriodId,
            poNumber: purchase.poNumber,
            amount: payload.amount,
            paymentMethod: payload.paymentMethod
          },
          timestamp: new Date().toISOString(),
          correlationId: traceId,
          createdBy: context.userId,
        },
        'purchase-payment.recorded'
      );

      // Log audit action (own audit log)
      try {
        await prisma.auditLog.create({
          data: {
            tenantId,
            shopId,
            userId: context.userId,
            action: 'RecordPurchasePayment',
            resource: 'PurchasePayment',
            resourceId: payment.id,
            traceId: context.traceId || null,
            details: JSON.stringify({
              purchaseOrderId: payload.purchaseOrderId,
              amount: payload.amount,
              paymentMethod: payload.paymentMethod
            })
          }
        });
      } catch (auditError) {
        console.error('Failed to log audit action:', auditError);
      }

      return {
        status: 'success',
        traceId,
        data: { payment, purchase }
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to record purchase payment',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
