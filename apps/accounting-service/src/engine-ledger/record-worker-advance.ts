import { randomUUID } from 'node:crypto';
import { ErrorCode, ICommandResponse, IRequestContext } from '@electronic-shop/types';
import { prisma } from '../database/client.js';
import { writeFinancialTransaction } from '../financial-transaction/post-financial-transaction.js';
import { serializeFinancialTransaction } from '../financial-transaction/serialize.js';
import { parseAmountMinor, parseOccurredOn, requireNonEmptyString } from '../financial-transaction/serialize.js';
import { ACCOUNT_PETTY_CASH, ACCOUNT_WORKER_ADVANCE } from './chart.js';
import { ensureEngineChart } from './ensure-chart.js';
import { postEngineJournal, UnbalancedJournalError } from './post-journal.js';
import { serializeJournal } from './serialize.js';

export interface RecordWorkerAdvancePayload {
  workerName: string;
  amountMinor: number | string;
  occurredOn: string;
  notes?: string;
  idempotencyKey?: string;
}

export async function recordWorkerAdvance(
  payload: RecordWorkerAdvancePayload,
  context?: IRequestContext,
): Promise<ICommandResponse<any>> {
  const traceId = context?.traceId || 'unknown';
  const tenantId = context?.tenantId;
  const shopId = context?.shopId;
  const userId = context?.userId || 'system';

  if (!tenantId || !shopId) {
    return { status: 'error', traceId, message: 'tenantId and shopId are required', errorCode: ErrorCode.VALIDATION_ERROR };
  }

  const workerName = requireNonEmptyString(payload?.workerName, 120);
  const amountMinor = parseAmountMinor(payload?.amountMinor);
  const occurredOn = parseOccurredOn(payload?.occurredOn);
  if (!workerName || amountMinor === null || !occurredOn) {
    return {
      status: 'error',
      traceId,
      message: 'workerName, positive amountMinor (RWF cents), and occurredOn are required',
      errorCode: ErrorCode.VALIDATION_ERROR,
    };
  }

  const notes = payload?.notes ? requireNonEmptyString(payload.notes, 500) : null;
  const description = [`Worker advance — ${workerName}`, notes].filter(Boolean).join(' · ');
  const sourceId = payload?.idempotencyKey || randomUUID();
  const idempotencyKey = `RecordWorkerAdvance:${sourceId}`;

  try {
    await ensureEngineChart(tenantId, shopId);

    const result = await prisma.$transaction(async (tx) => {
      const written = await writeFinancialTransaction(
        tx,
        {
          type: 'WORKER_ADVANCE',
          occurredOn: payload.occurredOn,
          amountMinor: amountMinor.toString(),
          currency: 'RWF',
          sourceDomain: 'accounting',
          sourceCommand: 'RecordWorkerAdvance',
          sourceId,
          idempotencyKey,
          description,
          metadata: { workerName, cashMovement: 'deferred-until-phase-5' },
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
          { accountCode: ACCOUNT_WORKER_ADVANCE, side: 'DEBIT', amountMinor },
          { accountCode: ACCOUNT_PETTY_CASH, side: 'CREDIT', amountMinor },
        ],
      });

      let obligation = await tx.obligation.findFirst({
        where: { financialTransactionId: written.row.id },
      });
      if (!obligation) {
        obligation = await tx.obligation.create({
          data: {
            tenantId,
            shopId,
            kind: 'WORKER_ADVANCE',
            partyName: workerName,
            outstandingMinor: amountMinor,
            financialTransactionId: written.row.id,
            status: 'OPEN',
          },
        });
      }

      if (!written.replay) {
        await tx.auditLog.create({
          data: {
            tenantId,
            shopId,
            userId,
            action: 'RecordWorkerAdvance',
            resource: 'Obligation',
            resourceId: obligation.id,
            traceId,
            details: JSON.stringify({ workerName, amountMinor: amountMinor.toString() }),
          },
        });
      }

      return { written, journal, obligation };
    });

    return {
      status: 'success',
      traceId,
      data: {
        id: result.obligation.id,
        kind: 'WORKER_ADVANCE',
        partyName: result.obligation.partyName,
        outstandingMinor: result.obligation.outstandingMinor.toString(),
        isExpense: false,
        cashMovement: 'ACCOUNTING_ONLY',
        financialTransaction: {
          ...serializeFinancialTransaction(result.written.row),
          existingIfReplay: result.written.replay,
        },
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
      const obligation = existing
        ? await prisma.obligation.findFirst({ where: { financialTransactionId: existing.id } })
        : null;
      if (existing && journal && obligation) {
        return {
          status: 'success',
          traceId,
          data: {
            id: obligation.id,
            kind: 'WORKER_ADVANCE',
            partyName: obligation.partyName,
            outstandingMinor: obligation.outstandingMinor.toString(),
            isExpense: false,
            cashMovement: 'ACCOUNTING_ONLY',
            financialTransaction: {
              ...serializeFinancialTransaction(existing),
              existingIfReplay: true,
            },
            journal: serializeJournal(journal),
          },
        };
      }
    }
    return {
      status: 'error',
      traceId,
      message: error?.message || 'Failed to record worker advance',
      errorCode: error?.code || ErrorCode.INTERNAL_ERROR,
    };
  }
}
