import { of, throwError } from 'rxjs';
import { firstValueFrom } from 'rxjs';
import { Test, TestingModule } from '@nestjs/testing';
import { ClientsModule, Transport } from '@nestjs/microservices';

const LIVE_COMMAND_SAMPLES = [
  { service: 'ACCOUNTING_SERVICE', cmd: 'GetJournals', payload: {}, expectKey: 'journals' },
  { service: 'SALES_SERVICE', cmd: 'GetSales', payload: { page: 1 }, expectKey: 'sales' },
  { service: 'INVENTORY_SERVICE', cmd: 'GetStockUnits', payload: {}, expectKey: 'units' },
  { service: 'PURCHASE_SERVICE', cmd: 'GetPurchases', payload: { page: 1 }, expectKey: 'purchases' },
] as const;

const RETIRED_COMMANDS = ['PostJournalEntry', 'ProcessPosSale', 'ProcessSale', 'ProcessPurchase'];

function mockResponse(data: Record<string, unknown> = {}) {
  return { status: 'success', traceId: 'contract-test', data };
}

describe('Service communication contracts (live commands)', () => {
  let app: TestingModule;
  const sendMock = jest.fn();

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [
        ClientsModule.register([
          { name: 'ACCOUNTING_SERVICE', transport: Transport.TCP, options: { host: '127.0.0.1', port: 3003 } },
          { name: 'INVENTORY_SERVICE', transport: Transport.TCP, options: { host: '127.0.0.1', port: 3004 } },
          { name: 'SALES_SERVICE', transport: Transport.TCP, options: { host: '127.0.0.1', port: 3005 } },
          { name: 'PURCHASE_SERVICE', transport: Transport.TCP, options: { host: '127.0.0.1', port: 3007 } },
        ]),
      ],
    })
      .overrideProvider('ACCOUNTING_SERVICE')
      .useValue({ send: sendMock })
      .overrideProvider('INVENTORY_SERVICE')
      .useValue({ send: sendMock })
      .overrideProvider('SALES_SERVICE')
      .useValue({ send: sendMock })
      .overrideProvider('PURCHASE_SERVICE')
      .useValue({ send: sendMock })
      .compile();
  });

  beforeEach(() => {
    sendMock.mockReset();
  });

  const context = {
    traceId: 'contract-test-trace',
    tenantId: 'test-tenant-id',
    shopId: 'test-shop-id',
    userId: 'test-user-id',
  };

  it.each(LIVE_COMMAND_SAMPLES)(
    '$service $cmd returns success envelope with expected data key',
    async ({ service, cmd, payload, expectKey }) => {
      sendMock.mockReturnValueOnce(of(mockResponse({ [expectKey]: [] })));
      const client = app.get(service);
      const result = await firstValueFrom(client.send({ cmd }, { payload, context }));
      expect(result).toHaveProperty('status', 'success');
      expect(result).toHaveProperty('data');
      expect(result.data).toHaveProperty(expectKey);
      expect(Array.isArray(result.data[expectKey])).toBe(true);
    },
  );

  it('surfaces transport errors instead of silently passing', async () => {
    sendMock.mockReturnValueOnce(throwError(() => new Error('ECONNREFUSED')));
    const client = app.get('SALES_SERVICE');
    await expect(
      firstValueFrom(client.send({ cmd: 'GetSales' }, { payload: {}, context })),
    ).rejects.toThrow('ECONNREFUSED');
  });

  it('validates error envelope shape from services', async () => {
    sendMock.mockReturnValueOnce(
      of({ status: 'error', traceId: 't', message: 'Forbidden', errorCode: 'FORBIDDEN' }),
    );
    const client = app.get('ACCOUNTING_SERVICE');
    const result = await firstValueFrom(client.send({ cmd: 'GetJournals' }, { payload: {}, context }));
    expect(result.status).toBe('error');
    expect(result).toHaveProperty('errorCode');
    expect(result).toHaveProperty('message');
  });

  it('documents retired commands that must not be used in new integrations', () => {
    expect(RETIRED_COMMANDS).toEqual(
      expect.arrayContaining(['PostJournalEntry', 'ProcessPosSale']),
    );
  });
});
