import { Injectable } from '@nestjs/common';
import { Client } from '@elastic/elasticsearch';

@Injectable()
export class SalesOrderIndexer {
  async index(client: Client, data: any) {
    try {
      await client.index({
        index: 'sales-orders',
        id: data.id,
        body: {
          id: data.id,
          tenantId: data.tenantId,
          shopId: data.shopId,
          customerId: data.customerId,
          customerName: data.customerName,
          orderNumber: data.orderNumber,
          totalAmount: data.totalAmount,
          status: data.status,
          paymentMethod: data.paymentMethod,
          createdAt: data.createdAt,
          updatedAt: data.updatedAt,
        },
      });
      console.log('Sales order indexed:', data.id);
      return { success: true };
    } catch (error) {
      console.error('Error indexing sales order:', error);
      return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
    }
  }
}
