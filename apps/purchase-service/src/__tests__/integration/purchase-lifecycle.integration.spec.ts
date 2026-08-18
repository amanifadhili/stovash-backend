/// <reference types="jest" />

import { Test, TestingModule } from '@nestjs/testing';
import { CqrsModule } from '@nestjs/cqrs';
import { of } from 'rxjs';

import { CreatePurchaseHandler } from '../../commands/handlers/create-purchase.handler';
import { ConfirmPurchaseHandler } from '../../commands/handlers/confirm-purchase.handler';
import { ConfirmPurchaseUnitHandler } from '../../commands/handlers/confirm-purchase-unit.handler';
import { RecordPurchasePaymentHandler } from '../../commands/handlers/record-purchase-payment.handler';
import { CreatePurchaseReceivingHandler } from '../../commands/handlers/create-purchase-receiving.handler';
import { AddReceivedItemsHandler } from '../../commands/handlers/add-received-items.handler';
import { AddReceivedItemCostHandler } from '../../commands/handlers/add-received-item-cost.handler';

import { CreatePurchaseCommand } from '../../commands/impl/create-purchase.command';
import { ConfirmPurchaseCommand } from '../../commands/impl/confirm-purchase.command';
import { RecordPurchasePaymentCommand } from '../../commands/impl/record-purchase-payment.command';
import { CreatePurchaseReceivingCommand } from '../../commands/impl/create-purchase-receiving.command';
import { AddReceivedItemsCommand } from '../../commands/impl/add-received-items.command';
import { AddReceivedItemCostCommand } from '../../commands/impl/add-received-item-cost.command';

import { prisma } from '../../database/client.js';

class CapturingEventBus {
  events: Array<{ event: any; routingKey: string }> = [];
  async publish(event: any, routingKey: string): Promise<boolean> {
    this.events.push({ event, routingKey });
    return true;
  }
  connect() {
    return Promise.resolve();
  }
  close() {
    return Promise.resolve();
  }
  isConnected() {
    return true;
  }
  createConsumer() {
    return {
      connect: async () => undefined,
      startConsuming: async () => undefined,
      close: async () => undefined,
      registerHandler: () => undefined,
    };
  }
  registerHandler() {}
  startConsuming() {
    return Promise.resolve();
  }
  startAllConsumers() {
    return Promise.resolve();
  }
}

describe('Purchase lifecycle integration (Phase 4)', () => {
  const ctx: any = {
    tenantId: 'tenant-purchase-test',
    shopId: 'shop-purchase-test',
    userId: 'user-purchase-test',
    userName: 'Buyer Tester',
    traceId: 'trace-purchase-test',
    email: 'buyer@test.com',
  };

  let createHandler: CreatePurchaseHandler;
  let confirmHandler: ConfirmPurchaseHandler;
  let unitConfirmHandler: ConfirmPurchaseUnitHandler;
  let payHandler: RecordPurchasePaymentHandler;
  let createReceivingHandler: CreatePurchaseReceivingHandler;
  let addReceivedItemsHandler: AddReceivedItemsHandler;
  let addReceivedItemCostHandler: AddReceivedItemCostHandler;
  let eventBus: CapturingEventBus;
  const payableOutstandingMinorByPurchase = new Map<string, number>();

  const inventoryClientMock = {
    send: jest.fn(() =>
      of({
        status: 'success',
        data: { applied: 1, skippedIdempotent: 0 },
      }),
    ),
  };

  const accountingClientMock = {
    send: jest.fn((pattern: any, data: any) => {
      if (pattern?.cmd === 'PostPurchasePayable') {
        const purchaseId = String(data?.payload?.purchaseId || '');
        const amountMinor = Number(data?.payload?.amountMinor || 0);
        if (!payableOutstandingMinorByPurchase.has(purchaseId)) {
          payableOutstandingMinorByPurchase.set(purchaseId, amountMinor);
        }
        return of({
          status: 'success',
          data: {
            purchaseId,
            financialTransaction: { id: `ft-ap-${purchaseId}` },
            payable: { outstandingMinor: String(payableOutstandingMinorByPurchase.get(purchaseId) || 0) },
          },
        });
      }
      return of({
        status: 'success',
        data: { ok: true },
      });
    }),
  };

  const treasuryClientMock = {
    send: jest.fn((_pattern: any, data: any) => {
      const payload = data?.payload || {};
      if (payload.movementType === 'PURCHASE_PAYMENT') {
        const purchaseId = String(payload.obligationSourceId || '');
        const amountMinor = Number(payload.amountMinor || 0);
        const current = payableOutstandingMinorByPurchase.get(purchaseId) || 0;
        payableOutstandingMinorByPurchase.set(purchaseId, Math.max(0, current - amountMinor));
      }
      return of({
        status: 'success',
        data: {
          id: `mv-${Date.now()}`,
          financialTransactionId: `ft-${Date.now()}`,
          journalId: `jr-${Date.now()}`,
        },
      });
    }),
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CqrsModule],
      providers: [
        CreatePurchaseHandler,
        ConfirmPurchaseHandler,
        ConfirmPurchaseUnitHandler,
        RecordPurchasePaymentHandler,
        CreatePurchaseReceivingHandler,
        AddReceivedItemsHandler,
        AddReceivedItemCostHandler,
        { provide: 'EVENT_BUS', useClass: CapturingEventBus },
        { provide: 'INVENTORY_SERVICE', useValue: inventoryClientMock },
        { provide: 'SUPPLIER_SERVICE', useValue: { send: () => of({ status: 'error', message: 'not used' }) } },
        { provide: 'ACCOUNTING_SERVICE', useValue: accountingClientMock },
        { provide: 'TREASURY_SERVICE', useValue: treasuryClientMock },
      ],
    }).compile();

    createHandler = module.get(CreatePurchaseHandler);
    confirmHandler = module.get(ConfirmPurchaseHandler);
    unitConfirmHandler = module.get(ConfirmPurchaseUnitHandler);
    payHandler = module.get(RecordPurchasePaymentHandler);
    createReceivingHandler = module.get(CreatePurchaseReceivingHandler);
    addReceivedItemsHandler = module.get(AddReceivedItemsHandler);
    addReceivedItemCostHandler = module.get(AddReceivedItemCostHandler);
    eventBus = module.get('EVENT_BUS');
  });

  beforeEach(async () => {
    await prisma.purchaseHistory.deleteMany();
    await prisma.purchasePayment.deleteMany();
    await prisma.purchaseReceivedItemCost.deleteMany();
    await prisma.purchaseReceivedItem.deleteMany();
    await prisma.purchaseReceiving.deleteMany();
    await prisma.purchaseItem.deleteMany();
    await prisma.purchase.deleteMany();
    eventBus.events = [];
    payableOutstandingMinorByPurchase.clear();
    jest.clearAllMocks();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it('unpaid purchase: stock in, AP > 0, treasury unchanged (no payment called)', async () => {
    const created = await createHandler.execute(
      new CreatePurchaseCommand(
        {
          supplierName: 'Supplier A',
          currency: 'RWF',
          createdById: ctx.userId,
          createdByName: ctx.userName,
          traceId: ctx.traceId,
          tenantId: ctx.tenantId,
          shopId: ctx.shopId,
          items: [
            {
              productId: 'prod-device-1',
              productName: 'Device 1',
              productSku: 'DEV-1',
              productTracking: 'SERIALIZED',
              orderedQty: 1,
              unitPrice: 100000,
              discountAmount: 0,
              discountType: 'FIXED',
              otherCosts: 0,
              units: [
                {
                  serialNumber: 'SN-P4-1',
                  condition: 'GOOD',
                  unitAcquisitionCost: 100000,
                  received: true,
                },
              ],
            },
          ],
        } as any,
        ctx,
      ),
    );

    expect(created.status).toBe('success');
    const purchaseId = created.data.id as string;
    let purchase = await prisma.purchase.findUnique({ where: { id: purchaseId } });
    expect(purchase?.commercialStatus).toBe('DRAFT');

    // CreatePurchase is intake only in Phase 4: no stock and no AP posting.
    expect(inventoryClientMock.send).not.toHaveBeenCalled();
    expect(accountingClientMock.send).not.toHaveBeenCalled();
    expect(treasuryClientMock.send).not.toHaveBeenCalled();

    // Explicit confirm posts AP.
    const confirmed = await confirmHandler.execute(new ConfirmPurchaseCommand({ purchaseId }, ctx));
    expect(confirmed.status).toBe('success');

    // Explicit receiving flow stocks inventory (second step, not CreatePurchase).
    const receiving = await createReceivingHandler.execute(
      new CreatePurchaseReceivingCommand(
        {
          purchaseId,
          receivingNumber: `GRN-P4-${Date.now()}`,
          receivedAtShop: ctx.shopId,
          notes: 'phase4 test receive',
        } as any,
        ctx,
      ),
    );
    expect(receiving.status).toBe('success');

    const purchaseItems = await prisma.purchaseItem.findMany({ where: { purchaseId }, orderBy: { createdAt: 'asc' } });
    const firstItem = purchaseItems[0];
    const add = await addReceivedItemsHandler.execute(
      new AddReceivedItemsCommand(
        {
          receivingId: receiving.data.id,
          items: [
            {
              purchaseItemId: firstItem.id,
              serialNumber: 'SN-P4-1',
              condition: 'GOOD',
              unitAcquisitionCost: 100000,
              received: true,
            },
          ],
        } as any,
        ctx,
      ),
    );
    expect(add.status).toBe('success');

    purchase = await prisma.purchase.findUnique({ where: { id: purchaseId } });
    expect(purchase?.receivingStatus).not.toBe('NOT_RECEIVED');
    expect(accountingClientMock.send).toHaveBeenCalled();
    expect(inventoryClientMock.send).toHaveBeenCalled();
    expect(treasuryClientMock.send).not.toHaveBeenCalled();
  });

  it('partial/full supplier payment: idempotent RecordPurchasePayment does not double-write payment history/audit', async () => {
    const created = await createHandler.execute(
      new CreatePurchaseCommand(
        {
          supplierName: 'Supplier B',
          currency: 'RWF',
          createdById: ctx.userId,
          createdByName: ctx.userName,
          traceId: ctx.traceId,
          tenantId: ctx.tenantId,
          shopId: ctx.shopId,
          items: [
            {
              productId: 'prod-device-2',
              productName: 'Device 2',
              productSku: 'DEV-2',
              productTracking: 'SERIALIZED',
              orderedQty: 1,
              unitPrice: 200000,
              discountAmount: 0,
              discountType: 'FIXED',
              otherCosts: 0,
              units: [
                {
                  serialNumber: 'SN-P4-2',
                  condition: 'GOOD',
                  unitAcquisitionCost: 200000,
                  received: true,
                },
              ],
            },
          ],
        } as any,
        ctx,
      ),
    );

    const purchaseId = created.data.id as string;
    await confirmHandler.execute(new ConfirmPurchaseCommand({ purchaseId }, ctx));
    const purchase = await prisma.purchase.findUnique({ where: { id: purchaseId } });
    expect(purchase?.commercialStatus).toBe('CONFIRMED');
    expect(purchase?.amountOutstanding).toBeCloseTo(200000);

    const idempotencyKey = `CBE-PAY:${purchaseId}:line-1`;
    const amount = 80000; // partial

    const first = await payHandler.execute(
      new RecordPurchasePaymentCommand(
        {
          purchaseId,
          idempotencyKey,
          amount,
          currency: 'RWF',
          exchangeRate: 1.0,
          paymentMethod: 'CASH',
          accountId: 'cash-1',
          reference: 'ref-p4-partial',
          paidById: ctx.userId,
          paidByName: ctx.userName,
        } as any,
        ctx,
      ),
    );

    expect(first.status).toBe('success');
    const savedPayment = await prisma.purchasePayment.findFirst({ where: { purchaseId } });
    expect(savedPayment?.accountingRef).toBeTruthy();
    const financeRefs = JSON.parse(String(savedPayment?.accountingRef || '{}'));
    expect(financeRefs.treasuryMovementId).toBeTruthy();
    expect(financeRefs.treasuryFinancialTransactionId).toBeTruthy();

    const second = await payHandler.execute(
      new RecordPurchasePaymentCommand(
        {
          purchaseId,
          idempotencyKey,
          amount,
          currency: 'RWF',
          exchangeRate: 1.0,
          paymentMethod: 'CASH',
          accountId: 'cash-1',
          reference: 'ref-p4-partial',
          paidById: ctx.userId,
          paidByName: ctx.userName,
        } as any,
        ctx,
      ),
    );

    expect(second.status).toBe('success');

    const paymentsCount = await prisma.purchasePayment.count({ where: { purchaseId } });
    expect(paymentsCount).toBe(1);

    const history = await prisma.purchaseHistory.findMany({ where: { purchaseId } });
    const paymentEvents = history.filter((h) => h.eventType === 'PAYMENT_RECEIVED');
    expect(paymentEvents).toHaveLength(1);

    const updated = await prisma.purchase.findUnique({ where: { id: purchaseId } });
    expect(updated?.amountPaid).toBeCloseTo(amount);
    expect(updated?.paymentStatus).toBe('PARTIALLY_PAID');
    expect(updated?.amountOutstanding).toBeCloseTo(120000);
  });

  it('rolls attributable extras into unit acquisition cost basis', async () => {
    const created = await createHandler.execute(
      new CreatePurchaseCommand(
        {
          supplierName: 'Supplier Extras',
          currency: 'RWF',
          createdById: ctx.userId,
          createdByName: ctx.userName,
          traceId: ctx.traceId,
          tenantId: ctx.tenantId,
          shopId: ctx.shopId,
          items: [
            {
              productId: 'prod-device-extra',
              productName: 'Device Extra',
              productSku: 'DEV-X',
              productTracking: 'SERIALIZED',
              orderedQty: 1,
              unitPrice: 100000,
              discountAmount: 0,
              discountType: 'FIXED',
              otherCosts: 0,
            },
          ],
        } as any,
        ctx,
      ),
    );
    const purchaseId = created.data.id as string;
    await confirmHandler.execute(new ConfirmPurchaseCommand({ purchaseId }, ctx));
    const receiving = await createReceivingHandler.execute(
      new CreatePurchaseReceivingCommand(
        {
          purchaseId,
          receivingNumber: `GRN-P4-X-${Date.now()}`,
          receivedAtShop: ctx.shopId,
        } as any,
        ctx,
      ),
    );
    expect(receiving.status).toBe('success');
    const item = await prisma.purchaseItem.findFirst({ where: { purchaseId } });
    const add = await addReceivedItemsHandler.execute(
      new AddReceivedItemsCommand(
        {
          receivingId: receiving.data.id,
          items: [
            {
              purchaseItemId: item?.id,
              serialNumber: 'SN-P4-X-1',
              condition: 'GOOD',
              unitAcquisitionCost: 100000,
              received: true,
            },
          ],
        } as any,
        ctx,
      ),
    );
    expect(add.status).toBe('success');
    const receivedItem = add.data.items[0];

    const extra = await addReceivedItemCostHandler.execute(
      new AddReceivedItemCostCommand(
        {
          receivedItemId: receivedItem.id,
          label: 'Import shipping',
          amount: 10000,
          notes: 'phase4 extra cost',
        } as any,
        ctx,
      ),
    );
    expect(extra.status).toBe('success');

    const updatedReceived = await prisma.purchaseReceivedItem.findUnique({ where: { id: receivedItem.id } });
    expect(updatedReceived?.additionalCost).toBeCloseTo(10000);
    const updatedItem = await prisma.purchaseItem.findUnique({ where: { id: item?.id } });
    expect(updatedItem?.acquisitionCost).toBeCloseTo(110000);
  });

  it('rejects payment amount greater than remaining supplier payable', async () => {
    const created = await createHandler.execute(
      new CreatePurchaseCommand(
        {
          supplierName: 'Supplier C',
          currency: 'RWF',
          createdById: ctx.userId,
          createdByName: ctx.userName,
          traceId: ctx.traceId,
          tenantId: ctx.tenantId,
          shopId: ctx.shopId,
          items: [
            {
              productId: 'prod-device-3',
              productName: 'Device 3',
              productSku: 'DEV-3',
              productTracking: 'SERIALIZED',
              orderedQty: 1,
              unitPrice: 50000,
              discountAmount: 0,
              discountType: 'FIXED',
              otherCosts: 0,
              units: [
                {
                  serialNumber: 'SN-P4-3',
                  condition: 'GOOD',
                  unitAcquisitionCost: 50000,
                  received: true,
                },
              ],
            },
          ],
        } as any,
        ctx,
      ),
    );

    const purchaseId = created.data.id as string;
    await confirmHandler.execute(new ConfirmPurchaseCommand({ purchaseId }, ctx));
    const purchase = await prisma.purchase.findUnique({ where: { id: purchaseId } });
    const tooMuch = (purchase?.grandTotal || 0) + 5000;

    const result = await payHandler.execute(
      new RecordPurchasePaymentCommand(
        {
          purchaseId,
          idempotencyKey: `CBE-PAY:${purchaseId}:line-oom`,
          amount: tooMuch,
          currency: 'RWF',
          exchangeRate: 1.0,
          paymentMethod: 'CASH',
          accountId: 'cash-1',
          reference: 'ref-p4-oom',
          paidById: ctx.userId,
          paidByName: ctx.userName,
        } as any,
        ctx,
      ),
    );

    expect(result.status).toBe('error');
    expect(result.errorCode).toBe('BUSINESS_RULE_VIOLATION');

    const paymentsCount = await prisma.purchasePayment.count({ where: { purchaseId } });
    expect(paymentsCount).toBe(0);
  });
});

