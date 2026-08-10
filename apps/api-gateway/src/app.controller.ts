import { Controller, Get, Post, Req, Inject, Body, UseGuards, HttpException, HttpStatus } from '@nestjs/common';
import { JwtAuthGuard } from './common/auth/jwt-auth.guard.js';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

// Command to permission mapping
const COMMAND_PERMISSIONS: Record<string, string[]> = {
  // Tenant commands
  'CreateTenant': ['tenant:create'],
  
  // User commands
  'CreateUser': ['user:create'],
  'LoginUser': [], // Public endpoint
  
  // Accounting commands
  'PostJournalEntry': ['accounting:journal:post'],
  'CreateLedgerAccount': ['accounting:account:create'],
  'OpenWorkPeriod': ['accounting:workperiod:open'],
  'CloseWorkPeriod': ['accounting:workperiod:close'],
  'GetActiveWorkPeriod': ['accounting:workperiod:read'],
  'GetTrialBalance': ['accounting:report:read'],
  'GetIncomeStatement': ['accounting:report:read'],
  'GetBalanceSheet': ['accounting:report:read'],
  
  // Inventory commands
  'AddProduct': ['inventory:product:create'],
  'AddInventoryItem': ['inventory:item:create'],
  'ProcessPosSale': ['inventory:sale:create'],
  'ReceiveGoods': ['inventory:goods:receive'],
  'ProcessSalesReturn': ['inventory:return:process'],
  'CreateWarrantyClaim': ['inventory:warranty:create'],
  'TransferInventory': ['inventory:inventory:transfer'],
  
  // Sales commands
  'ProcessSale': ['sales:sale:create'],
  
  // Purchase commands
  'ProcessPurchase': ['purchase:purchase:create'],
  
  // Treasury commands
  'RecordOperationalDeposit': ['treasury:deposit:create'],
  'ReconcilePaymentMethod': ['treasury:reconcile:create'],
};

// Command to role mapping (role-based access control)
const COMMAND_ROLES: Record<string, string[]> = {
  // Tenant commands - only ADMIN can create tenants
  'CreateTenant': ['ADMIN'],
  
  // User commands - ADMIN and MANAGER can create users
  'CreateUser': ['ADMIN', 'MANAGER'],
  'LoginUser': [], // Public endpoint
  
  // Accounting commands
  'PostJournalEntry': ['ADMIN', 'MANAGER', 'ACCOUNTANT'],
  'CreateLedgerAccount': ['ADMIN', 'MANAGER', 'ACCOUNTANT'],
  'OpenWorkPeriod': ['ADMIN', 'MANAGER'],
  'CloseWorkPeriod': ['ADMIN', 'MANAGER'],
  'GetActiveWorkPeriod': ['ADMIN', 'MANAGER', 'ACCOUNTANT', 'STAFF'],
  'GetTrialBalance': ['ADMIN', 'MANAGER', 'ACCOUNTANT'],
  'GetIncomeStatement': ['ADMIN', 'MANAGER', 'ACCOUNTANT'],
  'GetBalanceSheet': ['ADMIN', 'MANAGER', 'ACCOUNTANT'],
  
  // Inventory commands
  'AddProduct': ['ADMIN', 'MANAGER'],
  'AddInventoryItem': ['ADMIN', 'MANAGER', 'STAFF'],
  'ProcessPosSale': ['ADMIN', 'MANAGER', 'STAFF'],
  'ReceiveGoods': ['ADMIN', 'MANAGER', 'STAFF'],
  'ProcessSalesReturn': ['ADMIN', 'MANAGER', 'STAFF'],
  'CreateWarrantyClaim': ['ADMIN', 'MANAGER', 'STAFF'],
  'TransferInventory': ['ADMIN', 'MANAGER', 'STAFF'],
  
  // Sales commands
  'ProcessSale': ['ADMIN', 'MANAGER', 'STAFF'],
  
  // Purchase commands
  'ProcessPurchase': ['ADMIN', 'MANAGER', 'STAFF'],
  
  // Treasury commands
  'RecordOperationalDeposit': ['ADMIN', 'MANAGER', 'STAFF'],
  'ReconcilePaymentMethod': ['ADMIN', 'MANAGER'],
};

@Controller()
export class AppController {
  constructor(
    @Inject('IDENTITY_SERVICE') private readonly identityClient: ClientProxy,
    @Inject('ACCOUNTING_SERVICE') private readonly accountingClient: ClientProxy,
    @Inject('INVENTORY_SERVICE') private readonly inventoryClient: ClientProxy,
    @Inject('TREASURY_SERVICE') private readonly treasuryClient: ClientProxy,
    @Inject('SALES_SERVICE') private readonly salesClient: ClientProxy,
    @Inject('PURCHASE_SERVICE') private readonly purchaseClient: ClientProxy
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

    // Check role-based access control
    const requiredRoles = COMMAND_ROLES[cmd];
    if (requiredRoles && requiredRoles.length > 0) {
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
    if (requiredPermissions && requiredPermissions.length > 0) {
      const userPermissions = req.user?.permissions || [];
      const hasPermission = requiredPermissions.some(p => userPermissions.includes(p));
      
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
      if (['CreateTenant', 'CreateUser', 'LoginUser'].includes(cmd)) {
        return await firstValueFrom(this.identityClient.send({ cmd }, { payload, context }));
      }
      
      if (['PostJournalEntry', 'CreateLedgerAccount', 'OpenWorkPeriod', 'CloseWorkPeriod', 'GetActiveWorkPeriod', 'GetTrialBalance', 'GetIncomeStatement', 'GetBalanceSheet'].includes(cmd)) {
        return await firstValueFrom(this.accountingClient.send({ cmd }, { payload, context }));
      }

      if (['AddProduct', 'AddInventoryItem', 'ProcessPosSale', 'ReceiveGoods', 'ProcessSalesReturn', 'CreateWarrantyClaim', 'TransferInventory'].includes(cmd)) {
        return await firstValueFrom(this.inventoryClient.send({ cmd }, { payload, context }));
      }

      if (['ProcessSale'].includes(cmd)) {
        return await firstValueFrom(this.salesClient.send({ cmd }, { payload, context }));
      }

      if (['ProcessPurchase'].includes(cmd)) {
        return await firstValueFrom(this.purchaseClient.send({ cmd }, { payload, context }));
      }

      if (['RecordOperationalDeposit', 'ReconcilePaymentMethod'].includes(cmd)) {
        return await firstValueFrom(this.treasuryClient.send({ cmd }, { payload, context }));
      }

      return { 
        status: 'error', 
        message: `Command ${cmd} is not routed properly.`,
        traceId: context?.traceId
      };
    } catch (error: any) {
      throw new HttpException(
        {
          status: 'error',
          message: error.message || 'Service communication error',
          errorCode: error.code || 'INTERNAL_ERROR',
          details: error.details
        },
        error.httpStatus || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
