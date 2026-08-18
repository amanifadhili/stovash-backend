import { ClientProxy } from '@nestjs/microservices';
import { ErrorCode, ICommandResponse } from '@electronic-shop/types';
import { francsToMinor, isoDay, sendFinanceCommand } from './commercial-finance.js';

export async function postPurchasePayableBooks(
  accountingClient: ClientProxy,
  purchase: { id: string; grandTotal: number; supplierName?: string | null; purchaseNumber?: string | null; purchaseDate?: Date | null },
  context: Record<string, unknown>,
): Promise<ICommandResponse<any>> {
  const amountMinor = francsToMinor(purchase.grandTotal);
  if (!amountMinor) {
    return {
      status: 'error',
      traceId: (context.traceId as string) || 'unknown',
      message: 'Purchase total must be a positive amount to post payable',
      errorCode: ErrorCode.VALIDATION_ERROR,
    };
  }
  return sendFinanceCommand(
    accountingClient,
    'PostPurchasePayable',
    {
      purchaseId: purchase.id,
      supplierName: purchase.supplierName || 'Supplier',
      amountMinor,
      occurredOn: isoDay(purchase.purchaseDate),
      description: `Purchase ${purchase.purchaseNumber || purchase.id}`,
    },
    context,
  );
}

export type PayableProjection = {
  amountOutstanding: number;
  amountPaid: number;
  paymentStatus: 'UNPAID' | 'PARTIALLY_PAID' | 'PAID';
};

/**
 * Phase 6: AP source of truth is the engine Obligation.
 * Purchase.amountOutstanding is a projection of GetReceivables(SUPPLIER_PAYABLE).
 */
export async function readPayableProjection(
  accountingClient: ClientProxy,
  purchase: { id: string; grandTotal: number },
  context: Record<string, unknown>,
): Promise<PayableProjection | null> {
  const result = await sendFinanceCommand(
    accountingClient,
    'GetReceivables',
    { sourceId: purchase.id, kind: 'SUPPLIER_PAYABLE' },
    context,
  );
  if (result.status === 'error') return null;
  const row = (result.data?.payables || []).find((r: any) => r.sourceId === purchase.id);
  const outstandingMinor = row?.outstandingMinor;
  if (typeof outstandingMinor !== 'string' && typeof outstandingMinor !== 'number') return null;
  const outstandingCents = Number(outstandingMinor);
  if (!Number.isFinite(outstandingCents) || outstandingCents < 0) return null;

  const amountOutstanding = Math.max(0, outstandingCents / 100);
  const amountPaid = Math.max(0, Number(purchase.grandTotal) - amountOutstanding);
  const paymentStatus: PayableProjection['paymentStatus'] =
    amountPaid <= 0 ? 'UNPAID' : amountOutstanding <= 0 ? 'PAID' : 'PARTIALLY_PAID';
  return { amountOutstanding, amountPaid, paymentStatus };
}
