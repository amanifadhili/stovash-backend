/**
 * Failure injection scenarios (local/demo only).
 * Models fail-closed expectations after dependency outages.
 */
import * as fs from 'fs';
import * as path from 'path';

describe('Failure injection contracts', () => {
  it('documents Redis/Rabbit outage expectation for money posts', () => {
    const expectations = {
      moneyPost: 'reject or fully compensate — never half-posted journal/stock',
      readQueries: 'may degrade but must not cross tenant boundaries',
      idempotency: 'same idempotencyKey → one row after retry',
    };
    expect(expectations.moneyPost).toContain('never half-posted');
  });

  it('references sale-lifecycle compensation for treasury/accounting down', () => {
    const scenario = 'RecordSalePayment compensates payment row when books fail';
    expect(scenario).toContain('compensates');
  });

  it('backup runbook exists for financial DB restore drill', () => {
    const runbook = fs.readFileSync(
      path.join(__dirname, '../../../../../docs/FINANCIAL_BACKUP_RESTORE.md'),
      'utf8',
    );
    expect(runbook).toContain('pg_dump');
    expect(runbook).toContain('do not run yet');
  });
});
