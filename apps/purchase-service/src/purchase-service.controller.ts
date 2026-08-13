import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import {
  CreatePurchaseCommand,
  AddPurchaseItemCommand,
  UpdatePurchaseItemCommand,
  RemovePurchaseItemCommand,
  ConfirmPurchaseCommand,
  CancelPurchaseCommand,
  CreatePurchaseReceivingCommand,
  AddReceivedItemsCommand,
  ReceivePurchaseUnitCommand,
  ConfirmPurchaseUnitCommand,
  AddReceivedItemCostCommand,
  RecordPurchasePaymentCommand,
  CreatePurchaseReturnCommand,
  AddPurchaseReturnItemsCommand,
  AddPurchaseDocumentCommand,
} from './commands/impl/index.js';
import {
  GetPurchasesQuery,
  GetPurchaseByIdQuery,
  GetPurchaseByNumberQuery,
  GetPurchaseItemsQuery,
  GetPurchaseReceivingsQuery,
  GetPurchasePaymentsQuery,
  GetPurchaseReturnsQuery,
  GetPurchaseDocumentsQuery,
  GetPurchaseHistoryQuery,
} from './queries/impl/index.js';

@Controller()
export class PurchaseServiceController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  // Commands
  @MessagePattern({ cmd: 'CreatePurchase' })
  async handleCreatePurchase(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new CreatePurchaseCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'AddPurchaseItem' })
  async handleAddPurchaseItem(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new AddPurchaseItemCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'UpdatePurchaseItem' })
  async handleUpdatePurchaseItem(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new UpdatePurchaseItemCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'RemovePurchaseItem' })
  async handleRemovePurchaseItem(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new RemovePurchaseItemCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'ConfirmPurchase' })
  async handleConfirmPurchase(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new ConfirmPurchaseCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'CancelPurchase' })
  async handleCancelPurchase(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new CancelPurchaseCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'CreatePurchaseReceiving' })
  async handleCreatePurchaseReceiving(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new CreatePurchaseReceivingCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'AddReceivedItems' })
  async handleAddReceivedItems(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new AddReceivedItemsCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'ReceivePurchaseUnit' })
  async handleReceivePurchaseUnit(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new ReceivePurchaseUnitCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'ConfirmPurchaseUnit' })
  async handleConfirmPurchaseUnit(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new ConfirmPurchaseUnitCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'AddReceivedItemCost' })
  async handleAddReceivedItemCost(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new AddReceivedItemCostCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'RecordPurchasePayment' })
  async handleRecordPurchasePayment(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new RecordPurchasePaymentCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'CreatePurchaseReturn' })
  async handleCreatePurchaseReturn(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new CreatePurchaseReturnCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'AddPurchaseReturnItems' })
  async handleAddPurchaseReturnItems(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new AddPurchaseReturnItemsCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'AddPurchaseDocument' })
  async handleAddPurchaseDocument(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new AddPurchaseDocumentCommand(data.payload, data.context));
  }

  // Queries
  @MessagePattern({ cmd: 'GetPurchases' })
  async handleGetPurchases(@Payload() data: { payload: any, context: any }) {
    return this.queryBus.execute(new GetPurchasesQuery(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'GetPurchaseById' })
  async handleGetPurchaseById(@Payload() data: { payload: any, context: any }) {
    return this.queryBus.execute(new GetPurchaseByIdQuery(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'GetPurchaseByNumber' })
  async handleGetPurchaseByNumber(@Payload() data: { payload: any, context: any }) {
    return this.queryBus.execute(new GetPurchaseByNumberQuery(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'GetPurchaseItems' })
  async handleGetPurchaseItems(@Payload() data: { payload: any, context: any }) {
    return this.queryBus.execute(new GetPurchaseItemsQuery(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'GetPurchaseReceivings' })
  async handleGetPurchaseReceivings(@Payload() data: { payload: any, context: any }) {
    return this.queryBus.execute(new GetPurchaseReceivingsQuery(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'GetPurchasePayments' })
  async handleGetPurchasePayments(@Payload() data: { payload: any, context: any }) {
    return this.queryBus.execute(new GetPurchasePaymentsQuery(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'GetPurchaseReturns' })
  async handleGetPurchaseReturns(@Payload() data: { payload: any, context: any }) {
    return this.queryBus.execute(new GetPurchaseReturnsQuery(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'GetPurchaseDocuments' })
  async handleGetPurchaseDocuments(@Payload() data: { payload: any, context: any }) {
    return this.queryBus.execute(new GetPurchaseDocumentsQuery(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'GetPurchaseHistory' })
  async handleGetPurchaseHistory(@Payload() data: { payload: any, context: any }) {
    return this.queryBus.execute(new GetPurchaseHistoryQuery(data.payload, data.context));
  }
}