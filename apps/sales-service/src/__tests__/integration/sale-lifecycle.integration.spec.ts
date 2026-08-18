import { Test, TestingModule } from '@nestjs/testing';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateSaleHandler } from '../../commands/handlers/create-sale.handler.js';
import { ConfirmSaleHandler } from '../../commands/handlers/confirm-sale.handler.js';
import { RecordSalePaymentHandler } from '../../commands/handlers/record-sale-payment.handler.js';
import { FulfillSaleHandler } from '../../commands/handlers/fulfill-sale.handler.js';
import { CancelSaleHandler } from '../../commands/handlers/cancel-sale.handler.js';
import { CreateWarrantyHandler } from '../../commands/handlers/create-warranty.handler.js';
import { CreateSaleCommand, CreateSaleItemInput } from '../../commands/impl/create-sale.command.js';
import { ConfirmSaleCommand } from '../../commands/impl/confirm-sale.command.js';
import { RecordSalePaymentCommand } from '../../commands/impl/record-sale-payment.command.js';
import { FulfillSaleCommand } from '../../commands/impl/fulfill-sale.command.js';
import { CancelSaleCommand } from '../../commands/impl/cancel-sale.command.js';
import { CreateWarrantyCommand } from '../../commands/impl/create-warranty.command.js';
import { prisma } from '../../database/client.js';
import { of } from 'rxjs';

class CapturingEventBus {
  events: Array<{ event: any; routingKey: string }> = [];
  async publish(event: any, routingKey: string): Promise<boolean> {
    this.events.push({ event, routingKey });
    return true;
  }
  connect() { return Promise.resolve(); }
  close() { return Promise.resolve(); }
  isConnected() { return true; }
  createConsumer() {
    return {
      connect: async () => undefined,
      startConsuming: async () => undefined,
      close: async () => undefined,
      registerHandler: () => undefined,
    };
  }
  registerHandler() {}
  startConsuming() { return Promise.resolve(); }
  startAllConsumers() { return Promise.resolve(); }
}

const inventoryClientMock = {
  send: () =>
    of({
      status: 'success',
      data: { applied: 1, skippedIdempotent: 0 },
    }),
};

function treasuryMovementOk(id = 'mv-1') {
  return of({
    status: 'success',
    data: {
      id,
      financialTransactionId: `ft-${id}`,
      journalId: `je-${id}`,
    },
  });
}

describe('Sale lifecycle integration', () => {
  let createHandler: CreateSaleHandler;
  let confirmHandler: ConfirmSaleHandler;
  let payHandler: RecordSalePaymentHandler;
  let fulfillHandler: FulfillSaleHandler;
  let cancelHandler: CancelSaleHandler;
  let warrantyHandler: CreateWarrantyHandler;
  let eventBus: CapturingEventBus;

  const ctx: any = {
    tenantId: 'tenant-sale-test',
    shopId: 'shop-sale-test',
    userId: 'user-sale-test',
    traceId: 'trace-sale-test',
    email: 'seller@test.com',
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CqrsModule],
      providers: [
        CreateSaleHandler,
        ConfirmSaleHandler,
        RecordSalePaymentHandler,
        FulfillSaleHandler,
        CancelSaleHandler,
        CreateWarrantyHandler,
        { provide: 'EVENT_BUS', useClass: CapturingEventBus },
        { provide: 'INVENTORY_SERVICE', useValue: inventoryClientMock },
        { provide: 'ACCOUNTING_SERVICE', useValue: { send: () => of({ status: 'success', data: { ok: true } }) } },
        { provide: 'TREASURY_SERVICE', useValue: { send: () => treasuryMovementOk() } },
      ],
    }).compile();

    createHandler = module.get(CreateSaleHandler);
    confirmHandler = module.get(ConfirmSaleHandler);
    payHandler = module.get(RecordSalePaymentHandler);
    fulfillHandler = module.get(FulfillSaleHandler);
    cancelHandler = module.get(CancelSaleHandler);
    warrantyHandler = module.get(CreateWarrantyHandler);
    eventBus = module.get('EVENT_BUS');
  });

  beforeEach(async () => {
    await prisma.saleHistory.deleteMany();
    await prisma.saleWarranty.deleteMany();
    await prisma.customerReceivable.deleteMany();
    await prisma.saleReturnItem.deleteMany();
    await prisma.saleReturn.deleteMany();
    await prisma.salePayment.deleteMany();
    await prisma.saleItem.deleteMany();
    await prisma.sale.deleteMany();
    eventBus.events = [];
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  const baseItems: CreateSaleItemInput[] = [
    { productId: 'prod-laptop', inventoryItemId: 'inv-SN002', serialNumber: 'SN002', quantity: 1, unitPrice: 1000000, discountType: 'PERCENTAGE', discountAmount: 5, taxRate: 18 },
    { productId: 'prod-mouse', quantity: 2, unitPrice: 15000 },
  ];

  it('creates a DRAFT sale with totals computed from the lines', async () => {
    const result = await createHandler.execute(
      new CreateSaleCommand({ customerId: 'cus-001', customerName: 'Jean', items: baseItems }, ctx),
    );

    expect(result.status).toBe('success');
    const sale = result.data;

    expect(sale.orderNumber).toMatch(/^SAL-\d{4}-\d{6}$/);
    expect(sale.commercialStatus).toBe('DRAFT');
    expect(sale.fulfillmentStatus).toBe('NOT_FULFILLED');
    expect(sale.paymentStatus).toBe('UNPAID');
    expect(sale.accountingStatus).toBe('UNPOSTED');

    // p1: gross 1,000,000 - 5% (50,000) = 950,000 + 18% tax (171,000) = 1,121,000
    // p2: gross 2 * 15,000 = 30,000
    expect(sale.subtotal).toBeCloseTo(1030000);
    expect(sale.discountTotal).toBeCloseTo(50000);
    expect(sale.taxTotal).toBeCloseTo(171000);
    expect(sale.otherChargesTotal).toBeCloseTo(0);
    expect(sale.grandTotal).toBeCloseTo(1151000);
    expect(sale.amountPaid).toBe(0);
    expect(sale.amountDue).toBeCloseTo(1151000);

    const items = await prisma.saleItem.findMany({ where: { saleId: sale.id } });
    expect(items).toHaveLength(2);
    const serialized = items.find((i) => i.productId === 'prod-laptop');
    expect(serialized?.inventoryItemId).toBe('inv-SN002');
    expect(serialized?.discountAmount).toBeCloseTo(50000);
    expect(serialized?.taxAmount).toBeCloseTo(171000);

    const history = await prisma.saleHistory.findMany({ where: { saleId: sale.id } });
    expect(history.map((h) => h.eventType)).toEqual(expect.arrayContaining(['CREATED', 'ITEM_ADDED']));

    expect(eventBus.events.some((e) => e.routingKey === 'sale.created')).toBe(true);
  });

  it('rejects payments on a DRAFT sale', async () => {
    const created = await createHandler.execute(new CreateSaleCommand({ customerName: 'Jean', items: baseItems }, ctx));
    const result = await payHandler.execute(
      new RecordSalePaymentCommand({ saleId: created.data.id, amount: 100000, method: 'CASH' }, ctx),
    );
    expect(result.status).toBe('error');
    expect(result.errorCode).toBe('BUSINESS_RULE_VIOLATION');
  });

  it('confirms, pays partially, and rejects CREDIT as a till method', async () => {
    const created = await createHandler.execute(
      new CreateSaleCommand({ customerId: 'cus-002', customerName: 'Marie', items: baseItems }, ctx),
    );
    const saleId = created.data.id;

    const confirmed = await confirmHandler.execute(new ConfirmSaleCommand({ saleId }, ctx));
    expect(confirmed.status).toBe('success');
    expect(confirmed.data.commercialStatus).toBe('CONFIRMED');
    expect(confirmed.data.accountingStatus).toBe('POSTED');

    const reConfirm = await confirmHandler.execute(new ConfirmSaleCommand({ saleId }, ctx));
    expect(reConfirm.status).toBe('success');
    expect(reConfirm.data.accountingStatus).toBe('POSTED');

    const remaining = created.data.grandTotal - 300000;
    const pay1 = await payHandler.execute(new RecordSalePaymentCommand({ saleId, amount: 300000, method: 'CASH' }, ctx));
    expect(pay1.status).toBe('success');
    expect(pay1.data.sale.paymentStatus).toBe('PARTIALLY_PAID');
    expect(pay1.data.payment.paymentNumber).toMatch(/^PAY-\d{4}-\d{6}$/);
    expect(pay1.data.sale.amountDue).toBeCloseTo(remaining);
    expect(pay1.data.financeRefs.treasuryMovementId).toBe('mv-1');
    expect(pay1.data.financeRefs.treasuryFinancialTransactionId).toBe('ft-mv-1');
    expect(pay1.data.financeRefs.treasuryJournalId).toBe('je-mv-1');
    const savedPay = await prisma.salePayment.findFirst({ where: { saleId } });
    expect(savedPay?.accountingRef).toBeTruthy();
    const refs = JSON.parse(String(savedPay?.accountingRef || '{}'));
    expect(refs.treasuryMovementId).toBe('mv-1');
    expect(refs.treasuryFinancialTransactionId).toBe('ft-mv-1');
    expect(refs.treasuryJournalId).toBe('je-mv-1');

    const credit = await payHandler.execute(new RecordSalePaymentCommand({ saleId, amount: remaining, method: 'CREDIT' }, ctx));
    expect(credit.status).toBe('error');
    expect(credit.errorCode).toBe('BUSINESS_RULE_VIOLATION');

    const history = await prisma.saleHistory.findMany({ where: { saleId } });
    expect(history.map((h) => h.eventType)).toContain('PAYMENT_RECEIVED');
  });

  it('is idempotent for RecordSalePayment with the same idempotencyKey', async () => {
    const created = await createHandler.execute(
      new CreateSaleCommand({ customerId: 'cus-003', customerName: 'Ken', items: baseItems }, ctx),
    );
    const saleId = created.data.id;

    await confirmHandler.execute(new ConfirmSaleCommand({ saleId }, ctx));

    const due = created.data.grandTotal; // no payments yet
    const idempotencyKey = 'pay-idem-1';

    const first = await payHandler.execute(
      new RecordSalePaymentCommand({ saleId, amount: 100000, method: 'CASH', idempotencyKey }, ctx),
    );
    expect(first.status).toBe('success');

    const second = await payHandler.execute(
      new RecordSalePaymentCommand({ saleId, amount: 100000, method: 'CASH', idempotencyKey }, ctx),
    );
    expect(second.status).toBe('success');

    const count = await prisma.salePayment.count({ where: { saleId } });
    expect(count).toBe(1);

    const updated = await prisma.sale.findUnique({ where: { id: saleId } });
    expect(updated?.amountPaid).toBeCloseTo(100000);
    expect(updated?.amountDue).toBeCloseTo(due - 100000);
    const replayed = await prisma.salePayment.findFirst({ where: { saleId } });
    expect(JSON.parse(String(replayed?.accountingRef || '{}')).treasuryMovementId).toBe('mv-1');
  });

  it('rejects payment amount greater than remaining due', async () => {
    const created = await createHandler.execute(new CreateSaleCommand({ customerName: 'Jean', items: baseItems }, ctx));
    const saleId = created.data.id;
    await confirmHandler.execute(new ConfirmSaleCommand({ saleId }, ctx));

    const tooMuch = created.data.grandTotal + 5000;
    const result = await payHandler.execute(
      new RecordSalePaymentCommand({ saleId, amount: tooMuch, method: 'CASH', idempotencyKey: 'pay-oom-1' }, ctx),
    );
    expect(result.status).toBe('error');
    expect(result.errorCode).toBe('BUSINESS_RULE_VIOLATION');

    const count = await prisma.salePayment.count({ where: { saleId } });
    expect(count).toBe(0);
  });

  it('projects amountDue/amountPaid from engine receivable obligation when available', async () => {
    let obligationSourceId = '';
    const accountingSend = ({ cmd }: { cmd: string }) => {
      if (cmd === 'PostSaleConfirmation') {
        return of({ status: 'success', data: { ok: true } });
      }
      if (cmd === 'GetReceivables') {
        return of({
          status: 'success',
          data: {
            receivables: [
              {
                kind: 'CUSTOMER_RECEIVABLE',
                sourceId: obligationSourceId,
                outstandingMinor: '85000000',
                status: 'OPEN',
              },
            ],
          },
        });
      }
      return of({ status: 'success', data: { ok: true } });
    };

    const module: TestingModule = await Test.createTestingModule({
      imports: [CqrsModule],
      providers: [
        CreateSaleHandler,
        ConfirmSaleHandler,
        RecordSalePaymentHandler,
        { provide: 'EVENT_BUS', useClass: CapturingEventBus },
        { provide: 'INVENTORY_SERVICE', useValue: inventoryClientMock },
        { provide: 'ACCOUNTING_SERVICE', useValue: { send: accountingSend } },
        { provide: 'TREASURY_SERVICE', useValue: { send: () => treasuryMovementOk('mv-proj') } },
      ],
    }).compile();

    const localCreate = module.get(CreateSaleHandler);
    const localConfirm = module.get(ConfirmSaleHandler);
    const localPay = module.get(RecordSalePaymentHandler);

    const created = await localCreate.execute(new CreateSaleCommand({ customerName: 'Jean', items: baseItems }, ctx));
    const saleId = created.data.id;
    obligationSourceId = saleId;

    await localConfirm.execute(new ConfirmSaleCommand({ saleId }, ctx));
    const pay = await localPay.execute(
      new RecordSalePaymentCommand({ saleId, amount: 300000, method: 'CASH', idempotencyKey: 'phase6-proj-1' }, ctx),
    );
    expect(pay.status).toBe('success');
    expect(pay.data.projectionSource).toBe('engine_obligation');
    expect(pay.data.sale.amountDue).toBe(850000);
    expect(pay.data.sale.amountPaid).toBeCloseTo(created.data.grandTotal - 850000);
  });

  it('does not confirm (stays DRAFT) when PostSaleConfirmation books fail', async () => {
    const accountingErrorSend = () =>
      of({
        status: 'error',
        message: 'PostSaleConfirmation failed (test)',
        errorCode: 'INTERNAL_ERROR',
      });

    const module: TestingModule = await Test.createTestingModule({
      imports: [CqrsModule],
      providers: [
        CreateSaleHandler,
        ConfirmSaleHandler,
        { provide: 'EVENT_BUS', useClass: CapturingEventBus },
        { provide: 'INVENTORY_SERVICE', useValue: inventoryClientMock },
        { provide: 'ACCOUNTING_SERVICE', useValue: { send: accountingErrorSend } },
      ],
    }).compile();

    const localCreate = module.get(CreateSaleHandler);
    const localConfirm = module.get(ConfirmSaleHandler);

    const created = await localCreate.execute(new CreateSaleCommand({ customerName: 'Jean', items: baseItems }, ctx));
    const saleId = created.data.id;

    const confirmed = await localConfirm.execute(new ConfirmSaleCommand({ saleId }, ctx));
    expect(confirmed.status).toBe('error');

    const fromDb = await prisma.sale.findUnique({ where: { id: saleId } });
    expect(fromDb?.commercialStatus).toBe('DRAFT');
    expect(fromDb?.accountingStatus).toBe('UNPOSTED');

    await prisma.$disconnect();
  });

  it('caches Sale.profit from engine profitEarnedMinor (display cache only)', async () => {
    const accountingSend = ({ cmd }: { cmd: string }) => {
      if (cmd === 'PostSaleConfirmation') {
        return of({
          status: 'success',
          data: { ok: true, profitEarnedMinor: '12000000' },
        });
      }
      return of({ status: 'success', data: { ok: true } });
    };

    const module: TestingModule = await Test.createTestingModule({
      imports: [CqrsModule],
      providers: [
        CreateSaleHandler,
        ConfirmSaleHandler,
        { provide: 'EVENT_BUS', useClass: CapturingEventBus },
        { provide: 'INVENTORY_SERVICE', useValue: inventoryClientMock },
        { provide: 'ACCOUNTING_SERVICE', useValue: { send: accountingSend } },
      ],
    }).compile();

    const localCreate = module.get(CreateSaleHandler);
    const localConfirm = module.get(ConfirmSaleHandler);
    const created = await localCreate.execute(new CreateSaleCommand({ customerName: 'Jean', items: baseItems }, ctx));
    expect(created.data.profit).toBeCloseTo(created.data.grandTotal);

    const confirmed = await localConfirm.execute(new ConfirmSaleCommand({ saleId: created.data.id }, ctx));
    expect(confirmed.status).toBe('success');
    expect(confirmed.data.profit).toBe(120000);
    const fromDb = await prisma.sale.findUnique({ where: { id: created.data.id } });
    expect(fromDb?.profit).toBe(120000);
  });

  it('fulfills only confirmed sales and emits exact inventory item ids', async () => {
    const created = await createHandler.execute(new CreateSaleCommand({ customerName: 'Jean', items: baseItems }, ctx));
    const saleId = created.data.id;

    // Fulfill on a DRAFT must fail
    const earlyFulfill = await fulfillHandler.execute(new FulfillSaleCommand({ saleId }, ctx));
    expect(earlyFulfill.status).toBe('error');
    expect(earlyFulfill.errorCode).toBe('BUSINESS_RULE_VIOLATION');

    // ConfirmSale sync-applies inventory and marks FULFILLED in one step.
    const confirmed = await confirmHandler.execute(new ConfirmSaleCommand({ saleId }, ctx));
    expect(confirmed.status).toBe('success');
    expect(confirmed.data.fulfillmentStatus).toBe('FULFILLED');

    const alreadyFulfilled = await fulfillHandler.execute(new FulfillSaleCommand({ saleId }, ctx));
    expect(alreadyFulfilled.status).toBe('error');
    expect(alreadyFulfilled.errorCode).toBe('BUSINESS_RULE_VIOLATION');

    const event = eventBus.events.find((e) => e.routingKey === 'sale.fulfilled');
    expect(event).toBeDefined();
    expect(event.event.payload.items).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ inventoryItemId: 'inv-SN002', serialNumber: 'SN002' }),
      ]),
    );
  });

  it('cancels only DRAFT sales', async () => {
    const created = await createHandler.execute(new CreateSaleCommand({ customerName: 'Jean', items: baseItems }, ctx));
    const cancelled = await cancelHandler.execute(new CancelSaleCommand({ saleId: created.data.id, reason: 'walked away' }, ctx));
    expect(cancelled.status).toBe('success');
    expect(cancelled.data.commercialStatus).toBe('CANCELLED');

    const reCancel = await cancelHandler.execute(new CancelSaleCommand({ saleId: created.data.id }, ctx));
    expect(reCancel.status).toBe('error');
    expect(reCancel.errorCode).toBe('BUSINESS_RULE_VIOLATION');
  });

  it('creates a warranty linked to the sale item and records history', async () => {
    const created = await createHandler.execute(new CreateSaleCommand({ customerName: 'Jean', items: baseItems }, ctx));
    await confirmHandler.execute(new ConfirmSaleCommand({ saleId: created.data.id }, ctx));

    const items = await prisma.saleItem.findMany({ where: { saleId: created.data.id } });
    const laptop = items.find((i) => i.productId === 'prod-laptop');

    const result = await warrantyHandler.execute(
      new CreateWarrantyCommand(
        {
          saleId: created.data.id,
          saleItemId: laptop?.id,
          inventoryItemId: 'inv-SN002',
          warrantyType: 'SELLER',
          endDate: new Date('2027-08-13'),
          terms: '12 months seller warranty',
        },
        ctx,
      ),
    );
    expect(result.status).toBe('success');
    expect(result.data.saleItemId).toBe(laptop?.id);

    const history = await prisma.saleHistory.findMany({ where: { saleId: created.data.id } });
    expect(history.map((h) => h.eventType)).toContain('WARRANTY_CREATED');
  });
});

describe('Phase 9 sale payment fail-closed', () => {
  const ctx: any = {
    tenantId: 'tenant-sale-failclosed',
    shopId: 'shop-sale-failclosed',
    userId: 'user-sale-failclosed',
    traceId: 'trace-sale-failclosed',
    email: 'seller@test.com',
  };
  const items: CreateSaleItemInput[] = [
    { productId: 'prod-phone', inventoryItemId: 'inv-FC-1', serialNumber: 'FC-1', quantity: 1, unitPrice: 500000 },
  ];

  async function makeHandlers(treasurySend: () => any) {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CqrsModule],
      providers: [
        CreateSaleHandler,
        ConfirmSaleHandler,
        RecordSalePaymentHandler,
        FulfillSaleHandler,
        CancelSaleHandler,
        CreateWarrantyHandler,
        { provide: 'EVENT_BUS', useClass: CapturingEventBus },
        { provide: 'INVENTORY_SERVICE', useValue: inventoryClientMock },
        { provide: 'ACCOUNTING_SERVICE', useValue: { send: () => of({ status: 'success', data: { ok: true } }) } },
        { provide: 'TREASURY_SERVICE', useValue: { send: treasurySend } },
      ],
    }).compile();
    return {
      create: module.get(CreateSaleHandler),
      confirm: module.get(ConfirmSaleHandler),
      pay: module.get(RecordSalePaymentHandler),
    };
  }

  beforeEach(async () => {
    await prisma.saleHistory.deleteMany();
    await prisma.saleWarranty.deleteMany();
    await prisma.customerReceivable.deleteMany();
    await prisma.saleReturnItem.deleteMany();
    await prisma.saleReturn.deleteMany();
    await prisma.salePayment.deleteMany();
    await prisma.saleItem.deleteMany();
    await prisma.sale.deleteMany();
  });

  it('compensates the payment row when treasury/accounting books are down', async () => {
    const { create, confirm, pay } = await makeHandlers(() => {
      throw new Error('Accounting TCP down');
    });
    const created = await create.execute(new CreateSaleCommand({ customerName: 'Jean', items }, ctx));
    await confirm.execute(new ConfirmSaleCommand({ saleId: created.data.id }, ctx));
    const paid = await pay.execute(
      new RecordSalePaymentCommand({ saleId: created.data.id, amount: 200000, method: 'CASH' }, ctx),
    );
    expect(paid.status).toBe('error');
    const payments = await prisma.salePayment.findMany({ where: { saleId: created.data.id } });
    expect(payments).toHaveLength(0);
    const sale = await prisma.sale.findUniqueOrThrow({ where: { id: created.data.id } });
    expect(sale.amountPaid).toBe(0);
  });

  it('keeps two concurrent payments consistent with recorded rows', async () => {
    const { create, confirm, pay } = await makeHandlers(() => treasuryMovementOk());
    const created = await create.execute(new CreateSaleCommand({ customerName: 'Marie', items }, ctx));
    await confirm.execute(new ConfirmSaleCommand({ saleId: created.data.id }, ctx));
    const [a, b] = await Promise.all([
      pay.execute(new RecordSalePaymentCommand({ saleId: created.data.id, amount: 100000, method: 'CASH' }, ctx)),
      pay.execute(new RecordSalePaymentCommand({ saleId: created.data.id, amount: 150000, method: 'MOMO' }, ctx)),
    ]);
    const successes = [a, b].filter((r) => r.status === 'success');
    expect(successes.length).toBeGreaterThanOrEqual(1);
    const payments = await prisma.salePayment.findMany({ where: { saleId: created.data.id } });
    const sum = payments.reduce((s, p) => s + p.amount, 0);
    const sale = await prisma.sale.findUniqueOrThrow({ where: { id: created.data.id } });
    expect(sale.amountPaid).toBe(sum);
    expect(sum).toBeLessThanOrEqual(sale.grandTotal);
  });
});