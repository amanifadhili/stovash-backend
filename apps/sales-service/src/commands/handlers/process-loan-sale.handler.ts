import { ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { ProcessLoanSaleCommand } from '../impl/process-loan-sale.command.js';
import { prisma } from '@electronic-shop/database';

@CommandHandler(ProcessLoanSaleCommand)
export class ProcessLoanSaleHandler implements ICommandHandler<ProcessLoanSaleCommand> {
  async execute(command: ProcessLoanSaleCommand) {
    const { payload, context } = command;
    const { customerId, items, totalAmount, downPayment, installmentAmount, numberOfInstallments, interestRate, paymentSchedule } = payload;
    const { tenantId, shopId, userId, traceId } = context;

    try {
      // Validate down payment
      if (downPayment < 0 || downPayment >= totalAmount) {
        return {
          status: 'error',
          errorCode: 'INVALID_DOWN_PAYMENT',
          message: 'Down payment must be between 0 and total amount'
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

      // Verify customer exists
      const customer = await prisma.customer.findUnique({
        where: { id: customerId }
      });

      if (!customer) {
        return {
          status: 'error',
          errorCode: 'CUSTOMER_NOT_FOUND',
          message: 'Customer not found'
        };
      }

      // Verify inventory items are available
      const inventoryItems = await prisma.inventoryItem.findMany({
        where: { id: { in: items.map(i => i.inventoryItemId) } }
      });

      if (inventoryItems.length !== items.length) {
        return {
          status: 'error',
          errorCode: 'INVENTORY_ITEMS_NOT_FOUND',
          message: 'One or more inventory items not found'
        };
      }

      const unavailableItems = inventoryItems.filter(item => item.status !== 'AVAILABLE');
      if (unavailableItems.length > 0) {
        return {
          status: 'error',
          errorCode: 'ITEMS_NOT_AVAILABLE',
          message: 'One or more items are not available'
        };
      }

      // Calculate total loan amount
      const loanAmount = totalAmount - downPayment;
      const totalInterest = interestRate ? (loanAmount * interestRate / 100) : 0;
      const totalRepayment = loanAmount + totalInterest;

      // Create loan sale order
      const salesOrder = await prisma.salesOrder.create({
        data: {
          tenantId,
          shopId,
          customerId,
          workPeriodId: workPeriod.id,
          orderNumber: `LOAN-${Date.now()}`,
          totalAmount,
          downPayment,
          loanAmount,
          interestRate: interestRate || 0,
          totalInterest,
          totalRepayment,
          numberOfInstallments,
          installmentAmount,
          status: 'ACTIVE_LOAN',
          createdById: userId
        }
      });

      // Create sales order items
      for (const item of items) {
        await prisma.salesOrderItem.create({
          data: {
            salesOrderId: salesOrder.id,
            productId: inventoryItems.find(i => i.id === item.inventoryItemId)?.productId || '',
            quantity: item.quantity,
            unitPrice: item.unitPrice,
            totalPrice: item.quantity * item.unitPrice
          }
        });

        // Update inventory item status to SOLD
        await prisma.inventoryItem.update({
          where: { id: item.inventoryItemId },
          data: { status: 'SOLD' }
        });
      }

      // Create payment schedule entries
      for (const payment of paymentSchedule) {
        await prisma.loanPayment.create({
          data: {
            salesOrderId: salesOrder.id,
            tenantId,
            shopId,
            dueDate: new Date(payment.dueDate),
            amount: payment.amount,
            status: 'PENDING'
          }
        });
      }

      // Log audit
      await prisma.auditLog.create({
        data: {
          tenantId,
          shopId,
          userId,
          action: 'PROCESS_LOAN_SALE',
          entityType: 'SalesOrder',
          entityId: salesOrder.id,
          changes: JSON.stringify({
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
          salesOrderId: salesOrder.id,
          orderNumber: salesOrder.orderNumber,
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
