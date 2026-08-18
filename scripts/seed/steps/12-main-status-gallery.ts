/**
 * Dedicated Kigali Main units for every Devices filter status.
 * Engine history never sells these serials (DEMO_MAIN_GALLERY_SERIAL_PREFIX).
 * Idempotent: re-run restores gallery statuses without unselling engine stock.
 */
import { DEMO, DEMO_MAIN_GALLERY_SERIAL_PREFIX } from '../demo-ids.js';
import type { SeedClients } from '../prisma-clients.js';
import type { CatalogProduct } from './06-catalog.js';

const GALLERY: Array<{ status: string; count: number; notes: string }> = [
  { status: 'AVAILABLE', count: 28, notes: 'Kigali Main floor — Available' },
  { status: 'RESERVED', count: 4, notes: 'Kigali Main — Reserved hold' },
  { status: 'RENTED_IN', count: 4, notes: 'Kigali Main — Lend-IN consignment' },
  { status: 'RENTED_OUT', count: 4, notes: 'Kigali Main — Lend-OUT' },
  { status: 'RETURNED', count: 4, notes: 'Kigali Main — customer return' },
  { status: 'DAMAGED', count: 3, notes: 'Kigali Main — damaged' },
  { status: 'LOST', count: 2, notes: 'Kigali Main — lost' },
  { status: 'STOLEN', count: 2, notes: 'Kigali Main — stolen' },
  { status: 'RECEIVED', count: 2, notes: 'Kigali Main — received, not yet Available' },
  { status: 'CREATED', count: 2, notes: 'Kigali Main — created, not yet received' },
];

const CONTACTS = {
  shop: 'a1000000-0000-4000-8000-000000000f01',
  rental: 'a1000000-0000-4000-8000-000000000f02',
};

function galleryItemId(n: number): string {
  return `a1000000-0000-4000-8000-00000011${n.toString(16).padStart(4, '0')}`;
}

function galleryMovementId(n: number): string {
  return `a1000000-0000-4000-8000-00000012${n.toString(16).padStart(4, '0')}`;
}

function galleryRentalId(n: number): string {
  return `a1000000-0000-4000-8000-00000013${n.toString(16).padStart(4, '0')}`;
}

function mainSerializedProducts(products: CatalogProduct[]): CatalogProduct[] {
  return products.filter((p, i) => p.trackingMethod === 'SERIALIZED' && i % 2 === 0);
}

export async function seedMainStatusGallery(
  clients: SeedClients,
  products: CatalogProduct[],
): Promise<void> {
  const pool = mainSerializedProducts(products);
  if (pool.length === 0) {
    console.warn('  main gallery: no serialized Main products — skipped');
    return;
  }

  const shopId = DEMO.shops.main.id;
  let n = 0;
  const counts: Record<string, number> = {};

  for (const row of GALLERY) {
    for (let i = 0; i < row.count; i++) {
      n += 1;
      const product = pool[(n - 1) % pool.length];
      const id = galleryItemId(n);
      const serial = `${DEMO_MAIN_GALLERY_SERIAL_PREFIX}${String(n).padStart(3, '0')}`;
      const unitImages = product.imageUrl ? [product.imageUrl] : [];

      await clients.inventory.inventoryItem.upsert({
        where: {
          tenantId_serialNumber: { tenantId: DEMO.tenantId, serialNumber: serial },
        },
        update: {
          shopId,
          productId: product.id,
          purchaseCost: product.cost,
          sellingPrice: product.sellingPrice,
          brandId: product.brandId,
          categoryId: product.categoryId,
          name: product.name,
          imageUrl: product.imageUrl,
          images: unitImages,
          status: row.status,
          notes: row.notes,
          deletedAt: null,
        },
        create: {
          id,
          tenantId: DEMO.tenantId,
          shopId,
          productId: product.id,
          serialNumber: serial,
          purchaseCost: product.cost,
          sellingPrice: product.sellingPrice,
          brandId: product.brandId,
          categoryId: product.categoryId,
          name: product.name,
          status: row.status,
          notes: row.notes,
          imageUrl: product.imageUrl,
          images: unitImages,
          createdBy: DEMO.users.admin.id,
        },
      });

      const movId = galleryMovementId(n);
      const movExists = await clients.inventory.inventoryMovement.findUnique({
        where: { id: movId },
      });
      if (!movExists) {
        await clients.inventory.inventoryMovement.create({
          data: {
            id: movId,
            tenantId: DEMO.tenantId,
            shopId,
            inventoryItemId: id,
            movementType: 'IN',
            quantity: 1,
            referenceType: 'PURCHASE',
            createdBy: DEMO.users.admin.id,
          },
        });
      }

      if (row.status === 'RENTED_IN' || row.status === 'RENTED_OUT') {
        const rentalId = galleryRentalId(n);
        const existing = await clients.inventory.rentalAgreement.findUnique({
          where: { id: rentalId },
        });
        const inward = row.status === 'RENTED_IN';
        const contactId = inward ? CONTACTS.shop : CONTACTS.rental;
        if (!existing) {
          await clients.inventory.rentalAgreement.create({
            data: {
              id: rentalId,
              tenantId: DEMO.tenantId,
              shopId,
              inventoryItemId: id,
              contactId,
              personName: inward ? 'Neighbor Shop Remera' : 'Kevin Rental Client',
              personPhone: inward ? '+250788200001' : '+250788200002',
              agreementType: inward ? 'INWARD_CONSIGNMENT' : 'OUTWARD_RENTAL',
              rentalFee: inward ? undefined : 25_000,
              ownerAgreedCost: inward ? 400_000 : undefined,
              status: 'ACTIVE',
              notes: row.notes,
              createdById: DEMO.users.staff.id,
            },
          });
        }
      }

      counts[row.status] = (counts[row.status] ?? 0) + 1;
    }
  }

  const summary = Object.entries(counts)
    .map(([status, count]) => `${status}:${count}`)
    .join(' ');
  console.log(`  main gallery: ${n} Kigali Main units (${summary})`);
}
