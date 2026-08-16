import { DEMO } from '../demo-ids.js';
import type { SeedClients } from '../prisma-clients.js';

export async function seedSuppliers(clients: SeedClients): Promise<void> {
  for (const s of DEMO.suppliers) {
    await clients.supplier.supplier.upsert({
      where: { id: s.id },
      update: {
        name: s.name,
        email: s.email,
        phone: s.phone,
        address: s.address,
        status: 'ACTIVE',
        tenantId: DEMO.tenantId,
        shopId: DEMO.shops.main.id,
        sharedShopIds: [DEMO.shops.branch.id],
      },
      create: {
        id: s.id,
        tenantId: DEMO.tenantId,
        shopId: DEMO.shops.main.id,
        sharedShopIds: [DEMO.shops.branch.id],
        name: s.name,
        email: s.email,
        phone: s.phone,
        address: s.address,
        balance: 0,
        status: 'ACTIVE',
      },
    });

    const existingContact = await clients.supplier.supplierContact.findFirst({
      where: { supplierId: s.id, type: 'PHONE', value: s.phone },
    });
    if (!existingContact) {
      await clients.supplier.supplierContact.create({
        data: {
          id: s.id.replace('00000000040', '00000000041'),
          supplierId: s.id,
          type: 'PHONE',
          value: s.phone,
          isPrimary: true,
        },
      });
    }

    await clients.supplier.supplierBalance.upsert({
      where: {
        supplierId_tenantId: { supplierId: s.id, tenantId: DEMO.tenantId },
      },
      update: { amount: 250_000, currency: 'RWF' },
      create: {
        id: s.id.replace('00000000040', '00000000042'),
        supplierId: s.id,
        tenantId: DEMO.tenantId,
        amount: 250_000,
        currency: 'RWF',
      },
    });
  }

  console.log(`  supplier: ${DEMO.suppliers.length} suppliers with contacts + balances`);
}
