/// <reference types="jest" />
import {
  brandMapFromProducts,
  francsToMinorInt,
  isReturnedLine,
  mapSaleItemToRow,
  mapStockUnitToRow,
  mergeSaleAndStockRows,
  paginateRows,
  soldFrancs,
  totalsOf,
} from './sold-unit-profit';

describe('GetSoldUnitProfit mapping', () => {
  it('converts HP cost/sold/profit to minor without dropping zeros', () => {
    const row = mapSaleItemToRow(
      {
        id: 'item-hp',
        saleId: 'sale-1',
        productId: 'prod-hp',
        productName: 'EliteBook 840',
        serialNumber: 'SN-HP-1',
        quantity: 1,
        unitCost: 380000,
        unitPrice: 500000,
        lineTotal: 500000,
        additionalCost: 0,
        sale: { id: 'sale-1', saleDate: '2026-08-18' },
      },
      { id: 'brand-hp', name: 'HP' },
    );
    expect(row.brandName).toBe('HP');
    expect(row.costMinor).toBe('38000000');
    expect(row.soldMinor).toBe('50000000');
    expect(row.profitMinor).toBe('12000000');
    expect(row.status).toBe('SOLD');
  });

  it('marks approved returns as RETURNED with zero remaining profit', () => {
    const row = mapSaleItemToRow({
      id: 'item-ret',
      saleId: 'sale-2',
      productName: 'EliteBook 840',
      quantity: 1,
      unitCost: 380000,
      lineTotal: 500000,
      returnItems: [{ saleReturn: { status: 'COMPLETED' } }],
      sale: { id: 'sale-2', saleDate: '2026-08-18' },
    });
    expect(row.status).toBe('RETURNED');
    expect(row.profitMinor).toBe('0');
    expect(row.costMinor).toBe('38000000');
    expect(isReturnedLine([{ saleReturn: { status: 'PENDING' } }])).toBe(false);
  });

  it('allows zero cost and negative line profit', () => {
    expect(francsToMinorInt(0)).toBe(0n);
    const row = mapSaleItemToRow({
      id: 'loss',
      saleId: 'sale-3',
      quantity: 1,
      unitCost: 500000,
      lineTotal: 400000,
      additionalCost: 0,
      sale: { saleDate: '2026-08-18' },
    });
    expect(row.profitMinor).toBe('-10000000');
  });

  it('totals ignore pagination slice', () => {
    const rows = [
      mapSaleItemToRow({
        id: 'a',
        saleId: 's',
        quantity: 1,
        unitCost: 100000,
        lineTotal: 150000,
        sale: { saleDate: '2026-08-18' },
      }),
      mapSaleItemToRow({
        id: 'b',
        saleId: 's',
        quantity: 1,
        unitCost: 200000,
        lineTotal: 250000,
        sale: { saleDate: '2026-08-18' },
      }),
    ];
    const page = paginateRows(rows, 1, 1);
    expect(page.items).toHaveLength(1);
    expect(page.total).toBe(2);
    expect(totalsOf(rows)).toEqual({
      costMinor: '30000000',
      soldMinor: '40000000',
      extraCostMinor: '0',
      profitMinor: '10000000',
    });
    expect(totalsOf(page.items).costMinor).toBe('10000000');
  });

  it('soldFrancs falls back to unitPrice * qty', () => {
    expect(soldFrancs({ unitPrice: 200000, quantity: 2 })).toBe(400000);
    expect(soldFrancs({ lineTotal: 0, unitPrice: 200000, quantity: 1 })).toBe(200000);
  });

  it('maps product ids to brands', () => {
    const map = brandMapFromProducts([
      { id: 'prod-hp', brand: { id: 'brand-hp', name: 'HP' } },
      { id: 'prod-x', brand: null },
    ]);
    expect(map.get('prod-hp')?.name).toBe('HP');
    expect(map.has('prod-x')).toBe(false);
  });

  it('maps SOLD stock units when no sale line exists', () => {
    const row = mapStockUnitToRow({
      id: 'inv-hp',
      productName: 'EliteBook 840',
      serialNumber: 'SN-HP-1',
      purchaseCost: 380000,
      totalCost: 380000,
      sellingPrice: 500000,
      status: 'SOLD',
      brand: { id: 'brand-hp', name: 'HP' },
    });
    expect(row.brandName).toBe('HP');
    expect(row.costMinor).toBe('38000000');
    expect(row.soldMinor).toBe('50000000');
    expect(row.profitMinor).toBe('12000000');
  });

  it('does not duplicate stock units already covered by a sale line', () => {
    const saleRow = mapSaleItemToRow({
      id: 'item-hp',
      saleId: 'sale-1',
      inventoryItemId: 'inv-hp',
      serialNumber: 'SN-HP-1',
      quantity: 1,
      unitCost: 380000,
      lineTotal: 500000,
      sale: { saleDate: '2026-08-18' },
    });
    const merged = mergeSaleAndStockRows(
      [{ inventoryItemId: 'inv-hp', serialNumber: 'SN-HP-1' }],
      [saleRow],
      [
        {
          id: 'inv-hp',
          serialNumber: 'SN-HP-1',
          productName: 'EliteBook 840',
          purchaseCost: 380000,
          sellingPrice: 500000,
          status: 'SOLD',
          brand: { id: 'brand-hp', name: 'HP' },
        },
        {
          id: 'inv-2',
          serialNumber: 'SN-2',
          productName: 'Pavilion',
          purchaseCost: 200000,
          sellingPrice: 300000,
          status: 'SOLD',
          brand: { id: 'brand-hp', name: 'HP' },
        },
      ],
    );
    expect(merged.map((row) => row.id)).toEqual(['item-hp', 'inv-2']);
  });
});
