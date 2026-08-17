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
