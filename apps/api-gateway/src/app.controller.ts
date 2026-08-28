import {
  Controller,
  Get,
  Post,
  Req,
  Inject,
  Body,
  UseGuards,
  HttpException,
  HttpStatus,
  ServiceUnavailableException,
} from '@nestjs/common';
import { JwtAuthGuard } from './common/auth/jwt-auth.guard.js';
import { MetricsAuthGuard } from './common/auth/metrics-auth.guard.js';
import { ReadinessService } from './common/readiness.service.js';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { getMetrics, recordCommandExecution, recordFinancialPostLatency } from '@electronic-shop/metrics';
import { ErrorCode } from '@electronic-shop/types';
import { prisma, authorizeUserAction, isPublicCommand } from '@electronic-shop/database';

// JWT issues `*` for ADMIN and `[]` for every other role. Non-empty permission
// lists 403 MANAGER/ACCOUNTANT/STAFF even when COMMAND_ROLES allows them.
// Phase 5: every live command is role-only (empty list), same as money writes.
export const COMMAND_PERMISSIONS: Record<string, string[]> = {
  // Tenant commands
  'CreateTenant': [],
  'CreateShop': [],
  'UpdateShop': [],
  'GetTenant': [],
  'GetTenantShops': [],
  'GetTenantSubscription': [],
  'GetStaff': [],
  'CreateStaff': [],

  // User & Permission commands
  'CreateUser': [],
  'GetUsers': [],
  'LoginUser': [], // Public endpoint
  'GetPermissionTemplates': [],
  'CreatePermissionTemplate': [],
  'UpdatePermissionTemplate': [],
  'DeletePermissionTemplate': [],
  'AssignTemplateToUser': [],
  'SetUserPermissionOverride': [],
  'RemoveUserPermissionOverride': [],
  'GetUserEffectivePermissions': [],
  'GetPermissionAuditLogs': [],
  
  // Accounting commands
  'PostJournalEntry': [],
  'CreateLedgerAccount': [],
  'OpenWorkPeriod': [],
  'CloseWorkPeriod': [],
  'GetActiveWorkPeriod': [],
  'GetAccountTransactions': [],
  'GetTrialBalance': [],
  'GetIncomeStatement': [],
  'GetBalanceSheet': [],
  'RecordExpense': [],
  'GetExpenses': [],
  'GetChartOfAccounts': [],
  'PostFinancialTransaction': [],
  'GetFinancialTransaction': [],
  'RecordGeneralExpense': [],
  'RecordWorkerAdvance': [],
  'RecordPettyCashAdvance': [],
  'RepayPettyCashAdvance': [],
  'RecordPettyCashExpense': [],
  'GetAccountingAccounts': [],
  'GetJournals': [],
  'GetReceivables': [],
  'PostTreasuryBooks': [],
  'GetProfitAllocation': [],
  'PostSaleConfirmation': [],
  'PostPurchasePayable': [],
  'PostFinancialCorrection': [],
  'PostSaleRefund': [],
  'GetEngineReport': [],
  'GetDashboardProfitAnalytics': [],
  'GetDashboardArApAnalytics': [],
  
  // Inventory commands
  'AddProduct': [],
  'UpdateProduct': [],
  'DeleteProduct': [],
  'UpdateProductStatus': [],
  'SetProductPrice': [],
  'GetProducts': [],
  'GetProductById': [],
  'GetProductBySku': [],

  'AddInventoryItem': [],
  'GetStockUnits': [],
  'GetOwnedUnsoldStockPosition': [],
  'GetDashboardInventoryAnalytics': [],
  'GetDeviceLife': [],
  'GetAvailableInventoryItems': [],
  'ProcessPosSale': [],
  'ApplySaleFulfillment': [],
  'ApplySaleReturn': [],
  'ApplyReturnedItemAssessment': [],
  'ReceiveGoods': [],
  'ProcessSalesReturn': [],
  'CreateWarrantyClaim': [],
  'TransferInventory': [],
  'RecordInventoryUpgrade': [],
  'RecordInventoryIncident': [],
  'CreateRental': [],
  'UpdateRentalStatus': [],
  'GetRentals': [],
  'GetStockMovements': [],
  
  // Sales commands
  'ProcessSale': [],
  'CreateSale': [],
  'ConfirmSale': [],
  'CancelSale': [],
  'FulfillSale': [],
  'RecordSalePayment': [],
  'CreateSaleReturn': [],
  'IssueRefund': [],
  'ProcessSaleReplacement': [],
  'AssessReturnedItem': [],
  'CreateWarranty': [],
  'ConvertQuotationToSale': [],
  'RecordPartialPayment': [],
  'RecordBonus': [],
  'ProcessLoanSale': [],
  'GetSales': [],
  'GetSaleById': [],
  'GetSaleHistory': [],
  'GetDeviceSales': [],
  'GetSoldUnitProfit': [],
  'GetDashboardSalesAnalytics': [],
  'GetDashboardPaymentMethodMix': [],
  'GetDashboardProductPerformance': [],
  
  // Purchase commands
  'CreatePurchase': [],
  'AddPurchaseItem': [],
  'UpdatePurchaseItem': [],
  'RemovePurchaseItem': [],
  'ConfirmPurchase': [],
  'CancelPurchase': [],
  'CreatePurchaseReceiving': [],
  'AddReceivedItems': [],
  'ReceivePurchaseUnit': [],
  'ConfirmPurchaseUnit': [],
  'CancelPurchaseUnit': [],
  'AddReceivedItemCost': [],
  'RecordPurchasePayment': [],
  'CreatePurchaseReturn': [],
  'AddPurchaseReturnItems': [],
  'AddPurchaseDocument': [],
  'GetPurchases': [],
  'GetPurchaseById': [],
  'GetPurchaseByNumber': [],
  'GetPurchaseItems': [],
  'GetPurchaseReceivings': [],
  'GetPurchasePayments': [],
  'GetPurchaseReturns': [],
  'GetPurchaseDocuments': [],
  'GetPurchaseHistory': [],

  // Supplier commands
  'CreateSupplier': [],
  'GetSuppliers': [],
  'UpdateSupplier': [],
  'DeleteSupplier': [],
  
  // Treasury commands
  'RecordOperationalDeposit': [],
  'ReconcilePaymentMethod': [],
  'CreatePaymentMethod': [],
  'GetPaymentMethods': [],
  'CreateTransfer': [],
  'CreatePhysicalConfirmation': [],
  'GetTreasuryActivity': [],
  'RecordTreasuryLoan': [],
  'RecordLoanRepayment': [],
  'GetFinancialStructure': [],
  'CreatePhysicalAccount': [],
  'CreateTreasuryMovement': [],
  'SeedTreasuryOpeningBalances': [],
  'GetFundBalances': [],
  'GetTreasuryMovements': [],
  'GetTreasuryLoans': [],
  'GetProfitTransferPosition': [],
  'RecordReconciliation': [],
  'ApproveReconciliationAdjustment': [],
  'GetReconciliations': [],
  'GetDailyPosition': [],
  'GetMonthlyPosition': [],
  'GetFinancialOverview': [],
  'GetDashboardCashFlowAnalytics': [],
  'GetDashboardLoanAnalytics': [],
};

// Command to role mapping (role-based access control)
export const COMMAND_ROLES: Record<string, string[]> = {
  // Tenant commands - only ADMIN (tenant owner) can mutate tenants/shops;
  // reads are authenticated only (resolved against the JWT tenant).
  'CreateTenant': ['ADMIN'],
  'CreateShop': ['ADMIN'],
  'UpdateShop': ['ADMIN'],
  'CreateStaff': ['ADMIN', 'MANAGER'],
  'GetStaff': ['ADMIN', 'MANAGER'],
  'CreateUser': ['ADMIN', 'MANAGER'],
  'GetUsers': ['ADMIN', 'MANAGER'],
  'LoginUser': [], // Public endpoint
  
  // Accounting commands
  'PostJournalEntry': ['ADMIN', 'MANAGER', 'ACCOUNTANT'],
  'CreateLedgerAccount': ['ADMIN', 'MANAGER', 'ACCOUNTANT'],
  'OpenWorkPeriod': ['ADMIN', 'MANAGER'],
  'CloseWorkPeriod': ['ADMIN', 'MANAGER'],
  'GetActiveWorkPeriod': ['ADMIN', 'MANAGER', 'ACCOUNTANT', 'STAFF'],
  'GetAccountTransactions': ['ADMIN', 'MANAGER', 'ACCOUNTANT'],
  'GetTrialBalance': ['ADMIN', 'MANAGER', 'ACCOUNTANT'],
  'GetIncomeStatement': ['ADMIN', 'MANAGER', 'ACCOUNTANT'],
  'GetBalanceSheet': ['ADMIN', 'MANAGER', 'ACCOUNTANT'],
  'RecordExpense': ['ADMIN', 'MANAGER', 'ACCOUNTANT', 'STAFF'],
  'GetExpenses': ['ADMIN', 'MANAGER', 'ACCOUNTANT', 'STAFF'],
  'GetChartOfAccounts': ['ADMIN', 'MANAGER', 'ACCOUNTANT', 'STAFF'],
  'PostFinancialTransaction': ['ADMIN', 'MANAGER'],
  'GetFinancialTransaction': ['ADMIN', 'MANAGER', 'ACCOUNTANT'],
  'RecordGeneralExpense': ['ADMIN', 'MANAGER', 'ACCOUNTANT'],
  'RecordWorkerAdvance': ['ADMIN', 'MANAGER'],
  'RecordPettyCashAdvance': ['ADMIN', 'MANAGER'],
  'RepayPettyCashAdvance': ['ADMIN', 'MANAGER'],
  'RecordPettyCashExpense': ['ADMIN', 'MANAGER', 'ACCOUNTANT'],
  'GetAccountingAccounts': ['ADMIN', 'MANAGER', 'ACCOUNTANT', 'STAFF'],
  'GetJournals': ['ADMIN', 'MANAGER', 'ACCOUNTANT'],
  'GetReceivables': ['ADMIN', 'MANAGER', 'ACCOUNTANT'],
  'PostTreasuryBooks': ['ADMIN', 'MANAGER'],
  'GetProfitAllocation': ['ADMIN', 'MANAGER', 'ACCOUNTANT'],
  'PostSaleConfirmation': ['ADMIN', 'MANAGER', 'STAFF'],
  'PostPurchasePayable': ['ADMIN', 'MANAGER', 'STAFF'],
  'PostFinancialCorrection': ['ADMIN', 'MANAGER', 'ACCOUNTANT'],
  'PostSaleRefund': ['ADMIN', 'MANAGER'],
  'GetEngineReport': ['ADMIN', 'MANAGER', 'ACCOUNTANT', 'STAFF'],
  'GetDashboardProfitAnalytics': ['ADMIN', 'MANAGER', 'ACCOUNTANT', 'STAFF'],
  'GetDashboardArApAnalytics': ['ADMIN', 'MANAGER', 'ACCOUNTANT', 'STAFF'],
  
  // Inventory commands
  'AddProduct': ['ADMIN', 'MANAGER'],
  'UpdateProduct': ['ADMIN', 'MANAGER'],
  'DeleteProduct': ['ADMIN'],
  'UpdateProductStatus': ['ADMIN', 'MANAGER'],
  'SetProductPrice': ['ADMIN', 'MANAGER'],
  'GetProducts': ['ADMIN', 'MANAGER', 'STAFF', 'ACCOUNTANT'],
  'GetProductById': ['ADMIN', 'MANAGER', 'STAFF', 'ACCOUNTANT'],
  'GetProductBySku': ['ADMIN', 'MANAGER', 'STAFF', 'ACCOUNTANT'],

  'AddInventoryItem': ['ADMIN', 'MANAGER', 'STAFF'],
  'GetStockUnits': ['ADMIN', 'MANAGER', 'STAFF'],
  'GetOwnedUnsoldStockPosition': ['ADMIN', 'MANAGER', 'STAFF', 'ACCOUNTANT'],
  'GetDashboardInventoryAnalytics': ['ADMIN', 'MANAGER', 'STAFF', 'ACCOUNTANT'],
  'GetDeviceLife': ['ADMIN', 'MANAGER', 'STAFF', 'ACCOUNTANT'],
  'GetAvailableInventoryItems': ['ADMIN', 'MANAGER', 'STAFF'],
  'ProcessPosSale': ['ADMIN', 'MANAGER', 'STAFF'],
  'ApplySaleFulfillment': ['ADMIN', 'MANAGER', 'STAFF'],
  'ApplySaleReturn': ['ADMIN', 'MANAGER'],
  'ApplyReturnedItemAssessment': ['ADMIN', 'MANAGER'],
  'ReceiveGoods': ['ADMIN', 'MANAGER', 'STAFF'],
  'ProcessSalesReturn': ['ADMIN', 'MANAGER', 'STAFF'],
  'CreateWarrantyClaim': ['ADMIN', 'MANAGER', 'STAFF'],
  'TransferInventory': ['ADMIN', 'MANAGER', 'STAFF'],
  'RecordInventoryUpgrade': ['ADMIN', 'MANAGER'],
  'RecordInventoryIncident': ['ADMIN', 'MANAGER', 'STAFF'],
  'CreateRental': ['ADMIN', 'MANAGER', 'STAFF'],
  'UpdateRentalStatus': ['ADMIN', 'MANAGER', 'STAFF'],
  'GetRentals': ['ADMIN', 'MANAGER', 'STAFF', 'ACCOUNTANT'],
  'GetStockMovements': ['ADMIN', 'MANAGER', 'STAFF', 'ACCOUNTANT'],
  'CreateContact': ['ADMIN', 'MANAGER', 'STAFF'],
  'GetContacts': ['ADMIN', 'MANAGER', 'STAFF', 'ACCOUNTANT'],
  
  // Sales commands
  'ProcessSale': ['ADMIN', 'MANAGER', 'STAFF'],
  'CreateSale': ['ADMIN', 'MANAGER', 'STAFF'],
  'ConfirmSale': ['ADMIN', 'MANAGER', 'STAFF'],
  'CancelSale': ['ADMIN', 'MANAGER'],
  'FulfillSale': ['ADMIN', 'MANAGER', 'STAFF'],
  'RecordSalePayment': ['ADMIN', 'MANAGER', 'STAFF'],
  'CreateSaleReturn': ['ADMIN', 'MANAGER', 'STAFF'],
  'IssueRefund': ['ADMIN', 'MANAGER'],
  'ProcessSaleReplacement': ['ADMIN', 'MANAGER'],
  'AssessReturnedItem': ['ADMIN', 'MANAGER'],
  'CreateWarranty': ['ADMIN', 'MANAGER', 'STAFF'],
  'ConvertQuotationToSale': ['ADMIN', 'MANAGER', 'STAFF'],
  'RecordPartialPayment': ['ADMIN', 'MANAGER', 'STAFF'],
  'RecordBonus': ['ADMIN', 'MANAGER'],
  'ProcessLoanSale': ['ADMIN', 'MANAGER'],
  'GetSales': ['ADMIN', 'MANAGER', 'STAFF', 'ACCOUNTANT'],
  'GetSaleById': ['ADMIN', 'MANAGER', 'STAFF', 'ACCOUNTANT'],
  'GetSaleHistory': ['ADMIN', 'MANAGER', 'STAFF', 'ACCOUNTANT'],
  'GetDeviceSales': ['ADMIN', 'MANAGER', 'STAFF', 'ACCOUNTANT'],
  'GetSoldUnitProfit': ['ADMIN', 'MANAGER', 'ACCOUNTANT'],
  'GetDashboardSalesAnalytics': ['ADMIN', 'MANAGER', 'STAFF', 'ACCOUNTANT'],
  'GetDashboardPaymentMethodMix': ['ADMIN', 'MANAGER', 'STAFF', 'ACCOUNTANT'],
  'GetDashboardProductPerformance': ['ADMIN', 'MANAGER', 'STAFF', 'ACCOUNTANT'],
  
  // Purchase commands
  'CreatePurchase': ['ADMIN', 'MANAGER', 'STAFF'],
  'AddPurchaseItem': ['ADMIN', 'MANAGER', 'STAFF'],
  'UpdatePurchaseItem': ['ADMIN', 'MANAGER', 'STAFF'],
  'RemovePurchaseItem': ['ADMIN', 'MANAGER', 'STAFF'],
  'ConfirmPurchase': ['ADMIN', 'MANAGER', 'STAFF'],
  'CancelPurchase': ['ADMIN', 'MANAGER', 'STAFF'],
  'CreatePurchaseReceiving': ['ADMIN', 'MANAGER', 'STAFF'],
  'AddReceivedItems': ['ADMIN', 'MANAGER', 'STAFF'],
  'ReceivePurchaseUnit': ['ADMIN', 'MANAGER', 'STAFF'],
  'ConfirmPurchaseUnit': ['ADMIN', 'MANAGER', 'STAFF'],
  'CancelPurchaseUnit': ['ADMIN', 'MANAGER', 'STAFF'],
  'AddReceivedItemCost': ['ADMIN', 'MANAGER', 'STAFF'],
  'RecordPurchasePayment': ['ADMIN', 'MANAGER', 'STAFF'],
  'CreatePurchaseReturn': ['ADMIN', 'MANAGER', 'STAFF'],
  'AddPurchaseReturnItems': ['ADMIN', 'MANAGER', 'STAFF'],
  'AddPurchaseDocument': ['ADMIN', 'MANAGER', 'STAFF'],
  'GetPurchases': ['ADMIN', 'MANAGER', 'STAFF', 'ACCOUNTANT'],
  'GetPurchaseById': ['ADMIN', 'MANAGER', 'STAFF', 'ACCOUNTANT'],
  'GetPurchaseByNumber': ['ADMIN', 'MANAGER', 'STAFF', 'ACCOUNTANT'],
  'GetPurchaseItems': ['ADMIN', 'MANAGER', 'STAFF', 'ACCOUNTANT'],
  'GetPurchaseReceivings': ['ADMIN', 'MANAGER', 'STAFF', 'ACCOUNTANT'],
  'GetPurchasePayments': ['ADMIN', 'MANAGER', 'STAFF', 'ACCOUNTANT'],
  'GetPurchaseReturns': ['ADMIN', 'MANAGER', 'STAFF', 'ACCOUNTANT'],
  'GetPurchaseDocuments': ['ADMIN', 'MANAGER', 'STAFF', 'ACCOUNTANT'],
  'GetPurchaseHistory': ['ADMIN', 'MANAGER', 'STAFF', 'ACCOUNTANT'],

  // Supplier commands
  'CreateSupplier': ['ADMIN', 'MANAGER'],
  'GetSuppliers': ['ADMIN', 'MANAGER', 'STAFF', 'ACCOUNTANT'],
  'UpdateSupplier': ['ADMIN', 'MANAGER'],
  'DeleteSupplier': ['ADMIN', 'MANAGER'],
  
  // Treasury commands
  'RecordOperationalDeposit': ['ADMIN', 'MANAGER', 'STAFF'],
  'ReconcilePaymentMethod': ['ADMIN', 'MANAGER'],
  'CreatePaymentMethod': ['ADMIN', 'MANAGER'],
  'GetPaymentMethods': ['ADMIN', 'MANAGER', 'STAFF', 'ACCOUNTANT'],
  'CreateTransfer': ['ADMIN', 'MANAGER'],
  'CreatePhysicalConfirmation': ['ADMIN', 'MANAGER', 'STAFF'],
  'GetTreasuryActivity': ['ADMIN', 'MANAGER', 'STAFF', 'ACCOUNTANT'],
  'RecordTreasuryLoan': ['ADMIN', 'MANAGER'],
  'RecordLoanRepayment': ['ADMIN', 'MANAGER'],
  'GetFinancialStructure': ['ADMIN', 'MANAGER', 'STAFF', 'ACCOUNTANT'],
  'CreatePhysicalAccount': ['ADMIN', 'MANAGER'],
  'CreateTreasuryMovement': ['ADMIN', 'MANAGER'],
  'SeedTreasuryOpeningBalances': ['ADMIN', 'MANAGER'],
  'GetFundBalances': ['ADMIN', 'MANAGER', 'STAFF', 'ACCOUNTANT'],
  'GetTreasuryMovements': ['ADMIN', 'MANAGER', 'STAFF', 'ACCOUNTANT'],
  'GetTreasuryLoans': ['ADMIN', 'MANAGER', 'ACCOUNTANT'],
  'GetProfitTransferPosition': ['ADMIN', 'MANAGER', 'ACCOUNTANT'],
  'RecordReconciliation': ['ADMIN', 'MANAGER', 'ACCOUNTANT', 'STAFF'],
  'ApproveReconciliationAdjustment': ['ADMIN', 'MANAGER'],
  'GetReconciliations': ['ADMIN', 'MANAGER', 'ACCOUNTANT', 'STAFF'],
  'GetDailyPosition': ['ADMIN', 'MANAGER', 'ACCOUNTANT', 'STAFF'],
  'GetMonthlyPosition': ['ADMIN', 'MANAGER', 'ACCOUNTANT', 'STAFF'],
  'GetFinancialOverview': ['ADMIN', 'MANAGER', 'ACCOUNTANT', 'STAFF'],
  'GetDashboardCashFlowAnalytics': ['ADMIN', 'MANAGER', 'ACCOUNTANT', 'STAFF'],
  'GetDashboardLoanAnalytics': ['ADMIN', 'MANAGER', 'ACCOUNTANT', 'STAFF'],
};

// Commands that are public (no authenticated user required). Their role/permission
// checks are skipped because there is no user context to authorize against.
// CreateTenant is the tenant self-registration (onboarding) flow; LoginUser is public auth.
const PUBLIC_COMMANDS = ['LoginUser', 'CreateTenant'];

/**
 * Phase 10: legacy till/ledger commands are gone, not 501 forever.
 * Gateway returns 410 COMMAND_RETIRED and does not route them to Nest handlers.
 */
export const RETIRED_FINANCIAL_COMMANDS = new Set([
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
  // Phase 5 quarantine: remove legacy parallel sale writers.
  'RecordPartialPayment',
  'ProcessPosSale',
  'ProcessSale',
]);

/** @deprecated Phase 10 alias — same set as RETIRED_FINANCIAL_COMMANDS. */
export const QUARANTINED_FINANCIAL_COMMANDS = RETIRED_FINANCIAL_COMMANDS;

/** STAFF may count cash and post sales; cannot approve recon, profit transfer, refunds, replacements, or return assessments. */
export const STAFF_CANNOT_APPROVE = ['ApproveReconciliationAdjustment', 'CreateTreasuryMovement', 'IssueRefund', 'ProcessSaleReplacement', 'AssessReturnedItem'] as const;

const FINANCIAL_WRITE_COMMANDS = new Set([
  'PostFinancialTransaction',
  'RecordGeneralExpense',
  'RecordWorkerAdvance',
  'RecordPettyCashAdvance',
  'RepayPettyCashAdvance',
  'RecordPettyCashExpense',
  'PostTreasuryBooks',
  'PostSaleConfirmation',
  'PostPurchasePayable',
  'PostFinancialCorrection',
  'PostSaleRefund',
  'IssueRefund',
  'ProcessSaleReplacement',
  'CreatePhysicalAccount',
  'CreateTreasuryMovement',
  'RecordReconciliation',
  'ApproveReconciliationAdjustment',
]);

function observeGatewayCommand(command: string, status: string, startedNs: bigint) {
  const duration = Number(process.hrtime.bigint() - startedNs) / 1e9;
  recordCommandExecution(command, 'gateway', status, duration);
  if (FINANCIAL_WRITE_COMMANDS.has(command)) {
    recordFinancialPostLatency(command, status, duration);
  }
}

@Controller()
export class AppController {
  constructor(
    @Inject('IDENTITY_SERVICE') private readonly identityClient: ClientProxy,
    @Inject('TENANT_SERVICE') private readonly tenantClient: ClientProxy,
    @Inject('ACCOUNTING_SERVICE') private readonly accountingClient: ClientProxy,
    @Inject('INVENTORY_SERVICE') private readonly inventoryClient: ClientProxy,
    @Inject('TREASURY_SERVICE') private readonly treasuryClient: ClientProxy,
    @Inject('SALES_SERVICE') private readonly salesClient: ClientProxy,
    @Inject('PURCHASE_SERVICE') private readonly purchaseClient: ClientProxy,
    @Inject('SUPPLIER_SERVICE') private readonly supplierClient: ClientProxy,
    private readonly readinessService: ReadinessService
  ) {}

  @Get('health')
  getHealth(): { status: string; timestamp: string } {
    return { status: 'ok', timestamp: new Date().toISOString() };
  }

  @Get('ready')
  async getReady() {
    const result = await this.readinessService.check();
    if (result.status !== 'ok') {
      throw new ServiceUnavailableException({
        status: 'error',
        errorCode: 'DEPENDENCY_UNAVAILABLE',
        message: 'One or more required services are unavailable',
        ...result,
      });
    }
    return result;
  }

  @Post('api')
  @UseGuards(JwtAuthGuard)
  async handleCommand(@Req() req: any, @Body() body: any): Promise<any> {
    const { command, payload } = body || {};
    const cmd = command || req.headers['x-command'];
    const started = process.hrtime.bigint();

    if (!cmd) {
      return { status: 'error', message: 'Missing command identifier in body' };
    }

    const context = req.context;

    if (RETIRED_FINANCIAL_COMMANDS.has(cmd)) {
      observeGatewayCommand(cmd, 'retired', started);
      throw new HttpException(
        {
          status: 'error',
          message:
            'This command has been retired. Use the financial engine (PostFinancialTransaction, CreateTreasuryMovement, GetEngineReport).',
          errorCode: ErrorCode.COMMAND_RETIRED,
          command: cmd,
          traceId: context?.traceId,
        },
        HttpStatus.GONE,
      );
    }

    // Public commands (e.g. self-registration, login) bypass role/permission checks.
    const isPublic = isPublicCommand(cmd);

    if (!isPublic) {
      if (process.env.ENABLE_DYNAMIC_RBAC !== 'false') {
        const targetShopId = payload?.shopId || payload?.allowedShopIds || payload?.targetShopId || payload?.fromShopId;
        const targetShopIds = targetShopId ? (Array.isArray(targetShopId) ? targetShopId : [targetShopId]) : undefined;

        const authResult = await authorizeUserAction(
          prisma,
          {
            userId: req.user?.id,
            tenantId: req.user?.tenantId,
            role: req.user?.role || 'STAFF',
          },
          cmd,
          targetShopIds
        );

        if (!authResult.allowed) {
          observeGatewayCommand(cmd, 'forbidden', started);
          throw new HttpException(
            {
              status: 'error',
              message: `Access denied: ${authResult.reason}`,
              errorCode: 'FORBIDDEN',
              actionKey: cmd,
              reason: authResult.reason,
              source: authResult.source,
              traceId: context?.traceId,
            },
            HttpStatus.FORBIDDEN
          );
        }

        // Sanitize payload: strip any client-injected authorization fields
        if (payload && typeof payload === 'object') {
          delete payload.scope;
          delete payload.allowedShopIds;
        }

        if (req.context) {
          req.context.actionKey = cmd;
          req.context.scope = authResult.scope;
          req.context.allowedShopIds = authResult.allowedShopIds;
          req.context.role = req.user?.role || 'STAFF';
        }
      } else {
        const requiredRoles = COMMAND_ROLES[cmd];
        if (requiredRoles && requiredRoles.length > 0) {
          const userRole = req.user?.role;
          if (!userRole || !requiredRoles.includes(userRole)) {
            observeGatewayCommand(cmd, 'forbidden', started);
            throw new HttpException(
              {
                status: 'error',
                message: `Insufficient role privileges. Required: ${requiredRoles.join(', ')}`,
                errorCode: 'FORBIDDEN',
                actionKey: cmd,
                reason: `Role '${userRole}' not in required roles [${requiredRoles.join(', ')}]`,
                source: 'LEGACY_ROLE_GUARD',
                traceId: context?.traceId,
              },
              HttpStatus.FORBIDDEN
            );
          }
        }
      }
    }

    try {
      if (['CreateTenant', 'CreateUser', 'LoginUser', 'GetUsers', 'GetPermissionTemplates', 'CreatePermissionTemplate', 'UpdatePermissionTemplate', 'DeletePermissionTemplate', 'AssignTemplateToUser', 'SetUserPermissionOverride', 'RemoveUserPermissionOverride', 'GetUserEffectivePermissions', 'GetPermissionAuditLogs'].includes(cmd)) {
        const result = await firstValueFrom(this.identityClient.send({ cmd }, { payload, context }));
        observeGatewayCommand(cmd, 'success', started);
        return result;
      }

      if (['CreateShop', 'UpdateShop', 'GetTenantShops', 'GetTenant', 'GetTenantSubscription', 'GetStaff', 'CreateStaff'].includes(cmd)) {
        const result = await firstValueFrom(this.tenantClient.send({ cmd }, { payload, context }));
        observeGatewayCommand(cmd, 'success', started);
        return result;
      }

      if (['PostFinancialTransaction', 'GetFinancialTransaction', 'RecordGeneralExpense', 'RecordWorkerAdvance', 'RecordPettyCashAdvance', 'RepayPettyCashAdvance', 'RecordPettyCashExpense', 'GetAccountingAccounts', 'GetJournals', 'GetReceivables', 'PostTreasuryBooks', 'GetProfitAllocation', 'PostSaleConfirmation', 'PostPurchasePayable', 'PostFinancialCorrection', 'PostSaleRefund', 'GetEngineReport', 'GetDashboardProfitAnalytics', 'GetDashboardArApAnalytics'].includes(cmd)) {
        const result = await firstValueFrom(this.accountingClient.send({ cmd }, { payload, context }));
        observeGatewayCommand(cmd, 'success', started);
        return result;
      }

      if (['AddProduct', 'UpdateProduct', 'DeleteProduct', 'UpdateProductStatus', 'SetProductPrice', 'GetProducts', 'GetProductById', 'GetProductBySku', 'AddInventoryItem', 'GetAvailableInventoryItems', 'GetStockUnits', 'GetOwnedUnsoldStockPosition', 'GetDeviceLife', 'GetStockMovements', 'GetDashboardInventoryAnalytics', 'ProcessPosSale', 'ApplySaleFulfillment', 'ApplySaleReturn', 'ApplyReturnedItemAssessment', 'ReceiveGoods', 'ProcessSalesReturn', 'CreateWarrantyClaim', 'TransferInventory', 'RecordInventoryUpgrade', 'RecordInventoryIncident', 'CreateRental', 'UpdateRentalStatus', 'GetRentals', 'CreateContact', 'GetContacts'].includes(cmd)) {
        const result = await firstValueFrom(this.inventoryClient.send({ cmd }, { payload, context }));
        observeGatewayCommand(cmd, 'success', started);
        return result;
      }

      if (['ProcessSale', 'CreateSale', 'ConfirmSale', 'CancelSale', 'FulfillSale', 'RecordSalePayment', 'CreateSaleReturn', 'IssueRefund', 'ProcessSaleReplacement', 'AssessReturnedItem', 'CreateWarranty', 'ConvertQuotationToSale', 'RecordPartialPayment', 'RecordBonus', 'ProcessLoanSale', 'GetSales', 'GetSaleById', 'GetSaleHistory', 'GetDeviceSales', 'GetSoldUnitProfit', 'GetDashboardSalesAnalytics', 'GetDashboardPaymentMethodMix', 'GetDashboardProductPerformance'].includes(cmd)) {
        const result = await firstValueFrom(this.salesClient.send({ cmd }, { payload, context }));
        observeGatewayCommand(cmd, 'success', started);
        return result;
      }

      if (['CreatePurchase', 'AddPurchaseItem', 'UpdatePurchaseItem', 'RemovePurchaseItem', 'ConfirmPurchase', 'CancelPurchase', 'CreatePurchaseReceiving', 'AddReceivedItems', 'ReceivePurchaseUnit', 'ConfirmPurchaseUnit', 'CancelPurchaseUnit', 'AddReceivedItemCost', 'RecordPurchasePayment', 'CreatePurchaseReturn', 'AddPurchaseReturnItems', 'AddPurchaseDocument', 'GetPurchases', 'GetPurchaseById', 'GetPurchaseByNumber', 'GetPurchaseItems', 'GetPurchaseReceivings', 'GetPurchasePayments', 'GetPurchaseReturns', 'GetPurchaseDocuments', 'GetPurchaseHistory'].includes(cmd)) {
        const result = await firstValueFrom(this.purchaseClient.send({ cmd }, { payload, context }));
        observeGatewayCommand(cmd, 'success', started);
        return result;
      }

      if (['CreateSupplier', 'GetSuppliers', 'UpdateSupplier', 'DeleteSupplier'].includes(cmd)) {
        const result = await firstValueFrom(this.supplierClient.send({ cmd }, { payload, context }));
        observeGatewayCommand(cmd, 'success', started);
        return result;
      }

      if (['GetFinancialStructure', 'CreatePhysicalAccount', 'CreateTreasuryMovement', 'SeedTreasuryOpeningBalances', 'GetFundBalances', 'GetTreasuryMovements', 'GetTreasuryLoans', 'GetProfitTransferPosition', 'RecordReconciliation', 'ApproveReconciliationAdjustment', 'GetReconciliations', 'GetDailyPosition', 'GetMonthlyPosition', 'GetFinancialOverview', 'GetDashboardCashFlowAnalytics', 'GetDashboardLoanAnalytics'].includes(cmd)) {
        const result = await firstValueFrom(this.treasuryClient.send({ cmd }, { payload, context }));
        observeGatewayCommand(cmd, 'success', started);
        return result;
      }

      observeGatewayCommand(cmd, 'unrouted', started);
      return { 
        status: 'error', 
        message: `Command ${cmd} is not routed properly.`,
        traceId: context?.traceId
      };
    } catch (error: any) {
      if (error instanceof HttpException) {
        throw error;
      }
      observeGatewayCommand(cmd, 'error', started);
      const rpcMessage =
        error?.message ||
        error?.err ||
        error?.error ||
        (typeof error === 'string' ? error : null) ||
        'Service communication error';
      throw new HttpException(
        {
          status: 'error',
          message: rpcMessage,
          errorCode: error.code || error.errorCode || 'INTERNAL_ERROR',
          details: error.details || error.err,
          command: cmd,
        },
        error.httpStatus || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  @Get('metrics')
  @UseGuards(MetricsAuthGuard)
  async getMetrics() {
    const metrics = await getMetrics();
    return metrics;
  }
}
