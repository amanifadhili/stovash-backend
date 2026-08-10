import { Injectable } from '@nestjs/common';
import { Client } from '@elastic/elasticsearch';

@Injectable()
export class InventoryIndexer {
  async index(client: Client, data: any) {
    try {
      await client.index({
        index: 'inventory',
        id: data.id,
        body: {
          id: data.id,
          tenantId: data.tenantId,
          shopId: data.shopId,
          productId: data.productId,
          productName: data.productName,
          serialNumber: data.serialNumber,
          status: data.status,
          costPrice: data.costPrice,
          sellingPrice: data.sellingPrice,
          createdAt: data.createdAt,
          updatedAt: data.updatedAt,
        },
      });
      console.log('Inventory item indexed:', data.id);
      return { success: true };
    } catch (error) {
      console.error('Error indexing inventory item:', error);
      return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
    }
  }
}
