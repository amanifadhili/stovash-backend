import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { RecordExpenseCommand } from '../impl/record-expense.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';
import {
  EXPENSE_CATEGORY_BY_CODE,
  PAYMENT_ACCOUNTS,
  ExpenseCategoryCode,
} from '../../expenses/expense-catalog.js';

async function getOrCreateAccount(
  tx: any,
  tenantId: string,
  shopId: string,
  code: string,
  name: string,
  type: string,
) {
  let account = await tx.ledgerAccount.findFirst({
    where: { tenantId, shopId, code },
  });
  if (!account) {
    account = await tx.ledgerAccount.create({
      data: { tenantId, shopId, code, name, type, balance: 0 },
    });
  }
  return account;
}

@CommandHandler(RecordExpenseCommand)
export class RecordExpenseHandler extends BaseCommandHandler<RecordExpenseCommand> {
  async execute(command: RecordExpenseCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';
    const tenantId = context?.tenantId;
    const shopId = context?.shopId;
    const userId = context?.userId || 'system';

    try {
      if (!tenantId || !shopId) {
        return {
          status: 'error',
          traceId,
          message: 'tenantId and shopId are required',
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }

      const category = EXPENSE_CATEGORY_BY_CODE[payload?.category as ExpenseCategoryCode];
      if (!category) {
        return {
          status: 'error',
          traceId,
          message: 'Unknown expense category',
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }

      const amount = Number(payload.amount);
      if (!Number.isFinite(amount) || amount <= 0) {
        return {
          status: 'error',
          traceId,
          message: 'Amount must be greater than 0',
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }

      const pay = PAYMENT_ACCOUNTS[payload.paymentMethod];
      if (!pay) {
        return {
          status: 'error',
          traceId,
          message: 'paymentMethod must be CASH, MOMO, BANK, or CARD',
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }

      const paidTo = (payload.paidTo || '').trim();
      const notes = (payload.notes || '').trim();
      const description = [
        `Expense — ${category.label}`,
        paidTo ? `to ${paidTo}` : null,
        notes,
      ]
        .filter(Boolean)
        .join(' · ');

      const result = await prisma.$transaction(async (tx) => {
        let workPeriod = await tx.workPeriod.findFirst({
          where: { shopId, status: 'OPEN' },
          orderBy: { openedAt: 'desc' },
        });
        if (!workPeriod) {
          workPeriod = await tx.workPeriod.create({
            data: {
              tenantId,
              shopId,
              openedBy: userId,
              createdBy: userId,
              status: 'OPEN',
            },
          });
        }
        const expenseAccount = await getOrCreateAccount(
          tx,
          tenantId,
          shopId,
          category.accountCode,
          category.accountName,
          'EXPENSE',
        );
        const cashAccount = await getOrCreateAccount(
          tx,
          tenantId,
          shopId,
          pay.code,
          pay.name,
          'ASSET',
        );

        const journalEntry = await tx.journalEntry.create({
          data: {
            tenantId,
            shopId,
            workPeriodId: workPeriod.id,
            description,
            postedBy: userId,
            status: 'POSTED',
            entries: {
              create: [
                { accountId: expenseAccount.id, type: 'DEBIT', amount },
                { accountId: cashAccount.id, type: 'CREDIT', amount },
              ],
            },
          },
        });

        await tx.ledgerAccount.update({
          where: { id: expenseAccount.id },
          data: { balance: { increment: amount } },
        });
        await tx.ledgerAccount.update({
          where: { id: cashAccount.id },
          data: { balance: { decrement: amount } },
        });
        await tx.workPeriod.update({
          where: { id: workPeriod.id },
          data: { totalExpense: { increment: amount } },
        });

        return {
          id: journalEntry.id,
          category: category.code,
          categoryLabel: category.label,
          amount,
          paymentMethod: payload.paymentMethod,
          paidTo: paidTo || null,
          notes: notes || null,
          description,
          workPeriodId: workPeriod.id,
        };
      });

      try {
        await prisma.auditLog.create({
          data: {
            tenantId,
            shopId,
            userId,
            action: 'RecordExpense',
            resource: 'JournalEntry',
            resourceId: result.id,
            traceId,
            details: JSON.stringify({
              category: category.code,
              amount,
              paymentMethod: payload.paymentMethod,
            }),
          },
        });
      } catch (auditError) {
        console.error('Failed to log audit action:', auditError);
      }

      return { status: 'success', traceId, data: result };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to record expense',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}
