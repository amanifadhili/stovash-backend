import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { RecordPartialPaymentCommand } from '../impl/record-partial-payment.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import { Inject } from '@nestjs/common';
import { EventBus } from '@electronic-shop/framework-event';

@CommandHandler(RecordPartialPaymentCommand)
export class RecordPartialPaymentHandler extends BaseCommandHandler<RecordPartialPaymentCommand> {
  constructor(@Inject('EVENT_BUS') private readonly eventBus: EventBus) {
    super();
  }

  async execute(command: RecordPartialPaymentCommand): Promise<ICommandResponse<any>> {
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

      if (!payload?.salesOrderId || !payload?.amount || !payload?.paymentMethod) {
        return {
          status: 'error',
          traceId,
          message: 'salesOrderId, amount, and paymentMethod are required',
          errorCode: ErrorCode.VALIDATION_ERROR
        };
      }

      // Verify sale exists (own model)
      const sale = await prisma.sale.findUnique({
        where: { id: payload.salesOrderId }
      });

      if (!sale) {
        return {
          status: 'error',
          traceId,
          message: `Sale ${payload.salesOrderId} not found`,
          errorCode: ErrorCode.NOT_FOUND
        };
      }

      if (sale.tenantId !== tenantId || sale.shopId !== shopId) {
        return {
          status: 'error',
          traceId,
          message: 'Sale does not belong to this tenant/shop',
          errorCode: ErrorCode.UNAUTHORIZED
        };
      }

      // Record payment on the sale (own model only)
      const payment = await prisma.salePayment.create({
        data: {
          saleId: sale.id,
          amount: payload.amount,
          method: payload.paymentMethod,
          reference: `PARTIAL-${Date.now()}`
        }
      });

      // Publish SalePaymentRecorded event for accounting journal posting
      await this.eventBus.publish(
        {
          eventType: 'SalePaymentRecorded',
          aggregateId: payment.id,
          aggregateType: 'SalePayment',
          tenantId,
          shopId,
          workPeriodId,
          payload: {
            paymentId: payment.id,
            saleId: sale.id,
            tenantId,
            shopId,
            workPeriodId,
            orderNumber: sale.orderNumber,
            amount: payload.amount,
            paymentMethod: payload.paymentMethod
          },
          timestamp: new Date().toISOString(),
          correlationId: traceId,
          createdBy: context.userId,
        },
        'sale-payment.recorded'
      );

      // Log audit action (own audit log)
      try {
        await prisma.auditLog.create({
          data: {
            tenantId,
            shopId,
            userId: context.userId,
            action: 'RecordPartialPayment',
            resource: 'SalePayment',
            resourceId: payment.id,
            traceId: context.traceId || null,
            details: JSON.stringify({
              salesOrderId: payload.salesOrderId,
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
        data: { payment, sale }
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to record partial payment',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR
      };
    }
  }
}
