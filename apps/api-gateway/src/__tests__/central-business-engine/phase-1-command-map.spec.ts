/// <reference types="jest" />
import { of } from 'rxjs';
import {
  AppController,
  COMMAND_PERMISSIONS,
  RETIRED_FINANCIAL_COMMANDS,
} from '../../app.controller';

/**
 * CBE Phase 1: product frontend already calls these. They must route on `amani`.
 * Do not invent a third command set.
 */
const ENGINE_COMMANDS_FE_NEEDS = [
  'GetFinancialOverview',
  'GetFinancialStructure',
  'CreateTreasuryMovement',
  'RecordGeneralExpense',
  'RecordWorkerAdvance',
  'GetJournals',
  'GetAccountingAccounts',
  'GetReceivables',
  'GetProfitTransferPosition',
  'GetDailyPosition',
  'GetEngineReport',
  'PostFinancialCorrection',
  'RecordReconciliation',
  'ApproveReconciliationAdjustment',
] as const;

const ACCOUNTING_ENGINE = [
  'RecordGeneralExpense',
  'RecordWorkerAdvance',
  'GetJournals',
  'GetAccountingAccounts',
  'GetReceivables',
  'GetEngineReport',
  'PostFinancialCorrection',
] as const;

const TREASURY_ENGINE = [
  'GetFinancialOverview',
  'GetFinancialStructure',
  'CreateTreasuryMovement',
  'GetProfitTransferPosition',
  'GetDailyPosition',
  'RecordReconciliation',
  'ApproveReconciliationAdjustment',
] as const;

const COMMERCIAL = [
  'CreateSale',
  'ConfirmSale',
  'RecordSalePayment',
  'ConfirmPurchase',
  'ConfirmPurchaseUnit',
  'RecordPurchasePayment',
] as const;

function mockClient() {
  return { send: jest.fn().mockReturnValue(of({ status: 'success', data: { ok: true }, traceId: 't' })) };
}

function adminReq() {
  return {
    context: { traceId: 'cbe-p1', tenantId: 't', shopId: 's' },
    user: { role: 'ADMIN', permissions: ['*'] },
  };
}

describe('CBE Phase 1 — command map (amani working branch)', () => {
  it('registers every engine command the product FE already calls', () => {
    for (const cmd of ENGINE_COMMANDS_FE_NEEDS) {
      expect(COMMAND_PERMISSIONS[cmd]).toBeDefined();
      expect(RETIRED_FINANCIAL_COMMANDS.has(cmd)).toBe(false);
    }
  });

  it('still registers commercial sale/purchase commands', () => {
    for (const cmd of COMMERCIAL) {
      expect(COMMAND_PERMISSIONS[cmd]).toBeDefined();
      expect(RETIRED_FINANCIAL_COMMANDS.has(cmd)).toBe(false);
    }
  });

  it('does not invent a parallel money-write command set for the FE', () => {
    expect(COMMAND_PERMISSIONS.CreateTreasuryMovement).toBeDefined();
    expect(COMMAND_PERMISSIONS.RecordGeneralExpense).toBeDefined();
    expect(RETIRED_FINANCIAL_COMMANDS.has('RecordExpense')).toBe(true);
    expect(RETIRED_FINANCIAL_COMMANDS.has('CreateTransfer')).toBe(true);
    expect(RETIRED_FINANCIAL_COMMANDS.has('GetPaymentMethods')).toBe(true);
  });

  it('routes accounting engine commands to accounting, not 404', async () => {
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
    for (const command of ACCOUNTING_ENGINE) {
      await controller.handleCommand(adminReq(), { command, payload: {} });
      expect(accounting.send).toHaveBeenCalledWith({ cmd: command }, expect.any(Object));
    }
  });

  it('routes treasury engine commands to treasury, not 404', async () => {
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
    for (const command of TREASURY_ENGINE) {
      await controller.handleCommand(adminReq(), { command, payload: {} });
      expect(treasury.send).toHaveBeenCalledWith({ cmd: command }, expect.any(Object));
    }
  });

  it('routes CreateSale / ConfirmSale / RecordSalePayment to sales', async () => {
    const sales = mockClient();
    const controller = new AppController(
      mockClient() as any,
      mockClient() as any,
      mockClient() as any,
      mockClient() as any,
      mockClient() as any,
      sales as any,
      mockClient() as any,
      mockClient() as any,
    );
    for (const command of ['CreateSale', 'ConfirmSale', 'RecordSalePayment'] as const) {
      await controller.handleCommand(adminReq(), { command, payload: {} });
      expect(sales.send).toHaveBeenCalledWith({ cmd: command }, expect.any(Object));
    }
  });

  it('keeps ApplySaleFulfillment as inventory TCP (not retired); FE must not own it', async () => {
    expect(COMMAND_PERMISSIONS.ApplySaleFulfillment).toBeDefined();
    expect(RETIRED_FINANCIAL_COMMANDS.has('ApplySaleFulfillment')).toBe(false);
    const inventory = mockClient();
    const controller = new AppController(
      mockClient() as any,
      mockClient() as any,
      mockClient() as any,
      inventory as any,
      mockClient() as any,
      mockClient() as any,
      mockClient() as any,
      mockClient() as any,
    );
    await controller.handleCommand(adminReq(), { command: 'ApplySaleFulfillment', payload: {} });
    expect(inventory.send).toHaveBeenCalledWith({ cmd: 'ApplySaleFulfillment' }, expect.any(Object));
  });

  it('documents RecordPartialPayment as still routed until Phase 5 quarantine', () => {
    expect(COMMAND_PERMISSIONS.RecordPartialPayment).toBeDefined();
    expect(RETIRED_FINANCIAL_COMMANDS.has('RecordPartialPayment')).toBe(false);
  });
});
