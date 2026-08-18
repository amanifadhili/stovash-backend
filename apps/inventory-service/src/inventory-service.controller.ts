import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { AddProductCommand } from './commands/impl/add-product.command.js';
import { UpdateProductCommand } from './commands/impl/update-product.command.js';
import { DeleteProductCommand } from './commands/impl/delete-product.command.js';
import { UpdateProductStatusCommand } from './commands/impl/update-product-status.command.js';
import { SetProductPriceCommand } from './commands/impl/set-product-price.command.js';
import { AddInventoryItemCommand } from './commands/impl/add-inventory-item.command.js';
import { SyncPurchaseStockCommand } from './commands/impl/sync-purchase-stock.command.js';
import { ProcessPosSaleCommand } from './commands/impl/process-pos-sale.command.js';
import { ReceiveGoodsCommand } from './commands/impl/receive-goods.command.js';
import { ProcessSalesReturnCommand } from './commands/impl/process-sales-return.command.js';
import { CreateWarrantyClaimCommand } from './commands/impl/create-warranty-claim.command.js';
import { TransferInventoryCommand } from './commands/impl/transfer-inventory.command.js';
import { RecordInventoryIncidentCommand } from './commands/impl/record-inventory-incident.command.js';
import { CreateBrandCommand } from './commands/impl/create-brand.command.js';
import { UpdateBrandCommand } from './commands/impl/update-brand.command.js';
import { DeleteBrandCommand } from './commands/impl/delete-brand.command.js';
import { CreateCategoryCommand } from './commands/impl/create-category.command.js';
import { UpdateCategoryCommand } from './commands/impl/update-category.command.js';
import { DeleteCategoryCommand } from './commands/impl/delete-category.command.js';
import { GetProductsQuery } from './queries/impl/get-products.query.js';
import { GetProductByIdQuery } from './queries/impl/get-product-by-id.query.js';
import { GetProductBySkuQuery } from './queries/impl/get-product-by-sku.query.js';
import { GetBrandsQuery } from './queries/impl/get-brands.query.js';
import { GetBrandByIdQuery } from './queries/impl/get-brand-by-id.query.js';
import { GetCategoriesQuery } from './queries/impl/get-categories.query.js';
import { GetCategoryByIdQuery } from './queries/impl/get-category-by-id.query.js';
import { GetAvailableInventoryItemsQuery } from './queries/impl/get-available-inventory-items.query.js';
import { GetStockUnitsQuery } from './queries/impl/get-stock-units.query.js';
import { GetDeviceLifeQuery } from './queries/impl/get-device-life.query.js';
import { CreateRentalCommand } from './commands/impl/create-rental.command.js';
import { UpdateRentalStatusCommand } from './commands/impl/update-rental-status.command.js';
import { GetRentalsQuery } from './queries/impl/get-rentals.query.js';
import { GetStockMovementsQuery } from './queries/impl/get-stock-movements.query.js';
import { CreateContactCommand } from './commands/impl/create-contact.command.js';
import { GetContactsQuery } from './queries/impl/get-contacts.query.js';
import { ApplySaleFulfillmentCommand } from './commands/impl/apply-sale-fulfillment.command.js';
import { ApplySaleReturnCommand } from './commands/impl/apply-sale-return.command.js';

@Controller()
export class InventoryServiceController {
  constructor(private readonly commandBus: CommandBus, private readonly queryBus: QueryBus) {}

  @MessagePattern({ cmd: 'ApplySaleFulfillment' })
  async handleApplySaleFulfillment(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new ApplySaleFulfillmentCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'ApplySaleReturn' })
  async handleApplySaleReturn(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new ApplySaleReturnCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'AddProduct' })
  async handleAddProduct(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new AddProductCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'UpdateProduct' })
  async handleUpdateProduct(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new UpdateProductCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'DeleteProduct' })
  async handleDeleteProduct(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new DeleteProductCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'UpdateProductStatus' })
  async handleUpdateProductStatus(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new UpdateProductStatusCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'SetProductPrice' })
  async handleSetProductPrice(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new SetProductPriceCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'AddInventoryItem' })
  async handleAddInventoryItem(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new AddInventoryItemCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'SyncPurchaseStock' })
  async handleSyncPurchaseStock(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new SyncPurchaseStockCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'ProcessPosSale' })
  async handleProcessPosSale(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new ProcessPosSaleCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'ReceiveGoods' })
  async handleReceiveGoods(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new ReceiveGoodsCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'ProcessSalesReturn' })
  async handleProcessSalesReturn(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new ProcessSalesReturnCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'CreateWarrantyClaim' })
  async handleCreateWarrantyClaim(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new CreateWarrantyClaimCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'TransferInventory' })
  async handleTransferInventory(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new TransferInventoryCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'RecordInventoryIncident' })
  async handleRecordInventoryIncident(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new RecordInventoryIncidentCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'CreateBrand' })
  async handleCreateBrand(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new CreateBrandCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'UpdateBrand' })
  async handleUpdateBrand(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new UpdateBrandCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'DeleteBrand' })
  async handleDeleteBrand(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new DeleteBrandCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'CreateCategory' })
  async handleCreateCategory(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new CreateCategoryCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'UpdateCategory' })
  async handleUpdateCategory(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new UpdateCategoryCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'DeleteCategory' })
  async handleDeleteCategory(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new DeleteCategoryCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'GetProducts' })
  async handleGetProducts(@Payload() data: { payload: any, context: any }) {
    return this.queryBus.execute(new GetProductsQuery(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'GetProductById' })
  async handleGetProductById(@Payload() data: { payload: any, context: any }) {
    return this.queryBus.execute(new GetProductByIdQuery(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'GetProductBySku' })
  async handleGetProductBySku(@Payload() data: { payload: any, context: any }) {
    return this.queryBus.execute(new GetProductBySkuQuery(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'GetBrands' })
  async handleGetBrands(@Payload() data: { payload: any, context: any }) {
    return this.queryBus.execute(new GetBrandsQuery(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'GetBrandById' })
  async handleGetBrandById(@Payload() data: { payload: any, context: any }) {
    return this.queryBus.execute(new GetBrandByIdQuery(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'GetCategories' })
  async handleGetCategories(@Payload() data: { payload: any, context: any }) {
    return this.queryBus.execute(new GetCategoriesQuery(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'GetCategoryById' })
  async handleGetCategoryById(@Payload() data: { payload: any, context: any }) {
    return this.queryBus.execute(new GetCategoryByIdQuery(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'GetAvailableInventoryItems' })
  async handleGetAvailableInventoryItems(@Payload() data: { payload: any, context: any }) {
    return this.queryBus.execute(new GetAvailableInventoryItemsQuery(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'GetStockUnits' })
  async handleGetStockUnits(@Payload() data: { payload: any, context: any }) {
    return this.queryBus.execute(new GetStockUnitsQuery(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'GetDeviceLife' })
  async handleGetDeviceLife(@Payload() data: { payload: any, context: any }) {
    return this.queryBus.execute(new GetDeviceLifeQuery(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'CreateRental' })
  async handleCreateRental(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new CreateRentalCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'UpdateRentalStatus' })
  async handleUpdateRentalStatus(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new UpdateRentalStatusCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'GetRentals' })
  async handleGetRentals(@Payload() data: { payload: any, context: any }) {
    return this.queryBus.execute(new GetRentalsQuery(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'GetStockMovements' })
  async handleGetStockMovements(@Payload() data: { payload: any, context: any }) {
    return this.queryBus.execute(new GetStockMovementsQuery(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'CreateContact' })
  async handleCreateContact(@Payload() data: { payload: any, context: any }) {
    return this.commandBus.execute(new CreateContactCommand(data.payload, data.context));
  }

  @MessagePattern({ cmd: 'GetContacts' })
  async handleGetContacts(@Payload() data: { payload: any, context: any }) {
    return this.queryBus.execute(new GetContactsQuery(data.payload, data.context));
  }
}
