/**
 * Leftover commercial statuses that must not post money or take stock.
 * Busy working-day sales are created in step 11 through the engine.
 */
import { DEMO } from '../demo-ids.js';
import type { SeedClients } from '../prisma-clients.js';

export async function seedSales(clients: SeedClients): Promise<void> {
  const shopId = DEMO.shops.main.id;
  const specs = [
    {
      id: 'a1000000-0000-4000-8000-000000000901',
      orderNumber: 'SO-DEMO-DRAFT',
      commercialStatus: 'DRAFT' as const,
      customerName: 'Walk-in Guest',
    },
    {
      id: 'a1000000-0000-4000-8000-000000000910',
      orderNumber: 'SO-DEMO-CANCELLED',
      commercialStatus: 'CANCELLED' as const,
      customerName: 'Cancelled Order',
    },
  ];

  for (const spec of specs) {
    await clients.sales.sale.upsert({
      where: { orderNumber: spec.orderNumber },
      update: {
        commercialStatus: spec.commercialStatus,
        fulfillmentStatus: 'NOT_FULFILLED',
        paymentStatus: 'UNPAID',
        customerName: spec.customerName,
      },
      create: {
        id: spec.id,
        tenantId: DEMO.tenantId,
        shopId,
        orderNumber: spec.orderNumber,
        customerName: spec.customerName,
        sellerId: DEMO.users.staff.id,
        sellerName: `${DEMO.users.staff.firstName} ${DEMO.users.staff.lastName}`,
        currency: 'RWF',
        commercialStatus: spec.commercialStatus,
        fulfillmentStatus: 'NOT_FULFILLED',
        paymentStatus: 'UNPAID',
        subtotal: 0,
        grandTotal: 0,
        totalAmount: 0,
        totalCost: 0,
        amountPaid: 0,
        amountDue: 0,
        paymentMethod: 'CASH',
        status: spec.commercialStatus === 'CANCELLED' ? 'CANCELLED' : 'COMPLETED',
        cancelledById: spec.commercialStatus === 'CANCELLED' ? DEMO.users.admin.id : undefined,
        cancelledAt: spec.commercialStatus === 'CANCELLED' ? new Date() : undefined,
        createdById: DEMO.users.staff.id,
        notes: 'STOVASH demo — DRAFT/CANCELLED must not post stock or money',
      },
    });
  }

  console.log('  sales: DRAFT + CANCELLED samples only (no engine posts, no stock).');
}
