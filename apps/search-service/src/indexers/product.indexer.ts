import { Injectable } from '@nestjs/common';
import { Client } from '@elastic/elasticsearch';

@Injectable()
export class ProductIndexer {
  async index(client: Client, data: any) {
    try {
      await client.index({
        index: 'products',
        id: data.id,
        body: {
          id: data.id,
          tenantId: data.tenantId,
          name: data.name,
          code: data.code,
          description: data.description,
          category: data.category,
          sellingPrice: data.sellingPrice,
          costPrice: data.costPrice,
          status: data.status,
          createdAt: data.createdAt,
          updatedAt: data.updatedAt,
        },
      });
      console.log('Product indexed:', data.id);
      return { success: true };
    } catch (error) {
      console.error('Error indexing product:', error);
      return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
    }
  }

  async delete(client: Client, id: string) {
    try {
      await client.delete({
        index: 'products',
        id,
      });
      console.log('Product deleted from index:', id);
      return { success: true };
    } catch (error) {
      console.error('Error deleting product from index:', error);
      return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
    }
  }
}
