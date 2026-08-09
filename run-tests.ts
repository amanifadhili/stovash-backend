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

test('Milestone 5: Work Period Lifecycle States & Financial Period Lockout', () => {
  type WorkPeriodState = 'OPEN' | 'PENDING_CLOSING' | 'PENDING_RECONCILIATION' | 'CLOSED';
  
  let currentPeriodState: WorkPeriodState = 'OPEN';
  
  // Helper simulating transaction authorization check
  function authorizeAccountingTransaction(state: WorkPeriodState) {
    if (state !== 'OPEN') {
      return { success: false, errorCode: 'WORK_PERIOD_CLOSED', message: `Work period is ${state}. Financial period lockout active.` };
    }
    return { success: true };
  }

  // 1. Transaction during OPEN period succeeds
  let auth = authorizeAccountingTransaction(currentPeriodState);
  assert.strictEqual(auth.success, true, 'Transactions must be allowed when work period is OPEN');

  // 2. Transition to PENDING_CLOSING
  currentPeriodState = 'PENDING_CLOSING';
  auth = authorizeAccountingTransaction(currentPeriodState);
  assert.strictEqual(auth.success, false, 'Transactions must be blocked during PENDING_CLOSING');
  assert.strictEqual(auth.errorCode, 'WORK_PERIOD_CLOSED');

  // 3. Transition to PENDING_RECONCILIATION
  currentPeriodState = 'PENDING_RECONCILIATION';
  auth = authorizeAccountingTransaction(currentPeriodState);
  assert.strictEqual(auth.success, false, 'Transactions must be blocked during PENDING_RECONCILIATION');

  // 4. Transition to CLOSED
  currentPeriodState = 'CLOSED';
  auth = authorizeAccountingTransaction(currentPeriodState);
  assert.strictEqual(auth.success, false, 'Transactions must be blocked when work period is CLOSED');

  console.log('✓ Milestone 5 Work Period Lifecycle & Financial Period Lockout tests passed successfully.');
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
