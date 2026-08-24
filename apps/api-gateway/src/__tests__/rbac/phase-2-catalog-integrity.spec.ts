/**
 * Phase 2 — Permission Catalog Integrity Tests
 *
 * Spec requirement (section 5):
 * "Produce a validation test that detects unauthorized/unregistered commands."
 *
 * These tests run against the live catalog object — no network, no DB.
 */

import {
  SYSTEM_PERMISSION_CATALOG,
  PUBLIC_COMMANDS,
  ADMIN_ONLY_COMMANDS,
  INTERNAL_COMMANDS,
  PERMISSION_MAP,
  validateCatalogIntegrity,
  isPublicCommand,
  isAdminOnlyCommand,
  isInternalCommand,
} from '@electronic-shop/database';

// Every live @MessagePattern command extracted from microservice controllers.
// Keep this in sync with the actual services (checked in phase validation).
const ALL_LIVE_COMMANDS: readonly string[] = [
  // Identity
  'CreateTenant', 'CreateUser', 'LoginUser', 'GetUsers', 'VerifyUser',
  'GetPermissionTemplates', 'AssignTemplateToUser', 'SetUserPermissionOverride',
  'RemoveUserPermissionOverride', 'GetUserEffectivePermissions', 'GetPermissionAuditLogs',
  // Tenant
  'CreateShop', 'UpdateShop', 'GetTenant', 'GetTenantShops', 'GetTenantSubscription',
  'GetStaff', 'CreateStaff',
  // Accounting
  'PostFinancialTransaction', 'GetFinancialTransaction', 'RecordGeneralExpense',
  'RecordWorkerAdvance', 'RecordPettyCashAdvance', 'RepayPettyCashAdvance',
  'RecordPettyCashExpense', 'GetAccountingAccounts', 'GetJournals', 'GetReceivables',
  'PostTreasuryBooks', 'GetProfitAllocation', 'PostSaleConfirmation', 'PostPurchasePayable',
  'PostFinancialCorrection', 'PostSaleRefund', 'GetEngineReport',
  'GetDashboardProfitAnalytics', 'GetDashboardArApAnalytics',
  'CreateLedgerAccount', 'PostJournalEntry', 'GetAccountTransactions', 'GetTrialBalance',
  'GetIncomeStatement', 'GetBalanceSheet', 'RecordExpense', 'GetExpenses',
  'GetChartOfAccounts', 'OpenWorkPeriod', 'CloseWorkPeriod', 'GetActiveWorkPeriod',
  'RecordPettyCashExpense',
  // Sales
  'CreateSale', 'ConfirmSale', 'CancelSale', 'FulfillSale', 'RecordSalePayment',
  'CreateSaleReturn', 'IssueRefund', 'ProcessSaleReplacement', 'AssessReturnedItem',
  'CreateWarranty', 'ProcessSale', 'ConvertQuotationToSale', 'RecordPartialPayment',
  'RecordBonus', 'ProcessLoanSale',
  'GetSales', 'GetSaleById', 'GetSaleHistory', 'GetDeviceSales', 'GetSoldUnitProfit',
  'GetSaleReturnsByIds', 'GetDashboardSalesAnalytics', 'GetDashboardPaymentMethodMix',
  'GetDashboardProductPerformance',
  // Inventory
  'AddProduct', 'UpdateProduct', 'DeleteProduct', 'UpdateProductStatus', 'SetProductPrice',
  'GetProducts', 'GetProductById', 'GetProductBySku',
  'CreateBrand', 'UpdateBrand', 'DeleteBrand', 'GetBrands', 'GetBrandById',
  'CreateCategory', 'UpdateCategory', 'DeleteCategory', 'GetCategories', 'GetCategoryById',
  'AddInventoryItem', 'GetStockUnits', 'GetOwnedUnsoldStockPosition',
  'GetDashboardInventoryAnalytics', 'GetDeviceLife', 'GetAvailableInventoryItems',
  'ProcessPosSale', 'ApplySaleFulfillment', 'ApplySaleReturn', 'ApplyReturnedItemAssessment',
  'ReceiveGoods', 'ProcessSalesReturn', 'CreateWarrantyClaim', 'TransferInventory',
  'RecordInventoryUpgrade', 'RecordInventoryIncident',
  'CreateRental', 'UpdateRentalStatus', 'GetRentals',
  'GetStockMovements', 'CreateContact', 'GetContacts',
  'GetInventoryBookCosts', 'GetLastPurchaseUnitCosts',
  // Purchases
  'CreatePurchase', 'AddPurchaseItem', 'UpdatePurchaseItem', 'RemovePurchaseItem',
  'ConfirmPurchase', 'CancelPurchase', 'CreatePurchaseReceiving', 'AddReceivedItems',
  'ReceivePurchaseUnit', 'ConfirmPurchaseUnit', 'CancelPurchaseUnit',
  'AddReceivedItemCost', 'RecordPurchasePayment', 'CreatePurchaseReturn',
  'AddPurchaseReturnItems', 'AddPurchaseDocument',
  'GetPurchases', 'GetPurchaseById', 'GetPurchaseByNumber', 'GetPurchaseItems',
  'GetPurchaseReceivings', 'GetPurchasePayments', 'GetPurchaseReturns',
  'GetPurchaseDocuments', 'GetPurchaseHistory',
  'CreateSupplier', 'GetSuppliers', 'GetSupplier', 'UpdateSupplier', 'DeleteSupplier',
  'SyncPurchaseStock',
  // Treasury
  'RecordOperationalDeposit', 'ReconcilePaymentMethod', 'CreatePaymentMethod',
  'GetPaymentMethods', 'CreateTransfer', 'CreatePhysicalConfirmation',
  'GetTreasuryActivity', 'RecordTreasuryLoan', 'RecordLoanRepayment',
  'GetFinancialStructure', 'CreatePhysicalAccount', 'CreateTreasuryMovement',
  'GetFundBalances', 'GetTreasuryMovements', 'GetTreasuryLoans',
  'GetProfitTransferPosition', 'RecordReconciliation', 'ApproveReconciliationAdjustment',
  'GetReconciliations', 'GetDailyPosition', 'GetMonthlyPosition', 'GetFinancialOverview',
  'GetDashboardCashFlowAnalytics', 'GetDashboardLoanAnalytics',
];

const catalogKeySet = new Set(SYSTEM_PERMISSION_CATALOG.map((p) => p.key));
const publicSet = new Set<string>(PUBLIC_COMMANDS);
const internalSet = new Set<string>(INTERNAL_COMMANDS);
const permMgmtSet = new Set([
  'AssignTemplateToUser', 'GetPermissionTemplates', 'SetUserPermissionOverride',
  'RemoveUserPermissionOverride', 'GetUserEffectivePermissions', 'GetPermissionAuditLogs',
]);

describe('Phase 2 — Permission Catalog Integrity', () => {
  it('catalog has no integrity violations (duplicates, broken deps, invalid keys)', () => {
    const violations = validateCatalogIntegrity();
    if (violations.length > 0) {
      console.error('Catalog integrity violations:\n', violations.join('\n'));
    }
    expect(violations).toEqual([]);
  });

  it('every live command is either in catalog, public, internal, or permission-management', () => {
    const unregistered = ALL_LIVE_COMMANDS.filter(
      (cmd) =>
        !catalogKeySet.has(cmd) &&
        !publicSet.has(cmd) &&
        !internalSet.has(cmd) &&
        !permMgmtSet.has(cmd)
    );
    if (unregistered.length > 0) {
      console.error(
        'Commands not in catalog, public, internal, or permission-management list:\n',
        unregistered.join('\n')
      );
    }
    expect(unregistered).toEqual([]);
  });

  it('PUBLIC_COMMANDS are NOT in catalog (they bypass authorization entirely)', () => {
    const publicInCatalog = [...publicSet].filter((cmd) => catalogKeySet.has(cmd));
    expect(publicInCatalog).toEqual([]);
  });

  it('INTERNAL_COMMANDS are NOT in catalog (they must never be externally callable)', () => {
    const internalInCatalog = [...internalSet].filter((cmd) => catalogKeySet.has(cmd));
    expect(internalInCatalog).toEqual([]);
  });

  it('ADMIN_ONLY_COMMANDS in catalog have isAdminOnly=true', () => {
    for (const cmd of ADMIN_ONLY_COMMANDS) {
      const def = PERMISSION_MAP[cmd];
      if (def) {
        expect({ cmd, isAdminOnly: def.isAdminOnly }).toEqual({ cmd, isAdminOnly: true });
      }
    }
  });

  it('isPublicCommand helper is consistent with PUBLIC_COMMANDS array', () => {
    for (const cmd of PUBLIC_COMMANDS) {
      expect(isPublicCommand(cmd)).toBe(true);
    }
    expect(isPublicCommand('CreateSale')).toBe(false);
    expect(isPublicCommand('GetProducts')).toBe(false);
  });

  it('isAdminOnlyCommand helper correctly identifies admin-only commands', () => {
    expect(isAdminOnlyCommand('CreateShop')).toBe(true);
    expect(isAdminOnlyCommand('UpdateShop')).toBe(true);
    expect(isAdminOnlyCommand('AssignTemplateToUser')).toBe(true);
    expect(isAdminOnlyCommand('GetUserEffectivePermissions')).toBe(true);
    expect(isAdminOnlyCommand('CreateSale')).toBe(false);
    expect(isAdminOnlyCommand('GetProducts')).toBe(false);
  });

  it('isInternalCommand helper works for all internal commands', () => {
    for (const cmd of INTERNAL_COMMANDS) {
      expect(isInternalCommand(cmd)).toBe(true);
    }
    expect(isInternalCommand('CreateSale')).toBe(false);
  });

  it('all catalog entries have required fields', () => {
    for (const perm of SYSTEM_PERMISSION_CATALOG) {
      expect(perm.key).toBeTruthy();
      expect(perm.domain).toBeTruthy();
      expect(perm.name).toBeTruthy();
      expect(perm.description).toBeTruthy();
      expect(typeof perm.isSensitive).toBe('boolean');
      expect(typeof perm.isFinancial).toBe('boolean');
      expect(typeof perm.supportsScope).toBe('boolean');
      expect(typeof perm.supportsLocation).toBe('boolean');
      expect(Array.isArray(perm.dependencies)).toBe(true);
    }
  });

  it('catalog covers all 6 required domains', () => {
    const domains = new Set(SYSTEM_PERMISSION_CATALOG.map((p) => p.domain));
    expect([...domains].sort()).toEqual(
      ['accounting', 'admin', 'inventory', 'purchases', 'sales', 'treasury']
    );
  });

  it('financial commands are properly flagged', () => {
    // These must always be financial
    const mustBeFinancial = ['RecordSalePayment', 'ConfirmPurchase', 'RecordTreasuryLoan'];
    for (const key of mustBeFinancial) {
      expect({ key, isFinancial: PERMISSION_MAP[key]?.isFinancial }).toEqual({
        key,
        isFinancial: true,
      });
    }
  });

  it('PERMISSION_MAP is immutable (Object.freeze applied)', () => {
    expect(() => {
      (PERMISSION_MAP as any)['_injected'] = {} as any;
    }).toThrow();
  });
});
