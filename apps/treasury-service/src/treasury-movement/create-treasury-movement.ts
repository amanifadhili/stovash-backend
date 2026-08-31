import { randomUUID } from 'node:crypto';
import { ErrorCode, ICommandResponse, IRequestContext } from '@electronic-shop/types';
import { prisma as defaultPrisma } from '../database/client.js';
import { ensureFinancialStructure } from '../financial-structure/bootstrap.js';
import { LogicalFundCode } from '../financial-structure/types.js';
import { balanceOf, derivedBalances } from './balances.js';
import { parseAmountMinor, parseOccurredOn, requireNonEmptyString } from './money.js';
import { calendarLockMessage, isLockExemptType, toCalendarIso } from './calendar.js';
import { refreshPeriodSnapshots } from './period-snapshots.js';
import {
  CreateTreasuryMovementPayload,
  FINANCIAL_TYPE_FOR_MOVEMENT,
  TREASURY_MOVEMENT_TYPE_SET,
  TreasuryBooksClient,
  TreasuryMovementType,
} from './types.js';

type Db = typeof defaultPrisma;

function err(traceId: string, message: string, errorCode: ErrorCode): ICommandResponse<any> {
  return { status: 'error', traceId, message, errorCode };
}

export async function createTreasuryMovement(
  payload: CreateTreasuryMovementPayload,
  context?: IRequestContext,
  books?: TreasuryBooksClient,
  db: Db = defaultPrisma,
): Promise<ICommandResponse<any>> {
  const traceId = context?.traceId || 'unknown';
  const tenantId = context?.tenantId;
  const shopId = context?.shopId;
  const userId = context?.userId || 'system';

  if (!tenantId || !shopId) return err(traceId, 'tenantId and shopId are required', ErrorCode.VALIDATION_ERROR);
  if (!books) return err(traceId, 'Accounting books client is required', ErrorCode.INTERNAL_ERROR);

  const movementType = payload?.movementType as TreasuryMovementType;
  if (!movementType || !TREASURY_MOVEMENT_TYPE_SET.has(movementType)) {
    return err(
      traceId,
      'movementType is required. Generic Transfer is not allowed.',
      ErrorCode.VALIDATION_ERROR,
    );
  }

  const amountMinorParsed = parseAmountMinor(payload?.amountMinor);
  const occurredOn = parseOccurredOn(payload?.occurredOn);
  if (!occurredOn) {
    return err(
      traceId,
      'occurredOn must be YYYY-MM-DD',
      ErrorCode.VALIDATION_ERROR,
    );
  }

  const sourceId = payload?.idempotencyKey || randomUUID();
  const idempotencyKey = `CreateTreasuryMovement:${movementType}:${sourceId}`;

  try {
    await ensureFinancialStructure(tenantId, shopId, userId, db);

    const existing = await db.treasuryMovement.findUnique({
      where: { tenantId_idempotencyKey: { tenantId, idempotencyKey } },
    });
    if (existing) {
      return { status: 'success', traceId, data: serializeMovement(existing, true) };
    }

    const lockMessage = calendarLockMessage(toCalendarIso(occurredOn), movementType);
    if (lockMessage) {
      return err(traceId, lockMessage, ErrorCode.BUSINESS_RULE_VIOLATION);
    }

    const accounts = await db.physicalAccount.findMany({
      where: { tenantId, shopId, isActive: true },
      include: { fund: true },
    });
    const byId = new Map(accounts.map((a) => [a.id, a]));
    let from = payload.fromPhysicalId ? byId.get(payload.fromPhysicalId) : null;
    let to = payload.toPhysicalId ? byId.get(payload.toPhysicalId) : null;
    if (payload.fromPhysicalId && !isLockExemptType(movementType) && !from) {
      return err(traceId, 'Unknown source account', ErrorCode.VALIDATION_ERROR);
    }
    if (payload.toPhysicalId && !isLockExemptType(movementType) && !to) {
      return err(traceId, 'Unknown destination account', ErrorCode.VALIDATION_ERROR);
    }
    if (!from && payload.fromKind) {
      from = accounts.find((a) => a.kind === payload.fromKind) ?? null;
    }
    if (!to && payload.toKind) {
      to = accounts.find((a) => a.kind === payload.toKind) ?? null;
    }

    let originalMovement: any = null;
    let amountMinor = amountMinorParsed;
    let originalFinancialType: string | null = null;

    if (isLockExemptType(movementType)) {
      const reason = requireNonEmptyString(payload?.reason, 500);
      const originalId = requireNonEmptyString(payload?.originalMovementId, 64);
      if (!reason || !originalId) {
        return err(traceId, 'CORRECTION and REVERSAL require originalMovementId and a reason', ErrorCode.VALIDATION_ERROR);
      }
      originalMovement = await db.treasuryMovement.findFirst({
        where: { id: originalId, tenantId, shopId },
      });
      if (!originalMovement) return err(traceId, 'Original treasury movement not found', ErrorCode.NOT_FOUND);
      from = originalMovement.fromPhysicalId ? byId.get(originalMovement.fromPhysicalId) ?? null : null;
      to = originalMovement.toPhysicalId ? byId.get(originalMovement.toPhysicalId) ?? null : null;
      if (movementType === 'REVERSAL') {
        const swappedFrom = to;
        const swappedTo = from;
        from = swappedFrom;
        to = swappedTo;
        amountMinor = originalMovement.amountMinor;
      } else if (amountMinor === null) {
        return err(traceId, 'amountMinor must be a positive integer (RWF cents)', ErrorCode.VALIDATION_ERROR);
      }
      originalFinancialType = FINANCIAL_TYPE_FOR_MOVEMENT[originalMovement.movementType as TreasuryMovementType] || originalMovement.movementType;
    } else if (amountMinor === null) {
      return err(
        traceId,
        'amountMinor must be a positive integer (RWF cents) and occurredOn must be YYYY-MM-DD',
        ErrorCode.VALIDATION_ERROR,
      );
    }

    if (payload.fromPhysicalId && !isLockExemptType(movementType) && !from) {
      return err(traceId, 'Unknown source account', ErrorCode.VALIDATION_ERROR);
    }
    if (payload.toPhysicalId && !isLockExemptType(movementType) && !to) {
      return err(traceId, 'Unknown destination account', ErrorCode.VALIDATION_ERROR);
    }

    if (!isLockExemptType(movementType)) {
      const rule = validateType(movementType, from, to, payload);
      if (rule) return err(traceId, rule, ErrorCode.BUSINESS_RULE_VIOLATION);
    }

    if (amountMinor === null) {
      return err(traceId, 'amountMinor must be a positive integer (RWF cents)', ErrorCode.VALIDATION_ERROR);
    }

    const balances = await derivedBalances(tenantId, shopId, db);
    if (from) {
      const available = balanceOf(balances, from.id);
      if (available < amountMinor) {
        const have = Number(available) / 100;
        const need = Number(amountMinor) / 100;
        const accountName = from.name || from.kind;
        const capitalHint =
          from.fund?.code === 'OPERATIONAL' && available === 0n
            ? ' Owner capital sits in Capital Bank — transfer it to Cash, MoMo, or Bank before buying.'
            : '';
        return err(
          traceId,
          `Insufficient funds on ${accountName}: have ${have} RWF, need ${need} RWF.${capitalHint}`,
          ErrorCode.BUSINESS_RULE_VIOLATION,
        );
      }
    }

    if (movementType === 'PROFIT_TRANSFER') {
      const opsLiquidity = accounts
        .filter((a) => a.fund.code === 'OPERATIONAL')
        .reduce((sum, a) => sum + balanceOf(balances, a.id), 0n);
      if (amountMinor > opsLiquidity) {
        return err(
          traceId,
          'Profit transfer blocked: Operational cash is less than the requested amount',
          ErrorCode.BUSINESS_RULE_VIOLATION,
        );
      }
      const allocation = await books.getAllocation(context);
      const untransferred = BigInt(allocation.untransferredMinor || '0');
      if (amountMinor > untransferred) {
        return err(traceId, 'Profit transfer exceeds untransferred profit', ErrorCode.BUSINESS_RULE_VIOLATION);
      }
    }

    let loan: any = null;
    if (movementType === 'INTERNAL_LOAN_REPAY' || movementType === 'EXTERNAL_LOAN_REPAY_PRINCIPAL') {
      if (!payload.loanId) return err(traceId, 'loanId is required to repay', ErrorCode.VALIDATION_ERROR);
      loan = await db.treasuryObligation.findFirst({
        where: { id: payload.loanId, tenantId, shopId, status: 'OPEN' },
      });
      if (!loan) return err(traceId, 'Open loan not found', ErrorCode.NOT_FOUND);
      if (amountMinor > loan.outstandingMinor) {
        return err(traceId, 'Repayment exceeds outstanding', ErrorCode.BUSINESS_RULE_VIOLATION);
      }
      if (movementType === 'INTERNAL_LOAN_REPAY' && to && loan.lenderFundCode !== to.fund.code) {
        return err(traceId, 'Repayment must return to the lending fund', ErrorCode.BUSINESS_RULE_VIOLATION);
      }
    }

    const financialType = FINANCIAL_TYPE_FOR_MOVEMENT[movementType];
    const booksResult = await books.postBooks(
      {
        type: financialType,
        occurredOn: payload.occurredOn,
        amountMinor: amountMinor.toString(),
        fromKind: from?.kind ?? null,
        toKind: to?.kind ?? null,
        reconDirection: payload.reconDirection,
        idempotencyKey: sourceId,
        description: descriptionFor(movementType, from?.name, to?.name, payload.counterpartyName),
        obligationSourceId: payload.obligationSourceId,
        originalType: originalFinancialType,
        originalTransactionId: originalMovement?.financialTransactionId,
        reason: payload.reason,
        expenseAccountCode: payload.expenseAccountCode,
        partyName: payload.partyName,
        obligationId: payload.obligationId,
      },
      context,
    );

    const created = await db.$transaction(async (tx) => {
      const movement = await tx.treasuryMovement.create({
        data: {
          tenantId,
          shopId,
          movementType,
          fromPhysicalId: from?.id ?? null,
          toPhysicalId: to?.id ?? null,
          amountMinor,
          financialTransactionId: booksResult.financialTransaction.id,
          journalId: booksResult.journal.id,
          occurredOn,
          idempotencyKey,
          reason: payload.reason ? requireNonEmptyString(payload.reason, 500) : null,
          notes: payload.notes ? requireNonEmptyString(payload.notes, 500) : null,
          originalMovementId: originalMovement?.id ?? null,
          createdBy: userId,
        },
      });

      if (movementType === 'INTERNAL_LOAN') {
        await tx.treasuryObligation.create({
          data: {
            tenantId,
            shopId,
            kind: 'INTERNAL_LOAN',
            lenderFundCode: from!.fund.code,
            borrowerFundCode: to!.fund.code,
            partyName: `${from!.fund.code} → ${to!.fund.code}`,
            outstandingMinor: amountMinor,
            financialTransactionId: booksResult.financialTransaction.id,
            status: 'OPEN',
          },
        });
      }

      if (movementType === 'EXTERNAL_LOAN') {
        const party = requireNonEmptyString(payload.counterpartyName, 120);
        if (!party) throw Object.assign(new Error('counterpartyName is required'), { errorCode: ErrorCode.VALIDATION_ERROR });
        await tx.treasuryObligation.create({
          data: {
            tenantId,
            shopId,
            kind: 'EXTERNAL_LOAN',
            lenderFundCode: null,
            borrowerFundCode: to!.fund.code,
            partyName: party,
            outstandingMinor: amountMinor,
            financialTransactionId: booksResult.financialTransaction.id,
            status: 'OPEN',
          },
        });
      }

      if (loan) {
        const next = loan.outstandingMinor - amountMinor;
        await tx.treasuryObligation.update({
          where: { id: loan.id },
          data: { outstandingMinor: next, status: next === 0n ? 'REPAID' : 'OPEN' },
        });
      }

      await tx.auditLog.create({
        data: {
          tenantId,
          shopId,
          userId,
          action: 'CreateTreasuryMovement',
          resource: 'TreasuryMovement',
          resourceId: movement.id,
          traceId,
          details: JSON.stringify({
            movementType,
            amountMinor: amountMinor.toString(),
            financialTransactionId: booksResult.financialTransaction.id,
          }),
        },
      });

      return movement;
    });

    await refreshPeriodSnapshots(tenantId, shopId, occurredOn, db);

    return { status: 'success', traceId, data: serializeMovement(created, false, booksResult.obligation?.id) };
  } catch (error: any) {
    if (error?.code === 'P2002') {
      const replay = await db.treasuryMovement.findUnique({
        where: { tenantId_idempotencyKey: { tenantId, idempotencyKey } },
      });
      if (replay) return { status: 'success', traceId, data: serializeMovement(replay, true) };
    }
    return err(
      traceId,
      error?.message || 'Failed to create treasury movement',
      error?.errorCode || error?.code || ErrorCode.INTERNAL_ERROR,
    );
  }
}

function validateType(
  type: TreasuryMovementType,
  from: { id: string; kind: string; fund: { code: string } } | null | undefined,
  to: { id: string; kind: string; fund: { code: string } } | null | undefined,
  payload: CreateTreasuryMovementPayload,
): string | null {
  const fromFund = from?.fund.code as LogicalFundCode | undefined;
  const toFund = to?.fund.code as LogicalFundCode | undefined;

  switch (type) {
    case 'OWNER_CAPITAL_IN':
      if (from || to?.kind !== 'CAPITAL_BANK') return 'OWNER_CAPITAL_IN credits Capital Bank only';
      return null;
    case 'OPENING_BALANCE_IN':
      if (from || !to) return 'OPENING_BALANCE_IN requires a destination physical account and no source account';
      return null;
    case 'INTERNAL_TRANSFER':
      if (!from || !to || from.id === to.id) return 'Internal transfer needs two different accounts';
      if (fromFund !== toFund) return 'INTERNAL_TRANSFER only moves money within the same fund';
      return null;
    case 'OPERATIONAL_CONSOLIDATION':
      if (!from || !to) return 'Consolidation needs a source and Operational Main Bank';
      if (fromFund !== 'OPERATIONAL' || to.kind !== 'OPS_MAIN_BANK') {
        return 'Consolidation is Cash/MoMo/other Operational → Main Bank (management confirm)';
      }
      return null;
    case 'PROFIT_TRANSFER':
      if (!from || !to || fromFund !== 'OPERATIONAL' || to.kind !== 'PROFIT_BANK') {
        return 'Profit transfer is Operational → Profit Reserve Bank';
      }
      return null;
    case 'CAPITAL_GROWTH':
      if (!from || !to || from.kind !== 'PROFIT_BANK' || toFund !== 'CAPITAL') {
        return 'Capital growth is Profit Reserve → Capital (not a loan)';
      }
      return null;
    case 'INTERNAL_LOAN':
      if (!from || !to) return 'Internal loan needs a source and an Operational destination';
      if (toFund !== 'OPERATIONAL') return 'Internal loan destination must be Operational';
      if (from.kind !== 'CAPITAL_BANK' && from.kind !== 'PROFIT_BANK') {
        return 'Internal loan source must be Capital Bank or Profit Reserve Bank (not Petty Cash)';
      }
      return null;
    case 'INTERNAL_LOAN_REPAY':
      if (!from || !to || fromFund !== 'OPERATIONAL') return 'Loan repayment is Operational → the lending fund';
      return null;
    case 'EXTERNAL_LOAN':
      if (from || !to) return 'External loan credits a chosen destination account';
      if (!requireNonEmptyString(payload.counterpartyName, 120)) return 'Lender name is required';
      return null;
    case 'EXTERNAL_LOAN_REPAY_PRINCIPAL':
    case 'EXTERNAL_LOAN_INTEREST':
      if (!from || to) return 'External repayment / interest leaves from a physical account';
      return null;
    case 'RECONCILIATION_ADJUSTMENT':
      if (!payload.reconDirection) return 'Reconciliation direction is required';
      if (payload.reconDirection === 'EXCESS' && (from || !to)) return 'Excess credits the counted account';
      if (payload.reconDirection === 'SHORTAGE' && (!from || to)) return 'Shortage debits the counted account';
      return null;
    case 'SALE_PAYMENT':
      if (from || !to || toFund !== 'OPERATIONAL') {
        return 'Sale payments credit an Operational physical account';
      }
      if (!payload.obligationSourceId) return 'Sale payment requires the sale id';
      return null;
    case 'SALE_REFUND':
      if (!from || to || fromFund !== 'OPERATIONAL') {
        return 'Sale refunds leave an Operational physical account';
      }
      if (!payload.obligationSourceId) return 'Sale refund requires the sale id';
      if (!requireNonEmptyString(payload.reason, 500)) return 'Sale refund requires a reason';
      return null;
    case 'PURCHASE_PAYMENT':
      if (!from || to || fromFund !== 'OPERATIONAL') {
        return 'Purchase payments leave an Operational physical account';
      }
      if (!payload.obligationSourceId) return 'Purchase payment requires the purchase id';
      return null;
    case 'INVENTORY_CAPITALIZE':
      if (!from || to || fromFund !== 'OPERATIONAL') {
        return 'Unit expense payments leave an Operational physical account';
      }
      if (!payload.obligationSourceId) return 'Unit expense requires the inventory item id';
      return null;
    case 'GENERAL_EXPENSE_FUNDING':
      if (!from || !to || from.kind !== 'PROFIT_BANK' || toFund !== 'OPERATIONAL') {
        return 'General expense funding is Profit Reserve Bank → Operational (not a loan)';
      }
      return null;
    case 'GENERAL_EXPENSE_PAYOUT':
      if (!from || to || fromFund !== 'OPERATIONAL') {
        return 'General expense payout leaves Operational to the payee';
      }
      if (!payload.expenseAccountCode) return 'General expense payout requires an expense account';
      return null;
    case 'WORKER_ADVANCE':
      if (!from || to || from.kind !== 'PETTY_CASH') {
        return 'Worker advance leaves Petty Cash only (not Operational)';
      }
      if (!requireNonEmptyString(payload.partyName, 120)) return 'Worker name is required';
      return null;
    case 'WORKER_ADVANCE_REPAY':
      if (from || !to || to.kind !== 'PETTY_CASH') {
        return 'Worker repayment returns cash to Petty Cash';
      }
      if (!payload.obligationId && !payload.obligationSourceId) {
        return 'Worker repayment requires the advance id';
      }
      return null;
    case 'PETTY_CASH_EXPENSE':
      if (!from || to || from.kind !== 'PETTY_CASH') {
        return 'Petty expenses leave Petty Cash only (not Operational)';
      }
      if (!payload.expenseAccountCode) return 'Petty expense requires an expense account';
      return null;
    case 'CORRECTION':
    case 'REVERSAL':
      return null;
    default:
      return 'Unknown movement type';
  }
}

function descriptionFor(
  type: string,
  fromName?: string,
  toName?: string,
  counterparty?: string,
): string {
  if (type === 'SALE_REFUND') return `Sale refund from ${fromName || 'Operational'}`;
  if (type === 'OWNER_CAPITAL_IN') return `Owner capital in → ${toName || 'Capital Bank'}`;
  if (type === 'OPENING_BALANCE_IN') return `Opening balance in → ${toName || 'Physical Account'}`;
  if (type === 'GENERAL_EXPENSE_FUNDING') return `General expense funding: ${fromName} → ${toName}`;
  if (type === 'GENERAL_EXPENSE_PAYOUT') return `General expense payout from ${fromName || 'Operational'}`;
  if (type === 'WORKER_ADVANCE') return `Worker advance from Petty Cash`;
  if (type === 'WORKER_ADVANCE_REPAY') return `Worker repayment to Petty Cash`;
  if (type === 'PETTY_CASH_EXPENSE') return `Petty cash expense from ${fromName || 'Petty Cash'}`;
  if (type === 'INVENTORY_CAPITALIZE') return `Unit expense from ${fromName || 'Operational'}`;
  if (counterparty) return `${type} · ${counterparty}`;
  if (fromName && toName) return `${type}: ${fromName} → ${toName}`;
  return type;
}

export function serializeMovement(row: any, replay: boolean, obligationId?: string | null) {
  const fromName = row.fromAccount?.name ?? null;
  const toName = row.toAccount?.name ?? null;
  return {
    id: row.id,
    movementType: row.movementType,
    fromPhysicalId: row.fromPhysicalId,
    toPhysicalId: row.toPhysicalId,
    fromName,
    toName,
    amountMinor: row.amountMinor.toString(),
    financialTransactionId: row.financialTransactionId,
    journalId: row.journalId,
    occurredOn: row.occurredOn instanceof Date ? row.occurredOn.toISOString().slice(0, 10) : row.occurredOn,
    originalMovementId: row.originalMovementId ?? null,
    reason: row.reason ?? null,
    notes: row.notes ?? null,
    summary: row.notes || descriptionFor(row.movementType, fromName ?? undefined, toName ?? undefined),
    existingIfReplay: replay,
    obligationId: obligationId ?? null,
  };
}
