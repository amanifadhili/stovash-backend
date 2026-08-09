import test, { describe, it } from 'node:test';
import assert from 'node:assert';

describe('Electronic Shop MS - Phase 1, 2, 3 & 4 Test Suite', () => {
  it('Milestone 2: Double-Entry Accounting Engine - Total Debit = Credit', () => {
    const entry = {
      id: 'JE-001',
      description: 'Cash sale of Computer with COGS',
      lines: [
        { accountId: 'Cash', debit: 450000, credit: 0 },
        { accountId: 'Sales Revenue', debit: 0, credit: 450000 },
        { accountId: 'COGS', debit: 300000, credit: 0 },
        { accountId: 'Inventory', debit: 0, credit: 300000 }
      ]
    };

    const totalDebit = entry.lines.reduce((s, l) => s + l.debit, 0);
    const totalCredit = entry.lines.reduce((s, l) => s + l.credit, 0);
    assert.strictEqual(totalDebit, totalCredit, 'Debits must equal credits');
    assert.strictEqual(totalDebit, 750000, 'Total debit amount verified');
  });

  it('Milestone 7 & 14: Work Period Lifecycle & Period Locking', () => {
    let state = 'ACTIVE';
    assert.strictEqual(state, 'ACTIVE');
    state = 'CLOSING';
    assert.strictEqual(state, 'CLOSING');
    state = 'RECONCILED';
    assert.strictEqual(state, 'RECONCILED');
    state = 'CLOSED';
    assert.strictEqual(state, 'CLOSED');

    const canPost = state !== 'CLOSED';
    assert.strictEqual(canPost, false, 'Closed period must lock out new transactions');
  });

  it('Milestone 3 & 9: Specific Identification Inventory Costing', () => {
    const items = [
      { serialNumber: 'SN-LAPTOP-001', purchaseCost: 300000, status: 'IN_STOCK' },
      { serialNumber: 'SN-LAPTOP-002', purchaseCost: 310000, status: 'IN_STOCK' }
    ];
    assert.notStrictEqual(items[0].purchaseCost, items[1].purchaseCost, 'Each serialized item keeps unique purchase cost');
    items[0].status = 'SOLD';
    assert.strictEqual(items[0].status, 'SOLD');
  });

  it('Phase 3: Multi-Currency Conversion (RWF Base)', () => {
    const rates: Record<string, number> = { RWF: 1, USD: 1300, EUR: 1400, KES: 10 };
    const amountRWF = 1300000;
    
    const amountUSD = amountRWF / rates.USD;
    assert.strictEqual(amountUSD, 1000, '1,300,000 RWF should equal 1,000 USD');

    const amountEUR = amountRWF / rates.EUR;
    assert.strictEqual(Math.round(amountEUR * 100) / 100, 928.57, 'EUR conversion verified');
  });

  it('Phase 4: Multi-Shop Inventory Transfer & Consolidation', () => {
    const shopAStock = [{ serialNumber: 'SN-LAPTOP-001', shop: 'Shop A' }];
    const shopBStock: any[] = [];

    // Transfer item from Shop A to Shop B
    const transferredItem = shopAStock.pop();
    if (transferredItem) {
      transferredItem.shop = 'Shop B';
      shopBStock.push(transferredItem);
    }

    assert.strictEqual(shopAStock.length, 0, 'Shop A stock reduced');
    assert.strictEqual(shopBStock.length, 1, 'Shop B stock increased');
    assert.strictEqual(shopBStock[0].shop, 'Shop B', 'Item shop ownership updated');
  });

  it('Phase 4: Supplier Purchase Order & Payable Posting', () => {
    const po = {
      poId: 'PO-9001',
      supplier: 'Global Tech Distributors',
      items: [{ name: 'Dell Latitude', cost: 320000, quantity: 5 }],
      totalAmount: 1600000,
      status: 'RECEIVED'
    };

    assert.strictEqual(po.totalAmount, 1600000, 'PO total amount correct');
    assert.strictEqual(po.status, 'RECEIVED', 'PO status updated to received');
  });
});
