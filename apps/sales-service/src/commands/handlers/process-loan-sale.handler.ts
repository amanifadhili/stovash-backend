import { ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { ProcessLoanSaleCommand } from '../impl/process-loan-sale.command.js';
import { prisma } from '../../database/client.js';
import { Inject } from '@nestjs/common';
import { EventBus } from '@electronic-shop/framework-event';

@CommandHandler(ProcessLoanSaleCommand)
export class ProcessLoanSaleHandler implements ICommandHandler<ProcessLoanSaleCommand> {
  constructor(@Inject('EVENT_BUS') private readonly eventBus: EventBus) {}

  async execute(command: ProcessLoanSaleCommand) {
    const { payload, context } = command;
    const { customerId, items, totalAmount, downPayment, installmentAmount, numberOfInstallments, interestRate, paymentSchedule } = payload;
    const { tenantId, shopId, userId, traceId } = context;
    const workPeriodId = context?.workPeriodId || null;

    try {
      // Validate down payment
      if (downPayment < 0 || downPayment >= totalAmount) {
        return {
          status: 'error',
          errorCode: 'INVALID_DOWN_PAYMENT',
          message: 'Down payment must be between 0 and total amount'
        };
      }

      // Normalize items from payload (no cross-service reads)
      const normalizedItems = items.map((item) => ({
        productId: item.inventoryItemId || 'unknown',
        serialNumber: item.inventoryItemId || 'unknown',
        quantity: item.quantity || 1,
        unitCost: item.unitCost || 0,
        unitPrice: item.unitPrice
      }));

      const totalCost = normalizedItems.reduce((sum, item) => sum + (item.unitCost * item.quantity), 0);

      // Calculate total loan amount
      const loanAmount = totalAmount - downPayment;
      const totalInterest = interestRate ? (loanAmount * interestRate / 100) : 0;
      const totalRepayment = loanAmount + totalInterest;

      // Create loan sale (own model only)
      const sale = await prisma.sale.create({
        data: {
          tenantId,
          shopId,
          customerId,
          workPeriodId,
          orderNumber: `LOAN-${Date.now()}`,
          totalAmount,
          totalCost,
          profit: totalAmount - totalCost,
          paymentMethod: 'LOAN',
          status: 'COMPLETED',
          createdById: userId,
          items: {
            create: normalizedItems.map(item => ({
              productId: item.productId,
              serialNumber: item.serialNumber,
              quantity: item.quantity,
              unitCost: item.unitCost,
              unitPrice: item.unitPrice,
              total: item.unitPrice * item.quantity
            }))
          },
          payments: {
            create: [
              { amount: downPayment, method: 'CASH', reference: 'DOWN-PAYMENT' }
            ]
          }
        },
        include: { items: true }
      });

      // Publish SaleCreated event (consumed by inventory + accounting services)
      await this.eventBus.publish(
        {
          eventType: 'SaleCreated',
          aggregateId: sale.id,
          aggregateType: 'Sale',
          tenantId,
          shopId,
          workPeriodId,
          payload: {
            saleId: sale.id,
            tenantId,
            shopId,
            workPeriodId,
            customerId,
            orderNumber: sale.orderNumber,
            totalAmount,
            totalCost,
            paymentMethod: 'LOAN',
            items: normalizedItems.map(item => ({
              inventoryItemId: item.productId,
              serialNumber: item.serialNumber,
              productId: item.productId,
              quantity: item.quantity,
              unitCost: item.unitCost,
              unitPrice: item.unitPrice
            }))
          },
          timestamp: new Date().toISOString(),
          correlationId: traceId,
          createdBy: userId,
        },
        'sale.created'
      );

      // Log audit (own audit log)
      await prisma.auditLog.create({
        data: {
          tenantId,
          shopId,
          userId,
          action: 'PROCESS_LOAN_SALE',
          resource: 'Sale',
          resourceId: sale.id,
          details: JSON.stringify({
            customerId,
            totalAmount,
            downPayment,
            loanAmount,
            numberOfInstallments,
            paymentSchedule
          }),
          traceId
        }
      });

      return {
        status: 'success',
        data: {
          saleId: sale.id,
          orderNumber: sale.orderNumber,
          totalAmount,
          downPayment,
          loanAmount,
          totalRepayment,
          numberOfInstallments,
          paymentSchedule
        }
      };
    } catch (error) {
      console.error('Error processing loan sale:', error);
      return {
        status: 'error',
        errorCode: 'LOAN_SALE_PROCESSING_FAILED',
        message: error instanceof Error ? error.message : 'Failed to process loan sale'
      };
    }
  }
}
