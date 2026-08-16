import { DEMO } from '../demo-ids.js';
import type { SeedClients } from '../prisma-clients.js';

const CUSTOMERS = [
  {
    id: 'a1000000-0000-4000-8000-000000000d01',
    name: 'Credit Customer Ltd',
    phone: '+250788100001',
    email: 'credit@customer.example',
  },
  {
    id: 'a1000000-0000-4000-8000-000000000d02',
    name: 'Jean Uwimana',
    phone: '+250788100002',
    email: 'jean@example.com',
  },
  {
    id: 'a1000000-0000-4000-8000-000000000d03',
    name: 'Marie Mukamana',
    phone: '+250788100003',
    email: 'marie@example.com',
  },
  {
    id: 'a1000000-0000-4000-8000-000000000d04',
    name: 'Boutique Kacyiru',
    phone: '+250788100004',
    email: 'boutique@example.com',
  },
  {
    id: 'a1000000-0000-4000-8000-000000000d05',
    name: 'Grace Ingabire',
    phone: '+250788100005',
    email: 'grace@example.com',
  },
];

export async function seedCustomers(clients: SeedClients): Promise<void> {
  for (const c of CUSTOMERS) {
    await clients.customer.customer.upsert({
      where: { id: c.id },
      update: {
        name: c.name,
        phone: c.phone,
        email: c.email,
        status: 'ACTIVE',
      },
      create: {
        id: c.id,
        tenantId: DEMO.tenantId,
        shopId: DEMO.shops.main.id,
        name: c.name,
        phone: c.phone,
        email: c.email,
        balance: c.id.endsWith('d01') ? 500_000 : 0,
        status: 'ACTIVE',
      },
    });

    const contactId = c.id.replace('000000000d', '000000000e');
    const existing = await clients.customer.customerContact.findUnique({
      where: { id: contactId },
    });
    if (!existing && c.phone) {
      await clients.customer.customerContact.create({
        data: {
          id: contactId,
          customerId: c.id,
          type: 'PHONE',
          value: c.phone,
          isPrimary: true,
        },
      });
    }
  }

  console.log(`  customer: ${CUSTOMERS.length} customers`);
}
