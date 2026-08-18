/// <reference types="jest" />
import * as fs from 'fs';
import * as path from 'path';
import { HttpException, HttpStatus } from '@nestjs/common';
import { of } from 'rxjs';
import { ErrorCode } from '@electronic-shop/types';
import { AppController, QUARANTINED_FINANCIAL_COMMANDS, RETIRED_FINANCIAL_COMMANDS, COMMAND_ROLES, COMMAND_PERMISSIONS, STAFF_CANNOT_APPROVE } from '../../app.controller';
import { SUBSCRIPTION_EXEMPT } from '../../common/auth/jwt-auth.guard';

const ELECTRONIC_SHOP = path.resolve(__dirname, '../../../../../');
const WORKSPACE = path.resolve(__dirname, '../../../../../../');

const PLANNED_QUARANTINE = [
  'PostJournalEntry',
  'CreateLedgerAccount',
  'OpenWorkPeriod',
  'CloseWorkPeriod',
  'GetActiveWorkPeriod',
  'GetAccountTransactions',
  'GetTrialBalance',
  'GetIncomeStatement',
  'GetBalanceSheet',
  'CreatePostingBatch',
  'PostBatch',
  'RecordExpense',
  'GetExpenses',
  'GetChartOfAccounts',
  'RecordOperationalDeposit',
  'ReconcilePaymentMethod',
  'CreatePaymentMethod',
  'GetPaymentMethods',
  'CreateTransfer',
  'CreatePhysicalConfirmation',
  'GetTreasuryActivity',
  'RecordTreasuryLoan',
  'RecordLoanRepayment',
  'RecordPartialPayment',
  'ProcessPosSale',
  'ProcessSale',
];

const LIVE_ENGINE_COMMANDS = [
  'PostFinancialTransaction',
  'GetFinancialTransaction',
  'GetFinancialStructure',
  'CreatePhysicalAccount',
  'RecordGeneralExpense',
  'RecordWorkerAdvance',
  'GetAccountingAccounts',
  'GetJournals',
  'GetReceivables',
  'CreateTreasuryMovement',
  'GetFundBalances',
  'GetTreasuryMovements',
  'GetTreasuryLoans',
  'GetProfitTransferPosition',
  'RecordReconciliation',
  'ApproveReconciliationAdjustment',
  'GetReconciliations',
  'PostFinancialCorrection',
  'GetDailyPosition',
  'GetEngineReport',
  'GetFinancialOverview',
  'RecordPettyCashAdvance',
  'RepayPettyCashAdvance',
  'RecordPettyCashExpense',
];

const PHASE7_COMMANDS = ['PostFinancialCorrection', 'GetDailyPosition'];
const PHASE8_COMMANDS = ['GetEngineReport', 'GetFinancialOverview'];

const STOCK_COMMANDS = ['CreateSale', 'ConfirmSale', 'RecordSalePayment', 'ApplySaleFulfillment'];

function read(relFromElectronicShop: string) {
  return fs.readFileSync(path.join(ELECTRONIC_SHOP, relFromElectronicShop), 'utf8');
}

function mockClient() {
  return { send: jest.fn().mockReturnValue(of({ status: 'success', data: { ok: true }, traceId: 't' })) };
}

describe('Financial rebuild Phases 1–10 (gateway + source contracts)', () => {
  describe('Phase 1 — retired legacy commands', () => {
    it('retired set matches the planned legacy command list', () => {
      expect([...RETIRED_FINANCIAL_COMMANDS].sort()).toEqual([...PLANNED_QUARANTINE].sort());
      expect(QUARANTINED_FINANCIAL_COMMANDS).toBe(RETIRED_FINANCIAL_COMMANDS);
    });

    it('does not retire the Phase 2–8 engine commands', () => {
      for (const cmd of LIVE_ENGINE_COMMANDS) {
        expect(RETIRED_FINANCIAL_COMMANDS.has(cmd)).toBe(false);
      }
    });

    it('returns HTTP 410 COMMAND_RETIRED for every retired command and does not route them', async () => {
      const accounting = mockClient();
      const treasury = mockClient();
      const controller = new AppController(
        mockClient() as any,
        mockClient() as any,
        accounting as any,
        mockClient() as any,
        treasury as any,
        mockClient() as any,
        mockClient() as any,
        mockClient() as any,
      );
      const req = { context: { traceId: 'trace-q' }, user: { role: 'ADMIN', permissions: ['*'] } };

      for (const command of PLANNED_QUARANTINE) {
        try {
          await controller.handleCommand(req, { command, payload: {} });
          throw new Error(`expected 410 for ${command}`);
        } catch (error: any) {
          expect(error).toBeInstanceOf(HttpException);
          expect(error.getStatus()).toBe(HttpStatus.GONE);
          const body = error.getResponse();
          expect(body.errorCode).toBe(ErrorCode.COMMAND_RETIRED);
          expect(body.command).toBe(command);
        }
      }

      expect(accounting.send).not.toHaveBeenCalled();
      expect(treasury.send).not.toHaveBeenCalled();
    });

    it('disables accounting and treasury RabbitMQ consumers', () => {
      const accountingConsumer = read('apps/accounting-service/src/events/event-consumer.service.ts');
      const treasuryConsumer = read('apps/treasury-service/src/events/event-consumer.service.ts');
      const saleCreated = read('apps/accounting-service/src/events/consumers/sale-created.consumer.ts');
      expect(accountingConsumer).toMatch(/quarantined/i);
      expect(treasuryConsumer).toMatch(/quarantined/i);
      expect(saleCreated).toMatch(/consumer is quarantined/i);
      expect(saleCreated).not.toMatch(/journalEntry\.create|ledgerAccount\.update/);
      expect(accountingConsumer).not.toMatch(/this\.eventBus\.subscribe/);
      expect(treasuryConsumer).not.toMatch(/this\.eventBus\.subscribe/);
    });

    it('keeps old ledger and till tables in Prisma schemas as LEGACY read-only', () => {
      const accountingSchema = read('apps/accounting-service/prisma/schema.prisma');
      const treasurySchema = read('apps/treasury-service/prisma/schema.prisma');
      expect(accountingSchema).toContain('model LedgerAccount');
      expect(accountingSchema).toContain('model WorkPeriod');
      expect(accountingSchema).toMatch(/LEGACY \(Phase 10\)/);
      expect(treasurySchema).toContain('model PaymentMethod');
      expect(treasurySchema).toMatch(/LEGACY \(Phase 10\)/);
    });

    it('marks seed 04/05 obsolete', () => {
      expect(read('scripts/seed/steps/04-accounting.ts')).toMatch(/OBSOLETE/);
      expect(read('scripts/seed/steps/05-treasury.ts')).toMatch(/OBSOLETE/);
    });

    it('ErrorCode includes COMMAND_RETIRED (legacy FINANCIAL_REBUILD_IN_PROGRESS remains in the enum)', () => {
      expect(ErrorCode.COMMAND_RETIRED).toBe('COMMAND_RETIRED');
      expect(ErrorCode.FINANCIAL_REBUILD_IN_PROGRESS).toBe('FINANCIAL_REBUILD_IN_PROGRESS');
    });
  });

  describe('Phase 2 — engine routing and schema', () => {
    it('routes Post/GetFinancialTransaction to accounting, not quarantine', async () => {
      const accounting = mockClient();
      const controller = new AppController(
        mockClient() as any,
        mockClient() as any,
        accounting as any,
        mockClient() as any,
        mockClient() as any,
        mockClient() as any,
        mockClient() as any,
        mockClient() as any,
      );
      const req = { context: { traceId: 'trace-p2', tenantId: 't', shopId: 's' }, user: { role: 'ADMIN', permissions: ['*'] } };

      await controller.handleCommand(req, { command: 'PostFinancialTransaction', payload: {} });
      await controller.handleCommand(req, { command: 'GetFinancialTransaction', payload: { id: 'x' } });

      expect(accounting.send).toHaveBeenCalledWith({ cmd: 'PostFinancialTransaction' }, expect.any(Object));
      expect(accounting.send).toHaveBeenCalledWith({ cmd: 'GetFinancialTransaction' }, expect.any(Object));
    });

    it('FinancialTransaction uses BigInt cents and no generic TRANSFER type', () => {
      const schema = read('apps/accounting-service/prisma/schema.prisma');
      const types = read('apps/accounting-service/src/financial-transaction/types.ts');
      const model = schema.split('model FinancialTransaction')[1].split('model ')[0];
      expect(model).toMatch(/amountMinor\s+BigInt/);
      expect(model).not.toMatch(/Float/);
      expect(types).toContain("'OWNER_CAPITAL_IN'");
      expect(types).toContain("'SALE_REVENUE'");
      expect(types).not.toMatch(/'TRANSFER'/);
    });

    it('only post-financial-transaction.ts creates financial_transactions', () => {
      const srcRoot = path.join(ELECTRONIC_SHOP, 'apps');
      const offenders: string[] = [];
      const walk = (dir: string) => {
        for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
          const full = path.join(dir, entry.name);
          if (entry.isDirectory()) {
            if (entry.name === 'generated' || entry.name === 'node_modules' || entry.name === 'dist') continue;
            walk(full);
            continue;
          }
          if (!entry.name.endsWith('.ts') || entry.name.includes('.spec.')) continue;
          const text = fs.readFileSync(full, 'utf8');
          if (text.includes('financialTransaction.create') && !full.endsWith('post-financial-transaction.ts')) {
            offenders.push(path.relative(ELECTRONIC_SHOP, full));
          }
        }
      };
      walk(srcRoot);
      expect(offenders).toEqual([]);
    });
  });

  describe('Phase 3 — structure routing and schema', () => {
    it('routes GetFinancialStructure / CreatePhysicalAccount to treasury', async () => {
      const treasury = mockClient();
      const controller = new AppController(
        mockClient() as any,
        mockClient() as any,
        mockClient() as any,
        mockClient() as any,
        treasury as any,
        mockClient() as any,
        mockClient() as any,
        mockClient() as any,
      );
      const req = { context: { traceId: 'trace-p3' }, user: { role: 'ADMIN', permissions: ['*'] } };

      await controller.handleCommand(req, { command: 'GetFinancialStructure', payload: {} });
      await controller.handleCommand(req, { command: 'CreatePhysicalAccount', payload: { name: 'I&M' } });

      expect(treasury.send).toHaveBeenCalledWith({ cmd: 'GetFinancialStructure' }, expect.any(Object));
      expect(treasury.send).toHaveBeenCalledWith({ cmd: 'CreatePhysicalAccount' }, expect.any(Object));
    });

    it('PhysicalAccount has no stored balance column', () => {
      const schema = read('apps/treasury-service/prisma/schema.prisma');
      const model = schema.split('model PhysicalAccount')[1].split('model ')[0];
      expect(model).toContain('kind');
      expect(model).toContain('fundId');
      expect(model).not.toMatch(/\bbalance\b/);
    });

    it('still routes stock/sale commands (not quarantined)', async () => {
      const sales = mockClient();
      const inventory = mockClient();
      const controller = new AppController(
        mockClient() as any,
        mockClient() as any,
        mockClient() as any,
        inventory as any,
        mockClient() as any,
        sales as any,
        mockClient() as any,
        mockClient() as any,
      );
      const req = { context: { traceId: 'trace-stock' }, user: { role: 'ADMIN', permissions: ['*'] } };

      await controller.handleCommand(req, { command: 'CreateSale', payload: {} });
      await controller.handleCommand(req, { command: 'ConfirmSale', payload: {} });
      await controller.handleCommand(req, { command: 'RecordSalePayment', payload: {} });
      await controller.handleCommand(req, { command: 'ApplySaleFulfillment', payload: {} });

      expect(sales.send).toHaveBeenCalledWith({ cmd: 'CreateSale' }, expect.any(Object));
      expect(sales.send).toHaveBeenCalledWith({ cmd: 'ConfirmSale' }, expect.any(Object));
      expect(sales.send).toHaveBeenCalledWith({ cmd: 'RecordSalePayment' }, expect.any(Object));
      expect(inventory.send).toHaveBeenCalledWith({ cmd: 'ApplySaleFulfillment' }, expect.any(Object));
      for (const cmd of STOCK_COMMANDS) {
        expect(QUARANTINED_FINANCIAL_COMMANDS.has(cmd)).toBe(false);
      }
    });
  });

  describe('Phase 4 — accounting engine routing and schema', () => {
    it('routes new accounting commands to accounting, not quarantine', async () => {
      const accounting = mockClient();
      const controller = new AppController(
        mockClient() as any,
        mockClient() as any,
        accounting as any,
        mockClient() as any,
        mockClient() as any,
        mockClient() as any,
        mockClient() as any,
        mockClient() as any,
      );
      const req = { context: { traceId: 'trace-p4' }, user: { role: 'ADMIN', permissions: ['*'] } };

      await controller.handleCommand(req, { command: 'RecordGeneralExpense', payload: {} });
      await controller.handleCommand(req, { command: 'RecordWorkerAdvance', payload: {} });
      await controller.handleCommand(req, { command: 'GetAccountingAccounts', payload: {} });
      await controller.handleCommand(req, { command: 'GetJournals', payload: {} });
      await controller.handleCommand(req, { command: 'GetReceivables', payload: {} });

      expect(accounting.send).toHaveBeenCalledWith({ cmd: 'RecordGeneralExpense' }, expect.any(Object));
      expect(accounting.send).toHaveBeenCalledWith({ cmd: 'RecordWorkerAdvance' }, expect.any(Object));
      expect(accounting.send).toHaveBeenCalledWith({ cmd: 'GetAccountingAccounts' }, expect.any(Object));
      expect(accounting.send).toHaveBeenCalledWith({ cmd: 'GetJournals' }, expect.any(Object));
      expect(accounting.send).toHaveBeenCalledWith({ cmd: 'GetReceivables' }, expect.any(Object));
    });

    it('ChartAccount has no stored SoT balance column', () => {
      const schema = read('apps/accounting-service/prisma/schema.prisma');
      const model = schema.split('model ChartAccount')[1].split('model ')[0];
      expect(model).toContain('@@unique([tenantId, shopId, code])');
      expect(model).not.toMatch(/\bbalance\b/);
      expect(model).not.toMatch(/balanceMinor/);
    });

    it('keeps RecordExpense and GetChartOfAccounts quarantined', () => {
      expect(QUARANTINED_FINANCIAL_COMMANDS.has('RecordExpense')).toBe(true);
      expect(QUARANTINED_FINANCIAL_COMMANDS.has('GetExpenses')).toBe(true);
      expect(QUARANTINED_FINANCIAL_COMMANDS.has('GetChartOfAccounts')).toBe(true);
      expect(QUARANTINED_FINANCIAL_COMMANDS.has('RecordGeneralExpense')).toBe(false);
      expect(QUARANTINED_FINANCIAL_COMMANDS.has('GetAccountingAccounts')).toBe(false);
    });
  });

  describe('Phase 5 — treasury movement routing', () => {
    it('routes CreateTreasuryMovement and related commands to treasury, not quarantine', async () => {
      const treasury = mockClient();
      const controller = new AppController(
        mockClient() as any,
        mockClient() as any,
        mockClient() as any,
        mockClient() as any,
        treasury as any,
        mockClient() as any,
        mockClient() as any,
        mockClient() as any,
      );
      const req = { context: { traceId: 'trace-p5' }, user: { role: 'ADMIN', permissions: ['*'] } };

      await controller.handleCommand(req, { command: 'CreateTreasuryMovement', payload: { movementType: 'OWNER_CAPITAL_IN' } });
      await controller.handleCommand(req, { command: 'GetFundBalances', payload: {} });
      await controller.handleCommand(req, { command: 'GetProfitTransferPosition', payload: {} });
      await controller.handleCommand(req, { command: 'RecordReconciliation', payload: {} });
      await controller.handleCommand(req, { command: 'ApproveReconciliationAdjustment', payload: {} });

      expect(treasury.send).toHaveBeenCalledWith({ cmd: 'CreateTreasuryMovement' }, expect.any(Object));
      expect(treasury.send).toHaveBeenCalledWith({ cmd: 'GetFundBalances' }, expect.any(Object));
      expect(treasury.send).toHaveBeenCalledWith({ cmd: 'GetProfitTransferPosition' }, expect.any(Object));
      expect(treasury.send).toHaveBeenCalledWith({ cmd: 'RecordReconciliation' }, expect.any(Object));
      expect(treasury.send).toHaveBeenCalledWith({ cmd: 'ApproveReconciliationAdjustment' }, expect.any(Object));
    });

    it('keeps CreateTransfer / RecordOperationalDeposit / RecordTreasuryLoan quarantined', () => {
      expect(QUARANTINED_FINANCIAL_COMMANDS.has('CreateTransfer')).toBe(true);
      expect(QUARANTINED_FINANCIAL_COMMANDS.has('RecordOperationalDeposit')).toBe(true);
      expect(QUARANTINED_FINANCIAL_COMMANDS.has('RecordTreasuryLoan')).toBe(true);
      expect(QUARANTINED_FINANCIAL_COMMANDS.has('CreateTreasuryMovement')).toBe(false);
    });

    it('TreasuryMovement has no stored SoT balance and requires movementType in schema', () => {
      const schema = read('apps/treasury-service/prisma/schema.prisma');
      const model = schema.split('model TreasuryMovement')[1].split('model ')[0];
      expect(model).toContain('movementType');
      expect(model).toContain('financialTransactionId');
      expect(model).toContain('amountMinor');
      expect(model).not.toMatch(/\bbalance\b/);
    });
  });

  describe('Phase 6 — sale/purchase auto-post routing', () => {
    it('routes PostSaleConfirmation / PostPurchasePayable to accounting, not quarantine', async () => {
      const accounting = mockClient();
      const controller = new AppController(
        mockClient() as any,
        mockClient() as any,
        accounting as any,
        mockClient() as any,
        mockClient() as any,
        mockClient() as any,
        mockClient() as any,
        mockClient() as any,
      );
      const req = { context: { traceId: 'trace-p6' }, user: { role: 'ADMIN', permissions: ['*'] } };
      await controller.handleCommand(req, { command: 'PostSaleConfirmation', payload: {} });
      await controller.handleCommand(req, { command: 'PostPurchasePayable', payload: {} });
      expect(accounting.send).toHaveBeenCalledWith({ cmd: 'PostSaleConfirmation' }, expect.any(Object));
      expect(accounting.send).toHaveBeenCalledWith({ cmd: 'PostPurchasePayable' }, expect.any(Object));
      expect(QUARANTINED_FINANCIAL_COMMANDS.has('PostSaleConfirmation')).toBe(false);
      expect(QUARANTINED_FINANCIAL_COMMANDS.has('PostPurchasePayable')).toBe(false);
      expect(QUARANTINED_FINANCIAL_COMMANDS.has('ConfirmSale')).toBe(false);
      expect(QUARANTINED_FINANCIAL_COMMANDS.has('RecordSalePayment')).toBe(false);
      expect(QUARANTINED_FINANCIAL_COMMANDS.has('RecordPurchasePayment')).toBe(false);
    });

    it('does not change ApplySaleFulfillment and keeps accounting consumers off', () => {
      const apply = read('apps/inventory-service/src/common/apply-sale-fulfillment.ts');
      expect(apply).toContain('export async function applySaleFulfillment');
      expect(apply).not.toMatch(/PostSaleConfirmation|CreateTreasuryMovement|SALE_REVENUE/);
      const consumer = read('apps/accounting-service/src/events/event-consumer.service.ts');
      expect(consumer).toMatch(/quarantine|FINANCIAL_REBUILD_IN_PROGRESS/i);
    });

    it('has no live CREDIT -> CustomerReceivable write path in sale handlers', () => {
      const createSale = read('apps/sales-service/src/commands/handlers/create-sale.handler.ts');
      const confirmSale = read('apps/sales-service/src/commands/handlers/confirm-sale.handler.ts');
      const recordPay = read('apps/sales-service/src/commands/handlers/record-sale-payment.handler.ts');
      const partialPay = read('apps/sales-service/src/commands/handlers/record-partial-payment.handler.ts');
      const loanSale = read('apps/sales-service/src/commands/handlers/process-loan-sale.handler.ts');

      const live = `${createSale}\n${confirmSale}\n${recordPay}`;
      expect(live).not.toMatch(/customerReceivable\.(create|update|upsert)/);
      expect(recordPay).toContain('CREDIT is not a till method');

      // Legacy side-brain handlers may still contain their own logic, but are
      // quarantined at the gateway in Phase 5.
      expect(RETIRED_FINANCIAL_COMMANDS.has('RecordPartialPayment')).toBe(true);
      expect(RETIRED_FINANCIAL_COMMANDS.has('ProcessSale')).toBe(true);
      expect(partialPay).toContain('RecordPartialPayment');
      expect(loanSale).toContain('ProcessLoanSale');
    });

    it('new confirmed sale does not post through legacy SaleCreated consumer', () => {
      const saleCreated = read('apps/accounting-service/src/events/consumers/sale-created.consumer.ts');
      expect(saleCreated).toMatch(/quarantined/i);
      expect(saleCreated).toContain('skipping legacy posting');
      expect(saleCreated).not.toMatch(/journalEntry\.create|ledgerAccount\.update|prisma\./);
    });

    it('payment event consumers are disconnected from posting path', () => {
      const accountingConsumer = read('apps/accounting-service/src/events/event-consumer.service.ts');
      const treasuryConsumer = read('apps/treasury-service/src/events/event-consumer.service.ts');
      const salePayConsumer = read('apps/accounting-service/src/events/consumers/sale-payment-recorded.consumer.ts');
      const purchasePayConsumer = read('apps/accounting-service/src/events/consumers/purchase-payment-recorded.consumer.ts');
      const recordSalePay = read('apps/sales-service/src/commands/handlers/record-sale-payment.handler.ts');
      const recordPurchasePay = read('apps/purchase-service/src/commands/handlers/record-purchase-payment.handler.ts');

      expect(accountingConsumer).toMatch(/quarantined|FINANCIAL_REBUILD_IN_PROGRESS/i);
      expect(treasuryConsumer).toMatch(/quarantined|FINANCIAL_REBUILD_IN_PROGRESS/i);
      expect(accountingConsumer).not.toMatch(/this\.eventBus\.subscribe/);
      expect(treasuryConsumer).not.toMatch(/this\.eventBus\.subscribe/);

      // Legacy consumer files can remain in repo, but must not be wired as active posters.
      expect(salePayConsumer).toMatch(/journalEntry\.create|ledgerAccount\.update/);
      expect(purchasePayConsumer).toMatch(/journalEntry\.create|ledgerAccount\.update/);

      // Live payment path is synchronous engine calls.
      expect(recordSalePay).toContain('CreateTreasuryMovement');
      expect(recordPurchasePay).toContain('CreateTreasuryMovement');
      expect(recordPurchasePay).toContain('postPurchasePayableBooks');
    });

    it('dual-poster detector: cannot have active legacy sale poster and engine posting together', () => {
      const saleCreated = read('apps/accounting-service/src/events/consumers/sale-created.consumer.ts');
      const confirmSale = read('apps/sales-service/src/commands/handlers/confirm-sale.handler.ts');

      const legacyPosts = /journalEntry\.create|ledgerAccount\.update|prisma\./.test(saleCreated);
      const enginePosts = /PostSaleConfirmation|postSaleBooks/.test(confirmSale);
      expect(enginePosts).toBe(true);
      expect(legacyPosts && enginePosts).toBe(false);
    });

    it('GetReceivables authority is engine obligations (not legacy customer receivable table)', () => {
      const recv = read('apps/accounting-service/src/engine-ledger/queries.ts');
      expect(recv).toContain('prisma.obligation.findMany');
      expect(recv).toContain("authority: 'engine_obligations'");
      expect(recv).not.toMatch(/customerReceivable\./);
    });

    it('purchase AP projection reads engine GetReceivables, not local till/ledger balances', () => {
      const finance = read('apps/purchase-service/src/common/post-purchase-finance.ts');
      const pay = read('apps/purchase-service/src/commands/handlers/record-purchase-payment.handler.ts');
      const confirm = read('apps/purchase-service/src/commands/handlers/confirm-purchase.handler.ts');
      expect(finance).toContain('readPayableProjection');
      expect(finance).toContain("kind: 'SUPPLIER_PAYABLE'");
      expect(finance).toContain('GetReceivables');
      expect(pay).toContain('readPayableProjection');
      expect(confirm).toContain('readPayableProjection');
      expect(pay).toContain("projectionSource: postProjection ? 'engine_obligation'");
    });

    it('treasury balances are Σ movements (approved recon is a movement), not PaymentMethod.balance', () => {
      const balances = read('apps/treasury-service/src/treasury-movement/balances.ts');
      const structure = read('apps/treasury-service/src/financial-structure/get-financial-structure.ts');
      expect(balances).toContain('treasuryMovement.findMany');
      expect(balances).toContain('Approved reconciliation is included');
      expect(balances).not.toMatch(/paymentMethod|ledgerAccount/);
      expect(structure).toContain("authority: 'treasury_movements'");
      expect(structure).toContain('derivedBalances');
    });

    it('accounting balances are Σ posted journal lines, not LedgerAccount.balance', () => {
      const accounts = read('apps/accounting-service/src/engine-ledger/queries.ts');
      expect(accounts).toContain('include: { lines: true }');
      expect(accounts).toContain("authority: 'posted_journal_lines'");
      expect(accounts).not.toMatch(/ledgerAccount\.update|account\.balance/);
    });

    it('Sale.profit is a display cache refreshed from engine profitEarnedMinor', () => {
      const confirm = read('apps/sales-service/src/commands/handlers/confirm-sale.handler.ts');
      expect(confirm).toContain('profitCacheFromBooks');
      expect(confirm).toContain('profitEarnedMinor');
      expect(confirm).toContain('display cache');
    });

    it('accountingStatus becomes POSTED only after ConfirmSale books succeed', () => {
      const confirm = read('apps/sales-service/src/commands/handlers/confirm-sale.handler.ts');
      expect(confirm).toContain("if (books.status === 'error') return books;");
      expect(confirm).toContain("accountingStatus: 'POSTED'");
      const booksBeforePosted = confirm.indexOf("if (books.status === 'error') return books;");
      const postedAfter = confirm.indexOf("accountingStatus: 'POSTED'", booksBeforePosted);
      expect(booksBeforePosted).toBeGreaterThan(-1);
      expect(postedAfter).toBeGreaterThan(booksBeforePosted);
    });

    it('SalePayment.accountingRef stores treasury movement, FT, and journal ids', () => {
      const pay = read('apps/sales-service/src/commands/handlers/record-sale-payment.handler.ts');
      expect(pay).toContain('treasuryMovementId');
      expect(pay).toContain('treasuryFinancialTransactionId');
      expect(pay).toContain('treasuryJournalId');
      expect(pay).toContain('accountingRef: accountingRefValue');
      expect(pay).toContain('financeRefs');
    });

    it('integrity/backfill reporter is read-only and never updates posted amounts', () => {
      const findings = read('scripts/cbe-integrity/findings.ts');
      const report = read('scripts/cbe-integrity/report.ts');
      expect(findings).toContain('Never UPDATE posted journal amounts');
      expect(findings).toContain('CONFIRMED_SALE_NOT_POSTED');
      expect(findings).toContain('PAYMENT_WITHOUT_MOVEMENT_REF');
      expect(findings).toContain('MOVEMENT_WITHOUT_PAYMENT_REF');
      expect(findings).toContain('CONFIRMED_SALE_WITHOUT_REVENUE_FT');
      expect(report).toContain("mode: 'report-only'");
      expect(report).toContain('mutatesPostedAmounts: false');
      expect(report).toContain('backfillApply: false');
      expect(findings).not.toMatch(/prisma\.\w+\.(update|deleteMany)|postedJournalLine\.update/);
      expect(report).not.toMatch(/prisma\.\w+\.(update|deleteMany)|postedJournalLine\.update/);
    });

    it('sale card AR, engine report AR, and GetReceivables share Obligation authority', () => {
      const recv = read('apps/accounting-service/src/engine-ledger/queries.ts');
      const report = read('apps/accounting-service/src/engine-ledger/engine-report.ts');
      const pay = read('apps/sales-service/src/commands/handlers/record-sale-payment.handler.ts');
      expect(recv).toContain("authority: 'engine_obligations'");
      expect(report).toContain('getReceivables');
      expect(pay).toContain('readReceivableProjection');
      expect(pay).toContain('GetReceivables');
      expect(pay).toContain('sourceId: sale.id');
    });

    it('replay rebuilds sale due/paid from engine Obligation without rewriting posted books', () => {
      const pay = read('apps/sales-service/src/commands/handlers/record-sale-payment.handler.ts');
      const confirm = read('apps/sales-service/src/commands/handlers/confirm-sale.handler.ts');
      expect(pay).toContain("projectionSource: postProjection ? 'engine_obligation'");
      expect(pay).not.toMatch(/postedJournalLine\.(create|update)|journalEntry\.create/);
      expect(confirm).toContain('setting POSTED again is safe');
    });
  });

  describe('Phase 7 — expenses / petty / loans', () => {
    it('RecordGeneralExpense orchestrates PR Bank → Operational → payee and is not a loan', () => {
      const expense = read('apps/accounting-service/src/engine-ledger/record-general-expense.ts');
      const types = read('apps/treasury-service/src/treasury-movement/types.ts');
      const validate = read('apps/treasury-service/src/treasury-movement/create-treasury-movement.ts');
      expect(expense).toContain('GENERAL_EXPENSE_FUNDING');
      expect(expense).toContain('GENERAL_EXPENSE_PAYOUT');
      expect(expense).toContain('PR_BANK_TO_OPERATIONAL_TO_PAYEE');
      expect(expense).toContain('isLoan: false');
      expect(expense).not.toMatch(/INTERNAL_LOAN/);
      expect(types).toContain('GENERAL_EXPENSE_FUNDING');
      expect(validate).toContain('not a loan');
      expect(validate).toContain('Petty expenses leave Petty Cash only');
    });

    it('worker advance is not expense; petty expense does not use Operational', () => {
      const advance = read('apps/accounting-service/src/engine-ledger/record-worker-advance.ts');
      const petty = read('apps/accounting-service/src/engine-ledger/record-petty-cash-expense.ts');
      expect(advance).toContain('isExpense: false');
      expect(advance).toContain("fromKind: 'PETTY_CASH'");
      expect(petty).toContain("fromKind: 'PETTY_CASH'");
      expect(petty).toContain('Never Operational');
    });
  });

  describe('Phase 7 — calendar lock routing', () => {
    it('routes PostFinancialCorrection to accounting and GetDailyPosition to treasury', async () => {
      const accounting = mockClient();
      const treasury = mockClient();
      const controller = new AppController(
        mockClient() as any,
        mockClient() as any,
        accounting as any,
        mockClient() as any,
        treasury as any,
        mockClient() as any,
        mockClient() as any,
        mockClient() as any,
      );
      const req = { context: { traceId: 'trace-p7' }, user: { role: 'ADMIN', permissions: ['*'] } };
      await controller.handleCommand(req, { command: 'PostFinancialCorrection', payload: {} });
      await controller.handleCommand(req, { command: 'GetDailyPosition', payload: { occurredOn: '2026-08-17' } });
      expect(accounting.send).toHaveBeenCalledWith({ cmd: 'PostFinancialCorrection' }, expect.any(Object));
      expect(treasury.send).toHaveBeenCalledWith({ cmd: 'GetDailyPosition' }, expect.any(Object));
      for (const cmd of PHASE7_COMMANDS) {
        expect(QUARANTINED_FINANCIAL_COMMANDS.has(cmd)).toBe(false);
      }
      expect(QUARANTINED_FINANCIAL_COMMANDS.has('CloseWorkPeriod')).toBe(true);
      expect(QUARANTINED_FINANCIAL_COMMANDS.has('OpenWorkPeriod')).toBe(true);
    });

    it('FinancialTransaction can reference an original row and treasury has period snapshots', () => {
      const accountingSchema = read('apps/accounting-service/prisma/schema.prisma');
      const treasurySchema = read('apps/treasury-service/prisma/schema.prisma');
      const ft = accountingSchema.split('model FinancialTransaction')[1].split('model ')[0];
      expect(ft).toContain('originalTransactionId');
      expect(treasurySchema).toContain('model FinancialPeriod');
      expect(treasurySchema).toContain('model PeriodSnapshot');
      expect(treasurySchema).toContain('openingMinor');
      expect(treasurySchema).toContain('adjustmentsMinor');
    });
  });

  describe('Phase 8 — reports routing', () => {
    it('routes GetEngineReport to accounting and GetFinancialOverview to treasury', async () => {
      const accounting = mockClient();
      const treasury = mockClient();
      const controller = new AppController(
        mockClient() as any,
        mockClient() as any,
        accounting as any,
        mockClient() as any,
        treasury as any,
        mockClient() as any,
        mockClient() as any,
        mockClient() as any,
      );
      const req = { context: { traceId: 'trace-p8' }, user: { role: 'ADMIN', permissions: ['*'] } };
      await controller.handleCommand(req, { command: 'GetEngineReport', payload: {} });
      await controller.handleCommand(req, { command: 'GetFinancialOverview', payload: { occurredOn: '2026-08-17' } });
      expect(accounting.send).toHaveBeenCalledWith({ cmd: 'GetEngineReport' }, expect.any(Object));
      expect(treasury.send).toHaveBeenCalledWith({ cmd: 'GetFinancialOverview' }, expect.any(Object));
      for (const cmd of PHASE8_COMMANDS) {
        expect(QUARANTINED_FINANCIAL_COMMANDS.has(cmd)).toBe(false);
      }
      expect(QUARANTINED_FINANCIAL_COMMANDS.has('GetIncomeStatement')).toBe(true);
      expect(QUARANTINED_FINANCIAL_COMMANDS.has('GetPaymentMethods')).toBe(true);
    });
  });

  describe('Phase 9 — seed, leftover POS, fail-closed contracts', () => {
    it('seed:demo posts OWNER_CAPITAL_IN and does not write PaymentMethod.balance as truth', () => {
      const seed = read('scripts/seed-demo.ts');
      const treasury = read('scripts/seed/steps/05-treasury.ts');
      const history = read('scripts/seed/steps/11-engine-history.ts');
      const bridge = read('scripts/seed/engine-bridge.ts');
      expect(seed).toContain('seedEngineHistory');
      expect(history).toContain('OWNER_CAPITAL_IN');
      expect(history).toContain('postSaleConfirmation');
      expect(history).toContain('SALE_PAYMENT');
      expect(bridge).toContain('2026-05-18');
      expect(bridge).toContain('2026-08-17');
      expect(treasury).not.toMatch(/balance:\s*500_000/);
      expect(treasury).toContain('No till balance field');
      expect(read('scripts/seed/steps/08-sales.ts')).toContain('no engine posts');
    });

    it('leftover POS redirects to stock; product cart uses ConfirmSale; RabbitMQ ledger stays off', () => {
      const pos = fs.readFileSync(path.join(WORKSPACE, 'stovash/src/app/sales/pos/page.tsx'), 'utf8');
      expect(pos).toContain('redirect("/inventory/devices")');
      expect(pos).not.toContain('ConfirmSale');
      const cart = fs.readFileSync(path.join(WORKSPACE, 'stovash/src/components/inventory/StockCart.tsx'), 'utf8');
      expect(cart).toContain('ConfirmSale');
      expect(cart).toContain('RecordSalePayment');
      expect(cart).not.toMatch(/GetPaymentMethods|GetIncomeStatement|PostSaleConfirmation|ApplySaleFulfillment/);
      const consumer = read('apps/accounting-service/src/events/event-consumer.service.ts');
      expect(consumer).toMatch(/quarantine|FINANCIAL_REBUILD_IN_PROGRESS/i);
    });
  });

  describe('PROJECT_CONTEXT', () => {
    it('lists the live Phase 2–9 commands', () => {
      const ctx = fs.readFileSync(path.join(WORKSPACE, 'PROJECT_CONTEXT.md'), 'utf8');
      expect(ctx).toContain('PostFinancialTransaction');
      expect(ctx).toContain('GetFinancialTransaction');
      expect(ctx).toContain('GetFinancialStructure');
      expect(ctx).toContain('CreatePhysicalAccount');
      expect(ctx).toContain('RecordGeneralExpense');
      expect(ctx).toContain('RecordWorkerAdvance');
      expect(ctx).toContain('GetAccountingAccounts');
      expect(ctx).toContain('GetJournals');
      expect(ctx).toContain('GetReceivables');
      expect(ctx).toContain('CreateTreasuryMovement');
      expect(ctx).toContain('GetProfitTransferPosition');
      expect(ctx).toContain('PostSaleConfirmation');
      expect(ctx).toContain('ConfirmSale');
      expect(ctx).toContain('RecordSalePayment');
      expect(ctx).toContain('PostFinancialCorrection');
      expect(ctx).toContain('GetDailyPosition');
      expect(ctx).toContain('GetEngineReport');
      expect(ctx).toContain('GetFinancialOverview');
      expect(ctx).toContain('OWNER_CAPITAL_IN');
      expect(ctx).toContain('/sales/pos');
      expect(ctx).toContain('COMMAND_RETIRED');
    });
  });

  describe('Phase 10 — hardening', () => {
    const LIVE_WITH_SALE_BOOKS = [
      ...LIVE_ENGINE_COMMANDS,
      'PostSaleConfirmation',
      'PostPurchasePayable',
    ];

    it('every live financial command has COMMAND_ROLES and COMMAND_PERMISSIONS', () => {
      for (const cmd of LIVE_WITH_SALE_BOOKS) {
        expect(COMMAND_ROLES[cmd]?.length).toBeGreaterThan(0);
        expect(COMMAND_PERMISSIONS).toHaveProperty(cmd);
        expect(COMMAND_PERMISSIONS[cmd]).toEqual([]);
      }
    });

    it('STAFF cannot approve recon, profit transfer, or capital/internal loans', async () => {
      for (const cmd of STAFF_CANNOT_APPROVE) {
        expect(COMMAND_ROLES[cmd]).toEqual(['ADMIN', 'MANAGER']);
        expect(COMMAND_ROLES[cmd]).not.toContain('STAFF');
      }
      expect(COMMAND_ROLES.RecordReconciliation).toContain('STAFF');

      const controller = new AppController(
        mockClient() as any,
        mockClient() as any,
        mockClient() as any,
        mockClient() as any,
        mockClient() as any,
        mockClient() as any,
        mockClient() as any,
        mockClient() as any,
      );
      const staff = { context: { traceId: 'trace-p10' }, user: { role: 'STAFF', permissions: [] } };
      for (const command of STAFF_CANNOT_APPROVE) {
        try {
          await controller.handleCommand(staff, { command, payload: {} });
          throw new Error(`expected 403 for STAFF ${command}`);
        } catch (error: any) {
          expect(error).toBeInstanceOf(HttpException);
          expect(error.getStatus()).toBe(HttpStatus.FORBIDDEN);
        }
      }
    });

    it('engine money columns are BigInt cents; legacy Float stays only on unread till/ledger', () => {
      const accounting = read('apps/accounting-service/prisma/schema.prisma');
      const treasury = read('apps/treasury-service/prisma/schema.prisma');
      const ft = accounting.split('model FinancialTransaction')[1].split('model ')[0];
      const pj = accounting.split('model PostedJournalLine')[1].split('model ')[0];
      const mv = treasury.split('model TreasuryMovement')[1].split('model ')[0];
      const pa = treasury.split('model PhysicalAccount')[1].split('model ')[0];
      expect(ft).toMatch(/amountMinor\s+BigInt/);
      expect(ft).not.toMatch(/Float/);
      expect(pj).toMatch(/amountMinor\s+BigInt/);
      expect(mv).toMatch(/amountMinor\s+BigInt/);
      expect(mv).not.toMatch(/Float/);
      expect(pa).not.toMatch(/balance/);
      expect(accounting).toMatch(/model LedgerAccount[\s\S]*balance\s+Float/);
      expect(treasury).toMatch(/model PaymentMethod[\s\S]*balance\s+Float/);
    });

    it('idempotency unique is in the DB schema and fund/journal indexes exist', () => {
      const accounting = read('apps/accounting-service/prisma/schema.prisma');
      const treasury = read('apps/treasury-service/prisma/schema.prisma');
      const ft = accounting.split('model FinancialTransaction')[1].split('model ')[0];
      const mv = treasury.split('model TreasuryMovement')[1].split('model ')[0];
      const journals = accounting.split('model PostedJournal')[1].split('model ')[0];
      expect(ft).toContain('@@unique([tenantId, idempotencyKey])');
      expect(mv).toContain('@@unique([tenantId, idempotencyKey])');
      expect(mv).toContain('@@index([tenantId, shopId, fromPhysicalId])');
      expect(mv).toContain('@@index([tenantId, shopId, toPhysicalId])');
      expect(journals).toContain('@@index([tenantId, shopId, occurredOn])');
      expect(read('apps/treasury-service/prisma/migrations/20260817_phase10_indexes.sql')).toContain('fromPhysicalId');
      expect(read('apps/accounting-service/prisma/migrations/20260817_phase10_indexes.sql')).toContain('posted_journals');
    });

    it('JWT subscription still gates financial posts', () => {
      for (const cmd of ['PostFinancialTransaction', 'CreateTreasuryMovement', 'RecordSalePayment', 'ApproveReconciliationAdjustment']) {
        expect(SUBSCRIPTION_EXEMPT).not.toContain(cmd);
      }
    });

    it('metrics and backup runbook exist; DROP SQL is documented not executed', () => {
      const metrics = read('packages/metrics/src/index.ts');
      expect(metrics).toContain('financial_post_duration_seconds');
      expect(metrics).toContain('financial_fail_closed_total');
      expect(metrics).toContain('financial_recon_diff_minor');
      const runbook = read('docs/FINANCIAL_BACKUP_RESTORE.md');
      expect(runbook).toContain('pg_dump');
      expect(runbook).toContain('ACCOUNTING_DATABASE_URL');
      expect(runbook).toContain('TREASURY_DATABASE_URL');
      expect(runbook).toContain('EXPLAIN');
      expect(runbook).toContain('DROP TABLE IF EXISTS payment_methods');
      expect(runbook).toContain('do not run yet');
      expect(read('apps/sales-service/src/common/commercial-finance.ts')).toContain('recordFinancialFailClosed');
      expect(read('apps/treasury-service/src/treasury-movement/reconciliation.ts')).toContain('recordFinancialReconDiff');
    });

    it('product command handlers do not mutate legacy PaymentMethod/LedgerAccount balances', () => {
      const salesHandlers = read('apps/sales-service/src/commands/handlers/record-sale-payment.handler.ts');
      const purchaseHandlers = read('apps/purchase-service/src/commands/handlers/record-purchase-payment.handler.ts');
      const confirmSale = read('apps/sales-service/src/commands/handlers/confirm-sale.handler.ts');
      const confirmPurchase = read('apps/purchase-service/src/commands/handlers/confirm-purchase.handler.ts');
      const inventoryPos = read('apps/inventory-service/src/commands/handlers/process-pos-sale.handler.ts');

      const liveProductFlow = `${salesHandlers}\n${purchaseHandlers}\n${confirmSale}\n${confirmPurchase}\n${inventoryPos}`;
      expect(liveProductFlow).not.toMatch(/paymentMethod\.update|ledgerAccount\.update/);
      expect(liveProductFlow).toContain('postSaleBooks');
      expect(liveProductFlow).toContain('postPurchasePayableBooks');
      expect(liveProductFlow).toContain('CreateTreasuryMovement');
    });
  });
});
