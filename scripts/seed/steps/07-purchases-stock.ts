import { DEMO } from '../demo-ids.js';
import type { SeedClients } from '../prisma-clients.js';
import {
  type CatalogProduct,
  serialFor,
} from './06-catalog.js';

function unitItemId(productIndex: number, unitIndex: number): string {
  return `a1000000-0000-4000-8000-00000008${String(productIndex).padStart(2, '0')}${String(unitIndex).padStart(2, '0')}`;
}

function movementId(productIndex: number, unitIndex: number): string {
  return `a1000000-0000-4000-8000-00000009${String(productIndex).padStart(2, '0')}${String(unitIndex).padStart(2, '0')}`;
}

function receivedItemId(productIndex: number, unitIndex: number): string {
  return `a1000000-0000-4000-8000-0000000a${String(productIndex).padStart(2, '0')}${String(unitIndex).padStart(2, '0')}`;
}

function purchaseItemId(purchaseKey: string, productIndex: number): string {
  const dig = purchaseKey === 'main' ? '1' : '2';
  return `a1000000-0000-4000-8000-0000000b${dig}${String(productIndex).padStart(3, '0')}`;
}

/**
 * Two purchases (one per shop) with confirmed received units + inventory stock.
 * Main shop gets ~2/3 of serial units; branch gets the rest.
 */
export async function seedPurchasesAndStock(
  clients: SeedClients,
  products: CatalogProduct[],
): Promise<{ availableItemIds: string[] }> {
  const supplier = DEMO.suppliers[0];
  const availableItemIds: string[] = [];

  const purchases = [
    {
      key: 'main' as const,
      id: 'a1000000-0000-4000-8000-000000000801',
      number: 'PO-DEMO-001',
      shopId: DEMO.shops.main.id,
      receivingId: 'a1000000-0000-4000-8000-000000000811',
      receivingNumber: 'GRN-DEMO-001',
      paymentId: 'a1000000-0000-4000-8000-000000000821',
      paymentNumber: 'PAY-DEMO-PO-001',
    },
    {
      key: 'branch' as const,
      id: 'a1000000-0000-4000-8000-000000000802',
      number: 'PO-DEMO-002',
      shopId: DEMO.shops.branch.id,
      receivingId: 'a1000000-0000-4000-8000-000000000812',
      receivingNumber: 'GRN-DEMO-002',
      paymentId: 'a1000000-0000-4000-8000-000000000822',
      paymentNumber: 'PAY-DEMO-PO-002',
    },
  ];

  for (const po of purchases) {
    let grandTotal = 0;

    await clients.purchase.purchase.upsert({
      where: { purchaseNumber: po.number },
      update: {
        commercialStatus: 'CONFIRMED',
        receivingStatus: 'FULLY_RECEIVED',
        paymentStatus: 'PARTIALLY_PAID',
        supplierId: supplier.id,
        supplierName: supplier.name,
      },
      create: {
        id: po.id,
        tenantId: DEMO.tenantId,
        shopId: po.shopId,
        purchaseNumber: po.number,
        supplierId: supplier.id,
        supplierName: supplier.name,
        commercialStatus: 'CONFIRMED',
        receivingStatus: 'FULLY_RECEIVED',
        paymentStatus: 'PARTIALLY_PAID',
        currency: 'RWF',
        createdById: DEMO.users.admin.id,
        approvedById: DEMO.users.admin.id,
        approvedAt: new Date(),
        notes: 'STOVASH demo seed purchase',
      },
    });

    const purchase = await clients.purchase.purchase.findUniqueOrThrow({
      where: { purchaseNumber: po.number },
    });

    const receivingExists = await clients.purchase.purchaseReceiving.findUnique({
      where: { receivingNumber: po.receivingNumber },
    });
    if (!receivingExists) {
      await clients.purchase.purchaseReceiving.create({
        data: {
          id: po.receivingId,
          purchaseId: purchase.id,
          receivingNumber: po.receivingNumber,
          receivedById: DEMO.users.admin.id,
          receivedAtShop: po.shopId,
          notes: 'Demo GRN',
        },
      });
    }

    for (let pi = 0; pi < products.length; pi++) {
      const product = products[pi];
      // Split: even products → main, odd → branch for serials; accessories on both lightly
      const assignToMain = pi % 2 === 0;
      const forThisShop =
        product.trackingMethod === 'NON_SERIALIZED'
          ? po.key === 'main'
          : po.key === 'main'
            ? assignToMain
            : !assignToMain;

      if (!forThisShop) continue;

      const qty =
        product.trackingMethod === 'SERIALIZED'
          ? product.units
          : Math.max(1, Math.floor((product.qtyOnHand ?? 10) / 2));

      const lineTotal = product.cost * qty;
      grandTotal += lineTotal;

      const pItemId = purchaseItemId(po.key, pi);
      const existingItem = await clients.purchase.purchaseItem.findUnique({
        where: { id: pItemId },
      });
      if (!existingItem) {
        await clients.purchase.purchaseItem.create({
          data: {
            id: pItemId,
            purchaseId: purchase.id,
            productId: product.id,
            productName: product.name,
            productSku: product.sku,
            productTracking: product.trackingMethod,
            orderedQty: qty,
            receivedQty: qty,
            acceptedQty: qty,
            unitPrice: product.cost,
            lineTotal,
            acquisitionCost: product.cost,
          },
        });
      }

      if (product.trackingMethod === 'SERIALIZED') {
        for (let u = 1; u <= product.units; u++) {
          const serial = serialFor(product.sku, u);
          const invId = unitItemId(pi, u);
          const recvId = receivedItemId(pi, u);

          const existingRecv = await clients.purchase.purchaseReceivedItem.findUnique({
            where: { id: recvId },
          });
          if (!existingRecv) {
            await clients.purchase.purchaseReceivedItem.create({
              data: {
                id: recvId,
                purchaseId: purchase.id,
                purchaseItemId: pItemId,
                receivingId: po.receivingId,
                serialNumber: serial,
                unitAcquisitionCost: product.cost,
                status: 'CONFIRMED',
                condition: 'GOOD',
                receivedById: DEMO.users.admin.id,
                confirmedById: DEMO.users.admin.id,
                confirmedAt: new Date(),
              },
            });
          }

          await clients.inventory.inventoryItem.upsert({
            where: {
              tenantId_serialNumber: { tenantId: DEMO.tenantId, serialNumber: serial },
            },
            update: {
              status: 'AVAILABLE',
              shopId: po.shopId,
              productId: product.id,
              purchaseCost: product.cost,
              sellingPrice: product.sellingPrice,
              brandId: product.brandId,
              categoryId: product.categoryId,
              name: product.name,
            },
            create: {
              id: invId,
              tenantId: DEMO.tenantId,
              shopId: po.shopId,
              productId: product.id,
              serialNumber: serial,
              purchaseCost: product.cost,
              sellingPrice: product.sellingPrice,
              brandId: product.brandId,
              categoryId: product.categoryId,
              name: product.name,
              status: 'AVAILABLE',
              createdBy: DEMO.users.admin.id,
            },
          });

          const movId = movementId(pi, u);
          const movExists = await clients.inventory.inventoryMovement.findUnique({
            where: { id: movId },
          });
          if (!movExists) {
            await clients.inventory.inventoryMovement.create({
              data: {
                id: movId,
                tenantId: DEMO.tenantId,
                shopId: po.shopId,
                inventoryItemId: invId,
                movementType: 'IN',
                quantity: 1,
                referenceId: purchase.id,
                referenceType: 'PURCHASE',
                createdBy: DEMO.users.admin.id,
              },
            });
          }

          if (po.shopId === DEMO.shops.main.id) {
            availableItemIds.push(invId);
          }
        }
      }
    }

    await clients.purchase.purchase.update({
      where: { id: purchase.id },
      data: {
        grandTotal,
        subtotal: grandTotal,
        amountPaid: Math.round(grandTotal * 0.4),
        amountOutstanding: Math.round(grandTotal * 0.6),
      },
    });

    const payExists = await clients.purchase.purchasePayment.findUnique({
      where: { paymentNumber: po.paymentNumber },
    });
    if (!payExists) {
      await clients.purchase.purchasePayment.create({
        data: {
          id: po.paymentId,
          purchaseId: purchase.id,
          paymentNumber: po.paymentNumber,
          amount: Math.round(grandTotal * 0.4),
          currency: 'RWF',
          paymentMethod: 'MOBILE_MONEY',
          accountName: 'MoMo',
          paidById: DEMO.users.admin.id,
          reference: 'DEMO-SEED',
        },
      });
    }
  }

  // Deduplicate available ids
  const unique = [...new Set(availableItemIds)];
  console.log(
    `  purchase+stock: PO-DEMO-001/002, inventory units seeded, ${unique.length} main-shop items tracked for sales`,
  );
  return { availableItemIds: unique };
}
