/// <reference types="jest" />
import * as fs from 'fs';
import * as path from 'path';

/**
 * Phase 10: every ratified scenario is named in an owning executable spec.
 * Implementation stays in those specs — this catalog fails if a number is renamed away.
 */
const SCENARIOS: Array<{ n: number; name: string }> = [
  { n: 1, name: 'full cash sale' },
  { n: 2, name: 'full MoMo sale' },
  { n: 3, name: 'full bank sale' },
  { n: 4, name: 'mixed payment sale' },
  { n: 5, name: 'partial payment' },
  { n: 6, name: 'later payment' },
  { n: 7, name: 'credit sale' },
  { n: 8, name: 'purchase' },
  { n: 9, name: 'partial supplier payment' },
  { n: 10, name: 'general expense' },
  { n: 11, name: 'petty cash advance' },
  { n: 12, name: 'worker repayment' },
  { n: 13, name: 'petty cash expense' },
  { n: 14, name: 'profit transfer' },
  { n: 15, name: 'profit transfer cap' },
  { n: 16, name: 'profit → Operational loan' },
  { n: 17, name: 'capital → Operational loan' },
  { n: 18, name: 'loan repayment' },
  { n: 19, name: 'external loan' },
  { n: 20, name: 'external loan repayment' },
  { n: 21, name: 'profit → capital growth' },
  { n: 22, name: 'refund with return' },
  { n: 23, name: 'goodwill refund' },
  { n: 24, name: 'same-day correction' },
  { n: 25, name: 'previous-day correction' },
  { n: 26, name: 'reconciliation shortage' },
  { n: 27, name: 'reconciliation surplus' },
  { n: 28, name: 'duplicate request' },
  { n: 29, name: 'retry after timeout' },
  { n: 30, name: 'partial failure' },
];

const APPS = path.resolve(__dirname, '../../../../../');

function collectSpecs(dir: string, acc: string[] = []): string[] {
  if (!fs.existsSync(dir)) return acc;
  for (const name of fs.readdirSync(dir)) {
    if (name === 'node_modules' || name === 'generated' || name === 'dist') continue;
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) collectSpecs(full, acc);
    else if (name.endsWith('.spec.ts')) acc.push(full);
  }
  return acc;
}

describe('CBE scenarios 1–30 (Phase 10 catalog)', () => {
  const corpus = collectSpecs(path.join(APPS, 'apps'))
    .map((file) => fs.readFileSync(file, 'utf8'))
    .join('\n');

  it('registers all thirty scenario names', () => {
    expect(SCENARIOS).toHaveLength(30);
    expect(SCENARIOS.map((s) => s.n)).toEqual([...Array(30)].map((_, i) => i + 1));
  });

  for (const scenario of SCENARIOS) {
    it(`scenario ${scenario.n}: ${scenario.name} is named in an owning spec`, () => {
      const named = new RegExp(`scenario ${scenario.n}(?!\\d)`).test(corpus);
      expect(named).toBe(true);
    });
  }
});
