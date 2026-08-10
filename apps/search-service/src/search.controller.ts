import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { SearchService } from './search.service.js';

@Controller()
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @EventPattern('ProductCreated')
  async handleProductCreated(@Payload() data: any) {
    await this.searchService.indexProduct(data);
  }

  @EventPattern('ProductUpdated')
  async handleProductUpdated(@Payload() data: any) {
    await this.searchService.indexProduct(data);
  }

  @EventPattern('ProductDeleted')
  async handleProductDeleted(@Payload() data: any) {
    await this.searchService.deleteProduct(data.id);
  }

  @EventPattern('CustomerCreated')
  async handleCustomerCreated(@Payload() data: any) {
    await this.searchService.indexCustomer(data);
  }

  @EventPattern('CustomerUpdated')
  async handleCustomerUpdated(@Payload() data: any) {
    await this.searchService.indexCustomer(data);
  }

  @EventPattern('InventoryItemCreated')
  async handleInventoryItemCreated(@Payload() data: any) {
    await this.searchService.indexInventoryItem(data);
  }

  @EventPattern('InventoryItemUpdated')
  async handleInventoryItemUpdated(@Payload() data: any) {
    await this.searchService.indexInventoryItem(data);
  }

  @EventPattern('SalesOrderCreated')
  async handleSalesOrderCreated(@Payload() data: any) {
    await this.searchService.indexSalesOrder(data);
  }

  @EventPattern('SalesOrderUpdated')
  async handleSalesOrderUpdated(@Payload() data: any) {
    await this.searchService.indexSalesOrder(data);
  }
}
