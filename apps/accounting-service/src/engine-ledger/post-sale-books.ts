import { ErrorCode, ICommandResponse, IRequestContext } from '@electronic-shop/types';
import { prisma } from '../database/client.js';
import { writeFinancialTransaction } from '../financial-transaction/post-financial-transaction.js';
import { serializeFinancialTransaction } from '../financial-transaction/serialize.js';
import { parseAmountMinor, parseOccurredOn, requireNonEmptyString } from '../financial-transaction/serialize.js';
import {
  ACCOUNT_COGS,
  ACCOUNT_CUSTOMER_RECEIVABLE,
  ACCOUNT_INVENTORY,
  ACCOUNT_SALES_REVENUE,
} from './chart.js';
import { ensureEngineChart } from './ensure-chart.js';
import { postEngineJournal, UnbalancedJournalError } from './post-journal.js';
import { serializeJournal } from './serialize.js';

export interface PostSaleConfirmationPayload {
  saleId: string;
  customerName?: string;
  revenueMinor: number | string;
  cogsMinor?: number | string;
  occurredOn: string;
  description?: string;
}

export async function postSaleConfirmation(
  payload: PostSaleConfirmationPayload,
  context?: IRequestContext,
): Promise<ICommandResponse<any>> {
  const traceId = context?.traceId || 'unknown';
  const tenantId = context?.tenantId;
  const shopId = context?.shopId;
  const userId = context?.userId || 'system';

  if (!tenantId || !shopId) {
    return { status: 'error', traceId, message: 'tenantId and shopId are required', errorCode: ErrorCode.VALIDATION_ERROR };
  }

  const saleId = requireNonEmptyString(payload?.saleId, 80);
  const revenueMinor = parseAmountMinor(payload?.revenueMinor);
  const occurredOn = parseOccurredOn(payload?.occurredOn);
  if (!saleId || revenueMinor === null || !occurredOn) {
    return {
      status: 'error',
      traceId,
      message: 'saleId, positive revenueMinor (RWF cents), and occurredOn are required',
      errorCode: ErrorCode.VALIDATION_ERROR,
    };
  }

  let cogsMinor = 0n;
  if (payload?.cogsMinor !== undefined && payload?.cogsMinor !== null && payload?.cogsMinor !== '' && Number(payload.cogsMinor) !== 0) {
    const parsed = parseAmountMinor(payload.cogsMinor);
    if (parsed === null) {
      return {
        status: 'error',
        traceId,
        message: 'cogsMinor must be a positive integer (RWF cents) when provided',
        errorCode: ErrorCode.VALIDATION_ERROR,
      };
    }
    cogsMinor = parsed;
  }

  const partyName = requireNonEmptyString(payload?.customerName, 120) || 'Walk-in Customer';
  const description = payload?.description || `Sale ${saleId}`;

  try {
    await ensureEngineChart(tenantId, shopId);

    const result = await prisma.$transaction(async (tx) => {
      const revenueWritten = await writeFinancialTransaction(
        tx,
        {
          type: 'SALE_REVENUE',
          occurredOn: payload.occurredOn,
          amountMinor: revenueMinor.toString(),
          currency: 'RWF',
          sourceDomain: 'sales',
          sourceCommand: 'ConfirmSale',
          sourceId: saleId,
          idempotencyKey: `ConfirmSale:SALE_REVENUE:${saleId}`,
          description: `${description} · revenue`,
          metadata: { saleId, customerName: partyName },
        },
        context,
      );
      if (revenueWritten.ok === false) {
        throw Object.assign(new Error(revenueWritten.response.message), { response: revenueWritten.response });
      }

      const revenueJournal = await postEngineJournal(tx, {
        tenantId,
        shopId,
        financialTransactionId: revenueWritten.row.id,
        description: `${description} · revenue`,
        postedBy: userId,
        occurredOn,
        lines: [
          { accountCode: ACCOUNT_CUSTOMER_RECEIVABLE, side: 'DEBIT', amountMinor: revenueMinor },
          { accountCode: ACCOUNT_SALES_REVENUE, side: 'CREDIT', amountMinor: revenueMinor },
        ],
      });

      let obligation = await tx.obligation.findFirst({
        where: { financialTransactionId: revenueWritten.row.id, kind: 'CUSTOMER_RECEIVABLE' },
      });
      if (!obligation) {
        obligation = await tx.obligation.create({
          data: {
            tenantId,
            shopId,
            kind: 'CUSTOMER_RECEIVABLE',
            partyName,
            outstandingMinor: revenueMinor,
            financialTransactionId: revenueWritten.row.id,
            status: 'OPEN',
          },
        });
      }

      let cogsWritten: { ok: true; row: any; replay: boolean } | null = null;
      let cogsJournal: any = null;
      if (cogsMinor > 0n) {
        const written = await writeFinancialTransaction(
          tx,
          {
            type: 'SALE_COGS',
            occurredOn: payload.occurredOn,
            amountMinor: cogsMinor.toString(),
            currency: 'RWF',
            sourceDomain: 'sales',
            sourceCommand: 'ConfirmSale',
            sourceId: saleId,
            idempotencyKey: `ConfirmSale:SALE_COGS:${saleId}`,
            description: `${description} · COGS`,
            metadata: { saleId },
          },
          context,
        );
        if (written.ok === false) {
          throw Object.assign(new Error(written.response.message), { response: written.response });
        }
        cogsWritten = written;
        cogsJournal = await postEngineJournal(tx, {
          tenantId,
          shopId,
          financialTransactionId: written.row.id,
          description: `${description} · COGS`,
          postedBy: userId,
          occurredOn,
          lines: [
            { accountCode: ACCOUNT_COGS, side: 'DEBIT', amountMinor: cogsMinor },
            { accountCode: ACCOUNT_INVENTORY, side: 'CREDIT', amountMinor: cogsMinor },
          ],
        });
      }

      const profitMinor = revenueMinor > cogsMinor ? revenueMinor - cogsMinor : 0n;
      if (!revenueWritten.replay && profitMinor > 0n) {
        await tx.profitAllocation.upsert({
          where: { tenantId_shopId: { tenantId, shopId } },
          create: { tenantId, shopId, earnedMinor: profitMinor, transferredMinor: 0n },
          update: { earnedMinor: { increment: profitMinor } },
        });
      }

      return { revenueWritten, revenueJournal, cogsWritten, cogsJournal, obligation, profitMinor };
    });

    const allocation = await prisma.profitAllocation.findUnique({
      where: { tenantId_shopId: { tenantId, shopId } },
    });

    return {
      status: 'success',
      traceId,
      data: {
        saleId,
        financialTransaction: {
          ...serializeFinancialTransaction(result.revenueWritten.row),
          existingIfReplay: result.revenueWritten.replay,
        },
        cogsFinancialTransaction: result.cogsWritten
          ? {
              ...serializeFinancialTransaction(result.cogsWritten.row),
              existingIfReplay: result.cogsWritten.replay,
            }
          : null,
        revenueJournal: serializeJournal(result.revenueJournal),
        cogsJournal: result.cogsJournal ? serializeJournal(result.cogsJournal) : null,
        receivable: {
          id: result.obligation.id,
          outstandingMinor: result.obligation.outstandingMinor.toString(),
        },
        profitEarnedMinor: result.profitMinor.toString(),
        profitAllocation: {
          earnedMinor: (allocation?.earnedMinor ?? 0n).toString(),
          transferredMinor: (allocation?.transferredMinor ?? 0n).toString(),
        },
      },
    };
  } catch (error: any) {
    if (error?.response) return error.response;
    if (error instanceof UnbalancedJournalError) {
      return { status: 'error', traceId, message: error.message, errorCode: ErrorCode.BUSINESS_RULE_VIOLATION };
    }
    return {
      status: 'error',
      traceId,
      message: error?.message || 'Failed to post sale confirmation books',
      errorCode: error?.code || ErrorCode.INTERNAL_ERROR,
    };
  }
}
