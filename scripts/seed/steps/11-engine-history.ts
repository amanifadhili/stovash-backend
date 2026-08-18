/**
 * Three busy months of engine activity for the demo shops (Mon–Sat, Kigali).
 * Opening money is OWNER_CAPITAL_IN. Sales/purchases post through engine books.
 * Does not write PaymentMethod.balance.
 * Leaves a sellable floor on each shop; never consumes Kigali Main gallery serials.
 */
import { DEMO, DEMO_MAIN_GALLERY_SERIAL_PREFIX } from '../demo-ids.js';
import type { SeedClients } from '../prisma-clients.js';
import {
  SEED_RANGE,
  engineBooks,
  francsToMinor,
  requireOk,
  setSeedShopToday,
  workingDays,
} from '../engine-bridge.js';
import { createTreasuryMovement } from '../../../apps/treasury-service/src/treasury-movement/create-treasury-movement.js';
import { getFinancialStructure } from '../../../apps/treasury-service/src/financial-structure/get-financial-structure.js';
import { getTreasuryLoans } from '../../../apps/treasury-service/src/treasury-movement/queries.js';
import {
  recordReconciliation,
  approveReconciliationAdjustment,
} from '../../../apps/treasury-service/src/treasury-movement/reconciliation.js';
import { postSaleConfirmation } from '../../../apps/accounting-service/src/engine-ledger/post-sale-books.js';
import { postPurchasePayable } from '../../../apps/accounting-service/src/engine-ledger/post-purchase-books.js';
import { recordGeneralExpense } from '../../../apps/accounting-service/src/engine-ledger/record-general-expense.js';
import { recordWorkerAdvance } from '../../../apps/accounting-service/src/engine-ledger/record-worker-advance.js';
import { getProfitAllocation } from '../../../apps/accounting-service/src/engine-ledger/post-treasury-books.js';
import type { GeneralExpenseCategoryCode } from '../../../apps/accounting-service/src/engine-ledger/chart.js';

const CUSTOMERS = [
  'Marie Mukamana',
  'Jean Uwimana',
  'Patrick Habimana',
  'Grace Ingabire',
  'Aline Uwase',
  'David Niyonsenga',
  'Boutique Kacyiru',
  'Credit Customer Ltd',
  'Eric Ndayisaba',
  'Claudine Iradukunda',
  'Samuel Hakizimana',
  'Diane Uwera',
];

type Physical = { id: string; kind: string; balanceMinor: string; fundCode: string };

function ctx(shopId: string) {
  return {
    tenantId: DEMO.tenantId,
    shopId,
    userId: DEMO.users.admin.id,
    traceId: 'seed-demo-engine',
  };
}

function weekday(iso: string): number {
  return new Date(`${iso}T12:00:00+02:00`).getUTCDay();
}

function monthKey(iso: string): string {
  return iso.slice(0, 7);
}

async function accountsByKind(shopId: string): Promise<Record<string, Physical>> {
  const structure = requireOk(await getFinancialStructure(ctx(shopId)), 'GetFinancialStructure');
  const accounts = structure.funds.flatMap((f: any) => f.accounts) as Physical[];
  return Object.fromEntries(accounts.map((a) => [a.kind, a]));
}

async function move(shopId: string, payload: Parameters<typeof createTreasuryMovement>[0]) {
  return requireOk(await createTreasuryMovement(payload, ctx(shopId), engineBooks), payload.movementType);
}

function moveCash() {
  return (payload: Record<string, unknown>, context?: Parameters<typeof createTreasuryMovement>[1]) =>
    createTreasuryMovement(payload as Parameters<typeof createTreasuryMovement>[0], context, engineBooks);
}

function minorOf(accounts: Record<string, Physical>, kind: string): bigint {
  return BigInt(accounts[kind]?.balanceMinor ?? '0');
}

/** Owned units left AVAILABLE after busy sales (In shop on Kigali Main / Ndera). */
const MAIN_FLOOR_RESERVE = 24;
const BRANCH_FLOOR_RESERVE = 16;

function salePool<T>(items: T[], reserve: number): T[] {
  return items.slice(0, Math.max(0, items.length - reserve));
}

function opsLiquidity(accounts: Record<string, Physical>): bigint {
  return (
    minorOf(accounts, 'OPS_CASH') +
    minorOf(accounts, 'OPS_MOMO') +
    minorOf(accounts, 'OPS_MAIN_BANK') +
    minorOf(accounts, 'OPS_OTHER_BANK')
  );
}

export async function seedEngineHistory(clients: SeedClients): Promise<void> {
  const days = workingDays(SEED_RANGE.start, SEED_RANGE.end);
  const firstDay = days[0];
  const mainId = DEMO.shops.main.id;
  const branchId = DEMO.shops.branch.id;

  setSeedShopToday(firstDay);

  await move(mainId, {
    movementType: 'OWNER_CAPITAL_IN',
    toKind: 'CAPITAL_BANK',
    amountMinor: francsToMinor(80_000_000),
    occurredOn: firstDay,
    idempotencyKey: 'demo-main-capital',
  });
  const capitalIn = await move(mainId, {
    movementType: 'OWNER_CAPITAL_IN',
    toKind: 'CAPITAL_BANK',
    amountMinor: francsToMinor(5_000_000),
    occurredOn: firstDay,
    idempotencyKey: 'demo-main-capital-topup',
  });
  await move(branchId, {
    movementType: 'OWNER_CAPITAL_IN',
    toKind: 'CAPITAL_BANK',
    amountMinor: francsToMinor(25_000_000),
    occurredOn: firstDay,
    idempotencyKey: 'demo-branch-capital',
  });

  await move(mainId, {
    movementType: 'INTERNAL_TRANSFER',
    fromKind: 'CAPITAL_BANK',
    toKind: 'PETTY_CASH',
    amountMinor: francsToMinor(800_000),
    occurredOn: firstDay,
    idempotencyKey: 'demo-main-petty',
  });
  await move(mainId, {
    movementType: 'INTERNAL_LOAN',
    fromKind: 'CAPITAL_BANK',
    toKind: 'OPS_MAIN_BANK',
    amountMinor: francsToMinor(35_000_000),
    occurredOn: firstDay,
    idempotencyKey: 'demo-main-cap-loan',
  });
  await move(mainId, {
    movementType: 'INTERNAL_TRANSFER',
    fromKind: 'OPS_MAIN_BANK',
    toKind: 'OPS_CASH',
    amountMinor: francsToMinor(3_000_000),
    occurredOn: firstDay,
    idempotencyKey: 'demo-main-ops-cash',
  });
  await move(mainId, {
    movementType: 'INTERNAL_TRANSFER',
    fromKind: 'OPS_MAIN_BANK',
    toKind: 'OPS_MOMO',
    amountMinor: francsToMinor(2_000_000),
    occurredOn: firstDay,
    idempotencyKey: 'demo-main-ops-momo',
  });
  await move(branchId, {
    movementType: 'INTERNAL_LOAN',
    fromKind: 'CAPITAL_BANK',
    toKind: 'OPS_MAIN_BANK',
    amountMinor: francsToMinor(8_000_000),
    occurredOn: firstDay,
    idempotencyKey: 'demo-branch-cap-loan',
  });

  const purchases = await clients.purchase.purchase.findMany({
    where: { tenantId: DEMO.tenantId },
    orderBy: { purchaseNumber: 'asc' },
  });
  for (const purchase of purchases) {
    setSeedShopToday(firstDay);
    requireOk(
      await postPurchasePayable(
        {
          purchaseId: purchase.id,
          supplierName: purchase.supplierName || 'Supplier',
          amountMinor: francsToMinor(Number(purchase.grandTotal) || 0),
          occurredOn: firstDay,
          description: `Seed ${purchase.purchaseNumber}`,
        },
        ctx(purchase.shopId),
      ),
      `PostPurchasePayable ${purchase.purchaseNumber}`,
    );
  }

  const mainItems = await clients.inventory.inventoryItem.findMany({
    where: {
      tenantId: DEMO.tenantId,
      shopId: mainId,
      status: 'AVAILABLE',
      NOT: { serialNumber: { startsWith: DEMO_MAIN_GALLERY_SERIAL_PREFIX } },
    },
    include: { product: true },
    orderBy: { serialNumber: 'asc' },
  });
  const branchItems = await clients.inventory.inventoryItem.findMany({
    where: { tenantId: DEMO.tenantId, shopId: branchId, status: 'AVAILABLE' },
    include: { product: true },
    orderBy: { serialNumber: 'asc' },
  });
  const mainForSale = salePool(mainItems, MAIN_FLOOR_RESERVE);
  const branchForSale = salePool(branchItems, BRANCH_FLOOR_RESERVE);
  let mainCursor = 0;
  let branchCursor = 0;
  let saleSeq = 0;
  let paySeq = 0;
  const seenMonths = new Set<string>();
  let mistakenPettyId: string | undefined;
  let salesPosted = 0;
  let expensesPosted = 0;

  for (let di = 0; di < days.length; di++) {
    const day = days[di];
    const dow = weekday(day);
    setSeedShopToday(day);
    const month = monthKey(day);
    const firstOfMonth = !seenMonths.has(month);
    seenMonths.add(month);

    if (di === 1) {
      await move(mainId, {
        movementType: 'EXTERNAL_LOAN',
        toKind: 'OPS_MAIN_BANK',
        amountMinor: francsToMinor(12_000_000),
        occurredOn: day,
        counterpartyName: 'Bank of Kigali',
        idempotencyKey: 'demo-main-ext-loan',
      });
    }

    if (di === 2) {
      const petty = await move(mainId, {
        movementType: 'INTERNAL_TRANSFER',
        fromKind: 'CAPITAL_BANK',
        toKind: 'PETTY_CASH',
        amountMinor: francsToMinor(50_000),
        occurredOn: day,
        idempotencyKey: 'demo-main-petty-mistake',
      });
      mistakenPettyId = petty.id;
    }

    if (di === 3 && mistakenPettyId) {
      await move(mainId, {
        movementType: 'REVERSAL',
        originalMovementId: mistakenPettyId,
        occurredOn: day,
        reason: 'Petty cash top-up was duplicated',
        idempotencyKey: 'demo-main-petty-reversal',
      });
    }

    if (di === 4) {
      await move(mainId, {
        movementType: 'CORRECTION',
        originalMovementId: capitalIn.id,
        amountMinor: francsToMinor(500_000),
        occurredOn: firstDay,
        reason: 'Missed owner deposit on opening day',
        idempotencyKey: 'demo-main-capital-correction',
      });
    }

    const mainSalesToday = 1 + (di % 3);
    for (let s = 0; s < mainSalesToday; s++) {
      const created = await postBusySale(clients, {
        shopId: mainId,
        day,
        seq: ++saleSeq,
        item: mainForSale[mainCursor] ?? null,
        payPattern: (di + s) % 6,
        paySeq: () => ++paySeq,
      });
      if (created.consumedItem) mainCursor += 1;
      if (created.posted) salesPosted += 1;
    }

    if (dow === 3) {
      const created = await postBusySale(clients, {
        shopId: branchId,
        day,
        seq: ++saleSeq,
        item: branchForSale[branchCursor] ?? null,
        payPattern: 0,
        paySeq: () => ++paySeq,
      });
      if (created.consumedItem) branchCursor += 1;
      if (created.posted) salesPosted += 1;
    }

    const allocation = requireOk(await getProfitAllocation(ctx(mainId)), 'GetProfitAllocation');
    const untransferred = BigInt(allocation.untransferredMinor || '0');
    let mainAccounts = await accountsByKind(mainId);

    if (dow === 5 && untransferred > 0n) {
      const cap = opsLiquidity(mainAccounts) / 4n;
      const amount = untransferred < cap ? untransferred : cap;
      if (amount >= BigInt(francsToMinor(50_000))) {
        const fromKind =
          minorOf(mainAccounts, 'OPS_MAIN_BANK') >= amount
            ? 'OPS_MAIN_BANK'
            : minorOf(mainAccounts, 'OPS_CASH') >= amount
              ? 'OPS_CASH'
              : 'OPS_MOMO';
        if (minorOf(mainAccounts, fromKind) >= amount) {
          await move(mainId, {
            movementType: 'PROFIT_TRANSFER',
            fromKind,
            toKind: 'PROFIT_BANK',
            amountMinor: amount.toString(),
            occurredOn: day,
            idempotencyKey: `demo-main-profit-${day}`,
          });
          mainAccounts = await accountsByKind(mainId);
        }
      }
    }

    if (minorOf(mainAccounts, 'PROFIT_BANK') > 0n) {
      const expense = pickExpense(day, firstOfMonth, dow);
      if (expense && minorOf(mainAccounts, 'PROFIT_BANK') >= BigInt(francsToMinor(expense.francs))) {
        requireOk(
          await recordGeneralExpense(
            {
              category: expense.category,
              amountMinor: francsToMinor(expense.francs),
              occurredOn: day,
              paidTo: expense.paidTo,
              idempotencyKey: `demo-exp-${expense.category}-${day}`,
            },
            ctx(mainId),
            moveCash(),
          ),
          `expense ${expense.category}`,
        );
        expensesPosted += 1;
      }
    }

    if ((firstOfMonth || day.endsWith('-15')) && minorOf(mainAccounts, 'PETTY_CASH') >= BigInt(francsToMinor(30_000))) {
      requireOk(
        await recordWorkerAdvance(
          {
            workerName: 'Claudine Staff',
            amountMinor: francsToMinor(30_000),
            occurredOn: day,
            notes: 'Field float',
            idempotencyKey: `demo-advance-${day}`,
          },
          ctx(mainId),
          moveCash(),
        ),
        'worker advance',
      );
    }

    mainAccounts = await accountsByKind(mainId);
    if (dow === 6 && minorOf(mainAccounts, 'OPS_CASH') >= BigInt(francsToMinor(400_000))) {
      await move(mainId, {
        movementType: 'OPERATIONAL_CONSOLIDATION',
        fromKind: 'OPS_CASH',
        toKind: 'OPS_MAIN_BANK',
        amountMinor: francsToMinor(400_000),
        occurredOn: day,
        idempotencyKey: `demo-main-consol-${day}`,
      });
    }

    if (dow === 6) {
      mainAccounts = await accountsByKind(mainId);
      const cash = mainAccounts.OPS_CASH;
      const notes = `Saturday count ${day}`;
      const existingRecon = await clients.treasury.reconciliationCount.findFirst({
        where: { tenantId: DEMO.tenantId, shopId: mainId, notes },
      });
      if (!existingRecon) {
        const expected = BigInt(cash.balanceMinor);
        const counted = expected > BigInt(francsToMinor(20_000)) ? expected - BigInt(francsToMinor(20_000)) : expected;
        const recon = requireOk(
          await recordReconciliation(
            {
              physicalAccountId: cash.id,
              countedMinor: counted.toString(),
              notes,
            },
            ctx(mainId),
          ),
          'recon',
        );
        if (counted !== expected) {
          requireOk(
            await approveReconciliationAdjustment(
              { reconciliationId: recon.id, reason: 'Shortage after Saturday count' },
              ctx(mainId),
              engineBooks,
            ),
            'approve recon',
          );
        }
      }
    }

    if (day.endsWith('-28') || (firstOfMonth && di > 10)) {
      const loans = requireOk(await getTreasuryLoans(ctx(mainId)), 'loans');
      const internal = (loans.loans ?? []).find((l: any) => l.kind === 'INTERNAL_LOAN' && l.status === 'OPEN');
      const external = (loans.loans ?? []).find((l: any) => l.kind === 'EXTERNAL_LOAN' && l.status === 'OPEN');
      mainAccounts = await accountsByKind(mainId);
      if (external && minorOf(mainAccounts, 'OPS_MAIN_BANK') >= BigInt(francsToMinor(180_000))) {
        await move(mainId, {
          movementType: 'EXTERNAL_LOAN_INTEREST',
          fromKind: 'OPS_MAIN_BANK',
          amountMinor: francsToMinor(180_000),
          occurredOn: day,
          loanId: external.id,
          idempotencyKey: `demo-interest-${month}`,
        });
      }
      if (internal && minorOf(mainAccounts, 'OPS_MAIN_BANK') >= BigInt(francsToMinor(1_500_000))) {
        await move(mainId, {
          movementType: 'INTERNAL_LOAN_REPAY',
          fromKind: 'OPS_MAIN_BANK',
          toKind: 'CAPITAL_BANK',
          amountMinor: francsToMinor(1_500_000),
          occurredOn: day,
          loanId: internal.id,
          idempotencyKey: `demo-loan-repay-${month}`,
        });
      }
    }

    mainAccounts = await accountsByKind(mainId);
    if (firstOfMonth && di > 20 && minorOf(mainAccounts, 'PROFIT_BANK') >= BigInt(francsToMinor(1_000_000))) {
      await move(mainId, {
        movementType: 'CAPITAL_GROWTH',
        fromKind: 'PROFIT_BANK',
        toKind: 'CAPITAL_BANK',
        amountMinor: francsToMinor(1_000_000),
        occurredOn: day,
        idempotencyKey: `demo-growth-${month}`,
      });
    }

    const po = purchases.find((p) => p.shopId === mainId);
    if (po && (dow === 2 || dow === 5) && di > 5) {
      mainAccounts = await accountsByKind(mainId);
      const pay = BigInt(francsToMinor(800_000));
      if (minorOf(mainAccounts, 'OPS_MAIN_BANK') >= pay && Number(po.amountOutstanding) > 0) {
        const commercial = Math.min(800_000, Number(po.amountOutstanding));
        await move(mainId, {
          movementType: 'PURCHASE_PAYMENT',
          fromKind: 'OPS_MAIN_BANK',
          amountMinor: francsToMinor(commercial),
          occurredOn: day,
          obligationSourceId: po.id,
          idempotencyKey: `demo-ap-${day}`,
        });
        const nextPaid = Number(po.amountPaid) + commercial;
        const nextOut = Math.max(0, Number(po.grandTotal) - nextPaid);
        await clients.purchase.purchase.update({
          where: { id: po.id },
          data: {
            amountPaid: nextPaid,
            amountOutstanding: nextOut,
            paymentStatus: nextOut === 0 ? 'PAID' : 'PARTIALLY_PAID',
          },
        });
        po.amountPaid = nextPaid;
        po.amountOutstanding = nextOut;
        const payNumber = `PAY-DEMO-${day}`;
        const exists = await clients.purchase.purchasePayment.findUnique({ where: { paymentNumber: payNumber } });
        if (!exists) {
          await clients.purchase.purchasePayment.create({
            data: {
              purchaseId: po.id,
              paymentNumber: payNumber,
              amount: commercial,
              currency: 'RWF',
              paymentMethod: 'BANK_TRANSFER',
              accountName: 'Operational Main Bank',
              paidById: DEMO.users.admin.id,
              reference: 'SEED-ENGINE',
            },
          });
        }
      }
    }
  }

  setSeedShopToday(null);
  console.log(
    `  engine history: ${days.length} working days ${SEED_RANGE.start}→${SEED_RANGE.end}; ${salesPosted} sales; ${expensesPosted} expenses; opening OWNER_CAPITAL_IN; floor reserve Main ${MAIN_FLOOR_RESERVE} / Branch ${BRANCH_FLOOR_RESERVE}`,
  );
}

function pickExpense(
  day: string,
  firstOfMonth: boolean,
  dow: number,
): { category: GeneralExpenseCategoryCode; francs: number; paidTo: string } | null {
  if (firstOfMonth) return { category: 'RENT', francs: 1_200_000, paidTo: 'Kigali Plaza Ltd' };
  if (dow === 1) return { category: 'ISUKU', francs: 25_000, paidTo: 'Isuku Co-op' };
  if (dow === 2 && day.endsWith('-10')) return { category: 'ELECTRICITY', francs: 85_000, paidTo: 'REG' };
  if (dow === 3 && day.endsWith('-12')) return { category: 'INTERNET', francs: 45_000, paidTo: 'MTN' };
  if (day.endsWith('-25')) return { category: 'SALARIES', francs: 1_800_000, paidTo: 'Payroll' };
  if (day.endsWith('-18')) return { category: 'FIELD', francs: 40_000, paidTo: 'Field team' };
  if (day.endsWith('-20') && day.slice(5, 7) === '06') return { category: 'TAXES', francs: 220_000, paidTo: 'RRA' };
  return null;
}

async function postBusySale(
  clients: SeedClients,
  args: {
    shopId: string;
    day: string;
    seq: number;
    item: any | null;
    payPattern: number;
    paySeq: () => number;
  },
): Promise<{ posted: boolean; consumedItem: boolean }> {
  const orderNumber = `SO-DEMO-${String(args.seq).padStart(4, '0')}`;
  const existing = await clients.sales.sale.findUnique({ where: { orderNumber } });
  if (existing?.commercialStatus === 'CONFIRMED') {
    requireOk(
      await postSaleConfirmation(
        {
          saleId: existing.id,
          customerName: existing.customerName || 'Walk-in Customer',
          revenueMinor: francsToMinor(Number(existing.grandTotal) || 0),
          cogsMinor: Number(existing.totalCost) > 0 ? francsToMinor(Number(existing.totalCost)) : undefined,
          occurredOn: args.day,
          description: `Sale ${orderNumber}`,
        },
        ctx(args.shopId),
      ),
      `PostSaleConfirmation ${orderNumber}`,
    );
    return { posted: true, consumedItem: false };
  }
  if (!args.item) return { posted: false, consumedItem: false };

  const unitPrice = Number(args.item.sellingPrice ?? args.item.product?.sellingPrice ?? 500_000);
  const unitCost = Number(args.item.purchaseCost ?? 0);
  const customerName = CUSTOMERS[args.seq % CUSTOMERS.length];
  const saleDate = new Date(`${args.day}T12:00:00+02:00`);

  let payFraction = 1;
  let method: 'CASH' | 'MOMO' | 'BANK' | 'CREDIT' = 'CASH';
  if (args.payPattern === 1) method = 'MOMO';
  if (args.payPattern === 2) method = 'BANK';
  if (args.payPattern === 3) {
    method = 'CASH';
    payFraction = 0.45;
  }
  if (args.payPattern === 4) {
    method = 'CREDIT';
    payFraction = 0;
  }
  if (args.payPattern === 5) method = 'MOMO';

  const amountPaid = Math.round(unitPrice * payFraction);
  const amountDue = unitPrice - amountPaid;
  const paymentStatus = amountPaid <= 0 ? 'UNPAID' : amountDue > 0 ? 'PARTIALLY_PAID' : 'PAID';

  await clients.sales.sale.upsert({
    where: { orderNumber },
    update: {
      commercialStatus: 'CONFIRMED',
      fulfillmentStatus: 'FULFILLED',
      paymentStatus,
      amountPaid,
      amountDue,
      customerName,
    },
    create: {
      tenantId: DEMO.tenantId,
      shopId: args.shopId,
      orderNumber,
      customerName,
      sellerId: DEMO.users.staff.id,
      sellerName: `${DEMO.users.staff.firstName} ${DEMO.users.staff.lastName}`,
      currency: 'RWF',
      commercialStatus: 'CONFIRMED',
      fulfillmentStatus: 'FULFILLED',
      paymentStatus,
      subtotal: unitPrice,
      grandTotal: unitPrice,
      totalAmount: unitPrice,
      totalCost: unitCost,
      amountPaid,
      amountDue,
      paymentMethod: method,
      status: 'COMPLETED',
      saleDate,
      confirmedById: DEMO.users.admin.id,
      confirmedAt: saleDate,
      fulfilledById: DEMO.users.staff.id,
      fulfilledAt: saleDate,
      createdById: DEMO.users.staff.id,
      notes: 'STOVASH demo engine sale',
    },
  });

  const sale = await clients.sales.sale.findUniqueOrThrow({ where: { orderNumber } });
  const existingLine = await clients.sales.saleItem.findFirst({ where: { saleId: sale.id } });
  if (!existingLine) {
    await clients.sales.saleItem.create({
      data: {
        saleId: sale.id,
        productId: args.item.productId,
        productName: args.item.name ?? args.item.product?.name,
        productSku: args.item.product?.sku,
        inventoryItemId: args.item.id,
        serialNumber: args.item.serialNumber,
        quantity: 1,
        unitCost,
        unitPrice,
        netTotal: unitPrice,
        lineTotal: unitPrice,
        total: unitPrice,
      },
    });
  }

  await clients.inventory.inventoryItem.update({
    where: { id: args.item.id },
    data: { status: 'SOLD' },
  });

  requireOk(
    await postSaleConfirmation(
      {
        saleId: sale.id,
        customerName,
        revenueMinor: francsToMinor(unitPrice),
        cogsMinor: unitCost > 0 ? francsToMinor(unitCost) : undefined,
        occurredOn: args.day,
        description: `Sale ${orderNumber}`,
      },
      ctx(args.shopId),
    ),
    `PostSaleConfirmation ${orderNumber}`,
  );

  if (amountPaid > 0) {
    const toKind = method === 'MOMO' ? 'OPS_MOMO' : method === 'BANK' ? 'OPS_MAIN_BANK' : 'OPS_CASH';
    const chunks =
      args.payPattern === 5
        ? [
            { francs: Math.round(unitPrice * 0.4), kind: 'OPS_CASH' as const },
            { francs: unitPrice - Math.round(unitPrice * 0.4), kind: 'OPS_MOMO' as const },
          ]
        : [{ francs: amountPaid, kind: toKind }];
    for (let i = 0; i < chunks.length; i++) {
      const chunk = chunks[i];
      if (chunk.francs <= 0) continue;
      const n = args.paySeq();
      await move(args.shopId, {
        movementType: 'SALE_PAYMENT',
        toKind: chunk.kind,
        amountMinor: francsToMinor(chunk.francs),
        occurredOn: args.day,
        obligationSourceId: sale.id,
        idempotencyKey: `demo-sale-pay-${sale.id}-${i}`,
      });
      const paymentNumber = `SP-DEMO-${String(n).padStart(4, '0')}`;
      const exists = await clients.sales.salePayment.findUnique({ where: { paymentNumber } });
      if (!exists) {
        await clients.sales.salePayment.create({
          data: {
            saleId: sale.id,
            paymentNumber,
            amount: chunk.francs,
            currency: 'RWF',
            method: chunk.kind === 'OPS_MOMO' ? 'MOMO' : chunk.kind === 'OPS_MAIN_BANK' ? 'BANK' : 'CASH',
            paidById: DEMO.users.staff.id,
            accountName: chunk.kind,
            reference: 'SEED-ENGINE',
            paidAt: saleDate,
          },
        });
      }
    }
  }
  return { posted: true, consumedItem: true };
}
