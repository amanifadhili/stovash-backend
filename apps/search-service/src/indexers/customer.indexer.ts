import { Injectable } from '@nestjs/common';
import { Client } from '@elastic/elasticsearch';

@Injectable()
export class CustomerIndexer {
  async index(client: Client, data: any) {
    try {
      await client.index({
        index: 'customers',
        id: data.id,
        body: {
          id: data.id,
          tenantId: data.tenantId,
          name: data.name,
          email: data.email,
          phone: data.phone,
          address: data.address,
          status: data.status,
          createdAt: data.createdAt,
          updatedAt: data.updatedAt,
        },
      });
      console.log('Customer indexed:', data.id);
      return { success: true };
    } catch (error) {
      console.error('Error indexing customer:', error);
      return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
    }
  }
}
