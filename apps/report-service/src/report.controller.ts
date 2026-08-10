import { Controller, Get, Query } from '@nestjs/common';
import { Inject } from '@nestjs/common';
import { DashboardReport } from './reports/dashboard.report.js';
import { SalesReport } from './reports/sales.report.js';
import { PurchasesReport } from './reports/purchases.report.js';
import { InventoryReport } from './reports/inventory.report.js';
import { FinancialStatementsReport } from './reports/financial-statements.report.js';

@Controller('reports')
export class ReportController {
  constructor(
    private readonly dashboardReport: DashboardReport,
    private readonly salesReport: SalesReport,
    private readonly purchasesReport: PurchasesReport,
    private readonly inventoryReport: InventoryReport,
    private readonly financialStatementsReport: FinancialStatementsReport,
  ) {}

  @Get('dashboard')
  async getDashboard(@Query('tenantId') tenantId: string, @Query('shopId') shopId: string) {
    const data = await this.dashboardReport.getDashboard(tenantId, shopId);
    return { status: 'success', data };
  }

  @Get('sales')
  async getSalesReport(
    @Query('tenantId') tenantId: string,
    @Query('shopId') shopId: string,
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ) {
    const data = await this.salesReport.getSalesReport(tenantId, shopId, startDate, endDate);
    return { status: 'success', data };
  }

  @Get('purchases')
  async getPurchasesReport(
    @Query('tenantId') tenantId: string,
    @Query('shopId') shopId: string,
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ) {
    const data = await this.purchasesReport.getPurchasesReport(tenantId, shopId, startDate, endDate);
    return { status: 'success', data };
  }

  @Get('inventory')
  async getInventoryReport(@Query('tenantId') tenantId: string, @Query('shopId') shopId: string) {
    const data = await this.inventoryReport.getInventoryReport(tenantId, shopId);
    return { status: 'success', data };
  }

  @Get('trial-balance')
  async getTrialBalance(@Query('tenantId') tenantId: string, @Query('shopId') shopId: string) {
    const data = await this.financialStatementsReport.getTrialBalance(tenantId, shopId);
    return { status: 'success', data };
  }

  @Get('income-statement')
  async getIncomeStatement(
    @Query('tenantId') tenantId: string,
    @Query('shopId') shopId: string,
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ) {
    const data = await this.financialStatementsReport.getIncomeStatement(tenantId, shopId, startDate, endDate);
    return { status: 'success', data };
  }

  @Get('balance-sheet')
  async getBalanceSheet(@Query('tenantId') tenantId: string, @Query('shopId') shopId: string) {
    const data = await this.financialStatementsReport.getBalanceSheet(tenantId, shopId);
    return { status: 'success', data };
  }
}
