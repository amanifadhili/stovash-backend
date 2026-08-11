import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: 'postgresql://postgres:postgres@localhost:5432/electronic_shop',
    },
  },
});

async function main() {
  // Create tenant
  const tenant = await prisma.tenant.upsert({
    where: { id: 'tenant-1' },
    update: {},
    create: {
      id: 'tenant-1',
      name: 'Admin Tenant',
      status: 'ACTIVE',
    },
  });
  console.log('Created tenant:', tenant.id);

  // Create shop
  await prisma.shop.upsert({
    where: { id: 'shop-1' },
    update: {},
    create: {
      id: 'shop-1',
      tenantId: 'tenant-1',
      name: 'Main Shop',
      status: 'ACTIVE',
    },
  });
  console.log('Created shop: shop-1');

  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 10);
  await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      id: 'user-admin-1',
      tenantId: 'tenant-1',
      email: 'admin@example.com',
      password: hashedPassword,
      firstName: 'Admin',
      lastName: 'User',
      role: 'ADMIN',
      status: 'ACTIVE',
    },
  });
  console.log('Created user: admin@example.com');

  // Create work period
  await prisma.workPeriod.upsert({
    where: { id: 'workperiod-1' },
    update: {},
    create: {
      id: 'workperiod-1',
      shopId: 'shop-1',
      openedBy: 'user-admin-1',
      openedAt: new Date(),
      status: 'OPEN',
    },
  });
  console.log('Created work period: workperiod-1');

  // Create products
  await prisma.product.createMany({
    data: [
      { id: 'prod-1', tenantId: 'tenant-1', name: 'Gaming Laptop Pro', sku: 'SKU-001' },
      { id: 'prod-2', tenantId: 'tenant-1', name: 'Business Laptop', sku: 'SKU-002' },
      { id: 'prod-3', tenantId: 'tenant-1', name: 'UltraThin Notebook', sku: 'SKU-003' },
    ],
    skipDuplicates: true,
  });
  console.log('Created 3 products');

  // Create inventory items
  await prisma.inventoryItem.createMany({
    data: [
      { id: 'item-1', tenantId: 'tenant-1', shopId: 'shop-1', productId: 'prod-1', serialNumber: 'GL-001-001', purchaseCost: 899.99, status: 'AVAILABLE' },
      { id: 'item-2', tenantId: 'tenant-1', shopId: 'shop-1', productId: 'prod-1', serialNumber: 'GL-001-002', purchaseCost: 899.99, status: 'AVAILABLE' },
      { id: 'item-3', tenantId: 'tenant-1', shopId: 'shop-1', productId: 'prod-2', serialNumber: 'BL-002-001', purchaseCost: 549.99, status: 'AVAILABLE' },
    ],
    skipDuplicates: true,
  });
  console.log('Created 3 inventory items');
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
