import { DEMO, DEMO_MAIN_GALLERY_SERIAL_PREFIX } from '../demo-ids.js';
import type { SeedClients } from '../prisma-clients.js';

const CONTACTS = [
  {
    id: 'a1000000-0000-4000-8000-000000000f01',
    name: 'Neighbor Shop Remera',
    phone: '+250788200001',
    type: 'SHOP',
  },
  {
    id: 'a1000000-0000-4000-8000-000000000f02',
    name: 'Kevin Rental Client',
    phone: '+250788200002',
    type: 'RENTAL',
  },
  {
    id: 'a1000000-0000-4000-8000-000000000f03',
    name: 'Solange Consignment',
    phone: '+250788200003',
    type: 'RENTAL',
  },
];

export async function seedContactsAndRentals(clients: SeedClients): Promise<void> {
  for (const c of CONTACTS) {
    await clients.inventory.contact.upsert({
      where: { id: c.id },
      update: {
        name: c.name,
        phone: c.phone,
        type: c.type,
      },
      create: {
        id: c.id,
        tenantId: DEMO.tenantId,
        shopId: DEMO.shops.main.id,
        name: c.name,
        phone: c.phone,
        type: c.type,
      },
    });
  }

  const available = await clients.inventory.inventoryItem.findMany({
    where: {
      tenantId: DEMO.tenantId,
      shopId: DEMO.shops.main.id,
      status: 'AVAILABLE',
      NOT: { serialNumber: { startsWith: DEMO_MAIN_GALLERY_SERIAL_PREFIX } },
    },
    take: 2,
    orderBy: { serialNumber: 'asc' },
  });

  if (available.length >= 1) {
    const rentalId = 'a1000000-0000-4000-8000-000000000f11';
    const existing = await clients.inventory.rentalAgreement.findUnique({
      where: { id: rentalId },
    });
    if (!existing) {
      await clients.inventory.rentalAgreement.create({
        data: {
          id: rentalId,
          tenantId: DEMO.tenantId,
          shopId: DEMO.shops.main.id,
          inventoryItemId: available[0].id,
          contactId: CONTACTS[1].id,
          personName: CONTACTS[1].name,
          personPhone: CONTACTS[1].phone,
          agreementType: 'OUTWARD_RENTAL',
          rentalFee: 25_000,
          status: 'ACTIVE',
          notes: 'Demo outward rental',
          createdById: DEMO.users.staff.id,
        },
      });
      await clients.inventory.inventoryItem.update({
        where: { id: available[0].id },
        data: { status: 'RENTED_OUT' },
      });
    }
  }

  if (available.length >= 2) {
    const rentalId = 'a1000000-0000-4000-8000-000000000f12';
    const existing = await clients.inventory.rentalAgreement.findUnique({
      where: { id: rentalId },
    });
    if (!existing) {
      await clients.inventory.rentalAgreement.create({
        data: {
          id: rentalId,
          tenantId: DEMO.tenantId,
          shopId: DEMO.shops.main.id,
          inventoryItemId: available[1].id,
          contactId: CONTACTS[0].id,
          personName: CONTACTS[0].name,
          personPhone: CONTACTS[0].phone,
          agreementType: 'INWARD_CONSIGNMENT',
          ownerAgreedCost: 400_000,
          status: 'ACTIVE',
          notes: 'Demo inward consignment',
          createdById: DEMO.users.manager.id,
        },
      });
      await clients.inventory.inventoryItem.update({
        where: { id: available[1].id },
        data: { status: 'RENTED_IN' },
      });
    }
  }

  console.log('  rentals: 3 contacts + up to 2 ACTIVE rental agreements');
}
