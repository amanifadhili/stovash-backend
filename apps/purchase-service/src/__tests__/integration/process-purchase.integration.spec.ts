import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { ProcessPurchaseHandler } from '../commands/handlers/process-purchase.handler.js';
import { ProcessPurchaseCommand } from '../commands/impl/process-purchase.command.js';
import { prisma } from '@electronic-shop/database';

describe('ProcessPurchase Integration', () => {
  let app: INestApplication;
  let handler: ProcessPurchaseHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CqrsModule],
      providers: [ProcessPurchaseHandler],
    }).compile();

    app = module.createNestApplication();
    handler = module.get<ProcessPurchaseHandler>(ProcessPurchaseHandler);
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  beforeEach(async () => {
    // Clean up test data
    await prisma.purchaseOrder.deleteMany();
    await prisma.purchaseOrderItem.deleteMany();
    await prisma.inventoryItem.deleteMany();
    await prisma.product.deleteMany();
    await prisma.supplier.deleteMany();
    await prisma.workPeriod.deleteMany();
    await prisma.shop.deleteMany();
    await prisma.tenant.deleteMany();
  });

  it('should process a purchase and create inventory items', async () => {
    // Setup test data
    const tenant = await prisma.tenant.create({
      data: { name: 'Test Tenant', code: 'TEST' }
    });

    const shop = await prisma.shop.create({
      data: { tenantId: tenant.id, name: 'Test Shop', code: 'SHOP1' }
    });

    const workPeriod = await prisma.workPeriod.create({
      data: { tenantId: tenant.id, shopId: shop.id, status: 'OPEN' }
    });

    const supplier = await prisma.supplier.create({
      data: { tenantId: tenant.id, name: 'Test Supplier', email: 'supplier@example.com' }
    });

    const product = await prisma.product.create({
      data: { tenantId: tenant.id, name: 'Test Product', code: 'PROD1', costPrice: 50 }
    });

    const command = new ProcessPurchaseCommand(
      {
        supplierId: supplier.id,
        items: [
          { productId: product.id, quantity: 1, unitCost: 50 }
        ],
        totalCost: 50
      },
      { traceId: 'test-trace', tenantId: tenant.id, shopId: shop.id, userId: 'test-user' }
    );

    const result = await handler.execute(command);

    expect(result.status).toBe('success');

    // Verify purchase order was created
    const purchaseOrder = await prisma.purchaseOrder.findFirst({
      where: { supplierId: supplier.id },
      include: { items: true }
    });
    expect(purchaseOrder).toBeDefined();
    expect(purchaseOrder?.totalCost).toBe(50);
    expect(purchaseOrder?.items).toHaveLength(1);

    // Verify inventory item was created with RECEIVED status
    const inventoryItem = await prisma.inventoryItem.findFirst({
      where: { productId: product.id }
    });
    expect(inventoryItem).toBeDefined();
    expect(inventoryItem?.status).toBe('RECEIVED');
  });

  it('should fail when work period is closed', async () => {
    const tenant = await prisma.tenant.create({
      data: { name: 'Test Tenant', code: 'TEST' }
    });

    const shop = await prisma.shop.create({
      data: { tenantId: tenant.id, name: 'Test Shop', code: 'SHOP1' }
    });

    const workPeriod = await prisma.workPeriod.create({
      data: { tenantId: tenant.id, shopId: shop.id, status: 'CLOSED' }
    });

    const supplier = await prisma.supplier.create({
      data: { tenantId: tenant.id, name: 'Test Supplier', email: 'supplier@example.com' }
    });

    const command = new ProcessPurchaseCommand(
      {
        supplierId: supplier.id,
        items: [],
        totalCost: 0
      },
      { traceId: 'test-trace', tenantId: tenant.id, shopId: shop.id, userId: 'test-user' }
    );

    const result = await handler.execute(command);

    expect(result.status).toBe('error');
    expect(result.errorCode).toBe('WORK_PERIOD_CLOSED');
  });
});
