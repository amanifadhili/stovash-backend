import { randomUUID } from 'node:crypto';
import { ErrorCode, ICommandResponse, IRequestContext } from '@electronic-shop/types';
import { prisma } from '../database/client.js';
import { writeFinancialTransaction } from '../financial-transaction/post-financial-transaction.js';
import { serializeFinancialTransaction } from '../financial-transaction/serialize.js';
import { parseAmountMinor, parseOccurredOn, requireNonEmptyString } from '../financial-transaction/serialize.js';
import {
  ACCOUNT_PROFIT_RESERVE_BANK,
  GENERAL_EXPENSE_CATEGORY_BY_CODE,
  GeneralExpenseCategoryCode,
} from './chart.js';
import { ensureEngineChart } from './ensure-chart.js';
import { postEngineJournal, UnbalancedJournalError } from './post-journal.js';
import { serializeJournal } from './serialize.js';

export interface RecordGeneralExpensePayload {
  category: GeneralExpenseCategoryCode;
  amountMinor: number | string;
  occurredOn: string;
  paidTo?: string;
  notes?: string;
  idempotencyKey?: string;
}

export async function recordGeneralExpense(
  payload: RecordGeneralExpensePayload,
  context?: IRequestContext,
): Promise<ICommandResponse<any>> {
  const traceId = context?.traceId || 'unknown';
  const tenantId = context?.tenantId;
  const shopId = context?.shopId;
  const userId = context?.userId || 'system';

  if (!tenantId || !shopId) {
    return { status: 'error', traceId, message: 'tenantId and shopId are required', errorCode: ErrorCode.VALIDATION_ERROR };
  }

  const category = GENERAL_EXPENSE_CATEGORY_BY_CODE[payload?.category as GeneralExpenseCategoryCode];
  if (!category) {
    return { status: 'error', traceId, message: 'Unknown expense category', errorCode: ErrorCode.VALIDATION_ERROR };
  }

  const amountMinor = parseAmountMinor(payload?.amountMinor);
  const occurredOn = parseOccurredOn(payload?.occurredOn);
  if (amountMinor === null || !occurredOn) {
    return {
      status: 'error',
      traceId,
      message: 'amountMinor must be a positive integer (RWF cents) and occurredOn must be YYYY-MM-DD',
      errorCode: ErrorCode.VALIDATION_ERROR,
    };
  }

  const paidTo = payload?.paidTo ? requireNonEmptyString(payload.paidTo, 120) : null;
  const notes = payload?.notes ? requireNonEmptyString(payload.notes, 500) : null;
  const description = [`General expense — ${category.label}`, paidTo ? `to ${paidTo}` : null, notes]
    .filter(Boolean)
    .join(' · ');
  const sourceId = payload?.idempotencyKey || randomUUID();
  const idempotencyKey = `RecordGeneralExpense:${sourceId}`;

  try {
    await ensureEngineChart(tenantId, shopId);

    const result = await prisma.$transaction(async (tx) => {
      const written = await writeFinancialTransaction(
        tx,
        {
          type: 'GENERAL_EXPENSE',
          occurredOn: payload.occurredOn,
          amountMinor: amountMinor.toString(),
          currency: 'RWF',
          sourceDomain: 'accounting',
          sourceCommand: 'RecordGeneralExpense',
          sourceId,
          idempotencyKey,
          description,
          metadata: {
            category: category.code,
            paidFrom: 'PROFIT_RESERVE_BANK',
            cashMovement: 'deferred-until-phase-5',
          },
        },
        context,
      );
      if (written.ok === false) {
        throw Object.assign(new Error(written.response.message), { response: written.response });
      }

      const journal = await postEngineJournal(tx, {
        tenantId,
        shopId,
        financialTransactionId: written.row.id,
        description,
        postedBy: userId,
        occurredOn,
        lines: [
          { accountCode: category.accountCode, side: 'DEBIT', amountMinor },
          { accountCode: ACCOUNT_PROFIT_RESERVE_BANK, side: 'CREDIT', amountMinor },
        ],
      });

      if (!written.replay) {
        await tx.auditLog.create({
          data: {
            tenantId,
            shopId,
            userId,
            action: 'RecordGeneralExpense',
            resource: 'PostedJournal',
            resourceId: journal.id,
            traceId,
            details: JSON.stringify({ category: category.code, amountMinor: amountMinor.toString() }),
          },
        });
      }

      return { written, journal, category };
    });

    return {
      status: 'success',
      traceId,
      data: {
        id: result.journal.id,
        financialTransaction: {
          ...serializeFinancialTransaction(result.written.row),
          existingIfReplay: result.written.replay,
        },
        category: result.category.code,
        categoryLabel: result.category.label,
        paidFrom: 'Profit Reserve Bank',
        cashMovement: 'ACCOUNTING_ONLY',
        amountMinor: amountMinor.toString(),
        journal: serializeJournal(result.journal),
      },
    };
  } catch (error: any) {
    if (error?.response) return error.response;
    if (error instanceof UnbalancedJournalError) {
      return { status: 'error', traceId, message: error.message, errorCode: ErrorCode.BUSINESS_RULE_VIOLATION };
    }
    if (error?.code === 'P2002') {
      const existing = await prisma.financialTransaction.findUnique({
        where: { tenantId_idempotencyKey: { tenantId, idempotencyKey } },
      });
      const journal = existing
        ? await prisma.postedJournal.findUnique({
            where: { financialTransactionId: existing.id },
            include: { lines: { include: { account: true } } },
          })
        : null;
      if (existing && journal) {
        return {
          status: 'success',
          traceId,
          data: {
            id: journal.id,
            financialTransaction: {
              ...serializeFinancialTransaction(existing),
              existingIfReplay: true,
            },
            category: category.code,
            categoryLabel: category.label,
            paidFrom: 'Profit Reserve Bank',
            cashMovement: 'ACCOUNTING_ONLY',
            amountMinor: existing.amountMinor.toString(),
            journal: serializeJournal(journal),
          },
        };
      }
    }
    return {
      status: 'error',
      traceId,
      message: error?.message || 'Failed to record general expense',
      errorCode: error?.code || ErrorCode.INTERNAL_ERROR,
    };
  }
}
