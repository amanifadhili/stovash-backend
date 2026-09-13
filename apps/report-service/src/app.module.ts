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
        options: { host: '127.0.0.1', port: parseInt(process.env.ACCOUNTING_SERVICE_PORT || '5053', 10) },
      },
      {
        name: 'INVENTORY_SERVICE',
        transport: Transport.TCP,
        options: { host: '127.0.0.1', port: parseInt(process.env.INVENTORY_SERVICE_PORT || '5055', 10) },
      },
      {
        name: 'SALES_SERVICE',
        transport: Transport.TCP,
        options: { host: '127.0.0.1', port: parseInt(process.env.SALES_SERVICE_PORT || '5056', 10) },
      },
      {
        name: 'PURCHASE_SERVICE',
        transport: Transport.TCP,
        options: { host: '127.0.0.1', port: parseInt(process.env.PURCHASE_SERVICE_PORT || '5057', 10) },
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
