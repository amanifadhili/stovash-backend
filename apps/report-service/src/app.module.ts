import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ReportController } from './report.controller.js';
import { DashboardReport } from './reports/dashboard.report.js';
import { SalesReport } from './reports/sales.report.js';
import { PurchasesReport } from './reports/purchases.report.js';
import { InventoryReport } from './reports/inventory.report.js';
import { FinancialStatementsReport } from './reports/financial-statements.report.js';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ACCOUNTING_SERVICE',
        transport: Transport.TCP,
        options: { host: '127.0.0.1', port: 3003 },
      },
      {
        name: 'INVENTORY_SERVICE',
        transport: Transport.TCP,
        options: { host: '127.0.0.1', port: 3004 },
      },
      {
        name: 'SALES_SERVICE',
        transport: Transport.TCP,
        options: { host: '127.0.0.1', port: 3005 },
      },
      {
        name: 'PURCHASE_SERVICE',
        transport: Transport.TCP,
        options: { host: '127.0.0.1', port: 3006 },
      },
    ]),
  ],
  controllers: [ReportController],
  providers: [
    DashboardReport,
    SalesReport,
    PurchasesReport,
    InventoryReport,
    FinancialStatementsReport,
  ],
})
export class AppModule {}
