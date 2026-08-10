import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { ProcessPosSaleHandler } from '../commands/handlers/process-pos-sale.handler.js';
import { ProcessPosSaleCommand } from '../commands/impl/process-pos-sale.command.js';
import { prisma } from '@electronic-shop/database';

describe('ProcessPosSale Integration', () => {
  let app: INestApplication;
  let handler: ProcessPosSaleHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CqrsModule],
      providers: [ProcessPosSaleHandler],
    }).compile();

    app = module.createNestApplication();
    handler = module.get<ProcessPosSaleHandler>(ProcessPosSaleHandler);
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  beforeEach(async () => {
    // Clean up test data
    await prisma.inventoryItem.deleteMany();
    await prisma.product.deleteMany();
    await prisma.workPeriod.deleteMany();
    await prisma.shop.deleteMany();
    await prisma.tenant.deleteMany();
  });

  it('should process a POS sale and update inventory status', async () => {
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

    const product = await prisma.product.create({
      data: { tenantId: tenant.id, name: 'Test Product', code: 'PROD1', sellingPrice: 100 }
    });

    const inventoryItem = await prisma.inventoryItem.create({
      data: {
        tenantId: tenant.id,
        shopId: shop.id,
        productId: product.id,
        serialNumber: 'SN001',
        status: 'AVAILABLE',
        costPrice: 50,
        sellingPrice: 100
      }
    });

    const command = new ProcessPosSaleCommand(
      {
        items: [{ inventoryItemId: inventoryItem.id, quantity: 1, unitPrice: 100 }],
        totalAmount: 100
      },
      { traceId: 'test-trace', tenantId: tenant.id, shopId: shop.id, userId: 'test-user' }
    );

    const result = await handler.execute(command);

    expect(result.status).toBe('success');

    // Verify inventory item status changed to SOLD
    const updatedItem = await prisma.inventoryItem.findUnique({ where: { id: inventoryItem.id } });
    expect(updatedItem?.status).toBe('SOLD');
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

    const command = new ProcessPosSaleCommand(
      {
        items: [],
        totalAmount: 0
      },
      { traceId: 'test-trace', tenantId: tenant.id, shopId: shop.id, userId: 'test-user' }
    );

    const result = await handler.execute(command);

    expect(result.status).toBe('error');
    expect(result.errorCode).toBe('WORK_PERIOD_CLOSED');
  });
});
