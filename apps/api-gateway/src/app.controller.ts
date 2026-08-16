import { Controller, Get, Post, Req, Inject, Body, UseGuards, HttpException, HttpStatus } from '@nestjs/common';
import { JwtAuthGuard } from './common/auth/jwt-auth.guard.js';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { getMetrics } from '@electronic-shop/metrics';

// Command to permission mapping
const COMMAND_PERMISSIONS: Record<string, string[]> = {
  // Tenant commands
  'CreateTenant': ['tenant:create'],
  'CreateShop': ['shop:create'],
  'UpdateShop': [],
  'GetTenant': [],
  'GetTenantShops': [],
  'GetTenantSubscription': [],
  'GetStaff': [],
  'CreateStaff': [],

  // User commands
  'CreateUser': ['user:create'],
  'GetUsers': [],
  'LoginUser': [], // Public endpoint
  
  // Accounting commands
  'PostJournalEntry': ['accounting:journal:post'],
  'CreateLedgerAccount': ['accounting:account:create'],
  'OpenWorkPeriod': [],
  'CloseWorkPeriod': [],
  'GetActiveWorkPeriod': [],
  'GetAccountTransactions': [],
  'GetTrialBalance': [],
  'GetIncomeStatement': [],
  'GetBalanceSheet': [],
  'CreatePostingBatch': ['accounting:batch:create'],
  'PostBatch': ['accounting:batch:post'],
  'RecordExpense': [],
  'GetExpenses': [],
  'GetChartOfAccounts': [],
  
  // Inventory commands
  'AddProduct': ['inventory:product:create'],
  'UpdateProduct': ['inventory:product:update'],
  'DeleteProduct': ['inventory:product:delete'],
  'UpdateProductStatus': ['inventory:product:status'],
  'SetProductPrice': ['inventory:product:price'],
  'GetProducts': ['inventory:product:read'],
  'GetProductById': ['inventory:product:read'],
  'GetProductBySku': ['inventory:product:read'],
  'CreateBrand': ['inventory:brand:create'],
  'UpdateBrand': ['inventory:brand:update'],
  'DeleteBrand': ['inventory:brand:delete'],
  'GetBrands': ['inventory:brand:read'],
  'GetBrandById': ['inventory:brand:read'],
  'CreateCategory': ['inventory:category:create'],
  'UpdateCategory': ['inventory:category:update'],
  'DeleteCategory': ['inventory:category:delete'],
  'GetCategories': ['inventory:category:read'],
  'GetCategoryById': ['inventory:category:read'],
  'AddInventoryItem': ['inventory:item:create'],
  'GetStockUnits': ['inventory:item:read'],
  'GetDeviceLife': ['inventory:item:read'],
  'GetAvailableInventoryItems': ['inventory:item:read'],
  'ProcessPosSale': ['inventory:sale:create'],
  'ReceiveGoods': ['inventory:goods:receive'],
  'ProcessSalesReturn': ['inventory:return:process'],
  'CreateWarrantyClaim': ['inventory:warranty:create'],
  'TransferInventory': ['inventory:inventory:transfer'],
  'RecordInventoryUpgrade': ['inventory:upgrade:create'],
  'RecordInventoryIncident': ['inventory:item:update', 'inventory:incident:create'],
  'CreateRental': ['inventory:item:create'],
  'UpdateRentalStatus': ['inventory:item:update'],
  'GetRentals': ['inventory:item:read'],
  'GetStockMovements': ['inventory:item:read'],
  
  // Sales commands
  'ProcessSale': ['sales:sale:create'],
  'CreateSale': ['sales:sale:create'],
  'ConfirmSale': ['sales:sale:confirm'],
  'CancelSale': ['sales:sale:cancel'],
  'FulfillSale': ['sales:sale:fulfill'],
  'RecordSalePayment': ['sales:payment:create'],
  'CreateSaleReturn': ['sales:return:create'],
  'AssessReturnedItem': ['sales:return:assess'],
  'CreateWarranty': ['sales:warranty:create'],
  'ConvertQuotationToSale': ['sales:sale:create'],
  'RecordPartialPayment': ['sales:payment:create'],
  'RecordBonus': ['sales:bonus:create'],
  'ProcessLoanSale': ['sales:loan:create'],
  'GetSales': ['sales:sale:read'],
  'GetSaleById': ['sales:sale:read'],
  'GetSaleHistory': ['sales:sale:read'],
  'GetDeviceSales': ['sales:sale:read'],
  
  // Purchase commands
  'CreatePurchase': ['purchase:purchase:create'],
  'AddPurchaseItem': ['purchase:purchase:update'],
  'UpdatePurchaseItem': ['purchase:purchase:update'],
  'RemovePurchaseItem': ['purchase:purchase:update'],
  'ConfirmPurchase': ['purchase:purchase:confirm'],
  'CancelPurchase': ['purchase:purchase:cancel'],
  'CreatePurchaseReceiving': ['purchase:receiving:create'],
  'AddReceivedItems': ['purchase:receiving:record'],
  'ReceivePurchaseUnit': ['purchase:receiving:record'],
  'ConfirmPurchaseUnit': ['purchase:receiving:confirm'],
  'CancelPurchaseUnit': ['purchase:receiving:confirm'],
  'AddReceivedItemCost': ['purchase:receiving:record'],
  'RecordPurchasePayment': ['purchase:payment:create'],
  'CreatePurchaseReturn': ['purchase:return:create'],
  'AddPurchaseReturnItems': ['purchase:return:add'],
  'AddPurchaseDocument': ['purchase:document:add'],
  'GetPurchases': ['purchase:purchase:read'],
  'GetPurchaseById': ['purchase:purchase:read'],
  'GetPurchaseByNumber': ['purchase:purchase:read'],
  'GetPurchaseItems': ['purchase:purchase:read'],
  'GetPurchaseReceivings': ['purchase:receiving:read'],
  'GetPurchasePayments': ['purchase:payment:read'],
  'GetPurchaseReturns': ['purchase:return:read'],
  'GetPurchaseDocuments': ['purchase:document:read'],
  'GetPurchaseHistory': ['purchase:purchase:read'],

  // Supplier commands
  'CreateSupplier': ['supplier:create'],
  'GetSuppliers': ['supplier:read'],
  'UpdateSupplier': ['supplier:update'],
  'DeleteSupplier': ['supplier:delete'],
  
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
};

// Command to role mapping (role-based access control)
const COMMAND_ROLES: Record<string, string[]> = {
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
  'CreatePostingBatch': ['ADMIN', 'MANAGER', 'ACCOUNTANT'],
  'PostBatch': ['ADMIN', 'MANAGER', 'ACCOUNTANT'],
  'RecordExpense': ['ADMIN', 'MANAGER', 'ACCOUNTANT', 'STAFF'],
  'GetExpenses': ['ADMIN', 'MANAGER', 'ACCOUNTANT', 'STAFF'],
  'GetChartOfAccounts': ['ADMIN', 'MANAGER', 'ACCOUNTANT', 'STAFF'],
  
  // Inventory commands
  'AddProduct': ['ADMIN', 'MANAGER'],
  'UpdateProduct': ['ADMIN', 'MANAGER'],
  'DeleteProduct': ['ADMIN'],
  'UpdateProductStatus': ['ADMIN', 'MANAGER'],
  'SetProductPrice': ['ADMIN', 'MANAGER'],
  'GetProducts': ['ADMIN', 'MANAGER', 'STAFF', 'ACCOUNTANT'],
  'GetProductById': ['ADMIN', 'MANAGER', 'STAFF', 'ACCOUNTANT'],
  'GetProductBySku': ['ADMIN', 'MANAGER', 'STAFF', 'ACCOUNTANT'],
  'CreateBrand': ['ADMIN', 'MANAGER'],
  'UpdateBrand': ['ADMIN', 'MANAGER'],
  'DeleteBrand': ['ADMIN'],
  'GetBrands': ['ADMIN', 'MANAGER', 'STAFF', 'ACCOUNTANT'],
  'GetBrandById': ['ADMIN', 'MANAGER', 'STAFF', 'ACCOUNTANT'],
  'CreateCategory': ['ADMIN', 'MANAGER'],
  'UpdateCategory': ['ADMIN', 'MANAGER'],
  'DeleteCategory': ['ADMIN'],
  'GetCategories': ['ADMIN', 'MANAGER', 'STAFF', 'ACCOUNTANT'],
  'GetCategoryById': ['ADMIN', 'MANAGER', 'STAFF', 'ACCOUNTANT'],
  'AddInventoryItem': ['ADMIN', 'MANAGER', 'STAFF'],
  'GetStockUnits': ['ADMIN', 'MANAGER', 'STAFF'],
  'GetDeviceLife': ['ADMIN', 'MANAGER', 'STAFF', 'ACCOUNTANT'],
  'GetAvailableInventoryItems': ['ADMIN', 'MANAGER', 'STAFF'],
  'ProcessPosSale': ['ADMIN', 'MANAGER', 'STAFF'],
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
};

// Commands that are public (no authenticated user required). Their role/permission
// checks are skipped because there is no user context to authorize against.
// CreateTenant is the tenant self-registration (onboarding) flow; LoginUser is public auth.
const PUBLIC_COMMANDS = ['LoginUser', 'CreateTenant'];

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
    @Inject('SUPPLIER_SERVICE') private readonly supplierClient: ClientProxy
  ) {}

  @Get('health')
  getHealth(): { status: string; timestamp: string } {
    return { status: 'ok', timestamp: new Date().toISOString() };
  }

  @Post('api')
  @UseGuards(JwtAuthGuard)
  async handleCommand(@Req() req: any, @Body() body: any): Promise<any> {
    const { command, payload } = body || {};
    const cmd = command || req.headers['x-command'];

    if (!cmd) {
      return { status: 'error', message: 'Missing command identifier in body' };
    }

    const context = req.context;

    // Public commands (e.g. self-registration) bypass role/permission checks.
    const isPublic = PUBLIC_COMMANDS.includes(cmd);

    // Check role-based access control
    const requiredRoles = COMMAND_ROLES[cmd];
    if (!isPublic && requiredRoles && requiredRoles.length > 0) {
      const userRole = req.user?.role;
      if (!userRole || !requiredRoles.includes(userRole)) {
        throw new HttpException(
          {
            status: 'error',
            message: `Insufficient role privileges. Required: ${requiredRoles.join(', ')}`,
            errorCode: 'FORBIDDEN'
          },
          HttpStatus.FORBIDDEN
        );
      }
    }

    // Check permissions for the command
    const requiredPermissions = COMMAND_PERMISSIONS[cmd];
    if (!isPublic && requiredPermissions && requiredPermissions.length > 0) {
      const userPermissions = req.user?.permissions || [];
      const hasPermission = userPermissions.includes('*') || requiredPermissions.some(p => userPermissions.includes(p));
      
      if (!hasPermission) {
        throw new HttpException(
          {
            status: 'error',
            message: `Insufficient permissions. Required: ${requiredPermissions.join(', ')}`,
            errorCode: 'FORBIDDEN'
          },
          HttpStatus.FORBIDDEN
        );
      }
    }

    try {
      if (['CreateTenant', 'CreateUser', 'LoginUser', 'GetUsers'].includes(cmd)) {
        return await firstValueFrom(this.identityClient.send({ cmd }, { payload, context }));
      }

      if (['CreateShop', 'UpdateShop', 'GetTenantShops', 'GetTenant', 'GetTenantSubscription', 'GetStaff', 'CreateStaff'].includes(cmd)) {
        return await firstValueFrom(this.tenantClient.send({ cmd }, { payload, context }));
      }

      if (['PostJournalEntry', 'CreateLedgerAccount', 'OpenWorkPeriod', 'CloseWorkPeriod', 'GetActiveWorkPeriod', 'GetAccountTransactions', 'GetTrialBalance', 'GetIncomeStatement', 'GetBalanceSheet', 'CreatePostingBatch', 'PostBatch', 'RecordExpense', 'GetExpenses', 'GetChartOfAccounts'].includes(cmd)) {
        return await firstValueFrom(this.accountingClient.send({ cmd }, { payload, context }));
      }

      if (['AddProduct', 'UpdateProduct', 'DeleteProduct', 'UpdateProductStatus', 'SetProductPrice', 'GetProducts', 'GetProductById', 'GetProductBySku', 'CreateBrand', 'UpdateBrand', 'DeleteBrand', 'GetBrands', 'GetBrandById', 'CreateCategory', 'UpdateCategory', 'DeleteCategory', 'GetCategories', 'GetCategoryById', 'AddInventoryItem', 'GetAvailableInventoryItems', 'GetStockUnits', 'GetDeviceLife', 'GetStockMovements', 'ProcessPosSale', 'ReceiveGoods', 'ProcessSalesReturn', 'CreateWarrantyClaim', 'TransferInventory', 'RecordInventoryUpgrade', 'RecordInventoryIncident', 'CreateRental', 'UpdateRentalStatus', 'GetRentals', 'CreateContact', 'GetContacts'].includes(cmd)) {
        return await firstValueFrom(this.inventoryClient.send({ cmd }, { payload, context }));
      }

      if (['ProcessSale', 'CreateSale', 'ConfirmSale', 'CancelSale', 'FulfillSale', 'RecordSalePayment', 'CreateSaleReturn', 'AssessReturnedItem', 'CreateWarranty', 'ConvertQuotationToSale', 'RecordPartialPayment', 'RecordBonus', 'ProcessLoanSale', 'GetSales', 'GetSaleById', 'GetSaleHistory', 'GetDeviceSales'].includes(cmd)) {
        return await firstValueFrom(this.salesClient.send({ cmd }, { payload, context }));
      }

      if (['CreatePurchase', 'AddPurchaseItem', 'UpdatePurchaseItem', 'RemovePurchaseItem', 'ConfirmPurchase', 'CancelPurchase', 'CreatePurchaseReceiving', 'AddReceivedItems', 'ReceivePurchaseUnit', 'ConfirmPurchaseUnit', 'CancelPurchaseUnit', 'AddReceivedItemCost', 'RecordPurchasePayment', 'CreatePurchaseReturn', 'AddPurchaseReturnItems', 'AddPurchaseDocument', 'GetPurchases', 'GetPurchaseById', 'GetPurchaseByNumber', 'GetPurchaseItems', 'GetPurchaseReceivings', 'GetPurchasePayments', 'GetPurchaseReturns', 'GetPurchaseDocuments', 'GetPurchaseHistory'].includes(cmd)) {
        return await firstValueFrom(this.purchaseClient.send({ cmd }, { payload, context }));
      }

      if (['CreateSupplier', 'GetSuppliers', 'UpdateSupplier', 'DeleteSupplier'].includes(cmd)) {
        return await firstValueFrom(this.supplierClient.send({ cmd }, { payload, context }));
      }

      if (['RecordOperationalDeposit', 'ReconcilePaymentMethod', 'CreatePaymentMethod', 'GetPaymentMethods', 'CreateTransfer', 'CreatePhysicalConfirmation', 'GetTreasuryActivity', 'RecordTreasuryLoan', 'RecordLoanRepayment'].includes(cmd)) {
        return await firstValueFrom(this.treasuryClient.send({ cmd }, { payload, context }));
      }

      return { 
        status: 'error', 
        message: `Command ${cmd} is not routed properly.`,
        traceId: context?.traceId
      };
    } catch (error: any) {
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
  async getMetrics() {
    const metrics = await getMetrics();
    return metrics;
  }
}
