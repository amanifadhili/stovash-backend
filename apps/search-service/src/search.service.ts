import { Injectable } from '@nestjs/common';
import { Client } from '@elastic/elasticsearch';
import { ProductIndexer } from './indexers/product.indexer.js';
import { CustomerIndexer } from './indexers/customer.indexer.js';
import { InventoryIndexer } from './indexers/inventory.indexer.js';
import { SalesOrderIndexer } from './indexers/sales-order.indexer.js';

@Injectable()
export class SearchService {
  private client: Client;

  constructor(
    private readonly productIndexer: ProductIndexer,
    private readonly customerIndexer: CustomerIndexer,
    private readonly inventoryIndexer: InventoryIndexer,
    private readonly salesOrderIndexer: SalesOrderIndexer,
  ) {
    this.client = new Client({
      node: process.env.ELASTICSEARCH_URL || 'http://localhost:9200',
    });
  }

  async indexProduct(data: any) {
    return this.productIndexer.index(this.client, data);
  }

  async deleteProduct(id: string) {
    return this.productIndexer.delete(this.client, id);
  }

  async indexCustomer(data: any) {
    return this.customerIndexer.index(this.client, data);
  }

  async indexInventoryItem(data: any) {
    return this.inventoryIndexer.index(this.client, data);
  }

  async indexSalesOrder(data: any) {
    return this.salesOrderIndexer.index(this.client, data);
  }

  async searchProducts(query: string, tenantId: string) {
    const response = await this.client.search({
      index: 'products',
      body: {
        query: {
          bool: {
            must: [
              { match: { tenantId } },
              {
                multi_match: {
                  query,
                  fields: ['name^2', 'code', 'description', 'category'],
                },
              },
            ],
          },
        },
      },
    });
    return response.hits.hits;
  }

  async searchCustomers(query: string, tenantId: string) {
    const response = await this.client.search({
      index: 'customers',
      body: {
        query: {
          bool: {
            must: [
              { match: { tenantId } },
              {
                multi_match: {
                  query,
                  fields: ['name^2', 'email', 'phone'],
                },
              },
            ],
          },
        },
      },
    });
    return response.hits.hits;
  }

  async searchInventory(query: string, tenantId: string, shopId?: string) {
    const must: any[] = [
      { match: { tenantId } },
      {
        multi_match: {
          query,
          fields: ['serialNumber^2', 'productName', 'status'],
        },
      },
    ];

    if (shopId) {
      must.push({ match: { shopId } });
    }

    const response = await this.client.search({
      index: 'inventory',
      body: {
        query: {
          bool: { must },
        },
      },
    });
    return response.hits.hits;
  }

  async searchSalesOrders(query: string, tenantId: string, shopId?: string) {
    const must: any[] = [
      { match: { tenantId } },
      {
        multi_match: {
          query,
          fields: ['orderNumber^2', 'customerName', 'status'],
        },
      },
    ];

    if (shopId) {
      must.push({ match: { shopId } });
    }

    const response = await this.client.search({
      index: 'sales-orders',
      body: {
        query: {
          bool: { must },
        },
      },
    });
    return response.hits.hits;
  }
}
