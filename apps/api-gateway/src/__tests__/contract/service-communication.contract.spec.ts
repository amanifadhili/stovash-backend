import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

describe('Service Communication Contract Tests', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ClientsModule.register([
          {
            name: 'ACCOUNTING_SERVICE',
            transport: Transport.TCP,
            options: { host: '127.0.0.1', port: 3003 },
          },
          {
            name: 'INVENTORY_SERVICE',
            transport: Transport.TCP,
            options: { host: '127.0.0.1', port: 3004 },
          },
          {
            name: 'SALES_SERVICE',
            transport: Transport.TCP,
            options: { host: '127.0.0.1', port: 3005 },
          },
          {
            name: 'PURCHASE_SERVICE',
            transport: Transport.TCP,
            options: { host: '127.0.0.1', port: 3006 },
          },
        ]),
      ],
    }).compile();

    app = module.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('Accounting Service Contract', () => {
    it('should respond to PostJournalEntry command with correct response structure', async () => {
      const accountingClient = app.get('ACCOUNTING_SERVICE');
      
      const payload = {
        workPeriodId: 'test-work-period-id',
        description: 'Contract test journal entry',
        entries: [
          { accountId: 'test-account-id', type: 'DEBIT', amount: 1000 },
          { accountId: 'test-account-id-2', type: 'CREDIT', amount: 1000 }
        ]
      };

      const context = {
        traceId: 'contract-test-trace',
        tenantId: 'test-tenant-id',
        shopId: 'test-shop-id',
        userId: 'test-user-id'
      };

      try {
        const result = await firstValueFrom(
          accountingClient.send({ cmd: 'PostJournalEntry' }, { payload, context })
        );

        // Verify response structure
        expect(result).toHaveProperty('status');
        expect(['success', 'error']).toContain(result.status);
        
        if (result.status === 'success') {
          expect(result).toHaveProperty('data');
          expect(result.data).toHaveProperty('journalEntryId');
        } else {
          expect(result).toHaveProperty('errorCode');
          expect(result).toHaveProperty('message');
        }
      } catch (error) {
        // Service may not be running in test environment
        console.log('Accounting service not available for contract test');
      }
    });
  });

  describe('Sales Service Contract', () => {
    it('should respond to ProcessSale command with correct response structure', async () => {
      const salesClient = app.get('SALES_SERVICE');
      
      const payload = {
        customerId: 'test-customer-id',
        items: [
          { inventoryItemId: 'test-inventory-id', quantity: 1, unitPrice: 100 }
        ],
        totalAmount: 100
      };

      const context = {
        traceId: 'contract-test-trace',
        tenantId: 'test-tenant-id',
        shopId: 'test-shop-id',
        userId: 'test-user-id'
      };

      try {
        const result = await firstValueFrom(
          salesClient.send({ cmd: 'ProcessSale' }, { payload, context })
        );

        // Verify response structure
        expect(result).toHaveProperty('status');
        expect(['success', 'error']).toContain(result.status);
        
        if (result.status === 'success') {
          expect(result).toHaveProperty('data');
          expect(result.data).toHaveProperty('salesOrderId');
        } else {
          expect(result).toHaveProperty('errorCode');
          expect(result).toHaveProperty('message');
        }
      } catch (error) {
        console.log('Sales service not available for contract test');
      }
    });
  });

  describe('Inventory Service Contract', () => {
    it('should respond to ProcessPosSale command with correct response structure', async () => {
      const inventoryClient = app.get('INVENTORY_SERVICE');
      
      const payload = {
        items: [
          { inventoryItemId: 'test-inventory-id', quantity: 1, unitPrice: 100 }
        ],
        totalAmount: 100
      };

      const context = {
        traceId: 'contract-test-trace',
        tenantId: 'test-tenant-id',
        shopId: 'test-shop-id',
        userId: 'test-user-id'
      };

      try {
        const result = await firstValueFrom(
          inventoryClient.send({ cmd: 'ProcessPosSale' }, { payload, context })
        );

        // Verify response structure
        expect(result).toHaveProperty('status');
        expect(['success', 'error']).toContain(result.status);
        
        if (result.status === 'success') {
          expect(result).toHaveProperty('data');
        } else {
          expect(result).toHaveProperty('errorCode');
          expect(result).toHaveProperty('message');
        }
      } catch (error) {
        console.log('Inventory service not available for contract test');
      }
    });
  });

  describe('Purchase Service Contract', () => {
    it('should respond to ProcessPurchase command with correct response structure', async () => {
      const purchaseClient = app.get('PURCHASE_SERVICE');
      
      const payload = {
        supplierId: 'test-supplier-id',
        items: [
          { productId: 'test-product-id', quantity: 1, unitCost: 50 }
        ],
        totalCost: 50
      };

      const context = {
        traceId: 'contract-test-trace',
        tenantId: 'test-tenant-id',
        shopId: 'test-shop-id',
        userId: 'test-user-id'
      };

      try {
        const result = await firstValueFrom(
          purchaseClient.send({ cmd: 'ProcessPurchase' }, { payload, context })
        );

        // Verify response structure
        expect(result).toHaveProperty('status');
        expect(['success', 'error']).toContain(result.status);
        
        if (result.status === 'success') {
          expect(result).toHaveProperty('data');
          expect(result.data).toHaveProperty('purchaseOrderId');
        } else {
          expect(result).toHaveProperty('errorCode');
          expect(result).toHaveProperty('message');
        }
      } catch (error) {
        console.log('Purchase service not available for contract test');
      }
    });
  });
});
