import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { SearchController } from './search.controller.js';
import { SearchService } from './search.service.js';
import { ProductIndexer } from './indexers/product.indexer.js';
import { CustomerIndexer } from './indexers/customer.indexer.js';
import { InventoryIndexer } from './indexers/inventory.indexer.js';
import { SalesOrderIndexer } from './indexers/sales-order.indexer.js';
import { CommandHandlers } from './commands/handlers/index.js';

@Module({
  imports: [CqrsModule],
  controllers: [SearchController],
  providers: [
    SearchService,
    ProductIndexer,
    CustomerIndexer,
    InventoryIndexer,
    SalesOrderIndexer,
    ...CommandHandlers,
  ],
})
export class AppModule {}
