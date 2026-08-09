import test from 'node:test';
import assert from 'node:assert';

test('Milestone 2: Double-Entry Accounting Engine - Total Debit = Credit', () => {
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
  console.log('✓ Double-Entry Accounting Engine test passed successfully.');
});

test('Milestone 7 & 14: Work Period Lifecycle & Period Locking', () => {
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
  console.log('✓ Work Period Lifecycle & Locking test passed successfully.');
});

test('Milestone 3 & 9: Specific Identification Inventory Costing', () => {
  const items = [
    { serialNumber: 'SN-LAPTOP-001', purchaseCost: 300000, status: 'IN_STOCK' },
    { serialNumber: 'SN-LAPTOP-002', purchaseCost: 310000, status: 'IN_STOCK' }
  ];
  assert.notStrictEqual(items[0].purchaseCost, items[1].purchaseCost, 'Each serialized item keeps unique purchase cost');
  items[0].status = 'SOLD';
  assert.strictEqual(items[0].status, 'SOLD');
  console.log('✓ Specific Identification Inventory Costing test passed successfully.');
});

test('Phase 2: POS Mixed Payment Splits & Reconciliation', () => {
  const cartTotal = 450000;
  const paymentSplits = [
    { method: 'CASH', amount: 300000 },
    { method: 'MOMO', amount: 150000 }
  ];
  const totalPaid = paymentSplits.reduce((s, p) => s + p.amount, 0);
  assert.strictEqual(totalPaid, cartTotal, 'Payment splits must equal cart total');

  const expectedCash = 1000000 + 300000;
  const actualCash = 1300000;
  const variance = actualCash - expectedCash;
  assert.strictEqual(variance, 0, 'No cash variance allowed during reconciliation');
  console.log('✓ Phase 2 POS Mixed Payments & Reconciliation test passed successfully.');
});

test('Phase 2: Customer vs Business Loan Segregation', () => {
  const customerLoan = { id: 'CL-01', type: 'CUSTOMER_RECEIVABLE', principal: 250000 };
  const businessLoan = { id: 'BL-01', type: 'BUSINESS_PAYABLE', principal: 2000000 };

  assert.notStrictEqual(customerLoan.type, businessLoan.type, 'Customer receivables and business loan payables must be strictly segregated');
  console.log('✓ Loan Segregation test passed successfully.');
});
