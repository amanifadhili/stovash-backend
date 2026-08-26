import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateSaleCommand } from './commands/impl/create-sale.command.js';
import { ConfirmSaleCommand } from './commands/impl/confirm-sale.command.js';
import { CancelSaleCommand } from './commands/impl/cancel-sale.command.js';
import { FulfillSaleCommand } from './commands/impl/fulfill-sale.command.js';
import { RecordSalePaymentCommand } from './commands/impl/record-sale-payment.command.js';
import { CreateSaleReturnCommand } from './commands/impl/create-sale-return.command.js';
import { IssueRefundCommand } from './commands/impl/issue-refund.command.js';
import { ProcessSaleReplacementCommand } from './commands/impl/process-sale-replacement.command.js';
import { AssessReturnedItemCommand } from './commands/impl/assess-returned-item.command.js';
import { CreateWarrantyCommand } from './commands/impl/create-warranty.command.js';
import { ProcessSaleCommand } from './commands/impl/process-sale.command.js';
import { ConvertQuotationToSaleCommand } from './commands/impl/convert-quotation-to-sale.command.js';
import { RecordPartialPaymentCommand } from './commands/impl/record-partial-payment.command.js';
import { RecordBonusCommand } from './commands/impl/record-bonus.command.js';
import { ProcessLoanSaleCommand } from './commands/impl/process-loan-sale.command.js';
import { GetSalesQuery } from './queries/impl/get-sales.query.js';
import { GetSaleByIdQuery } from './queries/impl/get-sale-by-id.query.js';
import { GetSaleHistoryQuery } from './queries/impl/get-sale-history.query.js';
import { GetDeviceSalesQuery } from './queries/impl/get-device-sales.query.js';
import { GetSoldUnitProfitQuery } from './queries/impl/get-sold-unit-profit.query.js';
import { GetSaleReturnsByIdsQuery } from './queries/handlers/get-sale-returns-by-ids.handler.js';
import { GetDashboardSalesAnalyticsQuery } from './queries/impl/get-dashboard-sales-analytics.query.js';
import { GetDashboardPaymentMethodMixQuery } from './queries/handlers/get-dashboard-payment-method-mix.handler.js';
import { GetDashboardProductPerformanceQuery } from './queries/impl/get-dashboard-product-performance.query.js';

@Controller()
export class SalesServiceController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @MessagePattern({ cmd: 'CreateSale' })
  async handleCreateSale(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new CreateSaleCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'ConfirmSale' })
  async handleConfirmSale(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new ConfirmSaleCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'CancelSale' })
  async handleCancelSale(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new CancelSaleCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'FulfillSale' })
  async handleFulfillSale(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new FulfillSaleCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'RecordSalePayment' })
  async handleRecordSalePayment(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new RecordSalePaymentCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'CreateSaleReturn' })
  async handleCreateSaleReturn(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new CreateSaleReturnCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'IssueRefund' })
  async handleIssueRefund(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new IssueRefundCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'ProcessSaleReplacement' })
  async handleProcessSaleReplacement(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new ProcessSaleReplacementCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'AssessReturnedItem' })
  async handleAssessReturnedItem(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new AssessReturnedItemCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'CreateWarranty' })
  async handleCreateWarranty(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new CreateWarrantyCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'ProcessSale' })
  async handleProcessSale(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new ProcessSaleCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'ConvertQuotationToSale' })
  async handleConvertQuotationToSale(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new ConvertQuotationToSaleCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'RecordPartialPayment' })
  async handleRecordPartialPayment(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new RecordPartialPaymentCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'RecordBonus' })
  async handleRecordBonus(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new RecordBonusCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'ProcessLoanSale' })
  async handleProcessLoanSale(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new ProcessLoanSaleCommand(data.payload, data.context));
  }

  // Queries
  @MessagePattern({ cmd: 'GetSales' })
  async handleGetSales(@Payload() data: { payload: any, context: any }) {
    return this.queryBus.execute(new GetSalesQuery(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'GetSaleById' })
  async handleGetSaleById(@Payload() data: { payload: any, context: any }) {
    return this.queryBus.execute(new GetSaleByIdQuery(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'GetSaleHistory' })
  async handleGetSaleHistory(@Payload() data: { payload: any, context: any }) {
    return this.queryBus.execute(new GetSaleHistoryQuery(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'GetDeviceSales' })
  async handleGetDeviceSales(@Payload() data: { payload: any, context: any }) {
    return this.queryBus.execute(new GetDeviceSalesQuery(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'GetSoldUnitProfit' })
  async handleGetSoldUnitProfit(@Payload() data: { payload: any, context: any }) {
    return this.queryBus.execute(new GetSoldUnitProfitQuery(data.payload || {}, data.context));
  }

  @MessagePattern({ cmd: 'GetSaleReturnsByIds' })
  async handleGetSaleReturnsByIds(@Payload() data: { payload: any; context: any }) {
    return this.queryBus.execute(new GetSaleReturnsByIdsQuery(data.payload || {}, data.context));
  }

  @MessagePattern({ cmd: 'GetDashboardSalesAnalytics' })
  async handleGetDashboardSalesAnalytics(@Payload() data: { payload: any; context: any }) {
    return this.queryBus.execute(
      new GetDashboardSalesAnalyticsQuery(data.payload || {}, data.context),
    );
  }

  @MessagePattern({ cmd: 'GetDashboardPaymentMethodMix' })
  async handleGetDashboardPaymentMethodMix(@Payload() data: { payload: any; context: any }) {
    return this.queryBus.execute(
      new GetDashboardPaymentMethodMixQuery(data.payload || {}, data.context),
    );
  }

  @MessagePattern({ cmd: 'GetDashboardProductPerformance' })
  async handleGetDashboardProductPerformance(@Payload() data: { payload: any; context: any }) {
    return this.queryBus.execute(
      new GetDashboardProductPerformanceQuery(data.payload || {}, data.context),
    );
  }
}
