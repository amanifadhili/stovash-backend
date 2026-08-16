import { DEMO } from '../demo-ids.js';
import type { SeedClients } from '../prisma-clients.js';

type SaleSpec = {
  id: string;
  orderNumber: string;
  commercialStatus: 'DRAFT' | 'CONFIRMED' | 'CANCELLED';
  fulfillmentStatus: 'NOT_FULFILLED' | 'FULFILLED';
  paymentStatus: 'UNPAID' | 'PARTIALLY_PAID' | 'PAID';
  customerName: string;
  method: string;
  payFraction: number; // 0..1 of grandTotal
  markItemSold: boolean;
};

const SALE_SPECS: SaleSpec[] = [
  {
    id: 'a1000000-0000-4000-8000-000000000901',
    orderNumber: 'SO-DEMO-001',
    commercialStatus: 'DRAFT',
    fulfillmentStatus: 'NOT_FULFILLED',
    paymentStatus: 'UNPAID',
    customerName: 'Walk-in Guest',
    method: 'CASH',
    payFraction: 0,
    markItemSold: false,
  },
  {
    id: 'a1000000-0000-4000-8000-000000000902',
    orderNumber: 'SO-DEMO-002',
    commercialStatus: 'CONFIRMED',
    fulfillmentStatus: 'NOT_FULFILLED',
    paymentStatus: 'UNPAID',
    customerName: 'Jean Uwimana',
    method: 'CASH',
    payFraction: 0,
    markItemSold: false,
  },
  {
    id: 'a1000000-0000-4000-8000-000000000903',
    orderNumber: 'SO-DEMO-003',
    commercialStatus: 'CONFIRMED',
    fulfillmentStatus: 'FULFILLED',
    paymentStatus: 'PAID',
    customerName: 'Marie Mukamana',
    method: 'CASH',
    payFraction: 1,
    markItemSold: true,
  },
  {
    id: 'a1000000-0000-4000-8000-000000000904',
    orderNumber: 'SO-DEMO-004',
    commercialStatus: 'CONFIRMED',
    fulfillmentStatus: 'FULFILLED',
    paymentStatus: 'PAID',
    customerName: 'Patrick Habimana',
    method: 'MOMO',
    payFraction: 1,
    markItemSold: true,
  },
  {
    id: 'a1000000-0000-4000-8000-000000000905',
    orderNumber: 'SO-DEMO-005',
    commercialStatus: 'CONFIRMED',
    fulfillmentStatus: 'FULFILLED',
    paymentStatus: 'PARTIALLY_PAID',
    customerName: 'Grace Ingabire',
    method: 'MOMO',
    payFraction: 0.5,
    markItemSold: true,
  },
  {
    id: 'a1000000-0000-4000-8000-000000000906',
    orderNumber: 'SO-DEMO-006',
    commercialStatus: 'CONFIRMED',
    fulfillmentStatus: 'FULFILLED',
    paymentStatus: 'UNPAID',
    customerName: 'Credit Customer Ltd',
    method: 'CREDIT',
    payFraction: 0,
    markItemSold: true,
  },
  {
    id: 'a1000000-0000-4000-8000-000000000907',
    orderNumber: 'SO-DEMO-007',
    commercialStatus: 'CONFIRMED',
    fulfillmentStatus: 'FULFILLED',
    paymentStatus: 'PAID',
    customerName: 'Boutique Kacyiru',
    method: 'BANK',
    payFraction: 1,
    markItemSold: true,
  },
  {
    id: 'a1000000-0000-4000-8000-000000000908',
    orderNumber: 'SO-DEMO-008',
    commercialStatus: 'CONFIRMED',
    fulfillmentStatus: 'NOT_FULFILLED',
    paymentStatus: 'PARTIALLY_PAID',
    customerName: 'David Niyonsenga',
    method: 'CASH',
    payFraction: 0.3,
    markItemSold: false,
  },
  {
    id: 'a1000000-0000-4000-8000-000000000909',
    orderNumber: 'SO-DEMO-009',
    commercialStatus: 'CONFIRMED',
    fulfillmentStatus: 'FULFILLED',
    paymentStatus: 'PAID',
    customerName: 'Aline Uwase',
    method: 'MOMO',
    payFraction: 1,
    markItemSold: true,
  },
  {
    id: 'a1000000-0000-4000-8000-000000000910',
    orderNumber: 'SO-DEMO-010',
    commercialStatus: 'CANCELLED',
    fulfillmentStatus: 'NOT_FULFILLED',
    paymentStatus: 'UNPAID',
    customerName: 'Cancelled Order',
    method: 'CASH',
    payFraction: 0,
    markItemSold: false,
  },
];

export async function seedSales(
  clients: SeedClients,
  availableItemIds: string[],
): Promise<void> {
  const shopId = DEMO.shops.main.id;
  const workPeriodId = DEMO.workPeriods.mainAccounting;

  // Prefer AVAILABLE items at main shop (use preselected ids when provided)
  const whereBase = {
    tenantId: DEMO.tenantId,
    shopId,
    status: 'AVAILABLE' as const,
  };
  let pool = await clients.inventory.inventoryItem.findMany({
    where:
      availableItemIds.length > 0
        ? { ...whereBase, id: { in: availableItemIds } }
        : whereBase,
    include: { product: true },
    take: 20,
    orderBy: { serialNumber: 'asc' },
  });

  if (pool.length === 0) {
    pool = await clients.inventory.inventoryItem.findMany({
      where: whereBase,
      include: { product: true },
      take: 20,
      orderBy: { serialNumber: 'asc' },
    });
  }

  let stockCursor = 0;

  for (let i = 0; i < SALE_SPECS.length; i++) {
    const spec = SALE_SPECS[i];
    if (pool.length === 0) {
      console.warn('  sales: no inventory items available — skipping remaining sales');
      break;
    }

    // Fulfilled/sold sales need a unique unit; drafts can share a display unit
    let item = pool[stockCursor % pool.length];
    if (spec.markItemSold) {
      item = pool[stockCursor];
      if (!item) {
        console.warn('  sales: ran out of AVAILABLE units for sold sales');
        break;
      }
      stockCursor += 1;
    }

    const unitPrice = item.sellingPrice ?? 500_000;
    const unitCost = item.purchaseCost;
    const lineTotal = unitPrice;

    await clients.sales.sale.upsert({
      where: { orderNumber: spec.orderNumber },
      update: {
        commercialStatus: spec.commercialStatus,
        fulfillmentStatus: spec.fulfillmentStatus,
        paymentStatus: spec.paymentStatus,
        customerName: spec.customerName,
        paymentMethod: spec.method,
      },
      create: {
        id: spec.id,
        tenantId: DEMO.tenantId,
        shopId,
        workPeriodId,
        orderNumber: spec.orderNumber,
        customerName: spec.customerName,
        sellerId: DEMO.users.staff.id,
        sellerName: `${DEMO.users.staff.firstName} ${DEMO.users.staff.lastName}`,
        currency: 'RWF',
        commercialStatus: spec.commercialStatus,
        fulfillmentStatus: spec.fulfillmentStatus,
        paymentStatus: spec.paymentStatus,
        subtotal: lineTotal,
        grandTotal: lineTotal,
        totalAmount: lineTotal,
        totalCost: unitCost,
        amountPaid: Math.round(lineTotal * spec.payFraction),
        amountDue: Math.round(lineTotal * (1 - spec.payFraction)),
        paymentMethod: spec.method,
        status: spec.commercialStatus === 'CANCELLED' ? 'CANCELLED' : 'COMPLETED',
        confirmedById:
          spec.commercialStatus === 'CONFIRMED' || spec.commercialStatus === 'CANCELLED'
            ? DEMO.users.admin.id
            : undefined,
        confirmedAt:
          spec.commercialStatus !== 'DRAFT' ? new Date() : undefined,
        fulfilledById:
          spec.fulfillmentStatus === 'FULFILLED' ? DEMO.users.staff.id : undefined,
        fulfilledAt:
          spec.fulfillmentStatus === 'FULFILLED' ? new Date() : undefined,
        cancelledById:
          spec.commercialStatus === 'CANCELLED' ? DEMO.users.admin.id : undefined,
        cancelledAt:
          spec.commercialStatus === 'CANCELLED' ? new Date() : undefined,
        createdById: DEMO.users.staff.id,
        notes: 'STOVASH demo seed sale',
      },
    });

    const sale = await clients.sales.sale.findUniqueOrThrow({
      where: { orderNumber: spec.orderNumber },
    });

    const n = String(i + 1).padStart(2, '0');
    const saleItemId = `a1000000-0000-4000-8000-000000000a${n}`;
    const existingLine = await clients.sales.saleItem.findUnique({
      where: { id: saleItemId },
    });
    if (!existingLine) {
      await clients.sales.saleItem.create({
        data: {
          id: saleItemId,
          saleId: sale.id,
          productId: item.productId,
          productName: item.name ?? item.product?.name,
          productSku: item.product?.sku,
          inventoryItemId: item.id,
          serialNumber: item.serialNumber,
          quantity: 1,
          unitCost,
          unitPrice,
          netTotal: lineTotal,
          lineTotal,
          total: lineTotal,
        },
      });
    }

    if (spec.payFraction > 0) {
      const paymentNumber = `SP-DEMO-${String(i + 1).padStart(3, '0')}`;
      const payExists = await clients.sales.salePayment.findUnique({
        where: { paymentNumber },
      });
      if (!payExists) {
        await clients.sales.salePayment.create({
          data: {
            id: `a1000000-0000-4000-8000-000000000b${n}`,
            saleId: sale.id,
            paymentNumber,
            amount: Math.round(lineTotal * spec.payFraction),
            currency: 'RWF',
            method: spec.method === 'CREDIT' ? 'CREDIT' : spec.method,
            paidById: DEMO.users.staff.id,
            accountName: spec.method,
            reference: 'DEMO-SEED',
          },
        });
      }
    }

    if (spec.method === 'CREDIT' && spec.paymentStatus === 'UNPAID') {
      const recvId = `a1000000-0000-4000-8000-000000000c${n}`;
      const recvExists = await clients.sales.customerReceivable.findUnique({
        where: { id: recvId },
      });
      if (!recvExists) {
        await clients.sales.customerReceivable.create({
          data: {
            id: recvId,
            tenantId: DEMO.tenantId,
            shopId,
            customerId: 'a1000000-0000-4000-8000-000000000d01',
            saleId: sale.id,
            debit: lineTotal,
            credit: 0,
            balance: lineTotal,
            reference: sale.orderNumber,
            createdById: DEMO.users.staff.id,
          },
        });
      }
    }

    const histId = `a1000000-0000-4000-8000-000000000e${n}`;
    const histExists = await clients.sales.saleHistory.findUnique({
      where: { id: histId },
    });
    if (!histExists) {
      await clients.sales.saleHistory.create({
        data: {
          id: histId,
          saleId: sale.id,
          eventType: 'CREATED',
          eventData: JSON.stringify({ seed: true }),
          userId: DEMO.users.staff.id,
          userName: `${DEMO.users.staff.firstName} ${DEMO.users.staff.lastName}`,
        },
      });
    }

    if (spec.markItemSold) {
      await clients.inventory.inventoryItem.update({
        where: { id: item.id },
        data: { status: 'SOLD' },
      });
    }
  }

  // Quotation
  const quoteNumber = 'Q-DEMO-001';
  const qExists = await clients.sales.quotation.findUnique({
    where: { quoteNumber },
  });
  if (!qExists && pool[0]) {
    const q = await clients.sales.quotation.create({
      data: {
        id: 'a1000000-0000-4000-8000-000000000990',
        tenantId: DEMO.tenantId,
        shopId,
        quoteNumber,
        customerId: null,
        totalAmount: pool[0].sellingPrice ?? 500_000,
        validUntil: new Date(Date.now() + 14 * 86400000),
      },
    });
    // QuotationItem if model requires — check schema
    void q;
  }

  console.log(`  sales: ${SALE_SPECS.length} sales (+ quotation if stock available)`);
}
