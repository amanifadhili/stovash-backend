import { ErrorCode, ICommandResponse, IRequestContext } from '@electronic-shop/types';
import { prisma } from '../database/client.js';
import { writeFinancialTransaction } from '../financial-transaction/post-financial-transaction.js';
import { serializeFinancialTransaction } from '../financial-transaction/serialize.js';
import { parseAmountMinor, parseOccurredOn, requireNonEmptyString } from '../financial-transaction/serialize.js';
import { ACCOUNT_INVENTORY, ACCOUNT_SUPPLIER_PAYABLE } from './chart.js';
import { ensureEngineChart } from './ensure-chart.js';
import { postEngineJournal, UnbalancedJournalError } from './post-journal.js';
import { serializeJournal } from './serialize.js';

export interface PostPurchasePayablePayload {
  purchaseId: string;
  supplierName?: string;
  amountMinor: number | string;
  occurredOn: string;
  description?: string;
}

export async function postPurchasePayable(
  payload: PostPurchasePayablePayload,
  context?: IRequestContext,
): Promise<ICommandResponse<any>> {
  const traceId = context?.traceId || 'unknown';
  const tenantId = context?.tenantId;
  const shopId = context?.shopId;
  const userId = context?.userId || 'system';

  if (!tenantId || !shopId) {
    return { status: 'error', traceId, message: 'tenantId and shopId are required', errorCode: ErrorCode.VALIDATION_ERROR };
  }

  const purchaseId = requireNonEmptyString(payload?.purchaseId, 80);
  const amountMinor = parseAmountMinor(payload?.amountMinor);
  const occurredOn = parseOccurredOn(payload?.occurredOn);
  if (!purchaseId || amountMinor === null || !occurredOn) {
    return {
      status: 'error',
      traceId,
      message: 'purchaseId, positive amountMinor (RWF cents), and occurredOn are required',
      errorCode: ErrorCode.VALIDATION_ERROR,
    };
  }

  const partyName = requireNonEmptyString(payload?.supplierName, 120) || 'Supplier';
  const description = payload?.description || `Purchase ${purchaseId}`;

  try {
    await ensureEngineChart(tenantId, shopId);

    const result = await prisma.$transaction(async (tx) => {
      const written = await writeFinancialTransaction(
        tx,
        {
          type: 'PURCHASE_PAYABLE',
          occurredOn: payload.occurredOn,
          amountMinor: amountMinor.toString(),
          currency: 'RWF',
          sourceDomain: 'purchase',
          sourceCommand: 'ConfirmPurchase',
          sourceId: purchaseId,
          idempotencyKey: `ConfirmPurchase:PURCHASE_PAYABLE:${purchaseId}`,
          description,
          metadata: { purchaseId, supplierName: partyName },
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
          { accountCode: ACCOUNT_INVENTORY, side: 'DEBIT', amountMinor },
          { accountCode: ACCOUNT_SUPPLIER_PAYABLE, side: 'CREDIT', amountMinor },
        ],
      });

      let obligation = await tx.obligation.findFirst({
        where: { financialTransactionId: written.row.id, kind: 'SUPPLIER_PAYABLE' },
      });
      if (!obligation) {
        obligation = await tx.obligation.create({
          data: {
            tenantId,
            shopId,
            kind: 'SUPPLIER_PAYABLE',
            partyName,
            outstandingMinor: amountMinor,
            financialTransactionId: written.row.id,
            status: 'OPEN',
          },
        });
      }

      return { written, journal, obligation };
    });

    return {
      status: 'success',
      traceId,
      data: {
        purchaseId,
        financialTransaction: {
          ...serializeFinancialTransaction(result.written.row),
          existingIfReplay: result.written.replay,
        },
        journal: serializeJournal(result.journal),
        payable: {
          id: result.obligation.id,
          outstandingMinor: result.obligation.outstandingMinor.toString(),
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
      message: error?.message || 'Failed to post purchase payable',
      errorCode: error?.code || ErrorCode.INTERNAL_ERROR,
    };
  }
}
