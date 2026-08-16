import { DEMO } from '../demo-ids.js';
import type { SeedClients } from '../prisma-clients.js';

export async function seedTenant(clients: SeedClients): Promise<void> {
  await clients.tenant.tenant.upsert({
    where: { id: DEMO.tenantId },
    update: { name: DEMO.tenantName, status: 'ACTIVE' },
    create: {
      id: DEMO.tenantId,
      name: DEMO.tenantName,
      status: 'ACTIVE',
    },
  });

  await clients.tenant.subscription.upsert({
    where: { tenantId: DEMO.tenantId },
    update: { plan: 'FREE', status: 'ACTIVE' },
    create: {
      id: DEMO.subscriptionId,
      tenantId: DEMO.tenantId,
      plan: 'FREE',
      status: 'ACTIVE',
    },
  });

  for (const shop of [DEMO.shops.main, DEMO.shops.branch]) {
    await clients.tenant.shop.upsert({
      where: { id: shop.id },
      update: {
        name: shop.name,
        location: shop.location,
        status: 'ACTIVE',
        tenantId: DEMO.tenantId,
      },
      create: {
        id: shop.id,
        tenantId: DEMO.tenantId,
        name: shop.name,
        location: shop.location,
        status: 'ACTIVE',
      },
    });
  }

  const staffDefs = [
    { staffId: DEMO.staff.admin, email: DEMO.users.admin.email, shopId: DEMO.shops.main.id, user: DEMO.users.admin },
    { staffId: DEMO.staff.manager, email: DEMO.users.manager.email, shopId: DEMO.shops.main.id, user: DEMO.users.manager },
    { staffId: DEMO.staff.staff, email: DEMO.users.staff.email, shopId: DEMO.shops.main.id, user: DEMO.users.staff },
    { staffId: DEMO.staff.accountant, email: DEMO.users.accountant.email, shopId: DEMO.shops.main.id, user: DEMO.users.accountant },
  ];

  for (const row of staffDefs) {
    const identityUser = await clients.identity.user.findUnique({
      where: { email: row.email },
    });
    if (!identityUser) {
      throw new Error(`Identity user missing for ${row.email} — run identity seed first`);
    }

    await clients.tenant.staff.upsert({
      where: { userId: identityUser.id },
      update: {
        tenantId: DEMO.tenantId,
        shopId: row.shopId,
        firstName: row.user.firstName,
        lastName: row.user.lastName,
        email: row.user.email,
        role: row.user.role === 'ACCOUNTANT' ? 'STAFF' : row.user.role,
        status: 'ACTIVE',
      },
      create: {
        id: row.staffId,
        tenantId: DEMO.tenantId,
        shopId: row.shopId,
        userId: identityUser.id,
        firstName: row.user.firstName,
        lastName: row.user.lastName,
        email: row.user.email,
        role: row.user.role === 'ACCOUNTANT' ? 'STAFF' : row.user.role,
        status: 'ACTIVE',
      },
    });
  }

  const wpPairs = [
    { id: DEMO.workPeriods.mainTenant, shopId: DEMO.shops.main.id },
    { id: DEMO.workPeriods.branchTenant, shopId: DEMO.shops.branch.id },
  ];

  for (const wp of wpPairs) {
    const existing = await clients.tenant.workPeriod.findFirst({
      where: { shopId: wp.shopId, status: 'OPEN' },
    });
    if (existing) continue;

    await clients.tenant.workPeriod.upsert({
      where: { id: wp.id },
      update: { status: 'OPEN' },
      create: {
        id: wp.id,
        shopId: wp.shopId,
        openedBy: DEMO.staff.admin,
        status: 'OPEN',
      },
    });
  }

  console.log('  tenant: org, FREE subscription, 2 shops, staff, open work periods');
}
